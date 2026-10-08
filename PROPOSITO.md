# Propósito del proyecto

Transcripción diplomática de **«Historia de las Colonias Valdenses en su primer centenario (1858 - 1958)»**: cada página de texto fotografiada del libro se convierte en un archivo markdown independiente, con el texto íntegro y fiel al original.

El objetivo es la **exhaustividad documental, no la edición**. El texto se transcribe tal como está impreso —incluidas sus incongruencias ortográficas, sintácticas y de puntuación— y toda lectura dudosa queda registrada en las notas del archivo correspondiente, para que cualquier persona pueda verificarla contra la imagen sin releer el libro.

## Estructura

```
Libro/                                  ← raíz de este repositorio (nombre abreviado)
├── CHANGELOG.md                         ← historial de versiones
├── HISTORIA DE LAS COLONIAS VALDENSES EN SU PRIMER CENTENARIO (1858 - 1958).odt
├── PROPOSITO.md                         ← este archivo
├── README.md                            ← presentación y estado
├── Abrir visor.command                  ← lanzador portátil del visor local
├── Abrir visor.desktop                  ← acceso para abrirlo con doble clic
├── visor/                               ← interfaz, servidor y registro independiente
├── imagenes del libro/                  ← páginas de texto y láminas reservadas
│   ├── imagen entre 4 y 5.jpeg           ← lámina: excluir de la transcripción
│   ├── imagen entre 48 y 49 1.jpeg       ← lámina: excluir de la transcripción
│   ├── imagen entre 48 y 49 2.jpeg       ← lámina: excluir de la transcripción
│   ├── imagen entre 64 y 65 1.jpeg       ← lámina: excluir de la transcripción
│   ├── imagen entre 64 y 65 2.jpeg       ← lámina: excluir de la transcripción
│   ├── imagen entre 112 y 113 1.jpeg     ← lámina: excluir de la transcripción
│   ├── imagen entre 112 y 113 2.jpeg     ← lámina: excluir de la transcripción
│   ├── imagen entre 128 y 129 1.jpeg     ← lámina: excluir de la transcripción
│   ├── imagen entre 128 y 129 2.jpeg     ← lámina: excluir de la transcripción
│   ├── imagen entre 176 y 177 1.jpeg     ← lámina: excluir de la transcripción
│   ├── imagen entre 176 y 177 2.jpeg     ← lámina: excluir de la transcripción
│   ├── imagen entre 192 y 193 1.jpeg     ← lámina: excluir de la transcripción
│   ├── imagen entre 192 y 193 2.jpeg     ← lámina: excluir de la transcripción
│   ├── imagen entre 240 y 241 1.jpeg     ← lámina: excluir de la transcripción
│   ├── imagen entre 240 y 241 2.jpeg     ← lámina: excluir de la transcripción
│   ├── imagen entre 256 y 257 1.jpeg     ← lámina: excluir de la transcripción
│   ├── imagen entre 256 y 257 2.jpeg     ← lámina: excluir de la transcripción
│   ├── imagen entre 256 y 257 3.jpeg     ← lámina: excluir de la transcripción
│   ├── imagen entre 256 y 257 4.jpeg     ← lámina: excluir de la transcripción
│   ├── pagina 01.jpeg, pagina 03.jpeg, pagina 05.jpeg
│   ├── pagina 07.jpeg … pagina 371.jpeg ← texto continuo, sin saltos
│   └── pagina 375.jpeg … pagina 378.jpeg ← índice
└── markdown de paginas/                 ← destino: una transcripción por página de texto
    ├── Pagina 1.md, Pagina 3.md, Pagina 5.md
    ├── Pagina 7.md … Pagina 371.md
    ├── Pagina 373.md                    ← título según descripción del propietario
    └── Pagina 375.md … Pagina 378.md
```

Correspondencia entre fuente y destino: el nombre del archivo markdown sigue el número de página (`Pagina N.md`), no el nombre del JPEG. Los nombres reales de los JPEG quedan registrados en las notas de cada archivo. Actualmente las fuentes de texto siguen `pagina NN.jpeg`, en minúscula, con un mínimo de dos dígitos (01, 03, 05 y 07 a 09 con cero inicial; 100 a 378 con tres dígitos); el destino conserva `Pagina N.md`, sin cero inicial.

Estado actual: **373 páginas registradas en markdown hasta la 378**: 372 transcritas de fotografías y la 373 registrada según la descripción del propietario. Las únicas páginas sin markdown son las cinco páginas en blanco 2, 4, 6, 372 y 374. Las páginas 1 y 3 son anteportada y portada; la 5 es la presentación de la Comisión Pro Festejos. El tramo 7–371 es continuo. La 7 abre la Introducción; la 11 abre el Preámbulo, que cierra en la 16; la 17 abre el Capítulo I («Los "Pionniers"»). La sección I, «El problema de la emigración», llega hasta la 20, donde abre la sección II, «Primera emigración», que sigue hasta la 23. La sección III, «Segunda emigración», abre en la 24 y sigue hasta la 27: el corte «em-» (25) / «barcado» (26) forma «embarcado». La 27 abre la sección IV, «Tercera emigración», y la 30 abre la V, «Los Valdenses en Florida». La 33 cierra el Capítulo I y abre el II, «Colonización», con la sección I, «Fundación de la primera colonia (1858)». La 43 abre la sección II, «Colonia Valdense (1858 - 1958)»; la 46 inicia el rótulo «Ensanche de la colonia». La 48 termina con «El pago debía realizarse en un plazo de cuatro años,», que continúa con «empezando con el segundo» en la 49, saltando las dos láminas reservadas. La sección II termina en la 53, donde abre la III, «Planeando una segunda colonia Valdense»; la 56 abre la IV, «Intervención del "Superior Gobierno"»; la 61 abre la V, «Cosmopolita», con el rótulo «Los primeros pobladores». La sección V continúa hasta la 65; la 66 abre la VI, «Riachuelo», y la 67 la VII, «Artilleros», que continúa con «Rincón del Sauce» y «Progreso de la colonia» en las páginas 69 a 71. Las páginas 70 y 71 ya están incorporadas: la 69 cierra con párrafo completo, la 70 continúa el relato y la 71 termina la sección antes de la nueva apertura de la 72. La 72 abre la VIII, «Tarariras y Quintón»; la 75 la IX, «Ombúes de Lavalle»; la 85 la X, «Colonia Miguelete»; la 86 la XI, «C. Miguelete»; y la 89 la XII, «San Pedro», que llega hasta la 91. La 92 abre «En el Departamento de Soriano» y su sección I, «Los Pionn'iers»; la 93 abre la II, «Formación de la colonia», que continúa hasta el rótulo «Palmitas» de la 100. La 101 cierra Soriano y abre Rivera, Treinta y Tres y Río Negro; la 104 abre Paysandú y la 110 Rocha. La 112 inicia Alférez y la 114 la Comisión Valdense de Colonización, que llega hasta la 122. La 123 abre «En la República Argentina» y Santa Fe; la 129 el norte de Santa Fe y Colonia Alejandra; la 135 Las Garzas; la 136 El Sombrerito; la 138 Calchaquí; y la 139 Entre Ríos con Rosario Tala. La 142 abre San Gustavo; la 144 Córdoba, Chaco y Santiago del Estero; y la 147 La Pampa y Buenos Aires, con Colonia Iris, que termina en la 151. La 152 abre «Los Valdenses en el Paraguay» y la 153 «Los Valdenses en el Brasil», que cierra en la 154. La 155 abre el Capítulo III, «Religión», con la sección I, «¿Qué Creen los Valdenses?». La 160 abre la II, «Las Iglesias», y «A) En la R. O. del Uruguay», con «1. — La Iglesia de Colonia Valdense». La 164 inicia el pastorado de Daniel Armand Ugon, la 167 el de Ernesto Tron y la 174 la situación actual de esa iglesia. La 175 abre «II. — La Iglesia de Colonia Cosmopolita», la 184 «III. — Iglesia de Tarariras», la 190 «IV. — La Iglesia de Colonia» y la 197 «V. — La Iglesia de Ombúes de Lavalle», que continúa hasta la 200. Las páginas 164, 165 y 188, agregadas durante el trabajo, cierran los saltos de la tanda. No se añade un número de capítulo que el impreso no muestra.

La tanda 201–250 completa Ombúes de Lavalle y continúa las iglesias de Miguelete, San Salvador, Nueva Valdense, Río Negro, Arroyo Negro, Paysandú, Alférez, Montevideo y Nueva Helvecia. La 228 abre «B) En la R. Argentina» con Colonia Belgrano y San Carlos; la 236 abre Alejandra, la 237 El Sombrerito, la 239 Colonia Iris, la 247 San Gustavo y la 249 Buenos Aires. La página 214, incorporada durante el trabajo, completa la continuidad entre Arroyo Negro y Paysandú.

La tanda 251–300 cierra Buenos Aires y abre «III / Organización de la Iglesia Valdense» en la 251. La 259 abre el Capítulo IV, «Instrucción», con las primeras escuelas de Colonia Valdense; la 267 continúa las demás colonias, la 272 abre Argentina y la 274 inicia el Liceo de Colonia Valdense. La 283 cierra el Liceo y abre el Capítulo V, «Vida Cultural y Religiosa», con «A) Cultura religiosa»; la 291 abre «B) Cultura General» y la 294 «C) Cultura Musical», que sigue en la tanda final hasta la 302.

La tanda final incorpora las páginas 1, 3, 5, 301–371 y 375–378: 78 fotografías de texto y una lámina entre 4 y 5. La 302 abre «D) Cultura Física»; la 304, «E) Cultura Valdense»; y la 308, «F) Periódicos». La 313 abre el Capítulo VI, «Vida Social», con antiguas costumbres, uniones cristianas, ligas femeninas, campamento y beneficencia. La 338 abre el Capítulo VII, «Actividades Industriales», y la 360 el VIII, «El Sentimiento de Patria». La Conclusión ocupa 367–371. Las páginas 372 y 374 están en blanco; la 373 es el título centrado «indice», y las 375–378 contienen el índice.

Las páginas **7 a 178** están verificadas contra el libro en papel. Las **1, 3, 5, 179 a 371 y 375 a 378** fueron cotejadas con las fotografías completas, bandas ampliadas y recortes de detalle; **su verificación en papel sigue pendiente**. La 373 tiene fuente humana explícita y requiere comprobar su grafía y tipografía; no se presenta como cotejada con una fotografía.

### Láminas reservadas para la confección del libro final

**Regla permanente:** las páginas de imágenes o láminas se conservan como material gráfico para la confección del libro final y se ignoran durante todo el período de transcripción de imagen a markdown. Esta es una excepción explícita a la correspondencia «una fotografía → un markdown»: solo se transcriben las páginas de texto.

