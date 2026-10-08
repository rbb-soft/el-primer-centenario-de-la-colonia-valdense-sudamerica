# Changelog

Todos los cambios notables de este proyecto se documentan aquí.
Formato basado en [Keep a Changelog](https://keepachangelog.com/es/1.0.0/).

---

## [v0.14.2] — 2026-10-08

### Changed
- `visor/datos/revision.json`: el registro del cotejo en papel se amplía con 35 páginas marcadas como «Revisada» y sin observaciones (143 a 178, salvo la 156, que quedó sin marca); la última página abierta queda en la 179.
- `PROPOSITO.md`: el cotejo contra el libro en papel pasa de 7-143 a **7-178**. Se actualizan el estado del proyecto y la sección «Verificación contra el libro impreso» con el alcance del registro del visor (7-178 «Revisada», 156 sin marcar, 179 última página abierta, ninguna observación) y las páginas que siguen pendientes (1, 3, 5, 179-371 y 375-378, más la grafía y tipografía del título de la 373). Se deja constancia de que el tramo 144-178 no requirió ninguna corrección de texto y se extiende a 26-178 la tarea pendiente de reformulación de notas.
- `README.md`: sección «Visor de cotejo» con el estado actual del registro; párrafo de verificación con el cotejo en papel hasta la 178; versión actualizada a v0.14.2.

---

## [v0.14.1] — 2026-10-07

### Changed
- `visor/datos/revision.json`: el registro de la lectura de cotejo pasa de las páginas 7 a 16 a las páginas 7 a 142, las 136 en estado «Revisada» y sin observaciones; la última página leída queda en la 143.
- `PROPOSITO.md`: el cotejo contra el libro en papel se extiende de las páginas 7-25 a las **7-143**. Se actualizan el estado del proyecto y la sección «Verificación contra el libro impreso», con el alcance del registro del visor (7-142 «Revisada», 143 última leída, ninguna observación) y las páginas que siguen pendientes (1, 3, 5, 144-371 y 375-378, más la grafía y tipografía del título de la 373). Nueva «tarea pendiente de reformulación de notas»: las notas de las páginas 26 a 143 conservan el marcador «Pendiente de verificación contra el libro en papel» y la de la 63 sigue nombrando «Gobieron» entre las grafías preservadas; su corrección corresponde al propietario y se rige por la regla de que las notas nunca contradigan el texto.
- `README.md`: sección «Visor de cotejo» con el estado actual del registro; párrafo de verificación con el cotejo en papel hasta la 143, la corrección de la 63 y la reforma pendiente de las notas; sección «Versión» actualizada a v0.14.1.

### Fixed
- `Pagina 63.md`: «el Gobieron dió» se transcribe como «el Gobierno dió», conforme al cotejo contra el libro en papel.

---

## [v0.14.0] — 2026-10-07

### Added
- Visor local de cotejo en `visor/`: interfaz (`index.html`, `estilos.css`, `app.js`), servidor (`servidor.py`, solo biblioteca estándar de Python, que escucha únicamente en `127.0.0.1:8765`) y registro independiente (`visor/datos/revision.json`). Presenta el Markdown a la izquierda y la fotografía a la derecha, con navegación por página, zoom, giro, contraste, tamaño de texto y separador de paneles arrastrable.
- Estados de revisión por página «Pendiente», «Revisada» y «Con observaciones», con anotaciones y guardado automático; también se conserva la última página leída.
- Lanzadores `Abrir visor.desktop` (doble clic) y `Abrir visor.command` (terminal) en la raíz del repositorio. El lanzador `.desktop` lleva la ruta actual del proyecto y `Abrir visor.command` se resuelve por su propia ubicación, de modo que el visor se abre desde cualquier carpeta. Reutiliza la instancia en marcha en lugar de iniciar un segundo servidor.
- Dependencias vendorizadas en `visor/vendor/` con sus licencias: Marked 17.0.5 (MIT) y DOMPurify 3.4.16 (Apache-2.0/MPL-2.0). No se requieren descargas durante el uso.
- Copia descargable del registro completo de revisión, aviso de conflicto ante cambios simultáneos en otra ventana y recuperación de los borradores aún no guardados al reabrir el navegador.
- `visor/README.md`: guía de uso con la apertura y el cierre, los controles de lectura y cotejo, el registro y sus copias, y los componentes del visor.
- Excepciones del visor documentadas: las páginas 2, 4, 6, 372 y 374 se muestran como blancos y no admiten marcas de revisión; la 373 aparece con su fuente humana explícita y sin fotografía; las 19 láminas quedan fuera de la transcripción y se conservan para la composición final.

### Changed
- `PROPOSITO.md`: árbol de directorios sincronizado con las entradas `Abrir visor.command`, `Abrir visor.desktop` y `visor/`; nueva sección «Visor para la comprobación final», que delimita `visor/datos/revision.json` como registro independiente de esta nueva lectura y advierte que marcar una página como revisada en el visor no cambia ni acredita el cotejo en papel documentado en este archivo.
- `README.md`: nueva sección «Visor de cotejo» con la apertura desde el lanzador, el contenido del registro de revisión y el enlace a la guía del visor; sección «Versión» actualizada a v0.14.0.

---

## [v0.13.0] — 2026-10-07

### Added
- 78 fotografías fuente (`pagina 01.jpeg`, `pagina 03.jpeg`, `pagina 05.jpeg`, `pagina 301.jpeg` a `pagina 371.jpeg` y `pagina 375.jpeg` a `pagina 378.jpeg`) y sus 78 transcripciones independientes con notas editoriales. Total: 372 fotografías de texto, todas con su markdown.
- Preliminares: anteportada (1), portada (3) y presentación de la Comisión Pro Festejos (5), con la jerarquía de renglones y las versalitas del impreso; el escudo de la portada se reserva como elemento gráfico para la composición final.
- Cierre de cultura musical (301-302) y nuevos apartados del Capítulo V: «D) Cultura Física» (302), «E) Cultura Valdense» (304) y «F) Periódicos» (308).
- Capítulo VI «Vida Social» (313-337): antiguas costumbres, uniones cristianas, ligas femeninas, campamento y beneficencia.
- Capítulo VII «Actividades Industriales» (338-360), con listas de nombres en redonda y rótulos en cursiva.
- Capítulo VIII «El Sentimiento de Patria» (360-366), con la apertura de capítulo repartida en varios renglones.
- Conclusión (367-371), en cuerpo cursiva con el título, las cifras y los signos de referencias bíblicas en redonda.
- Índice (375-378): entradas y números de página transcritos literalmente, con tablas para sus columnas y registro de la sustitución de los puntos guía. Sus números no se usan para corregir títulos, nombres ni paginación del cuerpo.
- Una lámina reservada entre las páginas 4 y 5 (`imagen entre 4 y 5.jpeg`), única en los preliminares: se conserva sin OCR, sin markdown y sin alterar la numeración. El total de láminas reservadas sube de dieciocho a **diecinueve**.
- `Pagina 373.md`: única página de título del tramo final, con fuente humana explícita del propietario (7 de octubre de 2026) y sus limitaciones documentadas. No se le atribuye cotejo fotográfico; mayúsculas, tilde y tipografía de «indice» quedan pendientes.
- Documentación de las cinco páginas en blanco —2, 4, 6, 372 y 374— según la indicación del propietario, con regla permanente: no generan markdown vacío, no son fuentes faltantes ni láminas y conservan su lugar en la paginación final.
- Notas al pie de la tanda: el Capítulo VI conserva (1) en la 317 y (2) en la 334; el VII reinicia con (1) en la 340 y llega hasta (6) en la 356. No se automatiza ni se armoniza la numeración.
- Firmas de pliego «20» (305), «21» (321), «22» (337), «23» (353) y «24» (369), excluidas del cuerpo y anotadas.

