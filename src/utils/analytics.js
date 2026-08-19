/**
 * Envío de eventos a Google Analytics 4 (gtag).
 *
 * - Seguro en SSR/prerender: si no hay `window` no hace nada.
 * - No-op si `gtag` aún no está disponible (p. ej. si en el futuro se añade
 *   Consent Mode y el consentimiento está denegado, los eventos no se envían).
 * - Los nombres de evento están centralizados aquí para poder ajustarlos sin
 *   tocar los componentes.
 */

// Clasifica un href en el evento de conversión que le corresponde (o null).
// Función pura: sirve tanto al listener como a las pruebas.
export function classifyLink(href) {
  if (!href) return null;
  if (/^https?:\/\/wa\.me\//i.test(href) || /whatsapp/i.test(href)) return 'whatsapp_click';
  if (/^tel:/i.test(href)) return 'phone_click';
  if (href === '/#contacto' || href === '#contacto') return 'cta_presupuesto_click';
  return null;
}

// Empuja el evento al dataLayer para que Google Tag Manager pueda dispararlo
// (respetando el consentimiento). Antes se usaba gtag('event',…) directo; con
// la migración a GTM el patrón correcto es un push con `event` al dataLayer.
export function trackEvent(name, params = {}) {
  if (typeof window === 'undefined') return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event: name, ...params });
}
