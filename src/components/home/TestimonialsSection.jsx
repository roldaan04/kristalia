import { useEffect, useRef, useState } from 'react';
import { googleRating, testimonials } from '../../data/testimonials';
import { GOOGLE_REVIEWS_URL } from '../../utils/constants';
import './TestimonialsSection.css';

function GoogleIcon({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" aria-hidden="true" focusable="false">
      <path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3C33.7 32.7 29.2 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.8 1.2 7.9 3l5.7-5.7C34 6.1 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.4-.4-3.5z" />
      <path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.7 15.1 19 12 24 12c3.1 0 5.8 1.2 7.9 3l5.7-5.7C34 6.1 29.3 4 24 4 16.3 4 9.7 8.3 6.3 14.7z" />
      <path fill="#4CAF50" d="M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.2C29.2 35.1 26.7 36 24 36c-5.2 0-9.6-3.3-11.3-8l-6.5 5C9.5 39.6 16.2 44 24 44z" />
      <path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-.8 2.2-2.2 4.2-4.1 5.6l6.2 5.2C37 39.2 44 34 44 24c0-1.3-.1-2.4-.4-3.5z" />
    </svg>
  );
}

function Stars({ value, className = '' }) {
  return (
    <span className={`stars ${className}`} role="img" aria-label={`${value} de 5 estrellas`}>
      {Array.from({ length: 5 }, (_, i) => (
        <svg key={i} viewBox="0 0 20 20" aria-hidden="true" className={i < Math.round(value) ? 'is-on' : ''}>
          <path d="M10 1.5l2.6 5.4 5.9.8-4.3 4.1 1 5.8L10 14.8l-5.2 2.8 1-5.8L1.5 7.7l5.9-.8z" />
        </svg>
      ))}
    </span>
  );
}

function ReviewCard({ review }) {
  const [expanded, setExpanded] = useState(false);
  const [overflows, setOverflows] = useState(false);
  const textRef = useRef(null);

  useEffect(() => {
    const el = textRef.current;
    if (el) setOverflows(el.scrollHeight > el.clientHeight + 1);
  }, []);

  return (
    <li className="review">
      <article className="review__card">
        <header className="review__head">
          {review.photo ? (
            <img className="review__avatar" src={review.photo} alt="" width="44" height="44" loading="lazy" />
          ) : (
            <span className="review__avatar review__avatar--initial" aria-hidden="true">
              {review.name.charAt(0)}
            </span>
          )}
          <div className="review__who">
            <h3 className="review__name">{review.name}</h3>
            <span className="review__date">{review.date}</span>
          </div>
          <span className="review__source" title="Reseña de Google">
            <GoogleIcon />
          </span>
        </header>

        <Stars value={review.rating} className="review__stars" />

        <p ref={textRef} className={`review__text${expanded ? ' is-expanded' : ''}`}>
          {review.text}
        </p>

        {(overflows || expanded) && (
          <button
            type="button"
            className="review__more"
            aria-expanded={expanded}
            onClick={() => setExpanded((v) => !v)}
          >
            {expanded ? 'Leer menos' : 'Leer más'}
          </button>
        )}
      </article>
    </li>
  );
}

export default function TestimonialsSection() {
  const trackRef = useRef(null);
  const [progress, setProgress] = useState({ start: 0, size: 1, atStart: true, atEnd: false });

  const updateProgress = () => {
    const el = trackRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    const size = el.scrollWidth ? el.clientWidth / el.scrollWidth : 1;
    const start = max > 0 ? (el.scrollLeft / max) * (1 - size) : 0;
    setProgress({ start, size, atStart: el.scrollLeft <= 2, atEnd: el.scrollLeft >= max - 2 });
  };

  useEffect(() => {
    updateProgress();
    window.addEventListener('resize', updateProgress);
    return () => window.removeEventListener('resize', updateProgress);
  }, []);

  const scrollByCard = (direction) => {
    const el = trackRef.current;
    const card = el?.querySelector('.review');
    if (!el || !card) return;
    const gap = parseFloat(getComputedStyle(el).columnGap) || 0;
    el.scrollBy({ left: direction * (card.offsetWidth + gap), behavior: 'smooth' });
  };

  const ratingLabel = googleRating.rating.toFixed(1).replace('.', ',');

  return (
    <section className="testimonials section" aria-labelledby="testimonials-title">
      <div className="container">
        <header className="section-header--center">
          <span className="section-tag">Opiniones verificadas</span>
          <div className="gold-line gold-line--center" />
          <h2 id="testimonials-title" className="section-title">Lo que dicen nuestros clientes</h2>
          <p className="section-subtitle section-subtitle--center">
            Reseñas reales de comunidades, negocios y particulares que confían en nosotros.
          </p>
        </header>

        <div className="testimonials__layout">
          <aside className="testimonials__summary" aria-label="Valoración en Google">
            <span className="testimonials__verdict">Excelente</span>
            <span className="testimonials__score">{ratingLabel}</span>
            <Stars value={googleRating.rating} className="testimonials__stars" />
            <span className="testimonials__count">
              A base de <strong>{googleRating.totalReviews} reseñas</strong>
            </span>
            <span className="testimonials__google">
              <GoogleIcon size={22} />
              <span>Google</span>
            </span>
            <a
              className="testimonials__link"
              href={GOOGLE_REVIEWS_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver todas en Google
            </a>
          </aside>

          <div className="testimonials__carousel">
            <button
              type="button"
              className="testimonials__arrow testimonials__arrow--prev"
              onClick={() => scrollByCard(-1)}
              disabled={progress.atStart}
              aria-label="Reseñas anteriores"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M15 6l-6 6 6 6" /></svg>
            </button>

            <ul
              ref={trackRef}
              className="testimonials__track"
              onScroll={updateProgress}
              tabIndex={0}
              aria-label="Reseñas de clientes en Google"
            >
              {testimonials.map((review) => (
                <ReviewCard key={review.id} review={review} />
              ))}
            </ul>

            <button
              type="button"
              className="testimonials__arrow testimonials__arrow--next"
              onClick={() => scrollByCard(1)}
              disabled={progress.atEnd}
              aria-label="Reseñas siguientes"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 6l6 6-6 6" /></svg>
            </button>

            <div className="testimonials__progress" aria-hidden="true">
              <span
                style={{
                  width: `${progress.size * 100}%`,
                  transform: `translateX(${(progress.start / progress.size) * 100}%)`,
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