| Archivo en `imagenes del libro/` | Ubicación en el libro | Tratamiento |
|---|---|---|
| `imagen entre 4 y 5.jpeg` | Entre las páginas 4 y 5, lámina única | Reservada para el libro final; sin transcripción |
| `imagen entre 48 y 49 1.jpeg` | Entre las páginas 48 y 49, primera lámina | Reservada para el libro final; sin transcripción |
| `imagen entre 48 y 49 2.jpeg` | Entre las páginas 48 y 49, segunda lámina | Reservada para el libro final; sin transcripción |
| `imagen entre 64 y 65 1.jpeg` | Entre las páginas 64 y 65, primera lámina | Reservada para el libro final; sin transcripción |
| `imagen entre 64 y 65 2.jpeg` | Entre las páginas 64 y 65, segunda lámina; fotografía girada | Reservada para el libro final; sin transcripción |
| `imagen entre 112 y 113 1.jpeg` | Entre las páginas 112 y 113, primera lámina | Reservada para el libro final; sin transcripción |
| `imagen entre 112 y 113 2.jpeg` | Entre las páginas 112 y 113, segunda lámina | Reservada para el libro final; sin transcripción |
| `imagen entre 128 y 129 1.jpeg` | Entre las páginas 128 y 129, primera lámina | Reservada para el libro final; sin transcripción |
| `imagen entre 128 y 129 2.jpeg` | Entre las páginas 128 y 129, segunda lámina | Reservada para el libro final; sin transcripción |
| `imagen entre 176 y 177 1.jpeg` | Entre las páginas 176 y 177, primera lámina | Reservada para el libro final; sin transcripción |
| `imagen entre 176 y 177 2.jpeg` | Entre las páginas 176 y 177, segunda lámina | Reservada para el libro final; sin transcripción |
| `imagen entre 192 y 193 1.jpeg` | Entre las páginas 192 y 193, primera lámina | Reservada para el libro final; sin transcripción |
| `imagen entre 192 y 193 2.jpeg` | Entre las páginas 192 y 193, segunda lámina | Reservada para el libro final; sin transcripción |
| `imagen entre 240 y 241 1.jpeg` | Entre las páginas 240 y 241, primera lámina; fotografía girada | Reservada para el libro final; sin transcripción |
| `imagen entre 240 y 241 2.jpeg` | Entre las páginas 240 y 241, segunda lámina | Reservada para el libro final; sin transcripción |
| `imagen entre 256 y 257 1.jpeg` | Entre las páginas 256 y 257, primera lámina; fotografía girada | Reservada para el libro final; sin transcripción |
| `imagen entre 256 y 257 2.jpeg` | Entre las páginas 256 y 257, segunda lámina; mapa girado | Reservada para el libro final; sin transcripción |
| `imagen entre 256 y 257 3.jpeg` | Entre las páginas 256 y 257, tercera lámina; mapa | Reservada para el libro final; sin transcripción |
| `imagen entre 256 y 257 4.jpeg` | Entre las páginas 256 y 257, cuarta lámina; mapa | Reservada para el libro final; sin transcripción |

El propietario corrigió el nombre `imagen entre 204 y 241 1.jpeg` a `imagen entre 240 y 241 1.jpeg`. El nombre anterior era erróneo y no identifica otra lámina ni una página de texto. Usar únicamente el nombre corregido y conservar la ubicación 240–241.

- Conservar los JPEG originales, sus nombres y el orden 1 → 2 de cada par y 1 → 2 → 3 → 4 del grupo entre 256 y 257. Deben permanecer en el repositorio para la futura composición del libro.
- No aplicar OCR ni transcribir leyendas, títulos o contenido de estas láminas. No crear markdown, archivos vacíos ni páginas sustitutas para ellas.
- No contarlas como páginas de texto pendientes, no asignarles números de página y no alterar la numeración existente. La lámina entre 4 y 5 pertenece a los preliminares y tampoco genera una página de texto. La continuidad del relato se coteja directamente de la 48 a la 49, de la 64 a la 65, de la 112 a la 113, de la 128 a la 129, de la 176 a la 177, de la 192 a la 193, de la 240 a la 241 y de la 256 a la 257, saltando las láminas de cada ubicación.
- Antes de cada nueva tanda, clasificar las fotografías y consultar este registro. Incorporar aquí las futuras láminas reservadas con su nombre real y ubicación.
- En cualquier procesamiento automático, seleccionar solo nombres de página completos con `^pagina [0-9]{2,}\.jpeg$` (minúscula, espacio, mínimo dos dígitos con cero a la izquierda para las páginas 1, 3, 5 y 7 a 9) y excluir expresamente los archivos de este registro. Nunca extraer un número suelto del nombre de una lámina: «48» y «49» indican su ubicación, no páginas a transcribir. Toda imagen que no cumpla el patrón o sea una lámina requiere clasificación antes de procesarse.

### Inventario completo, páginas en blanco y título de la 373

El inventario contiene **391 JPEG: 372 fotografías de texto y 19 láminas reservadas**. Las fotografías de texto son 1, 3, 5, 7–371 y 375–378; todas tienen su transcripción. Hay **373 markdown**, al incluir la página 373 descrita por el propietario. Las páginas 70, 71, 164, 165, 188 y 214 incorporadas en tandas anteriores cierran sus antiguos saltos; la fuente de la 260 conserva el nombre corregido `pagina 260.jpeg`.

El 7 de octubre de 2026 el propietario confirmó que todos los saltos restantes son páginas en blanco salvo la 373, que solo dice «indice», centrado vertical y horizontalmente. Esta indicación se aplica así:

| Página | Contenido y fuente | Tratamiento |
|---|---|---|
| 2, 4 y 6 | En blanco, según el propietario | Sin markdown vacío; conservar su lugar en la paginación final |
| 372 y 374 | En blanco, según el propietario | Sin markdown vacío; conservar su lugar a ambos lados del título del índice |
| 373 | Únicamente «indice», centrado en ambos ejes, según el propietario; sin fotografía | `Pagina 373.md` con fuente humana y posición documentadas; cotejo tipográfico pendiente |

**Regla permanente:** las páginas en blanco no son fotografías de texto faltantes ni láminas pendientes de transcripción. No crear archivos vacíos, completar por contexto ni renumerar las páginas posteriores. Para la composición del libro final, conservar los cinco blancos en sus posiciones. La 373 es una página de título: no omitirla ni clasificarla como blanco o lámina. Su palabra se registra con la grafía comunicada; no deducir mayúsculas, tilde, tipo de letra ni folio a partir del índice de la 375.

En cada nueva incorporación, comparar los números de las fotografías de texto con los markdown y con las excepciones documentadas. La página más alta no demuestra por sí sola que el tramo esté completo. Si se aporta una fotografía de la 373, sustituir la fuente humana y resolver su grafía y tipografía mediante cotejo, sin duplicar el archivo. Si aparece otro salto no documentado, registrarlo como pendiente y no reconstruir su contenido.

## Bloques y tipografía del libro

El libro no es tipográficamente uniforme. Hay que revisar el tipo de letra en cada página nueva, porque de eso depende si el texto lleva cursivas:

| Páginas | Sección | Cuerpo | Título |
|---|---|---|---|
| 1 y 3 | Anteportada y portada | **Redonda** | Jerarquía de renglones y versalitas conservadas; escudo de la portada reservado para la composición |
| 5 | Presentación de la Comisión Pro Festejos | **Cursiva** | Firma en redonda; cargo y palabras de la fecha en cursiva, cifras en redonda |
| 7 a 10 | Introducción | **Cursiva** | Redonda negrita centrada (`Introducción`) |
| 11 a 16 | Preámbulo | **Redonda** | Redonda negrita centrada (`PREAMBULO`, sin tilde) |
| 17 a 20 | Capítulo I, secciones I y II | **Redonda** | Versalitas (`CAPITULO I`, `EL PROBLEMA DE LA EMIGRACIÓN`, `PRIMERA EMIGRACIÓN`) |
| 21 a 23 | Capítulo I, sección II (sin título) | **Redonda** | Sin título ni rótulo; rótulos de origen en cursiva dentro de las listas |
| 24 a 26 | Capítulo I, sección III | **Redonda** | Versalitas (`SEGUNDA EMIGRACIÓN`) + numeral suelto + rótulos en cursiva |
| 27 a 29 | Capítulo I, sección IV | **Redonda** | Versalitas (`TERCERA EMIGRACIÓN`), numeral suelto y fecha en cursiva (27) |
| 30 a 32 | Capítulo I, sección V | **Redonda** | Versalitas (`LOS VALDENSES EN FLORIDA`) y numeral (30) |
| 33 a 42 | Capítulo II, sección I | **Redonda** | Apertura de capítulo y sección (33), rótulos en cursiva (33, 36, 38 y 40) |
| 43 a 52 y comienzo de 53 | Capítulo II, sección II | **Redonda** | Versalitas (`COLONIA VALDENSE`), numeral y fecha en redonda (43); rótulos en cursiva (43, 46 y 50) |
| 53 a 55 y comienzo de 56 | Capítulo II, sección III | **Redonda** | Versalitas (`PLANEANDO UNA SEGUNDA COLONIA VALDENSE`), numeral III y rótulo en cursiva (53) |
| 56 a 60 y comienzo de 61 | Capítulo II, sección IV | **Redonda** | Versalitas (`INTERVENCIÓN DEL "SUPERIOR GOBIERNO"`) y numeral IV (56); firmas en cursiva (59) |
| 61 a 65 | Capítulo II, sección V | **Redonda** | Versalitas (`COSMOPOLITA`), numeral V y rótulos en cursiva |
| 66 y comienzo de 67 | Capítulo II, sección VI | **Redonda** | Versalitas (`RIACHUELO`) y numeral VI |
| 67 a 71 | Capítulo II, sección VII | **Redonda** | Versalitas (`ARTILLEROS`), numeral VII y rótulo en cursiva (70) |
| 72 a 74 y comienzo de 75 | Capítulo II, sección VIII | **Redonda** | Versalitas (`TARARIRAS Y QUINTÓN`), numeral VIII y rótulos en cursiva |
| 75 a 84 y comienzo de 85 | Capítulo II, sección IX | **Redonda** | Versalitas (`OMBÚES DE LAVALLE`), numeral `IX.` y rótulos en cursiva |
| 85 y comienzo de 86 | Capítulo II, sección X | **Redonda** | Versalitas (`COLONIA MIGUELETE`) y numeral X |
| 86 a 88 y comienzo de 89 | Capítulo II, sección XI | **Redonda** | Versalitas (`C. MIGUELETE`), numeral `XI.` y rótulos en cursiva |
| 89 a 91 | Capítulo II, sección XII | **Redonda** | Versalitas (`SAN PEDRO`), numeral `XII.` y rótulo en cursiva |
| 92 y comienzo de 93 | En el Departamento de Soriano, sección I | **Redonda** | Encabezado propio, versalitas (`LOS PIONN'IERS`) y numeral I |
| 93 a 100 | En el Departamento de Soriano, sección II | **Redonda** | Versalitas (`FORMACIÓN DE LA COLONIA`), numeral `II.` y rótulos en cursiva |
| 101 a 110 | Rivera y Treinta y Tres, Río Negro y Paysandú | **Redonda** | Encabezados departamentales en negrita; numerales sueltos, títulos en versalitas y rótulos en cursiva |
| 110 a 114 | Rocha: Santa Teresa y Alférez | **Redonda** | Numerales sueltos, títulos en versalitas y rótulos en cursiva |
| 114 a 122 | Comisión Valdense de Colonización | **Redonda** | Encabezado en negrita (114) y rótulos en cursiva (115 y 116); decreto y citas en redonda |
| 123 a 143 | República Argentina: Santa Fe y Entre Ríos | **Redonda** | Encabezados de país y provincia en negrita; numerales en línea y rótulos en cursiva |
| 144 a 150 | Córdoba, Chaco, Santiago del Estero, La Pampa y Buenos Aires | **Redonda** | Encabezados provinciales en negrita; algunos topónimos en cursiva (145 y 146) |
| 151 a 154 | Cierre de Buenos Aires, Paraguay y Brasil | **Redonda** | Rótulo de Buenos Aires en cursiva (152); encabezados de países en negrita |
| 155 a 159 | Capítulo III, sección I: Religión y creencias | **Redonda** | Apertura de capítulo, numeral I y título de sección; fórmulas latinas en cursiva |
| 160 a 200 | Capítulo III, sección II: iglesias del Uruguay | **Redonda** | Numeral II y títulos en redonda; encabezados de iglesias en versalitas y rótulos en cursiva, con fechas en redonda |
| 201 a 227 | Capítulo III, sección II: continuación de las iglesias del Uruguay | **Redonda** | Encabezados en versalitas y rótulos en cursiva; citas de Nueva Helvecia en tipo menor, también redonda (223–225) |
| 228 a 250 | Capítulo III, sección II: iglesias de la R. Argentina | **Redonda** | Encabezado de país en negrita, iglesias en versalitas y rótulos de pastorados en cursiva, con fechas en redonda |
| 251 a 258 y comienzo de 259 | Capítulo III: cierre de Buenos Aires y sección III, organización de la Iglesia | **Redonda** | Numeral III y título de sección en renglones separados; nombres institucionales y rótulos en cursiva; cuadro de dos columnas (253) |
| 259 a 282 y comienzo de 283 | Capítulo IV: Instrucción | **Redonda** | Apertura de capítulo, títulos en versalitas y rótulos en cursiva; fechas de rótulos en redonda; título de la 267 en dos renglones |
| 283 a 312 | Capítulo V: Vida Cultural y Religiosa | **Redonda** | Apertura de capítulo; A) a F) en versalitas; rótulos y determinadas menciones de publicaciones en cursiva; citas en redonda |
| 313 a 337 | Capítulo VI: Vida Social | **Redonda** | Apertura de capítulo y sección; rótulos en cursiva |
| 338 a 360 | Capítulo VII: Actividades Industriales | **Redonda** | Apertura de capítulo y rótulos en cursiva; listas de nombres en redonda |
| 360 a 366 | Capítulo VIII: El Sentimiento de Patria | **Redonda** | Apertura de capítulo en varios renglones |
| 367 a 371 | Conclusión | **Cursiva** | Título en redonda; cifras y signos de referencias bíblicas en redonda |
| 373 | Título «indice», de fuente humana | **Pendiente de cotejo** | Centrado vertical y horizontal; no inferir la tipografía |
| 375 a 378 | Índice | **Redonda** | Entradas y números de página literales; determinados rótulos geográficos y de organización en cursiva |

Las aperturas de capítulo de las páginas 17 y 33 tienen títulos repartidos en varios renglones: se conserva cada uno según su jerarquía. Las secciones III (24) y IV (27) llevan fechas en cursiva, mientras que «(1858 - 1958)» de la sección II del Capítulo II (43) va en redonda. No se generaliza una tipografía a todas las fechas. En los rótulos de pastorado de la 164, la 167 y la 178 las fechas van en redonda; en la 180 también va en redonda «36», dentro de un rótulo en cursiva. En la 193 sólo la primera sílaba «Ar» de «Armand» está en cursiva; se registra esa variación en las notas de página.

Los rótulos de relato también se comprueban individualmente: «El Rev. Francisco Enrique Snow Pendleton» (26), «Contrato del 31 de julio de 1858» (36), «Señalamiento de las chacras» (38), «Llegada de los primeros colonos» (40), «La colonia primitiva» (43) y «Ensanche de la colonia» (46) están en cursiva.

### Cursivas en las listas de emigrantes (21, 24 y 25)

En las listas de nombres el original distingue el sexo del portador, y no el apellido ni la frecuencia: **los nombres de los varones van en cursiva y los de las mujeres en redonda**, en el mismo renglón y a veces en la misma frase. El criterio se comprobó por comparación de renglones contiguos con aumentos ×4 a ×14, y en las notas de esas páginas se deja constancia de los casos límite:

| Caso | Página | Criterio |
|---|---|---|
| *José Planchon* (cursiva) / Magdalena Barolin - Catalin (redonda) | 21 | mismo renglón, distinto sexo |
| *Juan Daniel Bertin* (cursiva) / María Catalina Vigne (redonda) | 24 | la `Vigne` reaparece en redonda siendo apellido de un varón en la línea siguiente |
| *Eliseo Bertinal* (cursiva) / Eliseo Bertinat (redonda) | 24 y 25 | mismo apellido, misma persona, con `l` en una página y `t` en la otra |
| Juan Daniel (redonda), como nombre de Pilot (hijo de *Eliseo Bertinal*) | 24 | nombre de varón, pero no de emigrante: va en redonda |
| Los rótulos de origen y el nombre del primer emigrante forman un solo tramo de cursiva | 21, 24, 25 | `Del Villar Pellice: Juan Daniel Bertin,` |

Cuando el nombre va en cursiva, la coma o el punto final también pertenecen al tramo de cursiva; en el markdown la puntuación queda fuera de los asteriscos y el criterio se anota.

### Fotos que abarcan más de una hoja

La fotografía de la página 20 incluye el pliegue y parte de la página 21. Antes de recortar hay que **acotar la caja de texto a la hoja que se transcribe** —en la 20, `x ≤ 965` sobre 1125 px—, porque si no la proyección de tinta mezcla renglones de las dos hojas y las coordenadas dejan de servir. Los fragmentos de la hoja vecina no se transcriben y se dejan anotados en las notas.

El caso se repite en la 25, donde el margen izquierdo (`x < 60` sobre 1125 px) deja ver el final de los renglones de la 26: se distinguen restos de letras, ninguno legible, y no se transcriben. Además esa foto está **torcida** —el margen izquierdo pasa de `x = 141` en la primera línea a `x = 181` en la última—, por lo que la caja útil se define como una franja con inclinación y los recortes se hacen por bandas. La 24, en cambio, tiene el margen de encuadernación ennegrecido sobre `x < 160`, y ese margen debe quedar **fuera** de la proyección de filas o las líneas salen unidas.

Cuando el número de página o el filete del pie caen en la zona en sombra del pie de la foto (páginas 24 y 25), hay que normalizar la imagen por el perfil de filas —dividir cada fila por su mediana— para separar la tinta del bandeado oscuro.

### Notas al pie

A partir de la 17 aparecen las primeras notas al pie del libro. Su forma es fija y hay que respetarla:

| Elemento | Forma impresa | Cómo se transcribe |
|---|---|---|
| Llamada | `(1)`, al tipo de la línea, con un espacio delante | tal cual, dentro del párrafo |
| Separador | raya corta y gruesa al margen izquierdo | `---` |
| Texto de la nota | uno o varios renglones o párrafos, en redonda, con su propio `(N)` | un párrafo por bloque, sin unificar entre sí |
| Cifras | `old style`: altura de x, con el `4` y el `9` descendidos | se copian tal cual, con el punto de millar del original (`1.080`, `22.458`) |

La numeración reinicia con (1) en la página 35, dentro del Capítulo II; no se continúa la serie del Capítulo I. La nota (3) de la página 39 ocupa gran parte de la hoja y contiene dos párrafos. En la 46, la referencia (12) va seguida de un párrafo con el rótulo *Nota:* en cursiva, que pertenece al impreso y se conserva antes del número de página.

Las notas (16) a (27) aparecen en la tanda 62 a 69 y 72 a 100. La apertura de «En el Departamento de Soriano» no reinicia su numeración: la nota (22) de la 92 sigue a la (21) de la 91. Se conservan las referencias internas tal como están impresas. La tanda 101 a 150 contiene las notas (28) a (39): la (30) comienza en la 111 y continúa en la 112 sin repetir el número. En la 139, la llamada del cuerpo dice «(1)» y la nota al pie «(37)»; se preservan ambas.

La página 151 contiene las notas (40) y (41); la (41) continúa al pie de la 152 sin repetir su número. El Capítulo III reinicia con (1) y (2) en la 155. En la 157 la llamada del cuerpo dice «(1)» y la nota al pie «(3)»: se conserva la discrepancia. Las notas siguientes llegan hasta (18) en la 199; la (17) continúa de la 198 a la 199 sin repetir el número. Las cantidades de familias (51), (31) y (15) de la 186 no son llamadas al pie. En la tanda 201–250 se conservan íntegramente la nota (19) en la 211, la (20) en la 237 y la larga lista de la (21) en la 238. Esta última pasa de 1944 a 1946 y alterna «Negrin» y «Negrín»; no se completa ni uniforma la lista. La llamada (21) sigue al punto de «Dios.».

La tanda 251–300 conserva las notas (22) y (23) en 252 y 258. El Capítulo IV reinicia con (1) en la 261 y llega hasta (6) en la 283, antes de abrir el Capítulo V; este último reinicia con (1) en la 285. La nota (5) de la 282 conserva íntegra la cita y sus erratas. No se automatiza ni se armoniza la numeración. El Capítulo VI conserva (1) en la 317 y (2) en la 334. El VII reinicia con (1) en la 340, continúa (2) en la 341, (3) en la 342, (4) y (5) en la 343 y (6) en la 356.

El `---` de la nota al pie no es un filete de cierre de página: la hoja lleva filete al pie **y** número de página debajo. Las notas de cada archivo aclaran cuál de los dos es cuál.

