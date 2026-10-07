#!/usr/bin/env python3
"""Visor local del libro. Solo usa la biblioteca estándar de Python."""
import argparse
import hashlib
import json
import os
from pathlib import Path
import re
import secrets
import tempfile
import threading
from datetime import datetime, timezone
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer
from urllib.parse import unquote, urlsplit
from urllib.request import urlopen
import webbrowser

APP = Path(__file__).resolve().parent
ROOT = APP.parent
BLANKS = {2, 4, 6, 372, 374}
STATUSES = {"pendiente", "revisada", "observaciones"}
BOOK = "colonias-valdenses-1858-1958"
WORKSPACE = hashlib.sha256(str(ROOT).encode()).hexdigest()[:16]
SECTIONS = [(1, "Preliminares"), (7, "Introducción"), (11, "Preámbulo"),
            (17, "I · Los Pionniers"), (33, "II · Colonización"),
            (155, "III · Religión"), (259, "IV · Instrucción"),
            (283, "V · Vida cultural y religiosa"), (313, "VI · Vida social"),
            (338, "VII · Industria y comercio"), (360, "VIII · Los Valdenses y la Patria"),
            (367, "Conclusión"), (372, "Índice")]


def inventory():
    photos, texts = {}, {}
    for p in (ROOT / "imagenes del libro").glob("*.jpeg"):
        match = re.fullmatch(r"pagina (\d{2,})\.jpeg", p.name)
        if match:
            n = int(match[1])
            if n in photos:
                raise ValueError(f"Hay dos fotografías para la página {n}.")
            photos[n] = p
    for p in (ROOT / "markdown de paginas").glob("Pagina *.md"):
        match = re.fullmatch(r"Pagina (\d+)\.md", p.name)
        if match:
            texts[int(match[1])] = p
    if not photos or not texts:
        raise ValueError("No se encuentran las carpetas de fotografías y transcripciones del libro.")
    rows = []
    for n in range(1, max(photos.keys() | texts.keys()) + 1):
        kind = "texto" if n in photos and n in texts else (
            "blanco" if n in BLANKS and n not in photos and n not in texts else
            "descripcion" if n == 373 and n in texts and n not in photos else "incompleta")
        section = next(title for start, title in reversed(SECTIONS) if n >= start)
        rows.append({"number": n, "kind": kind, "section": section,
                     "photo": n in photos, "markdown": n in texts})
    return rows, photos, texts


class ReviewStore:
    def __init__(self, path, rows):
        self.path = path
        self.lock = threading.Lock()
        self.allowed = {p["number"] for p in rows if p["kind"] != "blanco"}
        self.numbers = {p["number"] for p in rows}
        self.read()

    def read(self):
        if not self.path.exists():
            return {"schema": 1, "book": BOOK, "last_page": 1, "pages": {}}
        try:
            data = json.loads(self.path.read_text(encoding="utf-8"))
            assert data["schema"] == 1 and data["book"] == BOOK
            assert type(data["last_page"]) is int and data["last_page"] in self.numbers
            assert isinstance(data["pages"], dict)
            for n, entry in data["pages"].items():
                assert int(n) in self.allowed and str(int(n)) == n
                assert entry["status"] in STATUSES and isinstance(entry["notes"], str)
                assert type(entry["version"]) is int and entry["version"] > 0
            return data
        except (ValueError, KeyError, TypeError, AssertionError) as exc:
            raise ValueError("No se pudo leer el registro de revisión. Conserva el archivo y restaura una copia válida; el visor no lo sobrescribirá.") from exc

    def update(self, patch):
        if not isinstance(patch, dict) or set(patch) - {"page", "status", "notes", "expected_version", "last_page"}:
            raise ValueError("La información enviada no es válida.")
        with self.lock:
            state = self.read()
            if "last_page" in patch:
                n = patch["last_page"]
                if type(n) is not int or n not in self.numbers:
                    raise ValueError("El número de página no es válido.")
                state["last_page"] = n
            if "page" in patch:
                n = patch["page"]
                if type(n) is not int or n not in self.allowed:
                    raise ValueError("Esta página no admite un registro de cotejo.")
                if patch.get("status") not in STATUSES or not isinstance(patch.get("notes"), str) or len(patch["notes"]) > 30000:
                    raise ValueError("El estado o la observación no es válido.")
                prior = state["pages"].get(str(n), {"version": 0})
                if type(patch.get("expected_version")) is not int or patch["expected_version"] != prior["version"]:
                    raise Conflict("La revisión cambió en otra ventana. Copia tu observación y vuelve a cargar la página antes de guardar.")
                state["pages"][str(n)] = {"status": patch["status"], "notes": patch["notes"],
                    "version": prior["version"] + 1, "updated": datetime.now(timezone.utc).isoformat()}
            self.path.parent.mkdir(parents=True, exist_ok=True)
            temp = None
            try:
                with tempfile.NamedTemporaryFile(mode="w", encoding="utf-8", dir=self.path.parent, delete=False) as f:
                    temp = Path(f.name)
                    json.dump(state, f, ensure_ascii=False, indent=2)
                    f.write("\n")
                    f.flush()
                    os.fsync(f.fileno())
                os.replace(temp, self.path)
            finally:
                if temp and temp.exists():
                    temp.unlink()
            return state


