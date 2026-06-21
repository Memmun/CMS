import { useApp, categorias, tipoLabels } from '@/context/AppContext';

export function ModuleModal() {
  const { modalTipo, closeModal, contenido, toggleItem } = useApp();

  if (!modalTipo) return null;

  const info = tipoLabels[modalTipo];
  const items = contenido.filter((c) => c.tipo === modalTipo);

  return (
    <div
      className="modal-overlay show"
      onClick={(e) => {
        if (e.target === e.currentTarget) closeModal();
      }}
    >
      <div className="modal">
        <div className="modal-head">
          <div>
            <div
              className="oswald"
              style={{
                fontSize: '10.5px',
                letterSpacing: '0.12em',
                color: 'var(--violet)',
                textTransform: 'uppercase',
              }}
            >
              {info.tag}
            </div>
            <div className="anton" style={{ fontSize: '20px', marginTop: '5px' }}>
              {info.titulo}
            </div>
          </div>
          <button type="button" className="modal-close" onClick={closeModal} aria-label="Cerrar">
            ✕
          </button>
        </div>
        <div>
          {items.map((item) => {
            const cat = categorias.find((c) => c.id === item.categoria);
            return (
              <div key={item.id} className="item-row">
                <div className="item-info">
                  <div className="item-title">{item.titulo}</div>
                  <div className="item-cat">{cat?.nombre}</div>
                </div>
                <button
                  type="button"
                  className={`toggle ${item.completado ? 'on' : ''}`}
                  onClick={() => toggleItem(item.id)}
                  aria-label="Marcar completado"
                >
                  <div className="toggle-knob" />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