### Changed
- `PROPOSITO.md`: árbol de directorios sincronizado (diecinueve láminas; páginas 1, 3, 5, 7-371 y 375-378); estado, láminas reservadas (nueva lámina entre 4 y 5 en el registro), inventario (391 JPEG: 372 fotografías de texto y 19 láminas), tipografía (preliminares, Capítulos V a VIII, Conclusión, 373 e índice), notas al pie, convenciones, estructura de archivos, método de verificación, verificaciones pendientes e iteraciones futuras actualizados. Nueva sección «Inventario completo, páginas en blanco y título de la 373». La prioridad «incorporar 301 en adelante» queda cerrada: el cuerpo termina en la 371 y el índice ocupa 375-378.
- `README.md`: tabla de estado extendida con los preliminares, las páginas en blanco, la lámina entre 4 y 5, la 373 y el tramo 301-378; sección «Versión» actualizada a v0.13.0; totales, verificación, continuidad y el párrafo de las diecinueve láminas actualizados.
- `Pagina 300.md`: la nota de continuidad deja de anunciar la fotografía 301 como pendiente y registra que la oración «Rodolfo Reich,» continúa con «lo contrataron» en la 301, cotejado con la fotografía incorporada.
- `PROPOSITO.md`: nueva sección «Revisión de los preliminares y las páginas 301 a 378» con tabla de lecturas conservadas (`Lausarot`/`eclasiástica`/`controlorearlos`, `y y`, `Las dechaladas`/`Las deschaladas`, `purtâ la cavanâ`/`fêsta côrinoira`/`züpa`, `Congrego`, `Coïson`/`Allío`/`ahinco`, `Mc. Cormik`/`colonos valdensesing`/`volúmen`, `Joaquín Suáre`, `Valdense. desde`, `idiosincracia`/`instruído`, `emancipación`/`Estanzuela`); erratas, grafías y diacríticos preservados tal como aparecen en el impreso.
- Cotejo de continuidad extendido con las nuevas particiones de la tanda 301-378: «for-» / «mar» (301-302), «gas-» / «tos» (302-303), «bas-» / «quet-ball» (303-304), «jóve-» / «nes» (320-321), «des-» / «empeñarse» (327-328), «dedica-» / «ción» (336-337), «domés-» / «ticos» (338-339), «gestionan-» / «do» (342-343), «car-» / «pintería» (347-348), «confian-» / «za» (352-353), «autoriza-» / «ción» (357-358), «naci-» / «miento» (362-363), «ciuda-» / «danos» (365-366) y «predi-» / «caran» (367-368), además de «Rodolfo Reich,» / «lo contrataron» (300-301) y la cita iniciada en la 340 que continúa en la 341. La verificación en papel de esta tanda permanece pendiente.

