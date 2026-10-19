import Button from '../ui/Button';
import ResponsiveImage from '../ui/ResponsiveImage';
import { responsiveImage } from '../../utils/images';
import hero828 from '../../assets/cristales/kristalia-828.webp';
import hero1280 from '../../assets/cristales/kristalia-1280.webp';
import hero1672 from '../../assets/cristales/kristalia-1672.webp';
import { WHATSAPP_QUOTE_URL, PHONE_LOCAL, PHONE_TEL } from '../../utils/constants';
import { trustItems } from '../../data/trustItems';
import { PhoneIcon, StarIcon, TrustIcon, WhatsAppIcon } from '../conversion/ConversionIcons';
import './Hero.css';

// Variantes generadas con scripts/optimize-images.py
const heroImg = responsiveImage({ 828: hero828, 1280: hero1280, 1672: hero1672 }, 1672, 941);

export default function Hero() {
  const scrollToSection = (hash) => {
    const el = document.querySelector(hash);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="inicio"
      className="hero"
      aria-label="Bienvenida a Kristalia"
    >
      {/* Foto de fondo como <img> (antes background-image): el navegador la
          descubre y precarga desde el HTML prerenderizado, y elige tamaño.
          En móvil se muestra a la altura de --hero-photo-h, que equivale a
          ~100vh de ancho por la proporción de la foto. */}
      <ResponsiveImage
        image={heroImg}
        sizes="(max-width: 768px) 100vh, 100vw"
        alt=""
        className="hero__img"
        priority
      />
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
              <StarIcon key={n} />
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
            <WhatsAppIcon />
            Pedir presupuesto
          </Button>

          {/* Teléfono enlazado (tel:), igual que en la sección de contacto. */}
          <p className="hero__mobile-phone">
            <a href={`tel:${PHONE_TEL}`} aria-label={`Llamar al ${PHONE_LOCAL}`}>
              <PhoneIcon />
              {PHONE_LOCAL}
            </a>
          </p>
        </div>

        <ul className="hero__mobile-benefits">
          {trustItems.map(({ label, icon }) => (
            <li key={label} className="hero__mobile-benefit">
              <TrustIcon name={icon} />
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