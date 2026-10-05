import Button from '../ui/Button';
import heroImg from '../../assets/cristales/kristalia.webp';
import { WHATSAPP_QUOTE_URL, PHONE_DISPLAY } from '../../utils/constants';
import './Hero.css';

// Iconos SVG inline del hero móvil (mismo patrón que el icono de WhatsApp del
// Header). Heredan el color con currentColor, así que se tiñen desde el CSS.
function Icon({ children, ...props }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      {children}
    </svg>
  );
}

const mobileBenefits = [
  {
    label: 'Profesionales cualificados',
    icon: (
      <Icon>
        <path d="M12 3l7 3v5c0 4.5-3 8.3-7 10-4-1.7-7-5.5-7-10V6l7-3z" />
        <path d="M8.5 12l2.5 2.5 4.5-5" />
      </Icon>
    ),
  },
  {
    label: 'Rapidez y eficiencia',
    icon: (
      <Icon>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3.5 2" />
      </Icon>
    ),
  },
  {
    label: 'Resultados impecables',
    icon: (
      <Icon>
        <path d="M12 3c.6 4.6 2.4 6.4 7 7-4.6.6-6.4 2.4-7 7-.6-4.6-2.4-6.4-7-7 4.6-.6 6.4-2.4 7-7z" />
        <path d="M19 16c.2 1.6.8 2.2 2 2.4-1.2.2-1.8.8-2 2.4-.2-1.6-.8-2.2-2-2.4 1.2-.2 1.8-.8 2-2.4z" />
      </Icon>
    ),
  },
];

export default function Hero() {
  const scrollToSection = (hash) => {
    const el = document.querySelector(hash);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="inicio"
      className="hero"
      style={{ backgroundImage: `url(${heroImg})` }}
      aria-label="Bienvenida a Kristalia"
    >
      <div className="hero__overlay" aria-hidden="true" />

      <div className="hero__content container">
        <div className="hero__text">
          <span className="hero__tag">
            Limpieza especializada en cristales
          </span>

          <h1 className="hero__title">
            <span>Limpieza profesional de cristales en Madrid.</span>
            <span>Presupuesto sin compromiso.</span>
          </h1>

          <p className="hero__subtitle">
            Disponibilidad inmediata en toda la Comunidad de Madrid.
          </p>

          <div className="hero__actions">
            <Button
              variant="outline-light"
              size="lg"
              className="hero__services-btn"
              onClick={() => scrollToSection('#servicios')}
            >
              Ver servicios
            </Button>
          </div>
        </div>
      </div>

      {/* Composición exclusiva de móvil (≤768px): en escritorio está oculta con
          display:none. El h1 real sigue siendo el de .hero__text (en móvil se
          oculta solo visualmente); por eso este titular es decorativo. */}
      <div className="hero__mobile container">
        <p className="hero__mobile-title" aria-hidden="true">
          <span className="hero__mobile-heading">
            <span>Limpieza de</span>
            <span>cristales</span>
          </span>
          <span className="hero__mobile-eyebrow">Profesionales en Madrid</span>
        </p>

        <span className="hero__mobile-rule" aria-hidden="true" />

        {/* Valoración de Google (5/5) confirmada por el titular. Solo texto:
            sin datos estructurados (JSON-LD). Actualizar aquí si cambia. */}
        <p className="hero__mobile-rating">
          <span className="hero__mobile-stars" aria-hidden="true">
            {[1, 2, 3, 4, 5].map((n) => (
              <Icon key={n} fill="currentColor" stroke="none">
                <path d="M12 2.5l2.9 6 6.6.9-4.8 4.6 1.2 6.5L12 17.4l-5.9 3.1 1.2-6.5L2.5 9.4l6.6-.9L12 2.5z" />
              </Icon>
            ))}
          </span>
          Google Rating 5/5
        </p>

        {/* Frase + CTA forman un único bloque: la frase va centrada sobre el
            botón, a modo de antetítulo discreto. */}
        <div className="hero__mobile-cta-group">
          <p className="hero__mobile-note">Precio en minutos sin compromiso</p>

          <Button
            variant="gold"
            size="lg"
            href={WHATSAPP_QUOTE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hero__mobile-cta"
            aria-label="Pedir presupuesto por WhatsApp"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false">
              <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.21 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.08 1.76-.72 2.01-1.42.25-.7.25-1.29.17-1.42-.07-.13-.27-.2-.57-.35zM12.05 21.5h-.01a9.4 9.4 0 0 1-4.8-1.31l-.34-.2-3.57.93.95-3.48-.22-.36a9.38 9.38 0 0 1-1.44-5.02c0-5.2 4.23-9.43 9.44-9.43 2.52 0 4.89.98 6.67 2.77a9.37 9.37 0 0 1 2.76 6.67c0 5.2-4.23 9.43-9.44 9.43zm8.03-17.46A11.3 11.3 0 0 0 12.05.7C5.79.7.7 5.79.7 12.05c0 2 .52 3.95 1.52 5.67L.6 23.4l5.82-1.53a11.3 11.3 0 0 0 5.62 1.43h.01c6.26 0 11.35-5.09 11.35-11.35 0-3.03-1.18-5.88-3.32-8.02z" />
            </svg>
            Pedir presupuesto
          </Button>

          {/* Teléfono solo informativo (sin enlace): el único CTA es WhatsApp,
              pero quien prefiera llamar tiene el número a mano. */}
          <p className="hero__mobile-phone">
            <Icon>
              <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2" />
            </Icon>
            {PHONE_DISPLAY.replace('+34 ', '')}
          </p>
        </div>

        <ul className="hero__mobile-benefits">
          {mobileBenefits.map(({ label, icon }) => (
            <li key={label} className="hero__mobile-benefit">
              {icon}
              <span>{label}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="hero__scroll-indicator" aria-hidden="true">
        <div className="hero__scroll-line" />
      </div>
    </section>
  );
}