---

## [v0.12.0] — 2026-10-06

### Added
- 50 fotografías fuente (`pagina 251.jpeg` a `pagina 300.jpeg`) y sus 50 transcripciones independientes con notas editoriales. Total: 294 páginas de texto (7 a 300, sin saltos).
- Cierre de Buenos Aires y apertura de «III / Organización de la Iglesia Valdense» (251-258), con la organización de la Iglesia y las actividades del Distrito.
- Capítulo IV «Instrucción» (259-282): primeras escuelas de Colonia Valdense (259-266), escuelas de las demás colonias y de la República Argentina (267-273) y el Liceo de Colonia Valdense, con su fundación y desarrollo (274-282).
- Capítulo V «Vida Cultural y Religiosa» (283-300): «A) Cultura religiosa» con los cursos preparatorios (283-290), «B) Cultura General» con bibliotecas, francés y conferencias (291-293) y «C) Cultura Musical» con canto, coros, fiestas, conciertos y bandas (294-300).
- Cuatro láminas reservadas para el libro final entre las páginas 256 y 257 (`imagen entre 256 y 257 1.jpeg` a `imagen entre 256 y 257 4.jpeg`): una fotografía y tres mapas. Se conservan sin OCR, sin markdown y sin alterar la numeración; el salto del relato se coteja directamente entre la 256 y la 257. El grupo suma cuatro láminas a las catorce anteriores: dieciocho en total.
- El cuadro de la 253 se representa con dos columnas y sus encabezados en cursiva; conserva tres veces «elije».
- Notas al pie de la tanda: (22) en la 252 y (23) en la 258; el Capítulo IV reinicia con (1) en la 261 y llega hasta (6) en la 283, y el Capítulo V reinicia con (1) en la 285. La (5) de la 282 conserva íntegra la cita con sus erratas. No se automatiza ni se armoniza la numeración.
- Firmas de pliego «17», «18» y «19» de las páginas 257, 273 y 289, excluidas del cuerpo y anotadas.

### Changed
- `PROPOSITO.md`: árbol de directorios sincronizado (dieciocho láminas reservadas; páginas 7 a 300); estado, láminas reservadas (nuevo grupo 256-257 con su orden 1 → 2 → 3 → 4 y su registro girado), inventario (294 fotografías de texto y 312 JPEG en total), notas al pie, método de verificación, revisión de la tanda, verificaciones pendientes e iteraciones futuras actualizados. La prioridad «incorporar 251 a 300» queda cerrada; próxima página 301.
- `README.md`: tabla de estado extendida con las láminas entre 256 y 257 y las páginas 251 a 300; sección «Versión» actualizada a v0.12.0; totales, continuidad y el párrafo de las dieciocho láminas actualizados a 294 páginas de texto sin saltos.
- `Pagina 250.md`: la nota de continuidad deja de anunciar la fotografía de la 251 como pendiente y registra que la 251 continúa y cierra la sección de Buenos Aires antes de abrir «III / Organización de la Iglesia Valdense».
- La página 260 se transcribe con la fuente corregida por el propietario, `pagina 260.jpeg`; con ella se confirman los nombres «Angroña» y «Enrique Felix».
- `PROPOSITO.md`: nueva sección «Revisión de las páginas 251 a 300» con tabla de lecturas conservadas (`las Iglesias Valdenses de la Conferencia denominada`, `Organos`/`elije`, `Lantaret`/`Radiotrasmisiones`, `distintas- denominaciones`, `Angroña`/`Enrique Felix`, `subsanarla toda costa`, `Muston`/`Allío`/`andamiento`, `Williman`/`Gratwolt`, `canonnier'`/`canonnier`/`Stëve`, `Jerah Jourdan`, `Elena Jourdan Pons`/`Fanetti`, `heróicos`/`Su primer maestra`/`Epoca heróica`, `lecciones modelos`/`agrícola comercial`, `Con el año 1890`/`la primer Comisión`, `Andreon`/`la primer médica`, `uno de las actos`/`espectativa`/`a mucho núcleos`, `Stazeski`/`a una 2.300 niños`, `infancia . hasta`, `exíguos`/`oir`/`Sud Americana`, `La Jeune Ménagère`/`Muchas colonos`, `alguns voces`/`disertacionss`/`trasmitida`, `Angel Budetti`/`Häberli`); erratas, grafías y discrepancias preservadas tal como aparecen en el impreso.
- Cotejo de continuidad extendido con las nuevas particiones de la tanda 251-300: «Confe-» / «rencia» (252-253), «Gene-» / «ral» (258-259), «antepasa-» / «dos» (259-260), «pri-» / «maria» (261-262), «funcio-» / «na» (263-264), «te-» / «nía» (268-269), «po-» / «dían» (274-275), «oportu-» / «nidad» (275-276), «aprove-» / «chó» (276-277), «Departamen-» / «tal» (278-279), «des-» / «de» (280-281), «con-» / «serva» (283-284), «man-» / «tuvo» (284-285), «ma-» / «duro» (289-290), «im-» / «partía» (291-292), «especial-» / «mente» (294-295) y «favore-» / «ciendo» (297-298), además de «algunos» / «fondos» (256-257) saltando las cuatro láminas. La cita musical de la 294 cierra en la 295; el reglamento de 299-300 no muestra cierre de comillas y no se añade. La 300 termina con «Rodolfo Reich,», dentro de una oración que espera la fotografía 301. La verificación en papel de esta tanda permanece pendiente.

