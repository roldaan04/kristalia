import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logo from '../../assets/logo.png';
import Button from '../ui/Button';
import { WHATSAPP_URL } from '../../utils/constants';
import './Header.css';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const isHome = location.pathname === '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';

    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const scrollToHash = (hash) => {
    const el = document.querySelector(hash);

    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      return;
    }

    if (hash === '#inicio') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleHashLink = (e, hash) => {
    e.preventDefault();
    setMenuOpen(false);

    if (isHome) {
      scrollToHash(hash);
      return;
    }

    navigate('/');

    setTimeout(() => {
      scrollToHash(hash);
    }, 120);
  };

  const headerClass = [
    'header',
    scrolled || !isHome ? 'header--solid' : 'header--transparent',
    menuOpen ? 'header--menu-open' : '',
  ].filter(Boolean).join(' ');

  return (
    <header className={headerClass}>
      <div className="header__inner container">
        <Link
          to="/"
          className="header__logo"
          aria-label="Kristalia — ir al inicio"
          onClick={(e) => handleHashLink(e, '#inicio')}
        >
          <img src={logo} alt="Kristalia logo" width="44" height="44" />
          <span className="header__logo-name">Kristalia</span>
        </Link>

        <nav className="header__nav" aria-label="Navegación principal">
          <a
            href="#inicio"
            className={`header__nav-link ${isHome && !scrolled ? 'header__nav-link--light' : ''}`}
            onClick={(e) => handleHashLink(e, '#inicio')}
          >
            Inicio
          </a>

          <Link
            to="/quienes-somos"
            className={`header__nav-link ${location.pathname === '/quienes-somos' ? 'header__nav-link--active' : ''} ${isHome && !scrolled ? 'header__nav-link--light' : ''}`}
          >
            Quiénes somos
          </Link>

          <a
            href="#servicios"
            className={`header__nav-link ${isHome && !scrolled ? 'header__nav-link--light' : ''}`}
            onClick={(e) => handleHashLink(e, '#servicios')}
          >
            Servicios
          </a>

          <a
            href="#contacto"
            className={`header__nav-link ${isHome && !scrolled ? 'header__nav-link--light' : ''}`}
            onClick={(e) => handleHashLink(e, '#contacto')}
          >
            Contacto
          </a>
        </nav>

        <div className="header__actions">
          <Button
            variant="whatsapp"
            size="sm"
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contactar por WhatsApp"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.49" />
            </svg>
            WhatsApp
          </Button>

          <Button
            variant="primary"
            size="sm"
            href="#contacto"
            onClick={(e) => handleHashLink(e, '#contacto')}
          >
            Pedir presupuesto
          </Button>
        </div>

        <button
          className={`header__hamburger ${menuOpen ? 'header__hamburger--open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {menuOpen && (
        <div className="header__mobile-menu" role="dialog" aria-label="Menú de navegación">
          <nav>
            <a
              href="#inicio"
              className="header__mobile-link"
              onClick={(e) => handleHashLink(e, '#inicio')}
            >
              Inicio
            </a>

            <Link to="/quienes-somos" className="header__mobile-link">
              Quiénes somos
            </Link>

            <a
              href="#servicios"
              className="header__mobile-link"
              onClick={(e) => handleHashLink(e, '#servicios')}
            >
              Servicios
            </a>

            <a
              href="#contacto"
              className="header__mobile-link"
              onClick={(e) => handleHashLink(e, '#contacto')}
            >
              Contacto
            </a>
          </nav>

          <div className="header__mobile-actions">
            <Button
              variant="whatsapp"
              size="md"
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.49" />
              </svg>
              Contactar por WhatsApp
            </Button>

            <Button
              variant="primary"
              size="md"
              href="#contacto"
              onClick={(e) => handleHashLink(e, '#contacto')}
            >
              Pedir presupuesto
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}