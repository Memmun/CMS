# MEMUN — Gestor de Contenidos Narrativos

Prototipo funcional de un panel (CMS) para la gestión y exploración de contenido narrativo transmedia, desarrollado como trabajo práctico.

🔗 **Demo en vivo:** _agregá acá tu URL de GitHub Pages una vez activada, ej: https://tu-usuario.github.io/memun/_

## Descripción

MEMUN es un universo narrativo ("Olvidar es sanar") distribuido en tres formatos de contenido:

- **Novelas Gráficas** — cómics oficiales con capítulos e historias ilustradas
- **Videojuego** — experiencia interactiva con misiones
- **Wikimemun** — historia oficial, aldeas y personajes del universo

Este prototipo simula un panel de usuario donde cada persona puede explorar esos tres formatos y ver su **progreso de avance** actualizarse en tiempo real, distribuido en cinco categorías narrativas: Memoria personal, Historia de las aldeas, Verdad sobre Memun, Resistencia y Conexión entre personajes.

## Funcionalidades

- **Inicio de sesión** simulado (acepta cualquier usuario/contraseña, para fines de demostración)
- **Tres módulos de contenido** navegables (Novelas Gráficas, Videojuego, Wikimemun), cada uno con su propia lista de fragmentos
- **Marcado de fragmentos como completados**, mediante un toggle dentro de cada módulo
- **Cálculo de progreso en vivo**: las barras y el anillo de avance total se recalculan automáticamente según el contenido marcado como completado
- **Diseño responsive**: versión adaptada para escritorio y para mobile
- **Cierre de sesión**

## Cómo verlo

1. Abrí la URL de la demo en vivo (arriba), o
2. Descargá `index.html` de este repositorio y abrilo directo en cualquier navegador — no requiere instalación ni servidor

## Cómo usarlo

1. Ingresá cualquier usuario y contraseña en la pantalla de login
2. En el dashboard, hacé clic en "Ingresar" en cualquiera de las tres tarjetas (Novelas Gráficas / Videojuego / Wikimemun)
3. Activá el interruptor junto a un fragmento para marcarlo como completado
4. Cerrá el modal y observá cómo se actualiza la barra de progreso de su categoría y el porcentaje total

## Stack técnico

Construido con **HTML, CSS y JavaScript puro** (sin frameworks ni dependencias externas), en un único archivo. El estado de progreso vive en memoria del navegador durante la sesión (no persiste entre recargas), ya que este es un prototipo de demostración visual y funcional, no una versión productiva con base de datos.

## Estructura del repositorio

```
memun/
├── index.html      # Prototipo completo (HTML + CSS + JS)
└── README.md        # Este archivo
```

## Próximos pasos (fuera del alcance de este prototipo)

Para una versión en producción, el progreso y el contenido narrativo deberían persistir en una base de datos real (por ejemplo, Supabase o Bubble), con autenticación de usuarios genuina y un panel de administración para gestionar el contenido narrativo.

---

Proyecto académico — trabajo práctico.
