# Visor de cotejo del libro

Muestra la transcripción a la izquierda y la fotografía original a la derecha. Funciona localmente y sin conexión, con Python 3.10 o posterior y un navegador moderno. Python ya está instalado en el equipo de este proyecto.

## Abrir y cerrar

1. Abre `Abrir visor.desktop`, en la raíz del proyecto, con doble clic. Si el explorador lo requiere, elige **Permitir ejecutar** o **Confiar y ejecutar**. También puedes abrir `Abrir visor.command` y elegir **Ejecutar en una terminal**.
2. El navegador abre el visor. Deja la ventana del lanzador abierta durante la lectura.
3. Para cerrar el servidor, vuelve a esa ventana y pulsa **Ctrl+C**. La revisión guardada se conserva.

Como alternativa, desde la carpeta del proyecto:

```sh
./Abrir\ visor.command
```

La dirección habitual es `http://127.0.0.1:8765`. Si ese puerto está ocupado por otra aplicación, se usa el siguiente disponible y se indica la dirección. Abrir el lanzador otra vez reutiliza el visor de este proyecto cuando ya está en marcha.

## Leer y cotejar

- Cambia de página con **Anterior**, **Siguiente**, las flechas del teclado o el campo de número. En **Páginas** puedes buscar una sección y filtrar el estado de revisión.
- Arrastra el separador central para cambiar el ancho de los paneles; también admite las flechas cuando tiene el foco. **A− / A+** cambia el tamaño del texto.
- Amplía la fotografía con **+ / −** o **Ctrl + rueda**. Arrástrala cuando esté ampliada. **Ajustar** recupera la vista completa; **Girar** y **Contraste** facilitan la lectura sin modificar el original.
- Las notas de transcripción se despliegan debajo del texto. Se conservan cursivas, tablas, notas al pie y grafías del Markdown.
- Usa **Marcar revisada** cuando termines. Puedes revertirlo con **Dejar pendiente**. **Observaciones** permite cambiar el estado y anotar diferencias; se guarda automáticamente y también ofrece **Guardar ahora**.
- Al escribir una observación, el estado pasa a **Con observaciones**. Puedes elegir **Revisada** después si has resuelto la duda.

## Registro y copias

El servidor guarda la última página y el registro de cada página en `visor/datos/revision.json`, creado al usar el visor. Es independiente de las transcripciones, las fotografías y de la verificación en papel documentada en `PROPOSITO.md`. Todas las páginas comienzan pendientes en esta nueva lectura.

**Descargar copia de toda la revisión**, dentro de Observaciones, descarga el registro completo. Para restaurar una copia, cierra el servidor y sustituye `visor/datos/revision.json` por el archivo descargado. Conserva primero una copia del registro actual. Los registros de este libro pueden trasladarse junto con el proyecto a otra carpeta.

El navegador conserva provisionalmente los cambios aún no guardados y recupera los borradores al volver a abrir. El aviso de guardado distingue esos borradores de la revisión ya guardada en el proyecto. Si se pierde la conexión, conserva la ventana y usa **Reintentar** cuando el servidor vuelva a estar disponible. Los cambios simultáneos en otra ventana producen un aviso de conflicto, sin sobrescribir la revisión guardada. En ese caso puedes **Descargar esta observación** y **Recargar revisión guardada** antes de incorporar manualmente lo que falte.

El acceso `.desktop` contiene la ruta actual del proyecto. Si lo cambias de carpeta, utiliza `Abrir visor.command` o actualiza las líneas `Exec` y `Path` del acceso.

Las páginas 2, 4, 6, 372 y 374 aparecen como blancos y no admiten marcas de revisión. La 373 muestra el título descrito por el propietario, con la ausencia de fotografía y el cotejo tipográfico pendiente indicados. Las 19 láminas quedan fuera del visor de transcripción y se conservan para la composición final.

## Componentes

- Interfaz: HTML, CSS y JavaScript sin proceso de compilación.
- Servidor: biblioteca estándar de Python; escucha únicamente en el equipo local.
- Markdown: Marked 17.0.5, incluido en `vendor/` con su licencia MIT.
- Limpieza del HTML: DOMPurify 3.4.16, incluido en `vendor/` con su licencia Apache-2.0/MPL-2.0.
- Registro: JSON, con escrituras mediante sustitución atómica del archivo y control de cambios por página.

No se necesitan descargas durante el uso. El servidor solo sirve los archivos del visor, las fotografías numeradas y las transcripciones previstas; permite escribir únicamente el registro de revisión.
