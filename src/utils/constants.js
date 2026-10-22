export const WHATSAPP_NUMBER = '34614744754';

// Enlace de WhatsApp con un mensaje inicial propio.
export const buildWhatsAppUrl = (message) =>
  `https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${encodeURIComponent(message)}`;

// Mensaje inicial de WhatsApp: siempre la misma dinámica (zona, tipo de
// inmueble, tamaño y fotos). Las landings de servicios concretos solo
// adaptan el asunto y las preguntas de tipo de inmueble y tamaño.
export const buildQuoteMessage = ({
  subject = 'tu presupuesto personalizado',
  placeQuestion = '🏢 ¿Es para una casa, comunidad, oficina o local comercial?',
  sizeQuestion = '🪟 ¿Cuántos cristales o ventanales son, aproximadamente? (Indícanos si hay zonas de difícil acceso o en altura).',
} = {}) =>
  [
    '¡Hola! Bienvenido/a a Kristalia ✨',
    'Queremos darte la respuesta más rápida y precisa posible.',
    `Para calcular ${subject} en unos minutos, cuéntanos:`,
    '📍 ¿En qué zona/municipio de Madrid estás?',
    placeQuestion,
    sizeQuestion,
    '📸 Fotos: Si puedes enviarnos un par de fotos o un vídeo rápido, ¡mucho mejor! Nos ayuda a ver el acceso exacto y darte la mejor tarifa cerrada sin sorpresas.',
    'Tan pronto como nos leas, analizamos tu caso y te responderemos. ¡Gracias por confiar en nosotros!',
  ].join('\n\n');

// Mensaje por defecto: botón flotante, cabecera, footer, hero y bloques de conversión.
export const WHATSAPP_URL = buildWhatsAppUrl(buildQuoteMessage());
export const WHATSAPP_QUOTE_URL = WHATSAPP_URL;

export const PHONE_DISPLAY = '+34 614 744 754';
// Formato corto para los bloques de conversión y valor para href="tel:".
export const PHONE_LOCAL = '614 744 754';
export const PHONE_TEL = '+34614744754';
export const EMAIL = 'info@kristalia.es';
export const ADDRESS = 'Madrid, España';

// Ficha de Google con las reseñas.
// TODO: sustituir por el enlace directo de la ficha (Google Business Profile → "Compartir" → copiar enlace).
export const GOOGLE_REVIEWS_URL = 'https://www.google.com/maps/search/?api=1&query=KRISTALIA+Limpieza+de+Cristales+Madrid';

// Datos identificativos del titular para las páginas legales (Aviso legal y Privacidad).
// "Kristalia" es únicamente el nombre comercial: el titular y responsable es un profesional
// autónomo, no una sociedad. El teléfono y el correo se reutilizan desde PHONE_DISPLAY y EMAIL.
// TODO (antes de producción): "Madrid, España" es solo una ubicación orientativa; se recomienda
// sustituirla por un domicilio profesional completo o una dirección válida para notificaciones.
export const LEGAL_INFO = {
  ownerName: 'Willington Abel Campos Briceño',
  taxId: 'Z3926024K',
  tradeName: 'Kristalia',
  location: ADDRESS,
  website: 'https://kristalia.es',
};

export const NAV_LINKS = [
  { label: 'Inicio', href: '/', hash: '#inicio' },
  { label: 'Quiénes somos', href: '/quienes-somos' },
  { label: 'Servicios', href: '/', hash: '#servicios' },
  { label: 'Contacto', href: '/', hash: '#contacto' },
];