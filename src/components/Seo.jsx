import { useEffect } from 'react';

/**
 * Gestor de metadatos por página, sin dependencias.
 *
 * Actualiza (o crea) las etiquetas del <head> que ya vienen por defecto en
 * index.html: title, description, canonical, robots y Open Graph / Twitter.
 * Al actualizar los elementos existentes en lugar de añadir nuevos, no se
 * duplican etiquetas y los bots que sí ejecutan JS (Google) ven los valores
 * correctos de cada ruta. Los bots que no ejecutan JS ven los valores
 * estáticos de index.html (los de la home).
 */

export const SITE_URL = 'https://kristalia.es';
const DEFAULT_IMAGE = `${SITE_URL}/og-image.jpg`;

function upsertMeta(attr, key, content) {
  if (content == null) return;
  let el = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function upsertLink(rel, href) {
  let el = document.head.querySelector(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', rel);
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}

function upsertJsonLd(id, data) {
  const selector = `script[data-seo="${id}"]`;
  let el = document.head.querySelector(selector);
  if (!data) {
    if (el) el.remove();
    return;
  }
  if (!el) {
    el = document.createElement('script');
    el.type = 'application/ld+json';
    el.setAttribute('data-seo', id);
    document.head.appendChild(el);
  }
  el.textContent = JSON.stringify(data);
}

export default function Seo({
  title,
  description,
  path = '/',
  image,
  noindex = false,
  jsonLd = null,
  jsonLdId = null,
}) {
  useEffect(() => {
    const url = SITE_URL + path;
    const img = image
      ? image.startsWith('http')
        ? image
        : SITE_URL + image
      : DEFAULT_IMAGE;

    if (title) document.title = title;
    upsertMeta('name', 'description', description);
    upsertMeta('name', 'robots', noindex ? 'noindex, follow' : 'index, follow');
    upsertLink('canonical', url);

    upsertMeta('property', 'og:title', title);
    upsertMeta('property', 'og:description', description);
    upsertMeta('property', 'og:url', url);
    upsertMeta('property', 'og:image', img);

    upsertMeta('name', 'twitter:title', title);
    upsertMeta('name', 'twitter:description', description);
    upsertMeta('name', 'twitter:image', img);

    if (jsonLd && jsonLdId) upsertJsonLd(jsonLdId, jsonLd);

    return () => {
      if (jsonLdId) upsertJsonLd(jsonLdId, null);
    };
  }, [title, description, path, image, noindex, jsonLd, jsonLdId]);

  return null;
}
