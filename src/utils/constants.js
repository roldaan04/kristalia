export const WHATSAPP_NUMBER = '34614744754';
export const WHATSAPP_MESSAGE = encodeURIComponent('Hola, me gustaría solicitar información sobre vuestros servicios de limpieza de cristales.');
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

export const PHONE_DISPLAY = '+34 614 744 754';
export const EMAIL = 'info@kristalia.es';
export const ADDRESS = 'Madrid, España';

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