---

## [v0.11.0] — 2026-10-05

### Added
- 50 fotografías fuente (`pagina 201.jpeg` a `pagina 250.jpeg`) y sus 50 transcripciones independientes con notas editoriales. Total: 244 páginas de texto (7 a 250, sin saltos).
- Cierre de la Iglesia de Ombúes de Lavalle (201) y continuación del Capítulo III, sección II «Las Iglesias», apartado «A) En la R. O. del Uruguay»: Miguelete y la obra de Cardona (202-203), Iglesia de San Salvador (204-207), Nueva Valdense y formación de la Iglesia de Río Negro (208-211), Arroyo Negro y apertura de Paysandú (212-219) y Montevideo e Iglesia Evangélica de Nueva Helvecia (220-227), con las citas de Nueva Helvecia en tipo menor, también redonda.
- Apartado «B) En la R. Argentina» (228): Colonia Belgrano y San Carlos (228-235), cierre de Belgrano con Alejandra, El Sombrerito y apertura de Colonia Iris (236-239), Iglesia de Colonia Iris (240-247) y San Gustavo y Buenos Aires (248-250).
- Dos láminas reservadas para el libro final entre las páginas 240 y 241 (`imagen entre 240 y 241 1.jpeg`, `imagen entre 240 y 241 2.jpeg`). Se conservan sin OCR, sin markdown y sin alterar la numeración; el salto del relato se coteja directamente entre la 240 y la 241. El nombre corregido de la primera lámina es `imagen entre 240 y 241 1.jpeg`; el anterior, `imagen entre 204 y 241 1.jpeg`, era erróneo y queda registrado en `PROPOSITO.md`.
- Una página que faltaba dentro de la tanda cerrada (214): cierra la continuidad 213-215 y completa el relato entre Arroyo Negro y Paysandú. Sus notas de continuidad se reformulan en consecuencia.
- Notas al pie (19) en la 211, (20) en la 237 y la larga lista de la (21) en la 238, que pasa de 1944 a 1946 y alterna «Negrin» y «Negrín»; no se completa ni se uniforma, y la llamada (21) sigue al punto de «Dios.».
- Firmas de pliego «14», «15» y «16» de las páginas 209, 225 y 241, excluidas del cuerpo y anotadas.

### Changed
- `PROPOSITO.md`: árbol de directorios sincronizado (catorce láminas reservadas; páginas 7 a 250); estado, tipografía (201 a 227 y 228 a 250), inventario de fotografías (244 de texto y 258 JPEG en total), lámina corregida entre 240 y 241, cotejos, continuidad de las páginas 201-250, continuidad actualizada, próximas iteraciones y verificaciones pendientes actualizados. La prioridad «incorporar 201 a 250» queda cerrada; próxima página 251.
- `README.md`: tabla de estado extendida con las láminas entre 240 y 241 y las páginas 201 a 250; totales, continuidad y el párrafo de las catorce láminas actualizados a 244 páginas de texto sin saltos.
- `Pagina 200.md`: la nota de continuidad pasa a confirmar que la 201 continúa con «de que la Iglesia de Ombúes de Lavalle…», cotejado con ambas fotografías; deja de anunciarla como pendiente.
- `PROPOSITO.md`: nueva sección «Revisión de las páginas 201 a 250» con tabla de lecturas conservadas (`Migueleta Abajo`/`Miguelete Abajo`, `la primer Capilla`/`Drabble,-`, `su- ministerio`/`y el Dolores`, `atendió la congregación al Candidato`, `par satisfacer`, `23 de abril de 1942`/`Informe de 1921`, `Coloria Balnearia Valdense`, `16 de setiembre de 1957`, `Iglecia`/`bi-mensual`, `4os.`/`E. C. E. M.`, `Francisco D. Arancho`/`Francisco Wüllich`, `Cincuentenario en 1944`/`21 de mayo de 1887`, `Bänziger`/`Mühlemann`/`Frauenverein`, `Weihmüller`/`C. Belgrano`, `El 2 de marzo`, `En sus ausencia`/`con culto dominicales`, `1934-1949`/`En el otoño 1950`, `Salvageot`/`Negrin` y `Negrín`, `eclasiásticas`/`eclasiásticamente`, `librada`/`eu 24 de diciembre`, `Alice Breeze`/`Ibetty Jourdan`/`C. Artalejos`, `Caïrus`/`Elio Maggi Pasquet`, `Commendatore`/`en ciudad de La Paz`); erratas, fechas discordantes y discrepancias de puntuación preservadas tal como aparecen en el impreso.
- Cotejo de continuidad extendido con las nuevas particiones de la tanda 201-250: «acariciado» / «de que» (200-201), «indepen-» / «diente» (204-205), «val-» / «dense» (210-211), «Iglesia» / «Evangélica» (213-214), «val-» / «denses» (220-221), «perso-» / «nería» (222-223), «imple-» / «mentos» (224-225), «bien-» / «hechora» (229-230), «congre-» / «gación» (230-231), «Evan-» / «gelista» (231-232), «con-» / «gregación» (232-233), «Uru-» / «guay» (234-235), «rea-» / «lizó» (240-241, saltando las láminas), «en-» / «tró» (244-245) y «Bue-» / «nos Aires» (249-250). La 214 cierra con párrafo completo y la 215 continúa Paysandú; la 250 cierra con párrafo completo dentro de la sección de Buenos Aires. La verificación en papel de esta tanda permanece pendiente.

