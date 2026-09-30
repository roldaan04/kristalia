import { StrictMode } from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App.jsx';

// Al recargar la página con un ancla en la URL (p. ej. /#contacto) el navegador
// restaura la posición del anexo y la URL queda "sucia". Queremos que una recarga
// siempre empiece arriba de la página actual, conservando ruta y query pero
// eliminando el hash. Se hace antes de montar React y solo en el arranque, así
// que la navegación por anclas dentro de la web sigue funcionando igual.
if (window.location.hash) {
  window.history.replaceState(
    null,
    '',
    window.location.pathname + window.location.search
  );
}

if ('scrollRestoration' in window.history) {
  window.history.scrollRestoration = 'manual';
}

window.scrollTo(0, 0);

const container = document.getElementById('root');

const app = (
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);

// En producción el HTML llega prerenderizado (el #root ya tiene contenido), así
// que hidratamos sobre él. En desarrollo el #root está vacío y montamos normal.
if (container.firstElementChild) {
  hydrateRoot(container, app);
} else {
  createRoot(container).render(app);
}
