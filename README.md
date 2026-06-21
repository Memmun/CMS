# MEMUN — Editor de Memorias

Prototipo funcional de un CMS narrativo transmedia ("Olvidar es sanar"), construido con **HTML + CSS + JS puro** (sin frameworks, sin build step).

🔗 **Demo en vivo:** https://memmun.github.io/CMS/

## Descripción

MEMUN distribuye la historia en tres formatos:

- **Novelas Gráficas** — cómics oficiales con capítulos ilustrados
- **Videojuego** — experiencia interactiva con misiones
- **Wikimemun** — historia oficial, aldeas y personajes

El panel simula el progreso del usuario en cinco categorías narrativas: Memoria personal, Historia de las aldeas, Verdad sobre Memun, Resistencia y Conexión entre personajes.

## Funcionalidades

- Login simulado (cualquier usuario/contraseña)
- Tres módulos navegables con modal de fragmentos
- Toggle de completado y recálculo de barras de progreso en vivo
- Layout alineado al diseño Figma (1920×1080) + responsive mobile
- Cierre de sesión

## Cómo verlo

1. Abrí la [demo en GitHub Pages](https://memmun.github.io/CMS/), o
2. Cloná el repo y abrí `index.html` en el navegador (no requiere servidor)

## Cómo usarlo

1. Ingresá cualquier usuario y contraseña
2. En el dashboard, hacé clic en VER / JUGAR / CREAR en cada tarjeta
3. Activá el toggle junto a un fragmento para marcarlo completado
4. Cerrá el modal y observá cómo se actualizan las barras de progreso

## Estructura del repositorio

```
CMS/
├── index.html
├── styles.css
├── script.js
├── design-system-memun.md
├── assets/          # imágenes PNG (botones, cards, íconos, fondo)
└── README.md
```

Ver `design-system-memun.md` para la guía de paleta y tipografía.

## Stack

HTML, CSS y JavaScript puro. Google Fonts (Plus Jakarta Sans, Exo 2, Rajdhani). El estado vive en memoria del navegador — no persiste entre recargas.

## GitHub Pages

En el repo: **Settings → Pages → Build and deployment → Deploy from branch → `main` / `/ (root)`**.

La URL quedará en `https://memmun.github.io/CMS/`.

---

Proyecto académico — MEMUN.
