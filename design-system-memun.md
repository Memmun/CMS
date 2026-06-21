# MEMUN — Design System (estilo ilustrado)

Extraído del estilo visual de las portadas (Mateo, Luz, Alice). Pensado para adaptar el CMS a una identidad más narrativa e ilustrativa, dejando atrás la estética "dashboard tech" cian/verde/morado que usamos antes.

---

## 1. Concepto visual

**Novela gráfica de archivo encontrado.** Ilustración digital pintada con textura de pincel/grano de papel, luz cálida puntual contra ambientes oscuros y nublados, como fotogramas de un cómic de resistencia y memoria. Todo se siente *tangible*: papel viejo, polvo, tela, óxido — no brillante ni digital.

Atributos clave a replicar en UI:
- Texturas sutiles de grano/papel sobre superficies planas
- Contraste alto entre sombra cálida oscura y luz ámbar puntual
- Bordes con leve irregularidad (no todo perfectamente geométrico)
- Tipografía "golpeada", como sello o stencil gastado, para titulares

---

## 2. Paleta de color

### Base (fondos y estructura)
| Nombre | Hex | Uso |
|---|---|---|
| Negro café (fondo base) | `#1A1410` | Fondo general de la app |
| Marrón sombra | `#241C16` | Superficies / cards |
| Marrón panel | `#2E241B` | Paneles elevados, modales |
| Línea / borde | `#4A3A2A` | Bordes, separadores |

### Acentos cálidos (de las portadas)
| Nombre | Hex | Uso |
|---|---|---|
| Ámbar lámpara | `#E8A858` | Acento principal, CTAs, focos de luz |
| Ocre tierra | `#C77B3E` | Acento secundario, hover states |
| Caqui resistencia | `#7C8156` | Categoría "Resistencia", uniformes |
| Rojo desgastado | `#9C3B30` | Alertas, MEMUN/peligro, sellos |
| Violeta atardecer | `#5C4A6E` | Acento frío puntual (cielo de Luz), usar con moderación |

### Texto y papel
| Nombre | Hex | Uso |
|---|---|---|
| Crema pergamino | `#EDE3D0` | Texto principal sobre fondo oscuro, títulos |
| Beige apagado | `#B8A88E` | Texto secundario / descripciones |
| Blanco hueso | `#F5EFE2` | Texto de máximo contraste (titulares) |

**Regla de uso:** fondo siempre oscuro y cálido (nunca negro puro ni azulado). Un solo acento ámbar domina los CTAs; el resto de colores (ocre, caqui, rojo, violeta) se reservan para diferenciar categorías de contenido, no para botones genéricos.

---

## 3. Tipografía

Tres familias, igual que en las portadas (título golpeado + nombres en caps + cita manuscrita/serif):

| Rol | Estilo | Fuente sugerida (Google Fonts, gratuitas) |
|---|---|---|
| Títulos grandes / logo | Display stencil/grunge, bold, mayúsculas | **Anton**, **Bebas Neue**, o **Oswald (700)** con textura aplicada por CSS |
| Subtítulos / labels / nombres de personajes | Sans condensada, mayúsculas, tracking amplio | **Oswald** o **Barlow Condensed (600)** |
| Cuerpo de texto / descripciones | Serif suave, legible | **Source Serif 4** o **Lora** |
| Citas narrativas | Serif itálica | **Lora Italic** o **Playfair Display Italic** |

Jerarquía de ejemplo:
- `H1` (ej. "ALICE"): Anton, 48–64px, mayúsculas, leve distressed/sombra
- `Eyebrow` (ej. "GAEL · LUZ · MATEO"): Oswald 600, 11px, tracking 0.25em, color crema
- `Body`: Source Serif 4, 14–15px, color beige apagado
- `Quote`: Lora Italic, 15px, color crema, comillas tipográficas

---

## 4. Textura y efectos

- **Grano de papel**: overlay sutil de ruido (`opacity: 0.03–0.05`) sobre fondos oscuros, vía SVG noise filter o imagen tileable.
- **Viñeta**: leve oscurecimiento en los bordes de las cards/imágenes para dar profundidad, como en las portadas.
- **Luz puntual (glow ámbar)**: gradiente radial cálido detrás de elementos destacados (como la lámpara de Alice), no neón ni difuminado tipo "tech".
- **Bordes gastados**: en vez de `border-radius` perfecto, considerar bordes muy levemente irregulares o con textura en cards "documento" (ej. recortes de diario, fichas).
- **Sellos / etiquetas**: las cajas con etiquetas tipo "OBJETOS DE LA ALDEA", "MEMUN INTENTO BORRAR" son un patrón reutilizable — placas con texto stencil sobre fondo cinta adhesiva/papel, ideales para tags de categoría en el CMS.

---

## 5. Componentes — cómo se traduce al CMS

| Componente actual | Adaptación al nuevo estilo |
|---|---|
| Cards de módulo (cian/verde/morado) | Cards tipo "afiche/portada" con ilustración de fondo difuminada + overlay oscuro, título en Anton, acento ámbar en el borde activo |
| Anillo de progreso (gradiente cian-morado) | Reloj de bolsillo o brújula ilustrada (referencia al reloj de Alice) con aguja que avanza, o anillo simple en ámbar sobre textura papel |
| Barras de progreso | Estilo "cinta de carrete" o trazo de tinta, color por categoría usando la paleta cálida (ocre, caqui, rojo, violeta) |
| Toggles de completado | Sello tipo "ARCHIVADO" / estampa de tinta en vez de switch tech |
| Botones "Ingresar" | Texto stencil con flecha tipo trazo de pincel, fondo transparente con borde ámbar, hover = relleno ámbar |
| Fondo general | De navy/negro azulado → marrón-negro cálido con grano de papel |

---

## 6. Próximo paso

Pasame las pantallas que querés adaptar (las del wireframe original en este estilo, o nuevas) y aplico esta paleta + tipografía + texturas directamente sobre el HTML funcional que ya tenés, manteniendo toda la lógica (login, progreso, toggles) intacta.