class Conflict(ValueError):
    pass


class Handler(BaseHTTPRequestHandler):
    server_version = "VisorLibro/1"

    def log_message(self, fmt, *args):
        if args and str(args[1] if len(args) > 1 else "").startswith(("4", "5")):
            super().log_message(fmt, *args)

    def host_ok(self):
        return self.headers.get("Host") in {f"127.0.0.1:{self.server.server_port}", f"localhost:{self.server.server_port}"}

    def send_bytes(self, content, mime, code=200, download=False):
        self.send_response(code)
        self.send_header("Content-Type", mime)
        self.send_header("Content-Length", str(len(content)))
        self.send_header("Cache-Control", "no-store" if mime != "image/jpeg" else "private, max-age=3600")
        self.send_header("X-Content-Type-Options", "nosniff")
        self.send_header("Content-Security-Policy", "default-src 'self'; script-src 'self'; style-src 'self' 'unsafe-inline'; img-src 'self' blob: data:; connect-src 'self'; object-src 'none'; frame-ancestors 'none'; base-uri 'none'")
        if download:
            self.send_header("Content-Disposition", 'attachment; filename="revision-del-libro.json"')
        self.end_headers()
        if self.command != "HEAD":
            self.wfile.write(content)

    def json(self, value, code=200, download=False):
        self.send_bytes(json.dumps(value, ensure_ascii=False, indent=2).encode(), "application/json; charset=utf-8", code, download)

    def do_GET(self):
        if not self.host_ok():
            return self.json({"error": "Abre el visor desde su dirección local."}, 403)
        route = unquote(urlsplit(self.path).path)
        try:
            if route == "/api/info":
                return self.json({"app": "visor-valdense", "book": BOOK, "workspace": WORKSPACE})
            if route == "/api/catalogo":
                return self.json({"pages": self.server.rows, "review": self.server.store.read(), "token": self.server.token})
            if route == "/api/exportar":
                return self.json(self.server.store.read(), download=True)
            match = re.fullmatch(r"/api/pagina/(\d+)", route)
            if match and int(match[1]) in self.server.numbers:
                n = int(match[1])
                path = self.server.texts.get(n)
                source = path.read_text(encoding="utf-8") if path else ""
                body, separator, notes = source.partition("### Notas de transcripción")
                if separator:
                    body = re.sub(r"\n---\s*$", "", body).strip()
                return self.json({"number": n, "body": body, "notes": notes.strip(), "source": path.name if path else None})
            match = re.fullmatch(r"/foto/(\d+)", route)
            if match and int(match[1]) in self.server.photos:
                return self.send_bytes(self.server.photos[int(match[1])].read_bytes(), "image/jpeg")
            static = {"/": "index.html", "/index.html": "index.html", "/estilos.css": "estilos.css", "/app.js": "app.js",
                      "/vendor/marked.umd.js": "vendor/marked.umd.js", "/vendor/purify.min.js": "vendor/purify.min.js"}
            if route in static:
                mime = "text/html; charset=utf-8" if route in {"/", "/index.html"} else (
                    "text/css; charset=utf-8" if route.endswith(".css") else "text/javascript; charset=utf-8")
                return self.send_bytes((APP / static[route]).read_bytes(), mime)
            return self.json({"error": "No se encuentra esta página o fotografía."}, 404)
        except (OSError, ValueError) as exc:
            return self.json({"error": str(exc) if isinstance(exc, ValueError) else "No se pudo leer el archivo. Comprueba que siga en su carpeta."}, 500)

    def do_POST(self):
        if not self.host_ok() or self.headers.get("X-Visor-Token") != self.server.token:
            return self.json({"error": "Vuelve a abrir el visor para guardar la revisión."}, 403)
        origin = self.headers.get("Origin")
        if origin and origin not in {f"http://127.0.0.1:{self.server.server_port}", f"http://localhost:{self.server.server_port}"}:
            return self.json({"error": "La solicitud no procede del visor local."}, 403)
        if urlsplit(self.path).path != "/api/revision":
            return self.json({"error": "Esta operación no está disponible."}, 404)
        try:
            length = int(self.headers.get("Content-Length", "0"))
            if not 0 < length <= 150000:
                raise ValueError("La observación es demasiado extensa o está vacía.")
            patch = json.loads(self.rfile.read(length).decode("utf-8"))
            return self.json(self.server.store.update(patch))
        except Conflict as exc:
            return self.json({"error": str(exc)}, 409)
        except (ValueError, UnicodeError) as exc:
            return self.json({"error": str(exc)}, 400)
        except OSError:
            return self.json({"error": "No se pudo guardar. Comprueba el espacio y los permisos de la carpeta; tu observación sigue en el visor."}, 500)


