import { Link } from 'react-router-dom';
import { googleRating } from '../../data/testimonials';
import { trustItems } from '../../data/trustItems';
import { PHONE_LOCAL, PHONE_TEL, WHATSAPP_QUOTE_URL } from '../../utils/constants';
import { PhoneIcon, StarIcon, TrustIcon, WhatsAppIcon } from './ConversionIcons';
import './ConversionBlock.css';

// Valoración de Google confirmada por el titular (data/testimonials.js). Solo
// texto visible: sin datos estructurados de reseñas.
const ratingLabel = Number.isInteger(googleRating.rating)
  ? String(googleRating.rating)
  : googleRating.rating.toFixed(1).replace('.', ',');

function GoogleRating() {
  return (
    <p className="quote-cta__rating">
      <span className="quote-cta__stars" aria-hidden="true">
        {[1, 2, 3, 4, 5].map((n) => (
          <StarIcon key={n} />
        ))}
      </span>
      Google Rating {ratingLabel}/5
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
    <div className="quote-cta quote-cta--hero" data-conversion>
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
    <section className="conversion bg-dark" aria-labelledby={titleId} data-conversion>
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