## Convenciones de transcripción

Estas reglas se aplican a toda página nueva:

| Aspecto | Criterio |
|---|---|
| Saltos de línea y particiones | Se unifican en párrafos fluidos. Los guiones de fin de renglón (`nom-bró`, `con-memorativos`) se resuelven: la palabra va entera. |
| Palabras partidas por salto de página | Se conservan con guion y con nota de continuidad (`disposi-` → `ción.` en la página siguiente). |
| Tipografía | Se preserva la del original: cursiva con `*...*` en la presentación (5), la Introducción (7–10) y la Conclusión (367–371), con sus excepciones en redonda; cuerpo en redonda en las demás secciones, salvo rótulos y menciones efectivamente en cursiva. Los títulos van como `#`. **Revisar el tipo de letra de cada página antes de transcribir.** |
| Cursiva dentro de redonda | `LUX LUCET IN TENEBRIS` y la firma van en redonda, como en el original. |
| Títulos de varios renglones | Se conserva cada renglón impreso como una línea propia; el nivel de encabezado (`#`, `##`, línea suelta) sigue la jerarquía del libro, no el peso de la letra. El criterio se registra en las notas. |
| Versalitas | Se transcriben en mayúsculas, sin marcas que indiquen el cuerpo: el carácter menor se anota, no se simula. |
| Cursiva en listas de nombres | En las listas de emigrantes (21, 24, 25) los **nombres de varones van en cursiva y los de mujeres en redonda**, aunque compartan apellido. La puntuación que cierra el nombre queda fuera de los asteriscos y el criterio se anota. |
| Notas al pie | Llamada, separador y texto se transcriben en su lugar, antes del número de página. Ver la tabla de la sección anterior. |
| Comillas y puntos | Se respeta la posición del punto respecto de la comilla de cierre (`futuro".`), aunque no sea la norma actual. |
| Espacios | Los espacios múltiples de la composición se normalizan a uno solo. |
| Rayas y comas | Se conservan tal como están impresas, incluso con espaciado irregular. |
| Anomalías del original | **No se corrigen.** Se transcriben y se anotan. |
| Láminas de imágenes | Se excluyen de toda transcripción, incluido su texto impreso; se conservan para el libro final y se registran en «Láminas reservadas». |
| Ornamentos | Los grupos de tres asteriscos se escapan (`\*`) para evitar filetes de markdown y mantienen su disposición: normalmente uno arriba y dos abajo; en la 366, dos arriba y uno abajo. |
| Cifras dentro de cursiva | Conservar en redonda los números de fechas (5, 305, 306), cifras de la Conclusión y cifras, barra y paréntesis de sus referencias bíblicas; no aplicar cursiva a todo el párrafo indiscriminadamente. |
| Índice | Transcribir literalmente cada entrada y número de página, aunque difieran del cuerpo; usar tablas para las columnas y registrar la sustitución de los puntos guía por esa estructura. |
| Páginas en blanco y título de fuente humana | Aplicar las excepciones del inventario: los cinco blancos no generan markdown; la 373 sí tiene archivo, con fuente y limitaciones explícitas. |
| Marcas de archivo | Solo van en las notas, nunca dentro del texto, para no contaminar la transcripción. |

## Estructura de cada archivo

1. Título (si la página lo tiene) como encabezado markdown, renglón por renglón si ocupa varios.
2. Cuerpo de la página, en párrafos y con la tipografía del original.
3. Notas al pie, si las hay: separador `---` y texto de la nota.
4. Número de página impreso (`— 7 —`) cuando existe. Las páginas 1, 3 y 10 no muestran folio; en la 373 de fuente humana tampoco se añade uno no confirmado.
5. Filete de cierre, si la página lo tiene (así termina el Preámbulo, en la 16).
6. Línea de separación `---`.
7. Sección `### Notas de transcripción` con:
   - el nombre del JPEG de origen, o la descripción del propietario y su fecha en la excepción de la 373,
   - si la página arranca o cierra a mitad de frase o palabra,
   - las grafías anómalas conservadas,
   - las manchas de tinta, los daños de la fotografía y las zonas de lectura dudosa,
   - las firmas de pliego y otras marcas de imprenta que **no** se transcribieron,
   - los fragmentos del folio verso que transparentan y que **no** se transcribieron.

## Método de verificación

Antes de comenzar, separar las páginas de texto de las láminas conforme al registro de exclusiones y consultar las páginas en blanco documentadas. Los pasos siguientes se aplican únicamente a fotografías de páginas de texto. La 373 se registra según su fuente humana; no atribuirle lectura fotográfica ni ampliaciones inexistentes.

El libro está impreso en letra inclinada y pequeña, con manchas de tinta, fotos torcidas y folio verso transparente. Por eso la transcripción no se hace de una sola pasada:

1. Lectura completa de la imagen a resolución nativa (las fotos van de 1000 × 1500 a 1200 × 1600, según el tranche).
2. Recortes ampliados ×3 con aumento de contraste sobre cada banda de texto, para fijar la puntuación y las palabras partidas.
3. Ampliación ×5 a ×8 sobre palabras concretas cuya grafía o acento no queda fijado.
4. Cotejo final entre la transcripción y los recortes.

Para no depender de la lectura a ojo, la segmentación de renglones se hace por proyección de la tinta: se calcula el número de píxeles oscuros por fila y se agrupan las filas contiguas que superen un mínimo. Eso da la coordenada exacta de cada renglón y permite recortar una línea sola, que es lo que hace falta en el paso 3. En las fotos con margen ennegrecido por la encuadernación hay que excluir ese margen del cálculo o las filas salen unidas.

Si la fotografía viene rotada, se corrige la orientación antes de cualquier lectura (así se hizo con la página 16, que estaba girada 90°).

Toda palabra que no se lee con certeza se anota como dudosa en lugar de completarse por contexto.

### Por qué el paso 3 no es opcional

En la primera pasada de las páginas 11 a 15, la lectura completa de la imagen dio **cuatro errores que los pasos 2 y 3 detectaron**:

| Primera lectura | Lectura correcta | Causa |
|---|---|---|
| «un compilás de espera» | **compás** | ligadura de la `p` con la `a` |
| «resonaron tron-grandemente» | **resonaron tremendamente** | se tomó la partición `resona-`/`ron` como si fuera parte de otra palabra |
| «…peligrosas para el ramping oficialista» | **oficialismo** | la palabra va cortada `oficia-` / `lismo` y atraviesa el renglón |
| «institúido» (sin tilde) | **institúído** | la tilde archaica sobre la `u` se perdía a ese tamaño |

Todos están anotados en las notas de sus respectivas páginas. La regla que se sigue desde entonces: **ninguna palabra se da por buena sin haberla visto ampliada**, en especial nombres propios, palabras con partición de renglón y toda palabra de doble `l` o de ortografía arcaica (`fué`, `vió`, `dió`, `ballarán`, `heróico`).

El mismo criterio se aplicó en las páginas 17 a 20, donde seis lecturas dependían de la ampliación:

| Primera lectura | Lectura correcta | Causa |
|---|---|---|
| «Würtemberg» → dudoso el diéresis | **Würtemberg** | a ×3 el diéresis se ve; a ×8 se confirma que hay `r` detrás de la `W` |
| «Meil-» / «le,» → dos fragmentos sueltos | **Meille** | la palabra va partida entre dos renglones; ambas mitades ampliadas ×9 |
| «Santa Fe» (por contexto) | **Santa Fé** | la tilde sobre la `é` no se distinguía a ×3 |
| «Bartolome» | **Bartolomé** | la tilde final se perdía a ×3; a ×9 queda fijada |
| «Presentó se» | **Presentóse** | la palabra va junta, con la `ó` pegada a la `s` |
| «público.» | **público. .** | un punto suelto más allá del final, con el mismo cuerpo de tinta; a ×11 se ve que no es una mancha |
| «1.080» / «22.458» → separador dudoso | **1.080** y **22.458** | el punto de millar se confunde con el ruido del papel; a ×7 se ve que es un punto y no una mancha |

Y en las páginas 21 a 25, donde nueve lecturas dependían de la ampliación o de un procesamiento de la imagen:

| Primera lectura | Lectura correcta | Causa |
|---|---|---|
| «suibiografiado» → palabra inexistente | **suibiografiado** | la `b` y la `i` de «biografiado» están fundidas en un solo trazo; a ×10 se ve que el espacio sí está |
| «$ 30,00» → coma decimal | **$ 30.00** | el original usa punto como separador decimal; a ×9 se descarta la coma |
| «Pantaléón Pérez» → dudoso el acento | **Pantaléón Pérez** | el acento va en la segunda vocal, donde corresponde *Pantaleón*; verificado a ×9 |
| «Boletín» / «Boletin» → indistinto | **cada caso según la página** | con tilde en las notas (1) de la 17, (5) de la 22 y (6) de la 23; **sin** tilde solo en la (2) de la 18 |
| «Santa Fé» (por coherencia con la 19) | **Santa Fe** | en la 24 no hay tinta sobre la `e`; el acento sí aparece en «fué» de la misma línea, así que no es falta de resolución |
| «Davit» / «Davyg» | **Pablo Davyt** | a ×30 la cuarta letra baja de la línea base como la `y` de «Bleyuat» y la quinta tiene el remate de la `t`, no el punto de la `i` |
| «Bertina» → dudosa la última letra | **Eliseo Bertinal** | a ×14 la última letra no tiene el travesaño de la `t` interna; es la misma `l` de «Lautaret» |
| «Rostam» → reguero de tinta | **Tomás Rostan** | un trazo diagonal atraviesa la `n` final; con filtro de paso alto la `n` queda despejada a ×16 |
| «Modena» → tilde dudosa | **Módena** | el acento en la `ó` es inconfundible a ×14; es grafía spanishizada de *Modena* |

### Revisión de las páginas 26 a 48

Se cotejaron las fotografías completas y bandas de texto ampliadas ×3 con contraste, y se revisaron a ×6 los detalles pequeños. En las imágenes inclinadas conviene calcular la proyección en franjas locales o corregir la inclinación; una proyección sobre toda la caja puede unir renglones distintos.

| Lectura conservada | Página | Comprobación |
|---|---|---|
| `Chambeaud` / `Ayassot` | 28 | recortes ×6; las grafías se distinguen, pero se deja el cotejo de estos nombres en papel pendiente |
| Tres trazos de comillas de apertura | 31 y 43 | se representan con una comilla doble y una simple consecutivas (`"'`); el detalle ×6 permite contar los tres trazos |
| `Concluímos` | 39 | se distingue la tilde en el detalle ×6 |
| Falta de comillas de cierre en `"Plaza Doroteo García.` | 39 | se conserva el cierre incompleto de la nota (4) |
| `Pág. 233` | 40 | detalle ×6; última cifra gastada, pendiente de confirmar en papel |
| `precipio` | 42 | detalle ×6 confirma la ausencia de «ci»; no se corrige |
| `cononia` | 45 | detalle ×6 confirma la segunda «n»; no se corrige |