---

## [v0.10.0] — 2026-10-04

### Added
- 50 fotografías fuente (`pagina 151.jpeg` a `pagina 200.jpeg`) y sus 50 transcripciones independientes con notas editoriales. Total: 194 páginas de texto (7 a 200, sin saltos).
- Cierre del Capítulo II: Buenos Aires (Colonia Iris y colonias vecinas), «Los Valdenses en el Paraguay» (152) y «Los Valdenses en el Brasil» (153-154).
- Capítulo III «Religión»: sección I «¿Qué Creen los Valdenses?» (155-159) con fórmulas latinas en cursiva; sección II «Las Iglesias» (160-200), apartado «A) En la R. O. del Uruguay», con las Iglesias de Colón (Valdense, Tarariras, Riachuelo-Estanzuela, San Pedro, Colonia y Ombúes de Lavalle) y de Colonia Cosmopolita.
- Cuatro láminas reservadas para el libro final entre las páginas 176 y 177 y entre las 192 y 193 (`imagen entre 176 y 177 1.jpeg`, `imagen entre 176 y 177 2.jpeg`, `imagen entre 192 y 193 1.jpeg`, `imagen entre 192 y 193 2.jpeg`). Se conservan sin OCR, sin markdown y sin alterar la numeración; el salto del relato se coteja directamente entre la 176 y la 177 y entre la 192 y la 193.
- Tres páginas que faltaban dentro de la tanda cerrada (164, 165 y 188): cierran la continuidad 163-166, completan 165 entre 164 y 166, y cierran el salto 187-189. Sus notas de continuidad se reformulan en consecuencia.
- Notas al pie (40) y (41) del cierre del Capítulo II; el Capítulo III reinicia con (1) y (2) en la 155 y la numeración llega hasta (18) en la 199; se conserva la discrepancia de la 157 entre la llamada `(1)` del cuerpo y la nota `(3)` al pie, y la continuación de la (41) entre 151 y 152 y de la (17) entre 198 y 199 sin repetir el número.

### Changed
- `PROPOSITO.md`: árbol de directorios sincronizado (doce láminas reservadas; páginas 7 a 200); estado, tipografía, cotejos, continuidad de las páginas 151-200, continuidad actualizada, láminas entre 176 y 177 y entre 192 y 193, próximas iteraciones y verificaciones pendientes actualizados. La prioridad «incorporar 151 a 200» queda cerrada; próxima página 201.
- `README.md`: tabla de estado extendida con las láminas entre 176 y 177 y entre 192 y 193 y las páginas 151 a 200; totales y continuidad actualizados a 194 páginas de texto sin saltos.
- `Pagina 150.md`: nota de continuidad reformulada para reflejar que la continuación «nos» ya está incorporada y forma «vecinos».
- `PROPOSITO.md`: nueva sección «Revisión de las páginas 151 a 200» con tabla de lecturas conservadas (`heróica`/`Jacinto Aráuz`, `(1)`/`(3)`, `tempo`/`Tempo`, `Armand Hugon`/`Coïsson`, `ríoplatense`/`E. D.`, `fué relegados`/`Ernestro Tron`, `C. Iris. el`/`casa del don Esteban Cesan`, `1861`/`oportuna ampliaciones`, `reune`/`acoje`, `Rocchi-Lanoir`/`Isidoro De Benedetti`, `Dominios`/`B. Carámbula`/`en las estancia`, `al pastor jubilado`/`Díaz, (14). al`, `varias dependencia`/`en cada visitas`, `Pablo Davit`/`prebisterio`); erratas y discrepancias preservadas tal como aparecen en el impreso.
- Cotejo de continuidad extendido con las nuevas particiones de la tanda 151-200: «veci-» / «nos» (150-151), «Igle-» / «sia» (157-158), «Valden-» / «se» (170-171), «nota-» / «ble» (180-181), «re-» / «solvió» (182-183), «miem-» / «bros» (185-186), «se-» / «ñor» (191-192), «Geymonat-Caffa-» / «rel» (195-196), «Cris-» / «tiana» (196-197) y «di-» / «nero» (197-198); continuidades de 164-165 y 187-189 cerradas con las fotografías faltantes. La 200 termina en «acariciado», sin punto; falta la 201 para completar la oración.

---

## [v0.9.0] — 2026-10-04

