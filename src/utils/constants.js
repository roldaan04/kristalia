export const WHATSAPP_NUMBER = '34614744754';

const whatsappUrl = (text) =>
  `https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${encodeURIComponent(text)}`;

// WhatsApp Web pierde los emojis que vienen en el enlace, el móvil no. Por eso
// el href que se renderiza (y se prerenderiza) lleva siempre la versión sin
// emojis, y WhatsAppEmojiListener la cambia por la versión con emojis al pulsar
// en un móvil. Este mapa relaciona una con otra.
const EMOJI = '[\\u{1F300}-\\u{1FAFF}\\u{2600}-\\u{27BF}]\\uFE0F?';
export const stripEmojis = (text) =>
  text
    .replace(new RegExp(`^${EMOJI}[ \\t]*`, 'gmu'), '- ')
    .replace(new RegExp(`[ \\t]*${EMOJI}`, 'gu'), '');

const emojiUrlByPlainUrl = new Map();
export const getEmojiUrl = (plainUrl) => emojiUrlByPlainUrl.get(plainUrl);

// Enlace de WhatsApp con un mensaje inicial propio. El mensaje puede llevar
// emojis; el enlace devuelto es la versión segura (sin emojis).
export const buildWhatsAppUrl = (message) => {
  const plainUrl = whatsappUrl(stripEmojis(message));
  const emojiUrl = whatsappUrl(message);
  if (emojiUrl !== plainUrl) emojiUrlByPlainUrl.set(plainUrl, emojiUrl);
  return plainUrl;
};

// Mensaje inicial de WhatsApp: lo escribe el CLIENTE, así que va en su voz y
// es corto. NO debe repetir el texto de bienvenida/preguntas: eso lo envía
// WhatsApp Business como "Mensaje de bienvenida" (Herramientas de empresa >
// Mensaje de bienvenida). Si ambos coinciden, el cliente ve el texto duplicado.
export const buildQuoteMessage = ({ service = 'limpieza' } = {}) =>
  `Hola, quisiera pedir presupuesto de ${service}.`;

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