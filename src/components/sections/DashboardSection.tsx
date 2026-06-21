import { useApp } from '@/context/AppContext';
import { asset } from '@/lib/utils';

export function DashboardSection() {
  const { getModuleMeta, openPreview } = useApp();

  return (
    <section id="section-dashboard">
      <div className="dashboard-glow" />
      <div className="hero-banner">
        <div className="hero-title">Elige tu forma de acceso</div>
        <div className="hero-sub">Explorá la historia a través de múltiples medios.</div>
      </div>

      <div className="modules">
        <div className="module-card">
          <div className="module-art art-novela">
            <img className="module-bg" src={asset('assets/card-novela.png')} alt="" />
            <div className="module-overlay">
              <div className="module-name-row">
                <img className="module-type-icon" src={asset('assets/icon-novela.svg')} alt="" />
                <div className="module-name">Novelas Gráficas</div>
              </div>
              <p className="module-desc">
                Explorá los cómics oficiales de MEMUN. Historias ilustradas que revelan nuevas perspectivas.
              </p>
              <div className="module-meta">{getModuleMeta('novela')}</div>
              <button type="button" className="cta-btn" onClick={() => openPreview('novela')}>
                <span className="cta-btn-label">VER</span>
                <img className="cta-btn-icon" src={asset('assets/icon-arrow-cta.svg')} alt="" />
              </button>
            </div>
          </div>
        </div>

        <div className="module-card module-card-juego">
          <div className="module-art art-juego">
            <img className="module-bg" src={asset('assets/card-juego.png')} alt="" />
            <div className="module-overlay overlay-juego">
              <div className="module-name-row">
                <img className="module-type-icon" src={asset('assets/icon-juego.svg')} alt="" />
                <div className="module-name">Videojuego</div>
              </div>
              <p className="module-desc module-desc-muted">
                Viví la experiencia interactiva. Tomá decisiones, completá misiones y desbloqueá recuerdos.
              </p>
              <div className="module-meta">{getModuleMeta('juego')}</div>
              <button type="button" className="cta-btn" onClick={() => openPreview('juego')}>
                <span className="cta-btn-label">JUGAR</span>
                <img className="cta-btn-icon" src={asset('assets/icon-arrow-cta.svg')} alt="" />
              </button>
            </div>
          </div>
        </div>

        <div className="module-card">
          <div className="module-art art-wiki">
            <img className="module-bg" src={asset('assets/card-wiki.png')} alt="" />
            <div className="module-overlay">
              <div className="module-name-row">
                <img className="module-type-icon" src={asset('assets/icon-wiki.svg')} alt="" />
                <div className="module-name">Wikimemun</div>
              </div>
              <p className="module-desc module-desc-muted">
                Accedé a la historia oficial de MEMUN. Explorá aldeas, personajes, tecnología y más.
              </p>
              <div className="module-meta">{getModuleMeta('wiki')}</div>
              <button type="button" className="cta-btn" onClick={() => openPreview('wiki')}>
                <span className="cta-btn-label">EDITAR</span>
                <img className="cta-btn-icon" src={asset('assets/icon-arrow-cta.svg')} alt="" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-note">
        <img className="footer-info-icon" src={asset('assets/icon-info.svg')} alt="" />
        <p className="footer-note-text">
          <span className="footer-note-label">MEMUN TE OBSERVA </span>
          <span className="footer-note-body">
            Cada elección modifica tu comprensión. No existe una única verdad. Explorá, conectá, recordá.
          </span>
        </p>
      </div>
    </section>
  );
}
