import { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import WhatsAppFloat from './components/layout/WhatsAppFloat';
import HomePage from './pages/HomePage';
import QuienesSomosPage from './pages/QuienesSomosPage';
import AvisoLegalPage from './pages/legal/AvisoLegalPage';
import PrivacidadPage from './pages/legal/PrivacidadPage';
import CookiesPage from './pages/legal/CookiesPage';
import NotFoundPage from './pages/NotFoundPage';
// Las landings SEO se importan de forma estática (antes iban con React.lazy):
// el prerender las renderiza a HTML en el build con renderToString, y una ruta
// suspendida solo emitiría el fallback en lugar del contenido de la página.
import LimpiezaCristalesMadridPage from './pages/landings/LimpiezaCristalesMadridPage';
import EmpresaLimpiezaMadridPage from './pages/landings/EmpresaLimpiezaMadridPage';

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
      <WhatsAppFloat />
    </>
  );
}
