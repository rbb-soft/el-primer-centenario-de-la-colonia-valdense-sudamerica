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
├── imagenes del libro/                  ← páginas de texto y láminas reservadas
│   ├── imagen entre 48 y 49 1.jpeg       ← lámina: excluir de la transcripción
│   ├── imagen entre 48 y 49 2.jpeg       ← lámina: excluir de la transcripción
│   ├── pagina 07.jpeg                   ← nombre en minúscula con cero a la izquierda
│   ├── pagina 08.jpeg
│   ├── pagina 09.jpeg
│   ├── pagina 10.jpeg
│   ├── pagina 11.jpeg … pagina 69.jpeg  ← nombre en minúscula
│   └── pagina 72.jpeg … pagina 100.jpeg ← faltan las fuentes 70 y 71
└── markdown de paginas/                 ← destino: una transcripción por página de texto
    ├── Pagina 7.md … Pagina 69.md        ← siempre «Pagina N.md», con mayúscula
    └── Pagina 72.md … Pagina 100.md      ← sin archivos sustitutos para 70 y 71
```

Correspondencia entre fuente y destino: el nombre del archivo markdown sigue el número de página (`Pagina N.md`), no el nombre del JPEG. Los nombres reales de los JPEG quedan registrados en las notas de cada archivo. Actualmente las fuentes de texto siguen `pagina NN.jpeg`, en minúscula, con un mínimo de dos dígitos (07 a 09 con cero inicial; 100 con tres dígitos); el destino conserva `Pagina N.md`, sin cero inicial.

Estado actual: páginas **7 a 69 y 72 a 100** transcritas (92 páginas de texto; faltan las fuentes 70 y 71). La 7 abre la Introducción; la 11 abre el Preámbulo, que cierra en la 16; la 17 abre el Capítulo I («Los "Pionniers"»). La sección I, «El problema de la emigración», llega hasta la 20, donde abre la sección II, «Primera emigración», que sigue hasta la 23. La sección III, «Segunda emigración», abre en la 24 y sigue hasta la 27: el corte «em-» (25) / «barcado» (26) forma «embarcado». La 27 abre la sección IV, «Tercera emigración», y la 30 abre la V, «Los Valdenses en Florida». La 33 cierra el Capítulo I y abre el II, «Colonización», con la sección I, «Fundación de la primera colonia (1858)». La 43 abre la sección II, «Colonia Valdense (1858 - 1958)»; la 46 inicia el rótulo «Ensanche de la colonia». La 48 termina con «El pago debía realizarse en un plazo de cuatro años,», que continúa con «empezando con el segundo» en la 49, saltando las dos láminas reservadas. La sección II termina en la 53, donde abre la III, «Planeando una segunda colonia Valdense»; la 56 abre la IV, «Intervención del "Superior Gobierno"»; la 61 abre la V, «Cosmopolita», con el rótulo «Los primeros pobladores». La sección V continúa hasta la 65; la 66 abre la VI, «Riachuelo», y la 67 la VII, «Artilleros», que sigue en la 69. Las fuentes 70 y 71 faltan: no se reconstruye el enlace entre la 69 y la 72. La 72 abre la VIII, «Tarariras y Quintón»; la 75 la IX, «Ombúes de Lavalle»; la 85 la X, «Colonia Miguelete»; la 86 la XI, «C. Miguelete»; y la 89 la XII, «San Pedro», que llega hasta la 91. La 92 abre «En el Departamento de Soriano» y su sección I, «Los Pionn'iers»; la 93 abre la II, «Formación de la colonia», que continúa hasta el rótulo «Palmitas» de la 100. No se añade un número de capítulo que el impreso no muestra.

Las páginas **7 a 25** están verificadas contra el libro en papel. Las **26 a 69 y 72 a 100** fueron cotejadas con las fotografías completas, bandas ampliadas y recortes de detalle; **su verificación en papel sigue pendiente**. Faltan las páginas 1 a 6 (preliminares, índice y posible prólogo), las 70 y 71 y la 101 en adelante.

### Láminas reservadas para la confección del libro final

**Regla permanente:** las páginas de imágenes o láminas se conservan como material gráfico para la confección del libro final y se ignoran durante todo el período de transcripción de imagen a markdown. Esta es una excepción explícita a la correspondencia «una fotografía → un markdown»: solo se transcriben las páginas de texto.

| Archivo en `imagenes del libro/` | Ubicación en el libro | Tratamiento |
|---|---|---|
| `imagen entre 48 y 49 1.jpeg` | Entre las páginas 48 y 49, primera lámina | Reservada para el libro final; sin transcripción |
| `imagen entre 48 y 49 2.jpeg` | Entre las páginas 48 y 49, segunda lámina | Reservada para el libro final; sin transcripción |

- Conservar los JPEG originales, sus nombres y el orden 1 → 2. Deben permanecer en el repositorio para la futura composición del libro.
- No aplicar OCR ni transcribir leyendas, títulos o contenido de estas láminas. No crear markdown, archivos vacíos ni páginas sustitutas para ellas.
- No contarlas como páginas de texto pendientes, no asignarles números de página y no alterar la numeración existente. La continuidad del relato se coteja directamente de la 48 a la 49.
- Antes de cada nueva tanda, clasificar las fotografías y consultar este registro. Incorporar aquí las futuras láminas reservadas con su nombre real y ubicación.
- En cualquier procesamiento automático, seleccionar solo nombres de página completos con `^pagina [0-9]{2,}\.jpeg$` (minúscula, espacio, mínimo dos dígitos con cero a la izquierda para las páginas 7 a 9) y excluir expresamente los archivos de este registro. Nunca extraer un número suelto del nombre de una lámina: «48» y «49» indican su ubicación, no páginas a transcribir. Toda imagen que no cumpla el patrón o sea una lámina requiere clasificación antes de procesarse.

### Fotografías de texto faltantes

El inventario actual contiene 92 fotografías de texto (7 a 69 y 72 a 100) y dos láminas reservadas. Las páginas 70 y 71 no están disponibles: conservar el salto y no crear archivos vacíos, completar el texto por contexto ni renumerar las páginas 72 en adelante. Las notas de las páginas 69 y 72 dejan constancia de esta discontinuidad.

En cada tanda, comparar los números de las fotografías de texto con los markdown existentes. La página más alta no indica un tramo completo: registrar los números faltantes y contar únicamente páginas de texto efectivamente transcritas. Al incorporar 70 y 71, cotejar ambas con 69 y 72 antes de dar por cerrada esa continuidad.

## Bloques y tipografía del libro

El libro no es tipográficamente uniforme. Hay que revisar el tipo de letra en cada página nueva, porque de eso depende si el texto lleva cursivas:

| Páginas | Sección | Cuerpo | Título |
|---|---|---|---|
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
| 67 a 69 | Capítulo II, sección VII; faltan 70 y 71 | **Redonda** | Versalitas (`ARTILLEROS`) y numeral VII |
| 72 a 74 y comienzo de 75 | Capítulo II, sección VIII | **Redonda** | Versalitas (`TARARIRAS Y QUINTÓN`), numeral VIII y rótulos en cursiva |
| 75 a 84 y comienzo de 85 | Capítulo II, sección IX | **Redonda** | Versalitas (`OMBÚES DE LAVALLE`), numeral `IX.` y rótulos en cursiva |
| 85 y comienzo de 86 | Capítulo II, sección X | **Redonda** | Versalitas (`COLONIA MIGUELETE`) y numeral X |
| 86 a 88 y comienzo de 89 | Capítulo II, sección XI | **Redonda** | Versalitas (`C. MIGUELETE`), numeral `XI.` y rótulos en cursiva |
| 89 a 91 | Capítulo II, sección XII | **Redonda** | Versalitas (`SAN PEDRO`), numeral `XII.` y rótulo en cursiva |
| 92 y comienzo de 93 | En el Departamento de Soriano, sección I | **Redonda** | Encabezado propio, versalitas (`LOS PIONN'IERS`) y numeral I |
| 93 a 100 | En el Departamento de Soriano, sección II | **Redonda** | Versalitas (`FORMACIÓN DE LA COLONIA`), numeral `II.` y rótulos en cursiva |