### Added
- 50 fotografías fuente (`pagina 101.jpeg` a `pagina 150.jpeg`) y sus 50 transcripciones independientes con notas editoriales. Total: 144 páginas de texto (7 a 150, sin saltos).
- Cuatro láminas reservadas para el libro final entre las páginas 112 y 113 y entre las 128 y 129 (`imagen entre 112 y 113 1.jpeg`, `imagen entre 112 y 113 2.jpeg`, `imagen entre 128 y 129 1.jpeg`, `imagen entre 128 y 129 2.jpeg`). Se conservan sin OCR, sin markdown y sin alterar la numeración; el salto del relato se coteja directamente entre la 112 y la 113 y entre la 128 y la 129.
- Cierre del Departamento de Soriano (101) y continuación por Rivera, Treinta y Tres, Río Negro, Paysandú y Rocha: Arroyo Negro, grupos del norte, Santa Teresa y Alférez.
- Capítulo sobre la Comisión Valdense de Colonización (114 a 122), con decreto y referencias a la inmigración desde Italia.
- Capítulo sobre la República Argentina: San Carlos, Belgrano, Venado Tuerto, norte de Santa Fe (Alejandra, Las Garzas, El Sombrerito, Calchaquí) y Entre Ríos (Rosario Tala, San Gustavo).
- Cierre con Córdoba, Chaco, Santiago del Estero, La Pampa y Buenos Aires (Colonia Iris y colonias vecinas).
- Notas al pie (28) a (39), incluida la nota (30) que continúa de la 111 a la 112; se conserva la discrepancia de la 139 entre la llamada `(1)` del cuerpo y la nota `(37)` al pie.

### Changed
- `PROPOSITO.md`: árbol de directorios sincronizado (ocho láminas reservadas; páginas 7 a 150); estado, tipografía, cotejos, continuidad de las páginas 101–150, continuidad actualizada, láminas entre 112 y 113 y entre 128 y 129 y próximas iteraciones actualizados. La prioridad «incorporar 101 a 150» queda cerrada; próxima página 151.
- `README.md`: tabla de estado extendida con las láminas entre 112 y 113 y entre 128 y 129 y las páginas 101 a 150; totales y continuidad actualizados a 144 páginas de texto sin saltos.
- `Pagina 100.md`: nota de continuidad reformulada para reflejar que la 101 continúa el relato sobre Soriano.
- `PROPOSITO.md`: nueva sección «Revisión de las páginas 101 a 150» con tabla de lecturas conservadas (`Dapartmento`, `Andréón`, `no opta`, `camión. parte`, `acticidad`, `En su mayor partes`, `Eofelio de Dovitis`, `1887`, `Beck y Erzog`, `Ortíz` / `Ortiz`, `ofinas`, `exhorbitantes`, `se llamada`, `Pavarín` / `Pavarin`, `Coïsson`, `Vinçon`, `(1)` / `(37)`, `cloclos`, `Teóflio`, `Ternis`, `La Helvecia`, `Artalejos`); erratas preservadas tal como aparecen en el impreso.
- Cotejo de continuidad extendido con las nuevas particiones de la tanda 101–150: «al-» / «guna» (106–107), «Presiden-» / «te» (115–116), «colo-» / «nos» (118–119), «ado-» / «bes» (124–125), «pro-» / «pietarios» (125–126), «Valden-» / «ses» (126–127), «establecién-» / «dose» (128–129, saltando láminas), «Bari-» / «don» (133–134), «tam-» / «bién» (134–135), «Resis-» / «tencia» (138–139), «in-» / «dumentarias» (140–141) y «pro-» / «vincial» (149–150). La 150 conserva el corte «veci-»; la 101 continúa Soriano después del párrafo completo de la 100.

---

## [v0.8.0] — 2026-10-04

### Added
- Dos fotografías fuente nuevas (`pagina 70.jpeg` y `pagina 71.jpeg`) y sus transcripciones independientes con notas. Cierran el salto pendiente de la tanda anterior: total 94 páginas de texto (7 a 100, sin saltos).
- Cierre de la sección VII «Artilleros»: «Rincón del Sauce» continúa con el fallecimiento de Tomás Bell y el rótulo en cursiva «Progreso de la colonia.»; la 71 lo continúa y cierra la sección con párrafo completo antes de la apertura de la VIII en la 72.
- Dos láminas reservadas para el libro final entre las páginas 64 y 65 (`imagen entre 64 y 65 1.jpeg` y `imagen entre 64 y 65 2.jpeg`; la segunda está girada). Se conservan sin OCR, sin markdown y sin alterar la numeración; el salto del relato se coteja directamente entre la 64 y la 65.

### Changed
- `PROPOSITO.md`: árbol de directorios sincronizado (cuatro láminas reservadas; páginas 7 a 100); estado, tipografía, cotejos, continuidad de las páginas 69–72, láminas entre 64 y 65 y próximas iteraciones actualizados. La prioridad «incorporar 70 y 71» queda cerrada; próxima página 101.
- `README.md`: tabla de estado extendida con las láminas entre 64 y 65 y las páginas 66 a 71; totales y continuidad actualizados a 94 páginas de texto sin saltos.
- `Pagina 64.md`, `Pagina 65.md`, `Pagina 69.md` y `Pagina 72.md`: notas de continuidad reformuladas para reflejar la incorporación de las láminas entre 64 y 65 y de las páginas 70 y 71, sin oraciones ni palabras pendientes.

---

## [v0.7.0] — 2026-10-04

