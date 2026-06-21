export type SectionId =
  | 'dashboard'
  | 'video-demo'
  | 'visados'
  | 'afiches'
  | 'app'
  | 'instagram';

export const SECTIONS: SectionId[] = [
  'dashboard',
  'video-demo',
  'afiches',
  'app',
  'visados',
  'instagram',
];

export type ModuleTipo = 'novela' | 'juego' | 'wiki';

export interface Categoria {
  id: string;
  nombre: string;
  color: string;
}

export interface ContenidoItem {
  id: string;
  tipo: ModuleTipo;
  titulo: string;
  categoria: string;
  peso: number;
  completado: boolean;
}

export const categorias: Categoria[] = [
  { id: 'personal', nombre: 'Memoria personal', color: 'var(--caqui)' },
  { id: 'aldeas', nombre: 'Historia de las aldeas', color: 'var(--ocre)' },
  { id: 'verdad', nombre: 'Verdad sobre Memun', color: 'var(--violeta)' },
  { id: 'resistencia', nombre: 'Resistencia', color: 'var(--rojo)' },
  { id: 'conexion', nombre: 'Conexión entre personajes', color: 'var(--amber)' },
];

export const initialContenido: ContenidoItem[] = [
  { id: 'ng1', tipo: 'novela', titulo: 'Capítulo 1 — El despertar', categoria: 'personal', peso: 1, completado: false },
  { id: 'ng2', tipo: 'novela', titulo: 'Capítulo 2 — La aldea ausente', categoria: 'aldeas', peso: 1, completado: false },
  { id: 'ng3', tipo: 'novela', titulo: 'Capítulo 3 — Visiones de Memun', categoria: 'verdad', peso: 1, completado: false },
  { id: 'ng4', tipo: 'novela', titulo: 'Capítulo 4 — El primer recuerdo', categoria: 'personal', peso: 1, completado: false },
  { id: 'vj1', tipo: 'juego', titulo: 'Misión — Cruzar el umbral', categoria: 'resistencia', peso: 1, completado: false },
  { id: 'vj2', tipo: 'juego', titulo: 'Misión — El pacto olvidado', categoria: 'verdad', peso: 1, completado: false },
  { id: 'vj3', tipo: 'juego', titulo: 'Misión — Reencuentro', categoria: 'conexion', peso: 1, completado: false },
  { id: 'wk1', tipo: 'wiki', titulo: 'Entrada — Aldea de Cinder', categoria: 'aldeas', peso: 1, completado: false },
  { id: 'wk2', tipo: 'wiki', titulo: 'Entrada — Los Emirec', categoria: 'conexion', peso: 1, completado: false },
  { id: 'wk3', tipo: 'wiki', titulo: 'Entrada — Resistencia del Norte', categoria: 'resistencia', peso: 1, completado: false },
];

export const tipoLabels = {
  novela: { tag: 'Novelas Gráficas', titulo: 'Cómics oficiales', unidad: 'fragmentos leídos' },
  juego: { tag: 'Videojuego', titulo: 'Experiencia interactiva', unidad: 'misiones completadas' },
  wiki: { tag: 'Wikimemun', titulo: 'Historia oficial', unidad: 'entradas consultadas' },
} as const;

export const EXTERNAL_LINKS = {
  novela: 'https://caiofortega-bit.github.io/MEMUM/',
  juego: 'https://www.youtube.com/watch?v=CdGfFPssCts',
  wiki: 'https://gonzalorceccato.github.io/wikimemun/#',
} as const;

export const INSTAGRAM = {
  profile: 'https://www.instagram.com/memun.mavi2/',
  username: 'memun.mavi2',
  posts: [
    'https://www.instagram.com/p/DZ1N_syjSvd/',
    'https://www.instagram.com/p/DZ1M8ZKDegK/',
    'https://www.instagram.com/p/DZ1MvNuDX6i/',
  ],
};

export const NAV_ITEMS: { id: SectionId; label: string; icon: string; mobileLabel?: string }[] = [
  { id: 'dashboard', label: 'Bitácora', icon: 'icon-bitacora.svg' },
  { id: 'video-demo', label: 'Video Demo', icon: 'icon-video-demo.svg', mobileLabel: 'Video' },
  { id: 'afiches', label: 'Afiches', icon: 'icon-afiches.svg' },
  { id: 'app', label: 'App', icon: 'icon-app.svg' },
  { id: 'visados', label: 'Visados', icon: 'icon-visados.svg' },
  { id: 'instagram', label: 'Instagram', icon: 'icon-instagram.svg' },
];

export const VISADOS = [
  { title: 'Visado 1 — TP 1', embed: '_PItfSn_6wA' },
  { title: 'Visado 2 — TP 1', embed: 'rKJi1EVHLz4' },
  { title: 'Visado 1 — TP 2', embed: 'D4Esqev9RsI' },
  { title: 'Visado 2 — TP 2', embed: 'WznHt0zWC0U' },
  { title: 'Visado 3 — TP 2', embed: 'a_nrsjw3_6I' },
];
