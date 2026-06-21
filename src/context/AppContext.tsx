import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from 'react';
import {
  categorias,
  initialContenido,
  tipoLabels,
  type ContenidoItem,
  type ModuleTipo,
  type SectionId,
} from '@/data/content';

interface ProgressData {
  totalPct: number;
  verdadPct: number;
  personalPct: number;
}

interface AppContextValue {
  user: string | null;
  section: SectionId;
  contenido: ContenidoItem[];
  progress: ProgressData;
  toast: string | null;
  modalTipo: ModuleTipo | null;
  accountOpen: boolean;
  login: (username: string, password: string) => string | null;
  logout: () => void;
  setSection: (section: SectionId) => void;
  setAccountOpen: (open: boolean) => void;
  openModal: (tipo: ModuleTipo) => void;
  closeModal: () => void;
  toggleItem: (id: string) => void;
  showToast: (msg: string) => void;
  showComingSoon: (msg?: string) => void;
  getModuleMeta: (tipo: ModuleTipo) => string;
}

const AppContext = createContext<AppContextValue | null>(null);

function calcProgress(items: ContenidoItem[]): ProgressData {
  const data = categorias.map((cat) => {
    const catItems = items.filter((c) => c.categoria === cat.id);
    const total = catItems.reduce((sum, i) => sum + i.peso, 0);
    const hecho = catItems.reduce((sum, i) => sum + (i.completado ? i.peso : 0), 0);
    const pct = total > 0 ? Math.round((hecho / total) * 100) : 0;
    return { id: cat.id, pct };
  });

  return {
    totalPct: Math.round(data.reduce((s, c) => s + c.pct, 0) / data.length),
    verdadPct: data.find((c) => c.id === 'verdad')?.pct ?? 0,
    personalPct: data.find((c) => c.id === 'personal')?.pct ?? 0,
  };
}

export function AppProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<string | null>(null);
  const [section, setSection] = useState<SectionId>('dashboard');
  const [contenido, setContenido] = useState<ContenidoItem[]>(initialContenido);
  const [toast, setToast] = useState<string | null>(null);
  const [modalTipo, setModalTipo] = useState<ModuleTipo | null>(null);
  const [accountOpen, setAccountOpen] = useState(false);

  const progress = useMemo(() => calcProgress(contenido), [contenido]);

  const showToast = useCallback((msg: string) => {
    setToast(msg);
    window.setTimeout(() => setToast(null), 2200);
  }, []);

  const login = useCallback(
    (username: string, password: string) => {
      if (!username.trim() || !password.trim()) {
        return 'Ingresá usuario y contraseña para continuar.';
      }
      const name = username.trim().toUpperCase();
      setUser(name);
      showToast(`Sesión iniciada como ${name}`);
      return null;
    },
    [showToast],
  );

  const logout = useCallback(() => {
    setUser(null);
    setAccountOpen(false);
    setModalTipo(null);
    setSection('dashboard');
  }, []);

  const toggleItem = useCallback((id: string) => {
    setContenido((prev) => {
      const item = prev.find((c) => c.id === id);
      if (item) {
        showToast(item.completado ? 'Marcado como pendiente' : 'Marcado como completado');
      }
      return prev.map((i) => (i.id === id ? { ...i, completado: !i.completado } : i));
    });
  }, [showToast]);

  const getModuleMeta = useCallback(
    (tipo: ModuleTipo) => {
      const items = contenido.filter((c) => c.tipo === tipo);
      const done = items.filter((c) => c.completado).length;
      return `${done} / ${items.length} ${tipoLabels[tipo].unidad}`;
    },
    [contenido],
  );

  const value: AppContextValue = {
    user,
    section,
    contenido,
    progress,
    toast,
    modalTipo,
    accountOpen,
    login,
    logout,
    setSection,
    setAccountOpen,
    openModal: setModalTipo,
    closeModal: () => setModalTipo(null),
    toggleItem,
    showToast,
    showComingSoon: (msg) => showToast(msg || 'Contenido próximamente disponible.'),
    getModuleMeta,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error('useApp must be used within AppProvider');
  return ctx;
}

export { categorias, tipoLabels };
