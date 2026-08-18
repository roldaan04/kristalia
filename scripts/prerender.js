/**
 * Prerender post-build.
 *
 * Tras `vite build` (cliente → dist/) y `vite build --ssr` (servidor → dist-ssr/),
 * este script renderiza cada ruta pública a HTML estático y escribe un
 * index.html propio por ruta dentro de dist/, con su title, description,
 * canonical, Open Graph, Twitter y JSON-LD ya presentes en el HTML inicial y
 * con el contenido de la página dentro de <div id="root">.
 *
 * No toca producción. Solo genera ficheros en dist/.
 */
import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

const ROOT = process.cwd();
const DIST = path.join(ROOT, 'dist');
const SSR_ENTRY = path.join(ROOT, 'dist-ssr', 'entry-server.js');
const SITE_URL = 'https://kristalia.es';

// Rutas públicas a prerenderizar. `location` es la ruta que se renderiza;
// `out` es el fichero de salida dentro de dist/.
// La entrada 404 usa una ruta inexistente para forzar el comodín (NotFoundPage).
const PAGES = [
  { location: '/', out: 'index.html' },
  { location: '/quienes-somos', out: 'quienes-somos/index.html' },
  { location: '/empresa-de-limpieza-de-cristales-madrid', out: 'empresa-de-limpieza-de-cristales-madrid/index.html' },
  { location: '/empresa-de-limpieza-madrid', out: 'empresa-de-limpieza-madrid/index.html' },
  { location: '/limpieza-particulares-madrid', out: 'limpieza-particulares-madrid/index.html' },
  { location: '/aviso-legal', out: 'aviso-legal/index.html' },
  { location: '/privacidad', out: 'privacidad/index.html' },
  { location: '/cookies', out: 'cookies/index.html' },
  { location: '/__prerender_404__', out: '404.html' },
];

function escAttr(value) {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

// Evita romper el <script> si algún texto del JSON-LD contuviera "</script>".
function safeJson(data) {
  return JSON.stringify(data).replace(/</g, '\\u003c');
}

function buildHead(head) {
  const title = head.title ?? 'Kristalia';
  const description = head.description ?? '';
  const robots = head.robots ?? 'index, follow';
  const canonical = head.canonical ?? `${SITE_URL}/`;
  const image = head.image ?? `${SITE_URL}/og-image.jpg`;

  const tags = [
    `<title>${escAttr(title)}</title>`,
    `<meta name="description" content="${escAttr(description)}" />`,
    `<meta name="robots" content="${escAttr(robots)}" />`,
    `<link rel="canonical" href="${escAttr(canonical)}" />`,
    `<meta property="og:title" content="${escAttr(title)}" />`,
    `<meta property="og:description" content="${escAttr(description)}" />`,
    `<meta property="og:url" content="${escAttr(canonical)}" />`,
    `<meta property="og:image" content="${escAttr(image)}" />`,
    `<meta name="twitter:title" content="${escAttr(title)}" />`,
    `<meta name="twitter:description" content="${escAttr(description)}" />`,
    `<meta name="twitter:image" content="${escAttr(image)}" />`,
  ];

  if (head.jsonLd && head.jsonLd.data) {
    tags.push(
      `<script type="application/ld+json" data-seo="${escAttr(head.jsonLd.id)}">${safeJson(head.jsonLd.data)}</script>`,
    );
  }

  return tags.join('\n    ');
}

async function main() {
  const template = fs.readFileSync(path.join(DIST, 'index.html'), 'utf-8');

  if (!template.includes('<!--app-head-->') || !template.includes('<!--app-html-->')) {
    throw new Error('dist/index.html no contiene los marcadores <!--app-head--> / <!--app-html-->.');
  }

  const { render } = await import(pathToFileURL(SSR_ENTRY).href);

  const results = [];

  for (const page of PAGES) {
    const { html, head } = render(page.location);
    const outHtml = template
      .replace('<!--app-head-->', buildHead(head))
      .replace('<!--app-html-->', html);

    const outPath = path.join(DIST, page.out);
    fs.mkdirSync(path.dirname(outPath), { recursive: true });
    fs.writeFileSync(outPath, outHtml, 'utf-8');

    results.push({ out: page.out, title: head.title, canonical: head.canonical, bytes: outHtml.length });
    console.log(`prerender  ${page.out.padEnd(52)}  ${head.title ?? ''}`);
  }

  console.log(`\n✓ Prerenderizadas ${results.length} páginas en dist/.`);
}

main().catch((err) => {
  console.error('Error en el prerender:', err);
  process.exit(1);
});
