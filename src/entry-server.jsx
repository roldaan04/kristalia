import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router';
import App from './App.jsx';
import { beginCollect } from './seo/headSink';

/**
 * Punto de entrada de servidor para el prerender (build).
 *
 * Renderiza la app en la ruta indicada y devuelve el HTML del <body> y los
 * metadatos de <head> recogidos por Seo.jsx a través de HeadSinkContext.
 * No se usa en el navegador; lo invoca scripts/prerender.js tras `vite build`.
 */
export function render(location) {
  const head = beginCollect();

  const html = renderToString(
    <StaticRouter location={location}>
      <App />
    </StaticRouter>,
  );

  return { html, head };
}