def make_server(port=8765, state_path=None):
    rows, photos, texts = inventory()
    store = ReviewStore(state_path or APP / "datos" / "revision.json", rows)
    server = ThreadingHTTPServer(("127.0.0.1", port), Handler)
    server.rows, server.photos, server.texts = rows, photos, texts
    server.numbers = {p["number"] for p in rows}
    server.store, server.token = store, secrets.token_urlsafe(32)
    return server


def main():
    parser = argparse.ArgumentParser(description="Abrir el visor local de cotejo del libro")
    parser.add_argument("--port", type=int, default=8765)
    parser.add_argument("--no-browser", action="store_true")
    parser.add_argument("--state-file", type=Path, help=argparse.SUPPRESS)
    args = parser.parse_args()
    server = None
    for port in range(args.port, args.port + 10):
        try:
            server = make_server(port, args.state_file)
            break
        except OSError:
            try:
                with urlopen(f"http://127.0.0.1:{port}/api/info", timeout=1) as reply:
                    info = json.load(reply)
                if info == {"app": "visor-valdense", "book": BOOK, "workspace": WORKSPACE}:
                    if not args.no_browser:
                        webbrowser.open(f"http://127.0.0.1:{port}")
                    print(f"El visor ya está abierto: http://127.0.0.1:{port}")
                    return
            except (OSError, ValueError):
                pass
    if not server:
        raise SystemExit("No se pudo abrir el visor: sus puertos locales están ocupados.")
    url = f"http://127.0.0.1:{server.server_port}"
    print(f"Visor listo: {url}\nDeja esta ventana abierta durante la lectura. Para cerrar: Ctrl+C.", flush=True)
    if not args.no_browser:
        threading.Timer(.5, lambda: webbrowser.open(url)).start()
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        print("\nVisor cerrado. La revisión guardada se conserva.")
    finally:
        server.server_close()


if __name__ == "__main__":
    try:
        main()
    except (ValueError, OSError) as exc:
        raise SystemExit(str(exc))
