import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  OPEN_CONSENT_EVENT,
  hasDecision,
  readConsent,
  saveConsent,
} from '../../utils/consent';
import './CookieConsent.css';

/**
 * Banner + panel de configuración de cookies (Consent Mode v2).
 *
 * - Estado inicial 'hidden' → en el primer render (servidor y cliente) no pinta
 *   nada, así no hay desajuste de hidratación con el prerender.
 * - Tras montar, si no hay decisión guardada, muestra el banner.
 * - Escucha OPEN_CONSENT_EVENT para reabrirse desde el footer.
 * - Aceptar y rechazar tienen el mismo tamaño y prominencia (sin dark patterns).
 */
export default function CookieConsent() {
  const [mode, setMode] = useState('hidden'); // 'hidden' | 'banner' | 'settings'
  const [analytics, setAnalytics] = useState(false);
  const [ads, setAds] = useState(false);
  const dialogRef = useRef(null);

  const acceptAll = () => {
    saveConsent({ analytics: true, ads: true });
    setMode('hidden');
  };

  const rejectAll = () => {
    saveConsent({ analytics: false, ads: false });
    setMode('hidden');
  };

  const savePreferences = () => {
    saveConsent({ analytics, ads });
    setMode('hidden');
  };

  // Cerrar el panel sin guardar: si ya había decisión, se oculta; si no, se
  // vuelve al banner para no saltarse el consentimiento.
  const dismissSettings = () => {
    setMode(hasDecision() ? 'hidden' : 'banner');
  };

  // Decisión inicial + suscripción al evento de reapertura. El estado se
  // resuelve tras montar (no en el initializer de useState) para no leer
  // localStorage en el servidor y mantener la hidratación consistente.
  useEffect(() => {
    const openSettings = () => {
      const current = readConsent();
      setAnalytics(!!current?.analytics);
      setAds(!!current?.ads);
      setMode('settings');
    };
    window.addEventListener(OPEN_CONSENT_EVENT, openSettings);

    const saved = readConsent();
    /* eslint-disable react-hooks/set-state-in-effect --
       Solo se puede leer localStorage en cliente; decidir aquí, tras montar, es
       precisamente lo que evita el desajuste de hidratación con el prerender. */
    if (saved) {
      setAnalytics(!!saved.analytics);
      setAds(!!saved.ads);
    } else {
      setMode('banner');
    }
    /* eslint-enable react-hooks/set-state-in-effect */

    return () => window.removeEventListener(OPEN_CONSENT_EVENT, openSettings);
  }, []);

  // Foco al abrir el panel + cerrar con Escape + bloqueo de scroll de fondo.
  useEffect(() => {
    if (mode !== 'settings') return undefined;

    dialogRef.current?.focus();
    document.body.style.overflow = 'hidden';

    const onKeyDown = (e) => {
      if (e.key === 'Escape') setMode(hasDecision() ? 'hidden' : 'banner');
    };
    document.addEventListener('keydown', onKeyDown);

    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = '';
    };
  }, [mode]);

  if (mode === 'hidden') return null;

  if (mode === 'banner') {
    return (
      <section className="cc-banner" role="region" aria-label="Aviso de cookies">
        <div className="cc-banner__inner container">
          <div className="cc-banner__text">
            <p className="cc-banner__title">Cookies en Kristalia</p>
            <p className="cc-banner__desc">
              Usamos cookies propias necesarias para el funcionamiento del sitio y,
              solo con tu permiso, cookies de analítica (Google Analytics vía Google
              Tag Manager) para entender de forma agregada cómo se usa la web. Puedes
              aceptarlas, rechazarlas o configurarlas. Más información en la{' '}
              <Link to="/cookies">Política de cookies</Link>.
            </p>
          </div>
          <div className="cc-banner__actions">
            <button type="button" className="cc-btn cc-btn--ghost" onClick={() => setMode('settings')}>
              Configurar
            </button>
            <button type="button" className="cc-btn cc-btn--outline" onClick={rejectAll}>
              Rechazar
            </button>
            <button type="button" className="cc-btn cc-btn--primary" onClick={acceptAll}>
              Aceptar todas
            </button>
          </div>
        </div>
      </section>
    );
  }

  // mode === 'settings'
  return (
    <div className="cc-overlay" onClick={dismissSettings}>
      <div
        className="cc-dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby="cc-dialog-title"
        aria-describedby="cc-dialog-intro"
        tabIndex={-1}
        ref={dialogRef}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          className="cc-dialog__close"
          onClick={dismissSettings}
          aria-label="Cerrar configuración de cookies"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
            <path d="M18 6 6 18M6 6l12 12" />
          </svg>
        </button>

        <h2 id="cc-dialog-title" className="cc-dialog__title">Configuración de cookies</h2>
        <p id="cc-dialog-intro" className="cc-dialog__intro">
          Elige qué cookies permites. Podrás cambiar tu decisión cuando quieras
          desde «Configurar cookies» en el pie de página.
        </p>

        <ul className="cc-cats">
          <li className="cc-cat">
            <div className="cc-cat__head">
              <span className="cc-cat__name">Necesarias</span>
              <span className="cc-cat__badge">Siempre activas</span>
            </div>
            <p className="cc-cat__desc">
              Imprescindibles para que la web funcione y para recordar tu decisión
              sobre las cookies. No se pueden desactivar.
            </p>
          </li>

          <li className="cc-cat">
            <div className="cc-cat__head">
              <label className="cc-cat__name" htmlFor="cc-analytics">Analítica</label>
              <label className="cc-switch">
                <input
                  id="cc-analytics"
                  type="checkbox"
                  checked={analytics}
                  onChange={(e) => setAnalytics(e.target.checked)}
                />
                <span className="cc-switch__slider" aria-hidden="true" />
              </label>
            </div>
            <p className="cc-cat__desc">
              Google Analytics 4 (a través de Google Tag Manager) para medir de forma
              agregada y anónima cómo se usa la web. Se activan solo si lo permites.
            </p>
          </li>

          <li className="cc-cat">
            <div className="cc-cat__head">
              <label className="cc-cat__name" htmlFor="cc-ads">Publicidad</label>
              <label className="cc-switch">
                <input
                  id="cc-ads"
                  type="checkbox"
                  checked={ads}
                  onChange={(e) => setAds(e.target.checked)}
                />
                <span className="cc-switch__slider" aria-hidden="true" />
              </label>
            </div>
            <p className="cc-cat__desc">
              Cookies de personalización publicitaria. Actualmente Kristalia no las
              utiliza; permanecen desactivadas salvo que las actives.
            </p>
          </li>
        </ul>

        <div className="cc-dialog__actions">
          <button type="button" className="cc-btn cc-btn--outline" onClick={rejectAll}>
            Rechazar todo
          </button>
          <button type="button" className="cc-btn cc-btn--primary" onClick={savePreferences}>
            Guardar preferencias
          </button>
        </div>
      </div>
    </div>
  );
}