Las erratas «fraticidas» (34), «llamada Majestas» (36), «tuvieron que ser traslados» (40), «nuestro ranchos» (43), las grafías históricas y las inconsistencias de puntuación se preservan en el cuerpo y se explican en las notas individuales. Las anotaciones manuscritas y marcas ajenas al texto impreso quedan descritas en notas, sin incorporarlas al cuerpo.

### Revisión de las páginas 49 a 61

Se cotejaron las fotografías completas, tres bandas superpuestas ampliadas ×3 con contraste por página y recortes de detalle ×6 para las lecturas pequeñas. La proyección de tinta se calculó por franjas locales para evitar mezclar renglones inclinados. Las dos láminas se clasificaron y se excluyeron de la transcripción.

| Lectura conservada | Página | Comprobación |
|---|---|---|
| `cina-cina` | 49 | detalle ×6: n en ambas partes, sin tilde de ñ |
| Trazo antes de `doscientos` | 52 | detalle ×6: marca aislada sin cierre; no se agrega paréntesis al texto |
| `exhoneración` | 54 | detalle ×6 confirma la h; no se corrige |
| Coma final después de `español` | 57 | detalle ×6 confirma la puntuación del inciso b) |
| `una fondo` | 58 | bandas ampliadas confirman la errata; no se corrige |
| `V. E..` | 59 | detalle ×6 confirma los dos puntos consecutivos |
| `Comisión le Nueva Helvecia` | 60 | detalle ×6: letra semejante a l; se conserva y queda pendiente el cotejo en papel |
| `Voelker` / `Schwyn` | 61 | detalle ×6: se resuelve el corte de renglón del primero y se conserva la y del segundo |

Las notas (14) y (15) del Capítulo II quedan en las páginas 50 y 53. La carta que abre en la 57 continúa en la 58 y cierra con la firma en la 59; las comillas de apertura repetidas y sus irregularidades se preservan. Las grafías sin tilde «Ugon», «como» y «donde», las mayúsculas y las construcciones anómalas se explican en las notas individuales.

### Revisión de las páginas 62 a 69 y 72 a 100

Las 37 páginas nuevas se cotejaron con las fotografías completas, tres bandas superpuestas ×3 con contraste por página, recortes de detalle ×6 y una comparación final con los markdown. Se mantuvieron las dos láminas excluidas. En esa tanda no se encontró fuente para las páginas 70 y 71; se incorporaron en la revisión siguiente, descrita abajo.

| Lectura conservada | Página | Comprobación |
|---|---|---|
| `al provincia` / `alboratador` | 62 / 63 | detalles ×6 confirman las erratas |
| `lo compraron` / `junción` / `quizo` | 67 / 68 / 69 | detalles ×6; no se corrigen las construcciones ni las grafías |
| `contínuas` | 77 y 80 | tilde conservada según las bandas y detalles |
| `5 artículo` y puntuación de `etc.` | 81 | detalle ×6 confirma el singular y los puntos a ambos lados del cierre de comillas; el trazo alto previo queda anotado |
| Coma antes de `El total` | 86 | marca visible en detalle ×6, conservada con cotejo en papel pendiente |
| `Elíseo Bertinat` | 87 | detalle ×6 fija la tilde sobre la i |
| Signo tras `lanar` | 89 | dos trazos altos antes de la coma; se conservan como comilla doble y se deja pendiente su naturaleza en papel |
| `LOS PIONN'IERS` | 92 | signo entre N e I conservado y anotado para cotejo en papel |
| `Besson` | 95 | detalle ×6 confirma las dos s |
| `Caîrus` / `Caïrus` | 96 / 97 | se conserva la diferencia entre el signo de la 96 y la diéresis de la 97 |
| `C. Cosmopolitá` / `Viglielm-Rostan` | 97 | recortes ×6 fijan la tilde final del topónimo y las letras del apellido |
| `85 hectáreas` | 100 | detalle ×6 confirma la cifra; no se armoniza con las 75 citadas en el mismo párrafo |

Las notas (16) a (27), las firmas de pliego omitidas y los apellidos con guiones al final de renglón quedan explicados en las notas individuales. No se corrigen la puntuación incompleta de «Rincón del Sauce» (69), el paréntesis de «Campana» (96), ni las fechas y cantidades incongruentes del impreso.

### Revisión de las páginas 70 y 71

Ambas páginas se cotejaron con las fotografías completas, tres bandas superpuestas ×3 con contraste por página y detalles ×6 de nombres, acentos, cifras y signos, seguidos de la comparación final con los markdown. Completan «Artilleros»: la 70 continúa «Rincón del Sauce» y abre el rótulo en cursiva «Progreso de la colonia.»; la 71 lo continúa y cierra la sección con párrafo completo. La 72 abre «Tarariras y Quintón» sin oración ni palabra pendiente.

Se conservan «en el 1876», «ofrecióles», «inapto», «construído», «Campo Platero», «Paso de Tago», «Medici y Lacaze» y la coma anterior a «(capital del departamento)». La tinta dañada de «ofrecióles» y «fi-» / «nes» en la 70, el punto alto después de «une» y la o incompleta de «lo» en la 71 quedan anotados para cotejo en papel. No aparecen nuevas notas al pie.

Las dos nuevas láminas entre 64 y 65 se clasificaron como material gráfico reservado, sin transcribir sus leyendas ni crear markdown. Se mantiene la continuidad «en años» (64) / «pasados» (65), saltando ambas láminas. Los cuatro originales de láminas se conservan sin modificaciones.

### Revisión de las páginas 101 a 150

Las 50 páginas nuevas se cotejaron con las fotografías completas, tres bandas superpuestas ×3 con contraste por página y detalles ×6, seguidos de la comparación final con los markdown. La tinta más oscura del margen derecho no se representa como negrita. Se conservan las erratas, los nombres, las fechas, las cifras y la puntuación del impreso.

| Lectura conservada | Página | Comprobación |
|---|---|---|
| `Dapartmento` | 101 | detalle ×6 confirma la errata del encabezado |
| `Andréón` | 106 | acentos conservados según el detalle; cotejo en papel pendiente |
| `no opta` / `camión. parte` | 112 / 113 | no se corrigen la palabra ni el punto |
| `acticidad` / `En su mayor partes` | 118 | erratas conservadas según ampliaciones |
| `Eofelio de Dovitis` | 120 | lectura del corte `Eo-` / `felio`; pendiente confirmar en papel |
| `1887` / `Beck y Erzog` | 123 | se preservan la fecha y el apellido, sin armonizar con la 124 |
| `Ortíz` / `Ortiz` | 126 | se conserva la diferencia de acento entre ambas menciones |
| `ofinas` / `exhorbitantes` / `se llamada` | 128 / 133 / 136 | erratas conservadas |
| `Pavarín` / `Pavarin` | 131, 135 / 132, 134, 137 | se conserva el acento de cada aparición |
| `Coïsson` / `Vinçon` | 137 | diéresis y cedilla cotejadas en detalle |
| Llamada `(1)` y nota `(37)` | 139 | discrepancia conservada, sin renumeración |
| `cloclos` / `Teóflio` | 140 / 142 | grafías conservadas según detalles |
| `Ternis` / `La Helvecia` / `Artalejos` | 149 / 150 | nombres conservados según detalles |

Las cuatro nuevas láminas se excluyeron del OCR y de la transcripción, sin copiar sus leyendas ni crear markdown. Se conservan sus imágenes originales. El segundo archivo del par 112–113 figura actualmente como `imagen entre 112 y 113 2.jpeg`; al comenzar la tanda se llamaba `imagen entre 112 y 133 2.jpeg`. El cambio de nombre ocurrió durante el trabajo y el contenido de la imagen es idéntico. El registro usa su nombre actual.

La nota (30) continúa de la 111 a la 112. Se comprobó «y» / «el señor Humberto Gonnet» (112–113) y «establecién-» / «dose» (128–129), saltando las láminas. La 150 conserva el corte «veci-»; su continuación «nos» quedó cotejada al incorporar la 151. La verificación de esta tanda contra el libro en papel permanece pendiente.

### Revisión de las páginas 151 a 200

Las 50 páginas nuevas se cotejaron con las fotografías completas, tres bandas superpuestas ampliadas ×3 con contraste por página y detalles ×6, seguidos de la comparación final con los markdown. Se preservan la ortografía, las incongruencias, los nombres, los llamados de notas y la puntuación del impreso. La tinta irregular del cuerpo no se interpreta como negrita.

| Lectura conservada | Página | Comprobación |
|---|---|---|
| `heróica` / `Jacinto Aráuz` | 151 | acentos conservados, sin armonizar el apellido con la 149 |
| Llamada `(1)` y nota `(3)` | 157 | discrepancia comprobada, sin renumerar |
| `tempo` / `Tempo` | 160 / 196 | ausencia de l conservada según ampliaciones |
| `Armand Hugon` / `Coïsson` | 163 | apellido y diéresis conservados |
| `ríoplatense` / `E. D.` | 168 / 169 | acento y trazo débil de la abreviatura pendientes de cotejo en papel |
| `fué relegados` / `Ernestro Tron` | 169 / 171 | erratas conservadas |
| `C. Iris. el` / `casa del don Esteban Cesan` | 174 / 175 | punto, minúscula y concordancia conservados |
| `1861` / `oportuna ampliaciones` | 176 / 177 | fecha y concordancia conservadas, sin corregir por contexto |
| `reune` / `acoje` | 179 / 180 | ausencia de tilde y j comprobadas |
| `Rocchi-Lanoir` / `Isidoro De Benedetti` | 188 | nombres cotejados en detalle |
| `Dominios` / `B. Carámbula` / `en las estancia` | 190 / 191 / 192 | grafías y concordancia conservadas |
| `al pastor jubilado` / `Díaz, (14). al` | 193 | palabra y puntuación conservadas |
| `varias dependencia` / `en cada visitas` | 196 / 197 | concordancias conservadas |
| `Pablo Davit` / `prebisterio` | 198 / 200 | apellido y errata conservados sin armonizar con otras apariciones |

Las cuatro láminas nuevas entre 176–177 y 192–193 quedaron registradas como material gráfico para el libro final, sin OCR, transcripción de leyendas ni markdown. Se conservan los doce JPEG originales de láminas sin modificaciones. Las firmas de pliego «11», «12» y «13» de las páginas 161, 177 y 193 se excluyen del cuerpo y se anotan.