### Added
- 37 fotografías fuente y sus transcripciones independientes: páginas 62 a 69 y 72 a 100. Total: 92 páginas de texto (7 a 69 y 72 a 100).
- Continuación de «Cosmopolita» y secciones VI a XII del Capítulo II; apertura de «En el Departamento de Soriano», secciones I y II, hasta «Palmitas».
- Notas al pie (16) a (27), ornamentos y notas de lectura de nombres, cifras, grafías y puntuación. Las 37 páginas fueron cotejadas con fotografías completas, bandas ampliadas y detalles ×6; su verificación en papel queda pendiente.

### Changed
- `README.md` y `PROPOSITO.md`: estado, tipografía, árboles, cotejos y próximas iteraciones actualizados. Las fuentes 70 y 71 faltan y quedan como prioridad, antes de continuar en la 101; no se reconstruye su texto ni se crean archivos sustitutos.
- Patrón de selección de fotografías actualizado a un mínimo de dos dígitos para admitir la página 100. Se mantiene la exclusión permanente de las dos láminas entre 48 y 49, reservadas para el libro final, sin OCR ni markdown.
- Nota de continuidad de la página 61 actualizada con la 62 ya incorporada. El cotejo en papel de las páginas 26 a 69 y 72 a 100 sigue pendiente.

---

## [v0.6.1] — 2026-10-03

### Changed
- Renombradas cuatro fotografías fuente para normalizar nombres: `Pagina 7.jpeg`, `Paqina 8.jpeg`, `Pagina 9.jpeg` y `Pagina 10.jpeg` → `pagina 07.jpeg`, `pagina 08.jpeg`, `pagina 09.jpeg` y `pagina 10.jpeg`. Se corrige la errata «Paqina», se unifica minúscula y se aplica padding con cero a los números de un dígito.
- `PROPOSITO.md`: árbol de directorios sincronizado con los nombres reales; se elimina la fila de la errata «Paqina» y la nota sobre el nombre en mayúscula, ya sin vigencia.
- `Pagina 7.md`, `Pagina 8.md`, `Pagina 9.md` y `Pagina 10.md`: actualizada la línea «Fuente:» al nuevo nombre del JPEG. En `Pagina 8.md` se retira la nota sobre el error tipográfico del nombre, ya corregido.

---

## [v0.6.0] — 2026-10-03

### Added
- 13 fotografías fuente de las páginas 49 a 61 y sus transcripciones independientes con notas; avance total a 55 páginas de texto (7 a 61).
- Continuación de «Colonia Valdense», sección III «Planeando una segunda colonia Valdense», sección IV «Intervención del "Superior Gobierno"» y apertura de la V, «Cosmopolita».
- Notas al pie (14) y (15) del Capítulo II, cartas y telegrama de 1883; registro de grafías y erratas como «cina-cina», «exhoneración», «una fondo» y «Comisión le Nueva Helvecia».
- Dos láminas originales entre las páginas 48 y 49, reservadas para la confección del libro final y conservadas sin modificaciones.
- Regla permanente y registro en `PROPOSITO.md`: excluir las láminas de toda transcripción y OCR, incluso sus leyendas; no generar markdown, contar pendientes ni alterar la numeración por ellas. Conservar ubicación y orden para el libro final.

### Changed
- `README.md` y `PROPOSITO.md`: estado, tipografía, verificación y próximas iteraciones actualizados hasta la página 61; siguiente página 62. El cotejo en papel de las páginas 26 a 61 sigue pendiente.
- Árbol de directorios de `PROPOSITO.md` sincronizado con los archivos reales, incluidas las láminas, `README.md`, `CHANGELOG.md` y las nuevas páginas.
- Nota de continuidad de la 48 actualizada: la oración sigue directamente en la 49, saltando las láminas. Documentados los enlaces «pue-» / «da», «perió-» / «dico» y «comisio-» / «nes», y el cierre de la carta en la 59.

---

## [v0.5.0] — 2026-10-03

### Added
- 23 fotografías fuente, de `pagina 26.jpeg` a `pagina 48.jpeg`, y sus 23 transcripciones independientes con notas editoriales.
- Cierre de «Segunda emigración», sección IV «Tercera emigración» y sección V «Los Valdenses en Florida» del Capítulo I.
- Apertura del Capítulo II «Colonización», sección I «Fundación de la primera colonia (1858)» y sección II «Colonia Valdense (1858 - 1958)», hasta el ensanche de la colonia.
- Notas al pie (8) a (13) del Capítulo I y (1) a (13) del Capítulo II; se conserva el reinicio de numeración.
- Registro de grafías, erratas y signos particulares del impreso, incluidos «relatando de salida», «fraticidas», «llamada Majestas», «traslados», «precipio», «nuestro ranchos», «cononia» y los tres trazos de apertura en las páginas 31 y 43.

### Changed
- `README.md` y `PROPOSITO.md`: avance actualizado a 42 páginas transcritas (7 a 48), con las 26 a 48 cotejadas contra las fotografías y pendientes de verificación en papel.
- Nota de continuidad de la página 25: «em-» / «barcado» forma «embarcado»; se retira del propósito la conjetura anterior «embarcarse».
- Continuidades de palabras y citas entre las nuevas páginas documentadas; queda abierta la oración final de la 48 para continuar en la 49.

---

## [v0.4.0] — 2026-10-03