Las aperturas de capítulo de las páginas 17 y 33 tienen títulos repartidos en varios renglones: se conserva cada uno según su jerarquía. Las secciones III (24) y IV (27) llevan fechas en cursiva, mientras que «(1858 - 1958)» de la sección II del Capítulo II (43) va en redonda. No se generaliza una tipografía a todas las fechas.

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

Las notas (16) a (27) aparecen en la tanda 62 a 69 y 72 a 100. La apertura de «En el Departamento de Soriano» no reinicia su numeración: la nota (22) de la 92 sigue a la (21) de la 91. Se conservan las referencias internas tal como están impresas.

El `---` de la nota al pie no es un filete de cierre de página: la hoja lleva filete al pie **y** número de página debajo. Las notas de cada archivo aclaran cuál de los dos es cuál.

## Convenciones de transcripción

Estas reglas se aplican a toda página nueva:

| Aspecto | Criterio |
|---|---|
| Saltos de línea y particiones | Se unifican en párrafos fluidos. Los guiones de fin de renglón (`nom-bró`, `con-memorativos`) se resuelven: la palabra va entera. |
| Palabras partidas por salto de página | Se conservan con guion y con nota de continuidad (`disposi-` → `ción.` en la página siguiente). |
| Tipografía | Se preserva la del original: cursiva con `*...*` en las páginas 7-10, redonda sin marcas en las 11-19, salvo los rótulos de línea y las citas que estén en cursiva. Los títulos van como `#`. **Revisar el tipo de letra de cada página antes de transcribir.** |
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
| Ornamentos | Los grupos de tres asteriscos de las páginas 83, 85 y 100 se representan como un asterisco y, en la línea siguiente, dos; se escapan (`\*`) para que markdown no los convierta en filetes. |
| Marcas de archivo | Solo van en las notas, nunca dentro del texto, para no contaminar la transcripción. |

