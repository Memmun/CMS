import { useEffect, useRef } from 'react';
import { useApp } from '@/context/AppContext';
import { INSTAGRAM, NAV_ITEMS, VISADOS } from '@/data/content';
import { asset } from '@/lib/utils';
import { DashboardSection } from '@/components/sections/DashboardSection';
import AnimatedProgressBar from '@/components/ui/smoothui/animated-progress-bar';
import { SparklesBackground } from '@/components/SparklesBackground';

declare global {
  interface Window {
    instgrm?: { Embeds?: { process: () => void } };
  }
}

function HeroBanner({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="hero-banner">
      <div className="hero-title">{title}</div>
      <div className="hero-sub">{subtitle}</div>
    </div>
  );
}

function InstagramSection() {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!INSTAGRAM.posts.length) return;

    const process = () => window.instgrm?.Embeds?.process();

    if (window.instgrm) {
      process();
      return;
    }

    const existing = document.getElementById('instagram-embed-script');
    if (existing) {
      existing.addEventListener('load', process, { once: true });
      return;
    }

    const script = document.createElement('script');
    script.id = 'instagram-embed-script';
    script.async = true;
    script.src = 'https://www.instagram.com/embed.js';
    script.onload = process;
    document.body.appendChild(script);
  }, []);

  return (
    <section id="section-instagram">
      <HeroBanner title="Instagram" subtitle="Seguí el universo MEMUN en redes." />
      <div className="instagram-panel">
        <div className="instagram-profile-bar">
          <img className="instagram-profile-icon" src={asset('assets/icon-instagram.svg')} alt="" />
          <div className="instagram-profile-copy">
            <p className="instagram-profile-user">@memun.mavi2</p>
            <p className="instagram-profile-desc">
              Novedades, arte y avances del proyecto narrativo transmedia.
            </p>
          </div>
          <a
            className="link-card-btn instagram-profile-link"
            href={INSTAGRAM.profile}
            target="_blank"
            rel="noopener noreferrer"
          >
            Visitar perfil ↗
          </a>
        </div>

        {INSTAGRAM.posts.length > 0 ? (
          <div ref={gridRef} className="instagram-feed-grid">
            {INSTAGRAM.posts.map((url) => (
              <div key={url} className="instagram-post">
                <blockquote
                  className="instagram-media"
                  data-instgrm-permalink={url}
                  data-instgrm-version="14"
                  style={{
                    background: '#FFF',
                    border: 0,
                    borderRadius: '16px',
                    margin: 0,
                    maxWidth: '100%',
                    minWidth: 0,
                    width: '100%',
                  }}
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="instagram-feed-frame">
            <p className="instagram-feed-loading">Cargando publicaciones…</p>
            <iframe
              title="Feed de @memun.mavi2 en Instagram"
              loading="lazy"
              allowTransparency
              scrolling="no"
              allow="encrypted-media"
              src={`${INSTAGRAM.profile}embed/`}
            />
          </div>
        )}

        <p className="embed-note instagram-feed-note">
          Publicaciones en vivo desde Instagram. Si no cargan, abrí el{' '}
          <a href={INSTAGRAM.profile} target="_blank" rel="noopener noreferrer">
            perfil @memun.mavi2 ↗
          </a>
          .
        </p>
      </div>
    </section>
  );
}

export function AppShell() {
  const { section, setSection, progress, accountOpen, setAccountOpen, logout } = useApp();

  useEffect(() => {
    const close = () => setAccountOpen(false);
    document.addEventListener('click', close);
    return () => document.removeEventListener('click', close);
  }, [setAccountOpen]);

  return (
    <div id="app-screen" style={{ display: 'block' }}>
      <SparklesBackground id="tsparticles-dashboard" mode="embedded" />
      <div className="app-frame">
        <aside className="sidebar">
          <div className="sidebar-glow sidebar-glow-top" />
          <div className="sidebar-glow sidebar-glow-bottom" />

          <div className="sidebar-brand">
            <div className="logo-mark sidebar-logo">
              <img src={asset('assets/logo-figma.png')} alt="MEMUN" />
            </div>
            <div className="brand-wordmark">
              <img className="brand-wordmark-img" src={asset('assets/wordmark-memun.png')} alt="MEMUN" />
              <div className="brand-text-sub">Editor de memorias</div>
            </div>
          </div>

          <nav className="sidebar-nav">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                type="button"
                className={`nav-item ${section === item.id ? 'active' : ''}`}
                onClick={() => setSection(item.id)}
              >
                <img className="nav-icon" src={asset(`assets/${item.icon}`)} alt="" />
                {item.label}
              </button>
            ))}
          </nav>

          <div className="sidebar-footer">
            <div className="companion-chip">
              <div className="companion-avatar" />
              <div>
                <div className="companion-name">Luz</div>
              </div>
            </div>
            <button type="button" className="sidebar-logout hidden-figma" onClick={logout}>
              Log out
            </button>
          </div>
        </aside>

        <div className="app-main-wrap">
          <div className="app-panel">
            <div className="topbar">
              <div className="avance-pill">
                <div className="avance-pill-top">
                  <span>Avance Total</span>
                  <b>{progress.totalPct}%</b>
                </div>
                <AnimatedProgressBar
                  className="smooth-progress-bar"
                  barClassName="smooth-progress-bar-fill"
                  value={progress.totalPct}
                  color="var(--cyan)"
                />
              </div>

              <div className="stat-pill">
                <img className="stat-icon" src={asset('assets/icon-verdad.svg')} alt="" />
                <div className="stat-pill-body">
                  <div className="stat-pill-top">
                    <span>Verdad sobre Memun</span>
                    <b id="pct-verdad">{progress.verdadPct}%</b>
                  </div>
                  <AnimatedProgressBar
                    className="smooth-progress-bar"
                    barClassName="smooth-progress-bar-fill"
                    value={progress.verdadPct}
                    color="var(--magenta)"
                  />
                </div>
              </div>

              <div className="stat-pill">
                <img className="stat-icon" src={asset('assets/icon-memoria.svg')} alt="" />
                <div className="stat-pill-body">
                  <div className="stat-pill-top">
                    <span>Memoria personal</span>
                    <b id="pct-personal">{progress.personalPct}%</b>
                  </div>
                  <AnimatedProgressBar
                    className="smooth-progress-bar"
                    barClassName="smooth-progress-bar-fill"
                    value={progress.personalPct}
                    color="var(--cyan)"
                  />
                </div>
              </div>

              <div className="topbar-right">
                <div className="icon-btn">
                  <img className="icon-bell" src={asset('assets/icon-bell.svg')} alt="Notificaciones" />
                  <span className="notif-dot" />
                </div>
                <button
                  type="button"
                  className={`account-chip ${accountOpen ? 'open' : ''}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    setAccountOpen(!accountOpen);
                  }}
                >
                  <div className="account-avatar" />
                  <div className="account-name">Luz</div>
                </button>
                <div className={`account-dropdown ${accountOpen ? 'show' : ''}`}>
                  <div className="account-dropdown-title">My Account</div>
                  <div className="dropdown-item">Profile</div>
                  <div className="dropdown-item">FAQ</div>
                  <div className="dropdown-item">Account</div>
                  <div className="dropdown-sep" />
                  <button type="button" className="dropdown-item danger" onClick={logout}>
                    Logout
                  </button>
                </div>
              </div>
            </div>

            <div className="mobile-tabs">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  className={`mobile-tab ${section === item.id ? 'active' : ''}`}
                  onClick={() => setSection(item.id)}
                >
                  {item.mobileLabel ?? item.label}
                </button>
              ))}
            </div>

            <main className="main">
              {section === 'dashboard' && <DashboardSection />}

              {section === 'video-demo' && (
                <section id="section-video-demo">
                  <HeroBanner title="Video Demo" subtitle="Narrativa transmedia MEMUN en acción." />
                  <div className="placeholder-box">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <polygon points="5 3 19 12 5 21 5 3" />
                    </svg>
                    <p className="placeholder-title">Video en producción</p>
                    <p className="placeholder-desc">
                      El video de la narrativa transmedia funcionando se publicará aquí cuando esté listo.
                    </p>
                  </div>
                </section>
              )}

              {section === 'visados' && (
                <section id="section-visados">
                  <HeroBanner title="Visados" subtitle="Proceso de trabajo y entregas del proyecto." />
                  <div className="video-grid">
                    {VISADOS.map((v) => (
                      <article key={v.embed} className="video-card">
                        <h3 className="video-card-title">{v.title}</h3>
                        <div className="video-embed">
                          <iframe
                            src={`https://www.youtube.com/embed/${v.embed}`}
                            title={v.title}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                            loading="lazy"
                          />
                        </div>
                      </article>
                    ))}
                  </div>
                </section>
              )}

              {section === 'afiches' && (
                <section id="section-afiches">
                  <HeroBanner title="Afiches" subtitle="Material gráfico del universo MEMUN." />
                  <div className="poster-grid">
                    <figure className="poster-card">
                      <img src={asset('assets/afiche-propaganda-memun.png')} alt="Afiche Propaganda Memun" />
                      <figcaption>Afiche Propaganda Memun</figcaption>
                    </figure>
                    <figure className="poster-card">
                      <img src={asset('assets/panfleto-resistencia-memun.png')} alt="Panfleto Resistencia Memun" />
                      <figcaption>Panfleto Resistencia Memun</figcaption>
                    </figure>
                  </div>
                </section>
              )}

              {section === 'app' && (
                <section id="section-app">
                  <HeroBanner title="App" subtitle="Prototipo interactivo de la experiencia MEMUN." />
                  <div className="embed-wrap">
                    <iframe
                      className="figma-embed"
                      src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2Fbu6ngtFJ47hdB4LMY8vjNU%2FSin-t%25C3%25ADtulo%3Fnode-id%3D38-3%26scaling%3Dscale-down%26content-scaling%3Dfixed%26page-id%3D38%253A2%26starting-point-node-id%3D38%253A3"
                      allowFullScreen
                      loading="lazy"
                      title="Prototipo App MEMUN"
                    />
                  </div>
                  <p className="embed-note">
                    <a
                      href="https://www.figma.com/proto/bu6ngtFJ47hdB4LMY8vjNU/Sin-t%C3%ADtulo?node-id=38-3&scaling=scale-down&content-scaling=fixed&page-id=38%3A2&starting-point-node-id=38%3A3"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Abrir prototipo en Figma ↗
                    </a>
                  </p>
                </section>
              )}

              {section === 'instagram' && <InstagramSection />}
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}
