import { useEffect } from 'react';
import { getEmojiUrl } from '../utils/constants';

/**
 * En móvil, los enlaces de WhatsApp pasan a la versión del mensaje con emojis
 * justo antes de abrirse (WhatsApp Web no los muestra bien, el móvil sí).
 * En ordenador no hace nada y se mantiene la versión sin emojis.
 *
 * No pinta nada. Un único listener delegado en `document`, en fase de captura
 * para actuar antes de que el navegador lea el href.
 */

function isMobileDevice() {
  const ua = navigator.userAgent || '';
  if (navigator.userAgentData?.mobile) return true;
  if (/Android|iPhone|iPad|iPod|Mobi/i.test(ua)) return true;
  // iPad con "sitio de escritorio": se identifica como Mac pero es táctil.
  return /Macintosh/i.test(ua) && navigator.maxTouchPoints > 1;
}

export default function WhatsAppEmojiListener() {
  useEffect(() => {
    if (!isMobileDevice()) return undefined;

    function onClick(event) {
      const anchor = event.target.closest?.('a[href*="api.whatsapp.com/send"]');
      if (!anchor) return;

      const emojiUrl = getEmojiUrl(anchor.href);
      if (emojiUrl) anchor.href = emojiUrl;
    }

    document.addEventListener('click', onClick, true);
    return () => document.removeEventListener('click', onClick, true);
  }, []);

  return null;
}