## Estructura de cada archivo

1. Título (si la página lo tiene) como encabezado markdown, renglón por renglón si ocupa varios.
2. Cuerpo de la página, en párrafos y con la tipografía del original.
3. Notas al pie, si las hay: separador `---` y texto de la nota.
4. Número de página impreso (`— 7 —`) cuando existe. La página 10 no lo lleva.
5. Filete de cierre, si la página lo tiene (así termina el Preámbulo, en la 16).
6. Línea de separación `---`.
7. Sección `### Notas de transcripción` con:
   - el nombre del JPEG de origen,
   - si la página arranca o cierra a mitad de frase o palabra,
   - las grafías anómalas conservadas,
   - las manchas de tinta, los daños de la fotografía y las zonas de lectura dudosa,
   - las firmas de pliego y otras marcas de imprenta que **no** se transcribieron,
   - los fragmentos del folio verso que transparentan y que **no** se transcribieron.

## Método de verificación

Antes de comenzar, separar las páginas de texto de las láminas conforme al registro de exclusiones. Los pasos siguientes se aplican únicamente a las páginas de texto.

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

Las 37 páginas nuevas se cotejaron con las fotografías completas, tres bandas superpuestas ×3 con contraste por página, recortes de detalle ×6 y una comparación final con los markdown. Se mantuvieron las dos láminas excluidas. No se encontró fuente para las páginas 70 y 71.

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

### Verificación contra el libro impreso

Además del cotejo con las fotografías, **las páginas 7 a 25 fueron verificadas contra el libro en papel**, página a página, por el propietario del proyecto. Las páginas 26 a 69 y 72 a 100 aún no tienen ese cotejo. Esa verificación es la que cierra cada página: donde una lectura quedó anotada como dudosa por la imagen pero el papel la resuelve, prevalece el papel y la nota se reformula.

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
| `Davyt` | 24 | apellido que no aparece en ninguna otra página transcrita; queda como dudoso |
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

Ninguno de estos puntos se corrige: quedan como están impresos y anotados. Los que el libro impreso ya resolvió en el cotejo en papel siguen aquí como registro histórico de la duda, no como pendiente de lectura.

## Iteraciones futuras

- **Agregar páginas**: fotografías nuevas van a `imagenes del libro/`; primero se clasifican según «Láminas reservadas». Solo para páginas de texto se crea `Pagina N.md` aplicando las convenciones de arriba. Las láminas se registran y se conservan para el libro final, sin transcripción. No hay que reescribir las páginas ya transcritas.
- **Antes de transcribir**: revisar el tipo de letra de la página (cursiva en la Introducción, redonda en el resto), si hay versalitas en el título, si hay rótulo en cursiva, si lleva notas al pie y si la foto viene rotada.
- **Cotejo de continuidad**: al agregar páginas, verificar el último renglón de la anterior y el primero de la nueva. Quedan comprobados los enlaces «go-» / «bierno» (24-25), «em-» / «barcado» (25-26), «comprome-» / «tida» (31-32), «Ga-» / «briel» (34-35), «cose-» / «chas» (37-38), «cua-» / «dradas» (41-42), «re-» / «construída» (43-44), «práctica-» / «mente» (46-47) y «ofre-» / «cían» (47-48). La cita de Griot abre en la 41 y cierra en la 43. También quedan comprobadas la oración «cuatro años,» / «empezando con el segundo» (48-49, saltando las láminas), «pue-» / «da» (58-59), «perió-» / «dico» (59-60) y «comisio-» / «nes» (60-61). La carta iniciada en la 57 cierra en la 59. En la nueva tanda se comprobaron «com-» / «prendiendo» (62-63), «trans-» / «formación» (72-73), «Fomen-» / «to» (74-75), «co-» / «misionados» (76-77), «ca-» / «tólica» (79-80), «Cosmopo-» / «lita» (96-97), «establecie-» / «ron» (98-99) y «Ros-» / «tan» (99-100). **Prioridad: incorporar las fuentes 70 y 71; después continuar en la 101.** La 69 y la 100 cierran con párrafos completos, pero no se anticipa el texto faltante ni se enlaza directamente 69 con 72.
- **Corregir una transcripción**: si una verificación posterior resuelve una lectura dudosa, se actualiza el texto y se retira o reformula la nota correspondiente, de modo que las notas nunca contradigan el texto.
- **Unificar el texto**: si más adelante se necesita un texto corrido sin notas ni cursivas, se puede generar aparte con un script que elimine las secciones `### Notas de transcripción` y los marcadores `*`. Esta carpeta es deliberadamente la fuente de verdad sin esa limpieza.
- **El ODT de la raíz** es un documento aparte y de contenido mínimo; no se usó como fuente de contraste.
