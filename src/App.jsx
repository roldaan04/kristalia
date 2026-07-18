import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import QuienesSomosPage from './pages/QuienesSomosPage';
import AvisoLegalPage from './pages/legal/AvisoLegalPage';
import PrivacidadPage from './pages/legal/PrivacidadPage';
import CookiesPage from './pages/legal/CookiesPage';
import NotFoundPage from './pages/NotFoundPage';

// Las landings SEO se cargan bajo demanda: son páginas largas y de tráfico
// directo desde buscador, así que no deben engordar el bundle inicial de la home.
const LimpiezaCristalesMadridPage = lazy(() => import('./pages/landings/LimpiezaCristalesMadridPage'));
const EmpresaLimpiezaMadridPage = lazy(() => import('./pages/landings/EmpresaLimpiezaMadridPage'));

export default function App() {
  return (
    <>
      <a href="#contenido" className="skip-link">Saltar al contenido</a>
      <Header />
      <div id="contenido" tabIndex={-1}>
        <Suspense fallback={<div className="route-fallback" aria-busy="true" />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/quienes-somos" element={<QuienesSomosPage />} />
            <Route
              path="/empresa-de-limpieza-de-cristales-madrid"
              element={<LimpiezaCristalesMadridPage />}
            />
            <Route
              path="/empresa-de-limpieza-madrid"
              element={<EmpresaLimpiezaMadridPage />}
            />
            <Route path="/aviso-legal" element={<AvisoLegalPage />} />
            <Route path="/privacidad" element={<PrivacidadPage />} />
            <Route path="/cookies" element={<CookiesPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </div>
      <Footer />
    </>
  );
}