Las páginas 164 y 165 completan la continuidad 163–166: el rótulo de la 164 sigue al párrafo completo de la 163, «actividad» continúa con «frente a la Iglesia» en la 165, y la 166 retoma el relato tras el cierre de la 165. La incorporación de la 188 cierra el salto restante: «se» / «reintegraba» (187–188) y «el 27» / «de noviembre de 1927» (188–189). Se cotejaron además las continuaciones de notas (41) entre 151–152 y (17) entre 198–199, sin duplicar sus números, y el relato a través de las láminas de 176–177 y 192–193. La 200 termina en «acariciado», sin punto; la fotografía 201, incorporada en la tanda siguiente, confirma la continuación «de que la Iglesia de Ombúes de Lavalle…». El cotejo en papel de toda esta tanda permanece pendiente.

### Revisión de las páginas 201 a 250

Las 50 páginas nuevas, incluida la 214, se cotejaron con las fotografías completas, tres bandas superpuestas ampliadas ×3 con contraste por página, recortes de detalle ×6 y comparación final de los markdown con las fotografías. Se preservan la tipografía, las notas al pie, los nombres, las cifras y las anomalías del impreso. La tinta irregular del cuerpo y las marcas marginales no se convierten en negrita ni en letras añadidas.

| Lectura conservada | Página | Comprobación |
|---|---|---|
| `Migueleta Abajo` / `Miguelete Abajo` | 201 | dos formas en un mismo párrafo, sin uniformar |
| `la primer Capilla` / `Drabble,-` | 202 / 203 | concordancia y puntuación conservadas |
| `su- ministerio` / `y el Dolores` | 205 / 206 | guion suelto y construcción conservados |
| `atendió la congregación al Candidato` | 207 | «al» conservado |
| `par satisfacer` | 214 | no se añade la a de «para» |
| `23 de abril de 1942` / `Informe de 1921` | 216 | fechas conservadas sin armonizar con el relato |
| `Coloria Balnearia Valdense` | 219 | errata conservada |
| `16 de setiembre de 1957` | 220 | fecha conservada aunque el relato siguiente vuelve a 1948 |
| `Iglecia` / `bi-mensual` | 221 | errata y guion propio conservados |
| `4os.` / `E. C. E. M.` | 222 | letras del ordinal al renglón y espacios entre iniciales conservados |
| `Francisco D. Arancho` / `Francisco Wüllich` | 223 / 224 | apellidos cotejados en ampliaciones; diéresis conservada |
| `Cincuentenario en 1944` / `21 de mayo de 1887` | 225 / 226 | fechas literales; el 1 del día en la 226 tiene impresión incompleta |
| `Bänziger` / `Mühlemann` / `Frauenverein` | 226 / 227 | diéresis conservadas y partición interna resuelta |
| `Weihmüller` / `C. Belgrano` | 228 | apellido cotejado; la l cortada de Belgrano queda anotada para revisar en papel |
| `El 2 de marzo` | 229 | conservado aunque el párrafo menciona una visita en mayo |
| `En sus ausencia` / `con culto dominicales` | 232 / 233 | concordancias conservadas |
| `hizo sentir a la congregación de necesidad` / `le precedieron de algunos meses` | 234 | construcciones conservadas |
| `1934-1949` / `En el otoño 1950` | 235 / 236 | no se armonizan las fechas ni se añade «de» |
| `Salvageot` / `Negrin` y `Negrín` | 236–237 / 238 | grafías según cada aparición |
| `eclasiásticas` / `eclasiásticamente` | 239 / 240 | erratas conservadas |
| `librada` / `eu 24 de diciembre` | 243 / 245 | lecturas comprobadas en detalle, sin sustituir palabras |
| `Alice Breeze` / `Ibetty Jourdan` / `C. Artalejos` | 246 / 247 | nombres cotejados en ampliaciones |
| `Caïrus` / `Elio Maggi Pasquet` | 248 | diéresis y ausencia de guion conservadas |
| `Commendatore` / `en ciudad de La Paz` | 249 | doble m, redonda y ausencia de artículo conservadas |

Se conservan las comillas abiertas y las discrepancias de puntuación de las citas de Paysandú y Nueva Helvecia (215, 223–225), así como el paréntesis sin cierre antes de «Chaco» (239). Las citas de Nueva Helvecia usan tipo menor en redonda, no cursiva. Los rótulos de pastorados se cotejan individualmente y sus fechas permanecen en redonda.

Las dos láminas entre 240 y 241 se registran con sus nombres actuales, incluida la corrección de la primera, y se reservan para el libro final sin OCR, leyendas ni markdown. Se conserva la continuidad «rea-» / «lizó» saltando ambas. Las firmas de pliego «14», «15» y «16» de las páginas 209, 225 y 241 se excluyen del cuerpo y se anotan. Los 258 JPEG originales de esta tanda y del fondo anterior se conservan sin modificaciones de contenido.

Se cotejaron los enlaces de toda la tanda, incluida «acariciado» / «de que» (200–201) y «Iglesia» / «Evangélica» (213–214). La 214 cierra con párrafo completo y la 215 continúa Paysandú. La 250 cierra con párrafo completo dentro de la sección de Buenos Aires; la 251, incorporada en la tanda siguiente, cierra esa sección. La verificación de estas páginas contra el libro en papel permanece pendiente.

### Revisión de las páginas 251 a 300

Las 50 páginas se cotejaron con las fotografías completas, tres bandas superpuestas ampliadas ×3 con contraste por página, recortes de palabras y signos ×6 y comparación final de los markdown guardados con las fotografías. Se conservan las cursivas, las notas al pie, los folios, las erratas y los cortes entre páginas. El cuadro de la 253 se representa con dos columnas; sus encabezados van en cursiva y conserva tres veces «elije». Las firmas de pliego «17», «18» y «19» de 257, 273 y 289 se excluyen del cuerpo y se registran en las notas.

| Lectura conservada | Página | Comprobación |
|---|---|---|
| `las Iglesias Valdenses de la Conferencia denominada` | 252 | construcción incompleta de la nota (22), sin añadir texto |
| `Organos` / `elije` | 253 | ausencia de tilde y j conservadas en el cuadro |
| `Lantaret` / `Radiotrasmisiones` | 254 / 256 | grafías literales; no se uniforman los nombres ni se añade n |
| `distintas- denominaciones` | 257 | guion anómalo confirmado en detalle |
| `Angroña` / `Enrique Felix` | 260 | nombres según la fuente corregida `pagina 260.jpeg` |
| `subsanarla toda costa` | 261 | no se añade la a ausente |
| `Muston` / `Allío` / `andamiento` | 264–266 | nombres y palabra conservados; tilde de Allío confirmada |
| `Williman` / `Gratwolt` | 266–267 | nombres sin normalizar |
| `canonnier'` / `canonnier` / `Stëve` | 268 | apóstrofo en la primera aparición y diéresis conservados; naturaleza del apóstrofo a confirmar en papel |
| `Jerah Jourdan` | 270 | pequeña marca elevada entre e y r, de naturaleza dudosa; confirmar en papel |
| `Elena Jourdan Pons` / `Fanetti` | 271 | apellido sin guion en esta aparición y grafía literal |
| `heróicos` / `Su primer maestra` / `Epoca heróica` | 272 / 274 | acentos y concordancia conservados |
| `lecciones modelos` / `agrícola comercial` | 275–276 | plural y ausencia de conjunción o guion conservados |
| `Con el año 1890` / `la primer Comisión` | 279 | redacción literal |
| `Andreon` / `la primer médica` | 281 | sin tilde y concordancia conservadas |
| `uno de las actos` / `espectativa` / `a mucho núcleos` | 282 | erratas de la cita conservadas |
| `Stazeski` / `a una 2.300 niños` | 286 / 288 | apellido y errata confirmados en detalle |
| `infancia . hasta` | 288 | punto aislado conservado; confirmar en papel si es puntuación o marca |
| `exíguos` / `oir` / `Sud Americana` | 290–292 | tilde, ausencia de tilde y separación conservadas |
| `La Jeune Ménagère` / `Muchas colonos` | 293 / 296 | acentos de la publicación y errata confirmados |
| `alguns voces` / `disertacionss` / `trasmitida` | 297–298 | erratas y ausencia de n conservadas |
| `Angel Budetti` / `Häberli` | 300 | ausencia de tilde y diéresis conservadas |

Las cuatro láminas entre 256 y 257, una fotográfica y tres mapas, quedan registradas por nombre y orden, sin transcribir leyendas ni producir markdown. Sus originales permanecen intactos. Se cotejó «algunos» / «fondos» (256–257) saltando las cuatro. También se comprobaron «Confe-» / «rencia» (252–253), «Gene-» / «ral» (258–259), «antepasa-» / «dos» (259–260), «pri-» / «maria» (261–262), «funcio-» / «na» (263–264), «te-» / «nía» (268–269), «po-» / «dían» (274–275), «oportu-» / «nidad» (275–276), «aprove-» / «chó» (276–277), «Departamen-» / «tal» (278–279), «des-» / «de» (280–281), «con-» / «serva» (283–284), «man-» / «tuvo» (284–285), «ma-» / «duro» (289–290), «im-» / «partía» (291–292), «especial-» / «mente» (294–295) y «favore-» / «ciendo» (297–298), además de los enlaces de oración. La cita musical de la 294 cierra en la 295; el reglamento de 299–300 no muestra cierre de comillas y no se añade. La 300 termina con «Rodolfo Reich,» y la fotografía 301 incorporada confirma la continuación «lo contrataron». El cotejo en papel permanece pendiente.

### Revisión de los preliminares y las páginas 301 a 378

Se transcribieron **78 fotografías de texto**: 1, 3, 5, 301–371 y 375–378. En cada una se realizó lectura completa, cotejo con tres bandas ampliadas ×3 con contraste y recortes de detalle ×6. Las correcciones de esta revisión quedaron incorporadas al texto y las notas. Se añadió además `Pagina 373.md` con la descripción del propietario como fuente, sin atribuirle cotejo fotográfico. Las cinco páginas en blanco y la nueva lámina entre 4 y 5 quedan documentadas; no generan transcripciones.

