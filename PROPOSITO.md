# Propósito del proyecto

Transcripción diplomática de **«Historia de las Colonias Valdenses en su primer centenario (1858 - 1958)»**: cada página fotografiada del libro se convierte en un archivo markdown independiente, con el texto íntegro y fiel al original.

El objetivo es la **exhaustividad documental, no la edición**. El texto se transcribe tal como está impreso —incluidas sus incongruencias ortográficas, sintácticas y de puntuación— y toda lectura dudosa queda registrada en las notas del archivo correspondiente, para que cualquier persona pueda verificarla contra la imagen sin releer el libro.

## Estructura

```
Libro/
├── PROPOSITO.md                          ← este archivo
├── HISTORIA DE LAS COLONIAS VALDENSES EN SU PRIMER CENTENARIO (1858 - 1958).odt
├── imagenes del libro/                   ← fuente: una foto por página
│   ├── Pagina 7.jpeg                     ← nombre en mayúscula
│   ├── Paqina 8.jpeg                     ← error tipográfico y minúscula
│   ├── Pagina 9.jpeg
│   ├── Pagina 10.jpeg
│   └── pagina 11.jpeg … pagina 25.jpeg   ← nombre en minúscula
└── markdown de paginas/                  ← destino: una transcripción por página
    └── Pagina 7.md … Pagina 25.md        ← siempre «Pagina N.md», con mayúscula
```

Correspondencia entre fuente y destino: el nombre del archivo markdown sigue el número de página (`Pagina N.md`), no el nombre del JPEG, para no arrastrar el error «Paqina» ni la alternancia de mayúsculas. El nombre real del JPEG queda registrado en las notas de cada archivo.

Estado actual: páginas **7 a 25** transcritas. La 7 abre la Introducción; la 11 abre el Preámbulo, que cierra en la 16; la 17 abre el Capítulo I («Los "Pionniers"») con su sección I, «El problema de la emigración», que llega hasta el final de la 20; allí mismo abre la sección II, «Primera emigración», que continúa en las 21, 22 y 23. La 24 abre la sección III, «Segunda emigración» (junio de 1857, «El nuevo contingente»), con la lista de las diez familias que zarpan de Génova; la 25 cierra esa lista, sigue con la salida de Génova y el culto de despedida a bordo del *I due amici*, y termina a mitad de palabra («em-», primera sílaba de «embarcarse»). Faltan por incorporar las páginas 1 a 6 (preliminares, índice y posible prólogo previo a la Introducción) y la 26 en adelante.

## Bloques y tipografía del libro

El libro no es tipográficamente uniforme. Hay que revisar el tipo de letra en cada página nueva, porque de eso depende si el texto lleva cursivas:

| Páginas | Sección | Cuerpo | Título |
|---|---|---|---|
| 7 a 10 | Introducción | **Cursiva** | Redonda negrita centrada (`Introducción`) |
| 11 a 16 | Preámbulo | **Redonda** | Redonda negrita centrada (`PREAMBULO`, sin tilde) |
| 17 a 20 | Capítulo I, secciones I y II | **Redonda** | Versalitas (`CAPITULO I`, `EL PROBLEMA DE LA EMIGRACIÓN`, `PRIMERA EMIGRACIÓN`) |
| 21 a 23 | Capítulo I, sección II (sin título) | **Redonda** | Sin título ni rótulo; rótulos de origen en cursiva dentro de las listas |
| 24 a 25 | Capítulo I, sección III | **Redonda** | Versalitas (`SEGUNDA EMIGRACIÓN`) + numeral suelto + rótulos en cursiva |

La 17 es la única página del tramo con un título repartido en cinco renglones, y la 20 la que abre una sección nueva. La estructura de los títulos se repite: versalitas para el rótulo mayor, versalitas para el título de sección, versalitas o redonda negrita para el numeral romano suelto y cursiva para la fecha o el rótulo de línea. Los rótulos en cursiva son «Antes de 1848» (17), «Después del año 1848.» (18) y «(Noviembre de 1856)» (20). La sección III de la 24 repite exactamente el esquema de la 20, con el subtítulo «El nuevo contingente» como único caso en que el rótulo en cursiva va al margen izquierdo y no centrado.

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
| Texto de la nota | uno a cuatro renglones o párrafos, en redonda, con su propio `(N)` | un párrafo por bloque, sin unificar entre sí |
| Cifras | `old style`: altura de x, con el `4` y el `9` descendidos | se copian tal cual, con el punto de millar del original (`1.080`, `22.458`) |

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

### Verificación contra el libro impreso

Además del cotejo con las fotografías, **las páginas 7 a 25 fueron verificadas contra el libro en papel**, página a página, por el propietario del proyecto. Esa verificación es la que cierra cada página: donde una lectura quedó anotada como dudosa por la imagen pero el papel la resuelve, prevalece el papel y la nota se reformula.

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

Ninguno de estos puntos se corrige: quedan como están impresos y anotados. Los que el libro impreso ya resolvió en el cotejo en papel siguen aquí como registro histórico de la duda, no como pendiente de lectura.

## Iteraciones futuras

- **Agregar páginas**: fotografías nuevas van a `imagenes del libro/`; se crea `Pagina N.md` aplicando las convenciones de arriba. No hay que reescribir las páginas ya transcritas.
- **Antes de transcribir**: revisar el tipo de letra de la página (cursiva en la Introducción, redonda en el resto), si hay versalitas en el título, si hay rótulo en cursiva, si lleva notas al pie y si la foto viene rotada.
- **Cotejo de continuidad**: al agregar páginas, verificar que el último renglón de la página anterior y el primero de la nueva encadenen (palabra partida o corte de frase). `check.py` está en `/tmp/opencode` y sirve de apoyo, pero la unión debe confirmarse a ojo. Dos casos abiertos: la 24 cierra en «por el go-» y la 25 abre con «bierno», y la 25 cierra en «nunca habían em-», que la 26 tiene que completar. Además, el paréntesis de «(familia de 8 personas…» **queda abierto desde la 24 y se cierra en la primera línea de la 25**; la 26 no debe cerrarlo otra vez.
- **Corregir una transcripción**: si una verificación posterior resuelve una lectura dudosa, se actualiza el texto y se retira o reformula la nota correspondiente, de modo que las notas nunca contradigan el texto.
- **Unificar el texto**: si más adelante se necesita un texto corrido sin notas ni cursivas, se puede generar aparte con un script que elimine las secciones `### Notas de transcripción` y los marcadores `*`. Esta carpeta es deliberadamente la fuente de verdad sin esa limpieza.
- **El ODT de la raíz** es un documento aparte y de contenido mínimo; no se usó como fuente de contraste.
