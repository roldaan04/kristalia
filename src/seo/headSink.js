/**
 * Recogida de metadatos SEO durante el prerender (build), solo en el servidor.
 *
 * En el navegador no se usa: `Seo.jsx` solo llama a `collectHead` cuando
 * `typeof window === 'undefined'` (Node), así que el comportamiento en cliente
 * es idéntico al anterior (actualiza el <head> vía useEffect). El prerender es
 * secuencial (una ruta cada vez), por lo que un único objeto módulo es seguro:
 * `beginCollect()` lo reinicia antes de renderizar cada página y `collectHead()`
 * vuelca en él los valores resueltos por `Seo.jsx` en tiempo de render.
 */
let current = null;

export function beginCollect() {
  current = {};
  return current;
}

export function collectHead(data) {
  if (current) Object.assign(current, data);
}