### Added
- Cinco fotografías fuente en `imagenes del libro/`: `pagina 21.jpeg`, `pagina 22.jpeg`, `pagina 23.jpeg`, `pagina 24.jpeg` y `pagina 25.jpeg`.
- Transcripción de las páginas 21, 22, 23, 24 y 25, con sus notas de transcripción. Las 21 a 23 continúan la sección II, «Primera emigración» (la instalación de las primeras familias en el Uruguay); la 24 abre la sección III, «Segunda emigración» (junio de 1857, «El nuevo contingente») con la lista de las diez familias, y la 25 cierra esa lista y sigue con la salida de Génova y el culto de despedida a bordo del *I due amici*.
- Notas al pie (4) a (7), con sus filetes separadores: el pocillo de Juan Pedro Planchon, la biografía de Juan Pedro Baridon, la carta publicada en el Boletín y la cita del Salmo 107.
- Nueva convención documentada en `PROPOSITO.md` para las **listas de emigrantes**: los nombres de varones van en cursiva y los de mujeres en redonda, aunque compartan apellido; el criterio y sus casos límite quedan en una tabla con las páginas 21, 24 y 25.
- Nuevas entradas en la tabla de lecturas fijadas solo con ampliación: `suibiografiado` (22), `$ 30.00` (23), `Pantaléón Pérez` (23), `Santa Fe` (24), `Pablo Davyt` (24), `Eliseo Bertinal` (24), `Tomás Rostan` (25) y `Módena` (25).
- Sección nueva en `PROPOSITO.md` sobre la **verificación contra el libro en papel**, que cierra las páginas 7 a 25.

### Changed
- `PROPOSITO.md` pasa de «páginas 7 a 20» a «páginas 7 a 25», con el detalle de la sección III y de lo que falta por incorporar; la tabla de bloques y tipografía incluye las filas de las páginas 21 a 25.
- La tabla de verificaciones pendientes suma los puntos de las páginas 21 a 25: `Planchon`, los cuatro apellidos compuestos de la 21, `Enrichetta`, `suibiografiado`, `Società di Studi Valdesi`, `Pantaléón Pérez`, las cuentas de «10 familias» y «72 personas», `Davyt`, las cuatro formas `Bertin`/`Berton`/`Bertinal`/`Bertinat`, `Bleyuat`, `Pramollo`, `Pomaretto`, `Rostan`, `Módena`, `Salmo 107` e `Inverso Pinasca`.
- El apartado de fotos que abarcan más de una hoja incorpora la 25, que muestra fragmentos de la 26 en el margen izquierdo y está torcida, y la 24, con el margen de encuadernación ennegrecido.
- `Pagina 18.md`: se confirma con aumento ×16 la raya corta bajo el indicador de ordinal de `Nº`.
- `Pagina 25.md`: se reformula la nota de las dos fechas de la página para que no contradiga el texto, que sí da la del sepelio (24 de junio de 1857) y la de la salida (viernes 26).

---

## [v0.3.0] — 2026-10-03

### Added
- Transcripción de las páginas 17, 18, 19 y 20, con las notas de transcripción correspondientes. La 17 abre el Capítulo I («Los "Pionniers"»); la 20 cierra la sección I, «El problema de la emigración», y abre la sección II, «Primera emigración».
- Primeras **notas al pie** del libro: las llamadas `(1)`, `(2)` y `(3)` y sus textos, con el filete separador.
- Nuevas convenciones en `PROPOSITO.md`: versalitas de los títulos, títulos de varios renglones, rótulos en cursiva dentro de un cuerpo en redonda, notas al pie, cifras de cuerpo bajo (`old style`) y fotos que abarcan dos hojas.
- Nuevo método de segmentación de renglones por proyección de tinta, documentado en `PROPOSITO.md`, y seis lecturas de las páginas 17 a 20 que solo quedaron fijadas con ampliación.

### Changed
- `PROPOSITO.md` pasa de «páginas 7 a 16» a «páginas 7 a 20», con el detalle de lo que falta por incorporar.
- La tabla de verificaciones pendientes suma diez puntos de las páginas 17 a 20: `Sud-Americana`, `Würtemberg`, `Boletín Nos. 18 y 19`, `Meille`, `Santa Fé`, `Le Long`, `Aarón Castellanos`, `Bartolomé Malan`, `Villar Pellice`, `Juan Pedro Revel` y `Santa Margarita`.

---

## [v0.2.0] — 2026-10-03

### Added
- Tres nuevas fotografías fuente en `imagenes del libro/`: `pagina 17.jpeg`, `pagina 18.jpeg`, `pagina 19.jpeg`. Pendientes de transcripción.

---

## [v0.1.0] — 2026-10-03

### Added
- Estado inicial del proyecto: transcripción diplomática de las páginas 7 a 16 de «Historia de las Colonias Valdenses en su primer centenario (1858 - 1958)» (Introducción y Preámbulo).
- `PROPOSITO.md` con propósito, estructura, convenciones de transcripción y método de verificación.
- Diez archivos `Pagina N.md` en `markdown de paginas/` (páginas 7 a 16), cada uno con cuerpo transcrito y sección de notas de transcripción.
- Diez fotografías originales en `imagenes del libro/` (JPEGs con nombres conservados del archivo, incluidos errores tipográficos y alternancia de mayúsculas/minúsculas).
- Documento ODT de la raíz, separado del contenido transcrito.