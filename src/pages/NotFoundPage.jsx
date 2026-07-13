import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import Button from '../components/ui/Button';
import './NotFoundPage.css';

export default function NotFoundPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="notfound">
      <Seo
        title="Página no encontrada | Kristalia"
        description="La página que buscas no existe o ha cambiado de dirección."
        path="/404"
        noindex
      />
      <div className="notfound__inner container">
        <span className="notfound__code">404</span>
        <h1 className="notfound__title">Esta página no existe</h1>
        <p className="notfound__text">
          Puede que el enlace esté roto o que la página se haya movido. Vuelve al inicio
          y sigue navegando.
        </p>
        <div className="notfound__actions">
          <Button variant="primary" size="lg" href="/">Volver al inicio</Button>
          <Link to="/quienes-somos" className="notfound__link">Conócenos</Link>
        </div>
      </div>
    </main>
  );
}
