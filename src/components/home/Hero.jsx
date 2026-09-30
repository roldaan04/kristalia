import Button from '../ui/Button';
import  heroImg from '../../assets/cristales/cristaleraa.webp';
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
          <span className="hero__tag">Limpieza especializada en cristales</span>

          <h1 className="hero__title">
            Cristales impecables para empresas, comunidades y particulares.
          </h1>

          <p className="hero__subtitle">
            Servicio rápido, seguro y adaptado a cada espacio. Presupuesto sin compromiso.
          </p>

          <div className="hero__actions hero__actions--single">
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
          <span className="hero__mobile-eyebrow">Limpieza profesional de</span>
          <span className="hero__mobile-heading">Cristales en Madrid</span>
        </p>

        <p className="hero__mobile-lead">
          Envíanos fotos y tu ubicación para enviarte el presupuesto.
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

        <Button
          variant="gold"
          size="lg"
          href="/#contacto"
          className="hero__mobile-cta"
        >
          Presupuesto
          <Icon strokeWidth="2">
            <path d="M5 12h14M13 6l6 6-6 6" />
          </Icon>
        </Button>

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