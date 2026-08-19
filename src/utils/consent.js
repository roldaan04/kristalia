/**
 * Gestión centralizada del consentimiento (Consent Mode v2).
 *
 * - Persiste la decisión en localStorage con versión y fecha.
 * - Traduce la decisión a `gtag('consent','update', …)`.
 * - Todo está protegido para SSR/prerender: si no hay `window`, no hace nada.
 *
 * La forma guardada coincide con la que lee el script inline de index.html,
 * que restaura el consentimiento antes de que GTM dispare etiquetas.
 */

export const CONSENT_KEY = 'kristalia_consent';
export const CONSENT_VERSION = 1;

// Evento propio para reabrir el panel desde cualquier sitio (p. ej. el footer)
// sin acoplar componentes.
export const OPEN_CONSENT_EVENT = 'kristalia:open-consent';

function pushConsentUpdate(params) {
  if (typeof window === 'undefined') return;
  window.dataLayer = window.dataLayer || [];
  if (typeof window.gtag === 'function') {
    window.gtag('consent', 'update', params);
  } else {
    // Fallback por si gtag aún no está definido (no debería ocurrir: el script
    // inline de index.html lo define antes de cargar la app).
    window.dataLayer.push(['consent', 'update', params]);
  }
}

export function readConsent() {
  if (typeof window === 'undefined') return null;
  try {
    const raw = window.localStorage.getItem(CONSENT_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (!parsed || parsed.version !== CONSENT_VERSION) return null;
    return parsed;
  } catch {
    return null;
  }
}

export function hasDecision() {
  return readConsent() !== null;
}

// Aplica el estado a Consent Mode. `analytics` y `ads` son booleanos.
export function applyConsent({ analytics, ads }) {
  pushConsentUpdate({
    analytics_storage: analytics ? 'granted' : 'denied',
    ad_storage: ads ? 'granted' : 'denied',
    ad_user_data: ads ? 'granted' : 'denied',
    ad_personalization: ads ? 'granted' : 'denied',
  });
}

// Guarda la decisión y la aplica. Devuelve el registro guardado.
export function saveConsent({ analytics, ads }) {
  const record = {
    analytics: !!analytics,
    ads: !!ads,
    version: CONSENT_VERSION,
    date: new Date().toISOString(),
  };
  if (typeof window !== 'undefined') {
    try {
      window.localStorage.setItem(CONSENT_KEY, JSON.stringify(record));
    } catch {
      /* almacenamiento no disponible: se aplica igualmente en esta sesión */
    }
  }
  applyConsent(record);
  return record;
}

// Reabre el panel de configuración (lo escucha CookieConsent).
export function openConsentSettings() {
  if (typeof window === 'undefined') return;
  window.dispatchEvent(new Event(OPEN_CONSENT_EVENT));
}
