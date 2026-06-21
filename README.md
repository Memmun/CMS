# MEMUN — Editor de Memorias

Prototipo funcional de un CMS narrativo transmedia ("Olvidar es sanar"), construido con **React + Vite + TypeScript + Tailwind CSS**.

🔗 **Demo en vivo:** https://memmun.github.io/CMS/

## Descripción

MEMUN distribuye la historia en tres formatos:

- **Novelas Gráficas** — cómics oficiales con capítulos ilustrados
- **Videojuego** — experiencia interactiva con misiones
- **Wikimemun** — historia oficial, aldeas y personajes

El panel simula el progreso del usuario en cinco categorías narrativas: Memoria personal, Historia de las aldeas, Verdad sobre Memun, Resistencia y Conexión entre personajes.

## Funcionalidades

- Login simulado (cualquier usuario/contraseña)
- Dashboard con tres módulos navegables y modal de fragmentos
- Toggle de completado y recálculo de barras de progreso en vivo
- Secciones: Video Demo, Visados, Afiches, App (Figma), Instagram
- Fondo animado con partículas (Aceternity Sparkles + tsparticles)
- Layout alineado al diseño Figma (1920×1080) + responsive mobile
- Cierre de sesión

## Desarrollo local

```bash
npm install
npm run dev
```

Abrí `http://localhost:5173/CMS/` en el navegador.

## Build de producción

```bash
npm run build
npm run preview
```

## Estructura del repositorio

```
CMS/
├── index.html
├── src/
│   ├── App.tsx
│   ├── index.css
│   ├── components/     # UI, login, dashboard, sparkles
│   ├── context/        # estado global (login, progreso, modal)
│   └── data/           # contenido y navegación
├── public/assets/      # imágenes PNG/SVG exportadas de Figma
├── .github/workflows/  # deploy automático a GitHub Pages
└── design-system-memun.md
```

Ver `design-system-memun.md` para la guía de paleta y tipografía.

## Stack

React 19, Vite 6, TypeScript, Tailwind CSS v4, tsparticles, Motion. Google Fonts (Plus Jakarta Sans, Exo 2, Rajdhani). El estado vive en memoria del navegador — no persiste entre recargas.

## GitHub Pages

El deploy es automático vía GitHub Actions al pushear a `main`. En el repo:

**Settings → Pages → Build and deployment → Source: GitHub Actions**

La URL quedará en `https://memmun.github.io/CMS/`.

---

Proyecto académico — MEMUN.
