import { Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import QuienesSomosPage from './pages/QuienesSomosPage';
import AvisoLegalPage from './pages/legal/AvisoLegalPage';
import PrivacidadPage from './pages/legal/PrivacidadPage';
import CookiesPage from './pages/legal/CookiesPage';
import NotFoundPage from './pages/NotFoundPage';

export default function App() {
  return (
    <>
      <a href="#contenido" className="skip-link">Saltar al contenido</a>
      <Header />
      <div id="contenido" tabIndex={-1}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/quienes-somos" element={<QuienesSomosPage />} />
          <Route path="/aviso-legal" element={<AvisoLegalPage />} />
          <Route path="/privacidad" element={<PrivacidadPage />} />
          <Route path="/cookies" element={<CookiesPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}
