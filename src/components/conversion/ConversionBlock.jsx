import { Link } from 'react-router-dom';
import { googleRating } from '../../data/testimonials';
import { trustItems } from '../../data/trustItems';
import { PHONE_LOCAL, PHONE_TEL, WHATSAPP_QUOTE_URL } from '../../utils/constants';
import { GoogleIcon, PhoneIcon, StarIcon, TrustIcon, WhatsAppIcon } from './ConversionIcons';
import './ConversionBlock.css';

// Valoración de Google confirmada por el titular (data/testimonials.js). Solo
// texto visible: sin datos estructurados de reseñas.
const ratingLabel = Number.isInteger(googleRating.rating)
  ? String(googleRating.rating)
  : googleRating.rating.toFixed(1).replace('.', ',');

// Logotipo de Google + 5 estrellas + "5/5 +40 Reseñas verificadas". Se usa en el
// hero de la home (también en móvil, con su propia className) y en el de las
// landings, así que el texto vive solo aquí.
export function GoogleRating({ className = 'quote-cta__rating' }) {
  return (
    <p className={className}>
      <span className="quote-cta__google" aria-hidden="true">
        <GoogleIcon />
      </span>
      <span className="quote-cta__stars" aria-hidden="true">
        {[1, 2, 3, 4, 5].map((n) => (
          <StarIcon key={n} />
        ))}
      </span>
      <span className="quote-cta__rating-text">
        {ratingLabel}/5 +40 Reseñas verificadas
      </span>
    </p>
  );
}

function QuoteButton({ whatsappUrl }) {
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="btn btn--gold btn--lg quote-cta__button"
      aria-label="Pedir presupuesto por WhatsApp"
    >
      <WhatsAppIcon />
      Pedir presupuesto
    </a>
  );
}

function PhoneLink() {
  return (
    <a href={`tel:${PHONE_TEL}`} className="quote-cta__phone" aria-label={`Llamar al ${PHONE_LOCAL}`}>
      <PhoneIcon />
      {PHONE_LOCAL}
    </a>
  );
}

/**
 * Versión reducida para el hero de las landings: valoración, botón de
 * presupuesto por WhatsApp y teléfono.
 */
export function HeroQuoteActions({ whatsappUrl = WHATSAPP_QUOTE_URL }) {
  return (
    <div className="quote-cta quote-cta--hero">
      <GoogleRating />
      <div className="quote-cta__group">
        <QuoteButton whatsappUrl={whatsappUrl} />
        <PhoneLink />
      </div>
    </div>
  );
}

/**
 * Bloque de conversión completo que cierra las landings. El título, el texto y
 * los enlaces internos (children) son los de cada página.
 */
export default function ConversionBlock({
  titleId,
  title,
  text,
  tag = 'Presupuesto sin compromiso',
  whatsappUrl = WHATSAPP_QUOTE_URL,
  children,
}) {
  return (
    <section className="conversion bg-dark" aria-labelledby={titleId}>
      <div className="container conversion__inner">
        <div className="conversion__intro">
          <span className="section-tag">{tag}</span>
          <div className="gold-line conversion__line" />
          <h2 id={titleId} className="conversion__title">
            {title}
          </h2>
          <p className="conversion__text">{text}</p>
        </div>

        <div className="quote-cta quote-cta--block">
          <GoogleRating />
          <p className="quote-cta__note">Precio en minutos sin compromiso</p>
          <div className="quote-cta__group">
            <QuoteButton whatsappUrl={whatsappUrl} />
            <PhoneLink />
          </div>
          <p className="quote-cta__form">
            ¿Prefieres escribirnos?{' '}
            <Link to="/#contacto" className="quote-cta__form-link">
              Usa el formulario
            </Link>
          </p>
        </div>

        <ul className="conversion__trust">
          {trustItems.map(({ label, icon }) => (
            <li key={label} className="conversion__trust-item">
              <TrustIcon name={icon} />
              <span>{label}</span>
            </li>
          ))}
        </ul>

        {children && <div className="conversion__links">{children}</div>}
      </div>
    </section>
  );
}
