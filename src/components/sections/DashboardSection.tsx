import { useApp } from '@/context/AppContext';
import { CardSpotlightOverlay, useCardSpotlight } from '@/components/ui/card-spotlight';
import { asset } from '@/lib/utils';
import type { ModuleTipo } from '@/data/content';

const MEMUN_SPOTLIGHT = {
  color: 'rgba(99, 53, 229, 0.72)',
  revealColors: [
    [99, 53, 229],
    [0, 212, 232],
  ] as number[][],
  radius: 340,
};

type ModuleCardProps = {
  tipo: ModuleTipo;
  artClass: string;
  title: string;
  icon: string;
  image: string;
  desc: string;
  descMuted?: boolean;
  cta: string;
  cardClassName?: string;
};

function ModuleCard({
  tipo,
  artClass,
  title,
  icon,
  image,
  desc,
  descMuted,
  cta,
  cardClassName = '',
}: ModuleCardProps) {
  const { getModuleMeta, openPreview } = useApp();
  const { mouseX, mouseY, isHovering, handlers } = useCardSpotlight();

  return (
    <div
      className={`module-card module-card-spotlight group/module ${cardClassName}`.trim()}
      {...handlers}
    >
      <div className={`module-art ${artClass}`}>
        <img className="module-bg" src={asset(image)} alt="" />
        <CardSpotlightOverlay
          mouseX={mouseX}
          mouseY={mouseY}
          isHovering={isHovering}
          radius={MEMUN_SPOTLIGHT.radius}
          color={MEMUN_SPOTLIGHT.color}
          revealColors={MEMUN_SPOTLIGHT.revealColors}
        />
        <div className={`module-overlay${artClass.includes('juego') ? ' overlay-juego' : ''}`}>
          <div className="module-name-row">
            <img className="module-type-icon" src={asset(icon)} alt="" />
            <div className="module-name">{title}</div>
          </div>
          <p className={`module-desc${descMuted ? ' module-desc-muted' : ''}`}>{desc}</p>
          <div className="module-meta">{getModuleMeta(tipo)}</div>
          <button type="button" className="cta-btn" onClick={() => openPreview(tipo)}>
            <span className="cta-btn-label">{cta}</span>
            <img className="cta-btn-icon" src={asset('assets/icon-arrow-cta.svg')} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
}

export function DashboardSection() {
  return (
    <section id="section-dashboard">
      <div className="dashboard-glow" />
      <div className="hero-banner">
        <div className="hero-title">Elige tu forma de acceso</div>
        <div className="hero-sub">Explorá la historia a través de múltiples medios.</div>
      </div>

      <div className="modules">
        <ModuleCard
          tipo="novela"
          artClass="art-novela"
          title="Novelas Gráficas"
          icon="assets/icon-novela.svg"
          image="assets/card-novela.png"
          desc="Explorá los cómics oficiales de MEMUN. Historias ilustradas que revelan nuevas perspectivas."
          cta="VER"
        />

        <ModuleCard
          tipo="juego"
          artClass="art-juego"
          title="Videojuego"
          icon="assets/icon-juego.svg"
          image="assets/card-juego.png"
          desc="Viví la experiencia interactiva. Tomá decisiones, completá misiones y desbloqueá recuerdos."
          descMuted
          cta="JUGAR"
          cardClassName="module-card-juego"
        />

        <ModuleCard
          tipo="wiki"
          artClass="art-wiki"
          title="Wikimemun"
          icon="assets/icon-wiki.svg"
          image="assets/card-wiki.png"
          desc="Accedé a la historia oficial de MEMUN. Explorá aldeas, personajes, tecnología y más."
          descMuted
          cta="EDITAR"
        />
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
