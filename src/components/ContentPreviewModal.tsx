import { useEffect } from 'react';
import { useApp } from '@/context/AppContext';
import { MODULE_PREVIEWS } from '@/data/content';

export function ContentPreviewModal() {
  const { previewModule, closePreview } = useApp();

  useEffect(() => {
    if (!previewModule) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') closePreview();
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [previewModule, closePreview]);

  if (!previewModule) return null;

  const preview = MODULE_PREVIEWS[previewModule];

  return (
    <div
      className="modal-overlay show"
      onClick={(e) => {
        if (e.target === e.currentTarget) closePreview();
      }}
    >
      <div className="modal modal-content-preview" role="dialog" aria-modal="true" aria-labelledby="content-preview-title">
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
              {preview.subtitle}
            </div>
            <div id="content-preview-title" className="anton" style={{ fontSize: '20px', marginTop: '5px' }}>
              {preview.title}
            </div>
          </div>
          <button type="button" className="modal-close" onClick={closePreview} aria-label="Cerrar">
            ✕
          </button>
        </div>

        <div className="modal-body">
          {preview.kind === 'youtube' ? (
            <div className="video-embed content-preview-video">
              <iframe
                src={preview.src}
                title={preview.frameTitle}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                loading="lazy"
              />
            </div>
          ) : (
            <div className="embed-wrap content-preview-frame">
              <iframe
                className="content-preview-iframe"
                src={preview.src}
                title={preview.frameTitle}
                allowFullScreen
                loading="lazy"
              />
            </div>
          )}

          <p className="embed-note content-preview-note">
            <a href={preview.externalUrl} target="_blank" rel="noopener noreferrer">
              Abrir en pestaña nueva ↗
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
