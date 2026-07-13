import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Seo from '../../components/Seo';
import './LegalLayout.css';

export default function LegalLayout({
  title,
  seoTitle,
  seoDescription,
  path,
  updated,
  children,
}) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="legal-page">
      <Seo title={seoTitle} description={seoDescription} path={path} />

      <div className="legal-page__inner container">
        <nav className="legal-page__breadcrumb" aria-label="Migas de pan">
          <Link to="/" className="legal-page__breadcrumb-link">Inicio</Link>
          <span aria-hidden="true"> / </span>
          <span>{title}</span>
        </nav>

        <h1 className="legal-page__title">{title}</h1>

        {updated && (
          <p className="legal-page__updated">Última actualización: {updated}</p>
        )}

        <div className="legal-page__content">{children}</div>
      </div>
    </main>
  );
}
