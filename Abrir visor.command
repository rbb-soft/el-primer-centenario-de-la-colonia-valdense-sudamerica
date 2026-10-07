#!/usr/bin/env bash
set -e
visor_dir="$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" && pwd)"
exec python3 "$visor_dir/visor/servidor.py" "$@"
