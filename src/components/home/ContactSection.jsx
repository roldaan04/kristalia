import { Link } from 'react-router-dom';
import Button from '../ui/Button';
import { WHATSAPP_URL, PHONE_DISPLAY, LEGAL_INFO } from '../../utils/constants';
import './ContactSection.css';

export default function ContactSection() {
  return (
    <section className="contact section">
      <div id="contacto" className="contact__anchor" aria-hidden="true" />

      <div className="container">
        <div className="contact__layout">
          <div className="contact__info">
            <span className="section-tag">Contacto</span>
            <div className="gold-line" />

            <h2 className="section-title">Solicita tu presupuesto</h2>

            <p className="contact__intro">
              Cuéntanos por WhatsApp qué necesitas y te preparamos un presupuesto orientativo
              de forma rápida, cómoda y sin compromiso.
            </p>

            <ul className="contact__details">
              <li>
                <a href={`tel:${PHONE_DISPLAY.replace(/\s/g, '')}`} className="contact__detail-link">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 11a19.79 19.79 0 01-3.07-8.67A2 2 0 012 .18h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.09-1.09a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                  </svg>
                  {PHONE_DISPLAY}
                </a>
              </li>

              <li>
                <Button
                  variant="whatsapp"
                  size="md"
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact__whatsapp-btn"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.49" />
                  </svg>
                  Hablar por WhatsApp
                </Button>
              </li>
            </ul>

            <div className="contact__note">
              <p>
                Puedes enviarnos fotos, ubicación aproximada y una breve descripción del trabajo.
              </p>
              <p className="contact__privacy">
                Responsable: {LEGAL_INFO.ownerName}, profesional autónomo que opera bajo el
                nombre comercial Kristalia. Finalidad: atender tu consulta y gestionar tu
                solicitud de presupuesto o servicio. Más información en la{' '}
                <Link to="/privacidad">Política de privacidad</Link>.
              </p>
            </div>
          </div>

          <div className="contact__guide">
            <span className="contact__guide-tag">Presupuesto rápido</span>

            <h3 className="contact__guide-title">
              Envíanos fotos y te orientamos
            </h3>

            <p className="contact__guide-intro">
              Te lo ponemos fácil para valorar el trabajo con rapidez y darte una respuesta clara.
            </p>

            <div className="contact__steps">
              <div className="contact__step">
                <span className="contact__step-number">01</span>
                <div>
                  <h4>Envíanos unas fotos</h4>
                  <p>De los cristales, escaparate, fachada o zona que quieras limpiar.</p>
                </div>
              </div>

              <div className="contact__step">
                <span className="contact__step-number">02</span>
                <div>
                  <h4>Cuéntanos tu caso</h4>
                  <p>Indícanos si es vivienda, local, oficina o comunidad, y la ubicación aproximada.</p>
                </div>
              </div>

              <div className="contact__step">
                <span className="contact__step-number">03</span>
                <div>
                  <h4>Recibe una propuesta</h4>
                  <p>Revisamos la información y te respondemos con la mejor opción para tu caso.</p>
                </div>
              </div>
            </div>

            <div className="contact__checklist">
              <h4>Qué nos ayuda a darte un presupuesto más preciso</h4>
              <ul>
                <li>Fotos generales del trabajo</li>
                <li>Tipo de espacio</li>
                <li>Altura o acceso, si aplica</li>
                <li>Limpieza puntual o mantenimiento</li>
              </ul>
            </div>

            <Button
              variant="primary"
              size="lg"
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="contact__guide-btn"
            >
              Enviar información por WhatsApp
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
} 