| Lectura o rasgo conservado | Página | Criterio de cotejo |
|---|---|---|
| `SUDAMERICANAS` / `LIBRERIA PASTOR MIGUEL MOREL` | 1 y 3 | Títulos y grafías de los preliminares; no añadir tildes ausentes |
| `quién` / `Que el contenido … puedan` | 5 | Acento e incongruencia de concordancia del impreso; firma y cifras de fecha en redonda |
| `Lausarot` / `eclasiástica` / `controlorearlos` | 301 / 304 / 305 | Apellido y erratas cotejados en detalle |
| `2 de marzo de` / `16 de marzo` / `15 de Marzo de` | 305–306 | Palabras en cursiva y cifras en redonda |
| `y y` / `¡Juventud!` | 309 / 311 | Duplicación literal; título de la publicación en redonda en esta mención |
| `Las dechaladas` / `Las deschaladas` | 315 | Variación entre el texto y el rótulo, sin armonizar |
| `purtâ la cavanâ` / `fêsta côrinoira` / `züpa` | 317 | Expresiones en patois y diacríticos cotejados; confirmar contra el papel |
| `Congreo` / `ese clase` | 323 / 312 | Erratas conservadas sin completar letras o corregir concordancia |
| `Ana M.` / `Ana D.` Armand Ugon | 325 / 353 | Iniciales distintas en el impreso |
| `Coïson` / `Allío` / `ahinco` | 336 | Diéresis conservada; `Allío` lleva tilde y `ahinco` aparece sin ella |
| `Mc. Cormik` / `colonos valdensesing` / `volúmen` | 343–344 | Grafías conservadas según la fotografía |
| `Pigüe` / `Wooder C. Talmon` / `29.23%` | 352 / 359 | Topónimo, nombre y porcentaje literales; no recalcular cifras |
| `Joaquín Suáre` | 360 | Apellido sin z final en el impreso |
| `Valdense. desde` / `parlerías` | 367 | Puntuación y palabra verificadas en ampliación |
| `(Is. 52/7)` / `(1 Reyes 21/3)` | 367 / 371 | Cifras, barra y paréntesis en redonda; nombre bíblico en cursiva |
| `idiosincracia` / `instruído` | 370 | Grafías del original, sin normalizar |
| `emancipación` / `Estanzuela` / `I.— Nueva Valdense` | 375–376 | Entradas del índice literales, aunque difieran del cuerpo o su numeración |

Las firmas de pliego 20 (305), 21 (321), 22 (337), 23 (353) y 24 (369) se registran en notas, fuera del texto. Se excluyen anotaciones manuscritas y marcas ajenas a la impresión, indicándolas en las notas individuales. El escudo de la portada 3 se conserva como elemento gráfico para la composición; su diminuta leyenda permanece sin fijar, pendiente de lectura en papel.

Se comprobaron las continuidades de oración, desde «Rodolfo Reich,» / «lo contrataron» (300–301), y los cortes «for-» / «mar» (301–302), «gas-» / «tos» (302–303), «bas-» / «quet-ball» (303–304), «jóve-» / «nes» (320–321), «des-» / «empeñarse» (327–328), «dedica-» / «ción» (336–337), «domés-» / «ticos» (338–339), «gestionan-» / «do» (342–343), «car-» / «pintería» (347–348), «confian-» / «za» (352–353), «autoriza-» / «ción» (357–358), «naci-» / «miento» (362–363), «ciuda-» / «danos» (365–366) y «predi-» / «caran» (367–368). La cita iniciada en la 340 continúa en la 341. La Conclusión termina en la 371; los blancos 372 y 374 y el título 373 separan el cuerpo del índice 375–378. El índice conserva sus números impresos y no sirve para corregir títulos, nombres o paginación del cuerpo. El cotejo en papel de esta tanda sigue pendiente.

### Verificación contra el libro impreso

Además del cotejo con las fotografías, **las páginas 7 a 178 fueron verificadas contra el libro en papel**, página a página, por el propietario del proyecto, que realizó la lectura con el visor de cotejo y dejó cada página marcada como «Revisada» en `visor/datos/revision.json`: ese registro marca de la 7 a la 178 —la 156 quedó sin marca— y conserva la 179 como última página abierta. Ninguna de esas páginas quedó con observaciones. Las páginas 1, 3, 5, 179 a 371 y 375 a 378 aún no tienen ese cotejo. La 373 requiere comprobar la grafía y tipografía del único título descrito por el propietario. Esa verificación es la que cierra cada página: donde una lectura quedó anotada como dudosa por la imagen pero el papel la resuelve, prevalece el papel y la nota se reformula.

En este tramo el papel resolvió una lectura: en la 63, «el Gobieron dió» se transcribe como «el Gobierno dió». Esa corrección ya está en el texto de `Pagina 63.md`. En la ampliación de 144 a 178 el papel no exigió ninguna corrección: los textos y las notas de esas páginas se conservan tal como quedaron tras el cotejo con las fotografías.

**Tarea pendiente de reformulación de notas.** Las notas de las páginas 26 a 178 conservan todavía el marcador «Pendiente de verificación contra el libro en papel» con que termina cada transcripción, y la de la 63 sigue mencionando «Gobieron» entre las grafías preservadas, aunque el texto ya lo corrige. Esa actualización corresponde al propietario, que tiene el papel delante: al hacerse, se aplican las reglas de «Verificaciones pendientes» y se resuelve cada punto allí listado para las páginas afectadas, de modo que **las notas nunca contradigan el texto**. Hasta entonces, el alcance real del cotejo en papel es el que fija esta sección y no el marcador de cada nota.

## Verificaciones pendientes

Lecturas seguras pero que conviene confirmar contra otra fuente (índice de colaboradores, bibliografía del libro u otra copia), porque el original usa grafías que no coinciden con la forma actual:

| Punto | Página | Observación |
|---|---|---|
| `Ugon de Tron` | 8 | el apellido podría leerse `Uyon` |
| `Torre Pellice` | 9 | confirmable contra el índice de colaboradores |
| `Pastor de Tararivas` | 9 | topónimo poco frecuente |
| `Negrin` | 9 | sin tilde en las dos apariciones |
| `Clusón` | 13 | el topónimo real es *Clusone* |
| `Germanasca` | 13 | se escribe hoy *Germagnasca* |
| `Rorá` | 13, 19 y 24 | se escribe hoy *Rorà*; el libro usa tilde aguda en las tres apariciones, inclinada de izquierda a derecha a ×14 |
| `Monte Ginebra` | 13 | debería decir *Monte Genebra* |
| `superstices` | 14 | por el sentido, debería decir «sobrevivientes» |
| `suplicados` | 14 | por el sentido, «supplicados» / «torturados» |
| `fuesen` | 15 | donde corresponde `fueren` |
| `El domingo 27 de febrero` | 15-16 | la fecha se repite en ambas páginas |
| `Sud-Americana` | 17-18 y 23 | con guion y mayúscula en las notas (1), (2) y (6); el nombre habitual es *Sudamericana* |
| `Würtemberg` | 18 | se escribe hoy *Württemberg*, sin `r` tras la `W` |
| `Boletín Nos. 18 y 19` | 18 | «Nos.» con `s` y sin punto ordinal, frente al `Nº 15` de la misma línea |
| `Boletin` | 18 | única nota al pie sin tilde; las de las páginas 17, 22 y 23 escriben «Boletín» |
| `Meille` | 19 | apellido poco frecuente; confirmable contra el índice de colaboradores |
| `Santa Fé` | 19 | se escribe hoy *Santa Fe*; la 24 vuelve a la forma sin tilde |
| `Le Long` | 19 | puede leerse *Le Long* o *Lelong*; se transcribe con dos palabras |
| `Aarón Castellanos` | 19 | el nombre del diputado argentino, confirmable contra el índice |
| `Bartolomé Malan` | 20 | pastor de Torre Pellice en 1856; la tilde final no se ve sin ampliar |
| `Villar Pellice` | 20 | infrequently confused with *Torre Pellice*, que aparece dos renglones antes |
| `Juan Pedro Revel` | 20 | el Moderador de la colonia en 1856; el nombre va partido `Pe-`/`dro` |
| `Santa Margarita` | 20 | nombre de la escuela de la segunda reunión; confirmable contra el índice |
| `Planchon` | 21-23 | apellido sin tilde en seis apariciones; confirmable contra el índice |
| `Barolin - Catalin` | 21 | apellido de mujer con guion corto y espacios; anónimo en la lista |
| `Baridon - Boudoire` | 21 | mismo criterio de guion corto, en un varón |
| `Gonnet - Fontana` | 21 | mismo criterio; `Gonnet` va con doble `n` |
| `Geymonat-Fontana` | 21 | aquí el guion **no** lleva espacios, a diferencia de los tres anteriores |
| `Enrichetta` | 22 | nombre del barco de la primera travesía; confirmable contra bibliografía |
| `3 de enero` / `3 de febrero de 1857` | 22 | contradicción dentro de la propia nota (5): Jourdan da febrero, Baridon y Puch, enero |
| `suibiografiado` | 22 | la `b` y la `i` de «biografiado» fundidas; la palabra correcta es *biografiado* |
| `Società di Studi Valdesi` | 22 | con acento grave en la `à`; el nombre del periódico y el de la sociedad van en redonda, los títulos de libro y las memorias en cursiva |
| `Pantaléón Pérez` | 23 | el acento va en la segunda vocal; la forma correcta es *Pantaleón* |
| `10 familias` / `72 personas` | 24 | las dos cuentas no se ajustan a la lista, que nombra seis grupos y 51 personas |
| `Davyt` | 24 | lectura revisada en detalle; el apellido reaparece en 109, 117 y 126, sin sustituir el cotejo propio de la 24 |
| `Bertin` / `Berton` / `Bertinal` / `Bertinat` | 24-25 | cuatro formas del mismo apellido en dos páginas; la 24 escribe `l` y la 25 `t` |
| `Bleyuat` | 24 | con `y` de cola, no `i`; a ×3 se lee como `u` |
| `Pramollo` | 25 | con doble `l`; a ×3 se lee como una sola |
| `Pomaretto` | 25 | con doble `t` |
| `Rostan` | 25 | la `n` final está emborronada por un reguero de tinta |
| `Módena` | 25 | grafía spanishizada de *Modena*; a ×14 el acento en la `ó` es inconfundible |
| `Salmo 107` | 25 | numeración hebraica, no la Vulgata; el libro no da otra referencia |
| `Inverso Pinasca` | 25 | topónimo poco frecuente; confirmable contra el índice de colaboradores |

Para las páginas 26 a 61, además del cotejo general en papel, conviene revisar especialmente:

| Punto | Página | Observación |
|---|---|---|
| `relatando de salida` | 26 | construcción anómala visible en la fotografía |
| `Bleynat` / `Bleyuat` | 26 / 24 | grafías conservadas sin unificación |
| `Chambeaud` / `Ayassot` | 28 | nombres revisados en detalle, a confirmar en papel |
| `estamos` | 30 | partición `es` / `tamos` sin guion claramente visible |
| `Errasquin` / `Errasquín` | 35-36 | el acento varía según la aparición |
| `Pág. 233` | 40 | última cifra parcialmente gastada |
| `da` / `hectáreas` | 47 | impresión débil o marcas sobre algunas letras |
| `cina-cina` | 49 | grafía sin ñ conservada según el detalle de la fotografía |
| Trazo junto a `doscientos` | 52 | se excluye como marca ajena a las letras; confirmar en papel |
| `exhoneración` | 54 | errata con h conservada |
| `una fondo` | 58 | errata conservada |
| `Comisión le Nueva Helvecia` | 60 | confirmar en papel la letra semejante a l |
| `Voelker` / `Schwyn` | 61 | nombres conservados; signo de partición del primero muy corto |

