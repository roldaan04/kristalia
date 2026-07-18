import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import { WHATSAPP_URL, PHONE_DISPLAY, EMAIL, ADDRESS } from '../../utils/constants';
import './Footer.css';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__main container">
        <div className="footer__brand">
          <Link to="/" className="footer__logo" aria-label="Kristalia — inicio">
            <img src={logo} alt="Kristalia logo" width="48" height="48" />
            <span className="footer__logo-name">Kristalia</span>
          </Link>

          <p className="footer__tagline">
            Limpieza profesional de cristales para empresas, locales y comunidades.
          </p>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="footer__whatsapp"
            aria-label="Contactar por WhatsApp"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.49"/>
            </svg>
            Escríbenos por WhatsApp
          </a>
        </div>

        <div className="footer__nav-group">
          <h3 className="footer__nav-title">Servicios</h3>
          <ul className="footer__nav-list">
            <li>
              <Link to="/empresa-de-limpieza-de-cristales-madrid" className="footer__nav-link">
                Limpieza de cristales en Madrid
              </Link>
            </li>
            <li>
              <Link to="/empresa-de-limpieza-madrid" className="footer__nav-link">
                Empresa de limpieza en Madrid
              </Link>
            </li>
            <li>
              <a href="#servicio-1" className="footer__nav-link">
                Limpieza de cristales en altura
              </a>
            </li>
            <li>
              <a href="#servicio-2" className="footer__nav-link">
                Escaparates y locales
              </a>
            </li>
            <li>
              <a href="#servicio-3" className="footer__nav-link">
                Comunidades de propietarios
              </a>
            </li>
            <li>
              <a href="#servicio-4" className="footer__nav-link">
                Mantenimiento para empresas
              </a>
            </li>
            <li>
              <a href="#servicio-6" className="footer__nav-link">
                Paneles solares
              </a>
            </li>
            <li>
              <a href="#servicio-5" className="footer__nav-link">
                Fachadas acristaladas
              </a>
            </li>
          </ul>
        </div>

        <div className="footer__nav-group">
          <h3 className="footer__nav-title">Empresa</h3>
          <ul className="footer__nav-list">
            <li><a href="#inicio" className="footer__nav-link">Inicio</a></li>
            <li><Link to="/quienes-somos" className="footer__nav-link">Quiénes somos</Link></li>
            <li><a href="/#contacto" className="footer__nav-link">Contacto</a></li>
          </ul>
        </div>

        <div className="footer__contact-group">
          <h3 className="footer__nav-title">Contacto</h3>
          <ul className="footer__contact-list">
            <li>
              <a href={`tel:${PHONE_DISPLAY.replace(/\s/g, '')}`} className="footer__contact-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 11a19.79 19.79 0 01-3.07-8.67A2 2 0 012 .18h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.09-1.09a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
                </svg>
                {PHONE_DISPLAY}
              </a>
            </li>

            <li>
              <a href={`mailto:${EMAIL}`} className="footer__contact-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
                {EMAIL}
              </a>
            </li>

            <li>
              <span className="footer__contact-item footer__contact-item--text">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
                {ADDRESS}
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <p className="footer__copy">
            &copy; {year} Kristalia. Todos los derechos reservados.
          </p>

          <nav className="footer__legal" aria-label="Enlaces legales">
            <Link to="/aviso-legal" className="footer__legal-link">Aviso legal</Link>
            <Link to="/privacidad" className="footer__legal-link">Privacidad</Link>
            <Link to="/cookies" className="footer__legal-link">Cookies</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}