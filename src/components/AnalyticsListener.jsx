import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { classifyLink, trackEvent } from '../utils/analytics';

/**
 * Medición de conversiones y de vistas de página en la SPA.
 *
 * - Clics: un único listener delegado en `document` cubre todos los CTA
 *   (WhatsApp, teléfono y "pedir presupuesto") sin tener que instrumentar cada
 *   componente. Funciona aunque el enlace abra en otra pestaña o haga
 *   preventDefault, porque el evento de clic se dispara igualmente.
 * - Vistas: envía `page_view` en cada cambio de ruta de React Router. La vista
 *   de la carga inicial ya la envía gtag('config') en index.html, así que se
 *   omite el primer render para no duplicarla.
 *
 * No pinta nada. Debe montarse dentro del Router (usa useLocation).
 */

// Zona de la página desde la que se hace clic, para segmentar en GA4.
function areaFromElement(el) {
  if (el.closest('.wa-float')) return 'boton_flotante';
  if (el.closest('header')) return 'header';
  if (el.closest('footer')) return 'footer';
  if (el.closest('.contact')) return 'seccion_contacto';
  return 'contenido';
}

export default function AnalyticsListener() {
  const location = useLocation();
  const isFirstRender = useRef(true);

  useEffect(() => {
    function onClick(event) {
      const anchor = event.target.closest?.('a[href]');
      if (!anchor) return;

      const href = anchor.getAttribute('href') || '';
      const name = classifyLink(href);
      if (!name) return;

      trackEvent(name, {
        link_location: areaFromElement(anchor),
        page_path: window.location.pathname,
      });
    }

    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    // Pequeño retardo para que document.title (que fija Seo.jsx en su efecto)
    // ya esté actualizado cuando se envía la vista.
    const id = setTimeout(() => {
      trackEvent('page_view', {
        page_path: location.pathname + location.search + location.hash,
        page_location: window.location.href,
        page_title: document.title,
      });
    }, 0);

    return () => clearTimeout(id);
  }, [location]);

  return null;
}