Para la tanda 62 a 69 y 72 a 100, además del cotejo general en papel, revisar especialmente:

| Punto | Página | Observación |
|---|---|---|
| `Gonnet-Felix`, `Roland-Garrou`, `Negrin-Baridon`, `Guigou-Peyrot` | 73, 87, 90, 95 | guiones al final de renglón conservados como parte del apellido; confirmar en papel |
| Trazo previo a `etc.` | 81 | se conserva como comilla simple; confirmar su naturaleza |
| Coma inicial antes de `El total` | 86 | confirmar si pertenece al impreso o a una marca sobre la hoja |
| Signo después de `lanar` | 89 | conservado como comilla doble; confirmar su naturaleza |
| Apóstrofo de `PIONN'IERS` | 92 | confirmar el signo entre N e I |
| `Caîrus` | 96 | confirmar el signo sobre la i, distinto de la diéresis de la 97 |
| `C. Cosmopolitá` / `Viglielm-Rostan` | 97 | grafías conservadas según los detalles de la fotografía |
| `85` / `75 hectáreas` | 100 | dos cantidades distintas en el mismo párrafo; no armonizar |

En las páginas 70 y 71, confirmar en papel las letras dañadas de «ofrecióles» y «fi-» / «nes» (70), el punto alto tras «une» y la o incompleta de «lo» (71). Las lecturas y la naturaleza dudosa de estas marcas se explican en las notas individuales.

En las páginas 101 a 150, además del cotejo general en papel, confirmar las letras débiles al cierre de la nota (28) en la 101, los acentos de «Andréón» (106), el guion de «Gonnet-Pons» (112), «Eofelio de Dovitis» (120), las primeras letras del encabezado provincial de la 144 y las marcas excluidas junto a «Alejandro» (104), «disipando» (113), «favorable» (130), «Enrique» (135) y «con» (145). La llamada (1) frente a la nota (37) de la 139 queda registrada como discrepancia del impreso.

En las páginas 151 a 200, además del cotejo general en papel, confirmar el acento de «ríoplatense» (168), el trazo junto al punto de «E. D.» (169), la variación de cursiva dentro de «Armand» (193), el trazo excluido al comienzo de «ocupado» (195), la forma del signo tras «quien» (197) y las marcas junto a «y» y «primer» en los pies de la 199. Se conservan la discrepancia de llamada (1) frente a nota (3) de la 157 y las erratas descritas en la revisión, sin corregirlas por contexto. Las páginas 164, 165 y 188 ya no son fuentes faltantes.

En las páginas 201 a 250, además del cotejo general en papel, confirmar especialmente la impresión incompleta del día «21» (226), la l cortada de «C. Belgrano» (228), los nombres con diéresis y las grafías de apellidos de la tabla de revisión. Las fechas discordantes de 216, 220, 225, 229 y 235–236 y las erratas de 214, 219, 221, 239, 240 y 245 se conservan como aparecen en las fotografías. La página 214 ya no es una fuente faltante.

En las páginas 251 a 300, además del cotejo general en papel, confirmar el signo elevado tras la primera aparición de «canonnier» (268), la impresión débil de «nía» (269), la marca entre e y r de «Jerah» (270) y el punto aislado de «infancia . hasta» (288). Las anomalías y los nombres de la tabla de revisión se mantienen como aparecen en las fotografías. La página 260 ya utiliza su nombre corregido.

En los preliminares y la tanda 301–378, además del cotejo general en papel, confirmar la diminuta leyenda del escudo de la portada (3), los diacríticos del patois (317), los nombres de la tabla de revisión y la grafía y tipografía exactas de «indice» en la 373. La posición centrada de este título y los cinco blancos quedan documentados según la indicación del propietario; no son lagunas de texto por completar.

Ninguno de estos puntos se corrige: quedan como están impresos y anotados. Los que el libro impreso ya resolvió en el cotejo en papel siguen aquí como registro histórico de la duda, no como pendiente de lectura.

## Visor para la comprobación final

La carpeta `visor/` contiene un visor local de las transcripciones y fotografías, con el Markdown a la izquierda y la fuente a la derecha. Se abre con `Abrir visor.desktop` o `Abrir visor.command`; su [guía de uso](./visor/README.md) documenta los controles y las copias del registro.

El visor conserva la numeración 1–378, presenta las páginas 2, 4, 6, 372 y 374 como blancos y muestra la 373 con fuente humana explícita y sin fotografía. Las láminas se excluyen conforme al registro de este documento. Los originales de texto e imagen se leen sin modificarse.

La última página leída, los estados «Pendiente», «Revisada» y «Con observaciones» y las anotaciones se guardan en `visor/datos/revision.json`. Son un registro independiente de esta nueva lectura: **marcar una página como revisada en el visor no cambia ni acredita el cotejo en papel de las notas de transcripción**. Si una observación permite resolver una duda, su incorporación al Markdown se realiza después conforme a las convenciones del proyecto. Las cinco páginas en blanco no se cuentan en el progreso del cotejo.

## Iteraciones futuras

- **Agregar páginas**: fotografías nuevas van a `imagenes del libro/`; primero se clasifican según «Láminas reservadas». Solo para páginas de texto se crea `Pagina N.md` aplicando las convenciones de arriba. Las láminas se registran y se conservan para el libro final, sin transcripción. No hay que reescribir las páginas ya transcritas.
- **Antes de transcribir**: revisar el tipo de letra de la página (cursiva en la presentación, Introducción y Conclusión, con las excepciones indicadas; cuerpo en redonda en las demás secciones), si hay versalitas en el título, si hay rótulo en cursiva, si lleva notas al pie y si la foto viene rotada.
- **Cotejo de continuidad**: al agregar páginas, verificar el último renglón de la anterior y el primero de la nueva. Quedan comprobados los enlaces «go-» / «bierno» (24-25), «em-» / «barcado» (25-26), «comprome-» / «tida» (31-32), «Ga-» / «briel» (34-35), «cose-» / «chas» (37-38), «cua-» / «dradas» (41-42), «re-» / «construída» (43-44), «práctica-» / «mente» (46-47) y «ofre-» / «cían» (47-48). La cita de Griot abre en la 41 y cierra en la 43. También quedan comprobadas la oración «cuatro años,» / «empezando con el segundo» (48-49, saltando las láminas), «pue-» / «da» (58-59), «perió-» / «dico» (59-60) y «comisio-» / «nes» (60-61). La carta iniciada en la 57 cierra en la 59. En la nueva tanda se comprobaron «com-» / «prendiendo» (62-63), «trans-» / «formación» (72-73), «Fomen-» / «to» (74-75), «co-» / «misionados» (76-77), «ca-» / «tólica» (79-80), «Cosmopo-» / «lita» (96-97), «establecie-» / «ron» (98-99) y «Ros-» / «tan» (99-100). La incorporación de 70 y 71 completa la continuidad 69–72: la 69, la 70 y la 71 cierran con párrafos completos, y la 72 abre una sección nueva. También se comprobó «en años» / «pasados» (64–65), saltando las dos láminas reservadas. La 101 continúa Soriano después del párrafo completo de la 100. En la tanda 101–150 se cotejaron las continuidades entre páginas, incluidos los cortes «al-» / «guna» (106–107), «Presiden-» / «te» (115–116), «colo-» / «nos» (118–119), «ado-» / «bes» (124–125), «pro-» / «pietarios» (125–126), «Valden-» / «ses» (126–127), «establecién-» / «dose» (128–129, saltando láminas), «Bari-» / «don» (133–134), «tam-» / «bién» (134–135), «Resis-» / «tencia» (138–139), «in-» / «dumentarias» (140–141) y «pro-» / «vincial» (149–150). En la tanda 151–200 se cotejaron «veci-» / «nos» (150–151), «Igle-» / «sia» (157–158), «Valden-» / «se» (170–171), «nota-» / «ble» (180–181), «re-» / «solvió» (182–183), «miem-» / «bros» (185–186), «se-» / «ñor» (191–192), «Geymonat-Caffa-» / «rel» (195–196), «Cris-» / «tiana» (196–197) y «di-» / «nero» (197–198), conservando los guiones en los cortes entre páginas y el guion propio de Geymonat-Caffarel. También se cerraron las continuidades de 164–165 y 187–189 al incorporarse las fotografías faltantes, y se cotejó el relato saltando las láminas de 176–177 y 192–193. En la tanda 201–250 se comprobaron «acariciado» / «de que» (200–201), «indepen-» / «diente» (204–205), «val-» / «dense» (210–211), «Iglesia» / «Evangélica» (213–214), «val-» / «denses» (220–221), «perso-» / «nería» (222–223), «imple-» / «mentos» (224–225), «bien-» / «hechora» (229–230), «congre-» / «gación» (230–231), «Evan-» / «gelista» (231–232), «con-» / «gregación» (232–233), «Uru-» / «guay» (234–235), «rea-» / «lizó» (240–241, saltando las dos láminas), «en-» / «tró» (244–245) y «Bue-» / «nos Aires» (249–250). En la tanda 251–300 se comprobaron todas las continuidades indicadas en su sección de revisión, incluida «algunos» / «fondos» (256–257) saltando las cuatro láminas. La 251 cierra Buenos Aires y abre la organización de la Iglesia. **La transcripción de las fotografías está completa hasta la 378.** La 300 continúa con «lo contrataron» en la 301; la Conclusión termina en la 371. Los blancos 372 y 374, el título 373 de fuente humana y el índice 375–378 quedan registrados. La siguiente etapa es el cotejo pendiente contra el papel y, posteriormente, la composición del libro con las diecinueve láminas y los cinco blancos en sus posiciones.
- **Corregir una transcripción**: si una verificación posterior resuelve una lectura dudosa, se actualiza el texto y se retira o reformula la nota correspondiente, de modo que las notas nunca contradigan el texto.
- **Unificar el texto**: si más adelante se necesita un texto corrido sin notas ni cursivas, se puede generar aparte con un script que elimine las secciones `### Notas de transcripción` y los marcadores `*`. Esta carpeta es deliberadamente la fuente de verdad sin esa limpieza.
- **El ODT de la raíz** es un documento aparte y de contenido mínimo; no se usó como fuente de contraste.
