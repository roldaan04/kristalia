import { useRef, useState } from 'react';
import BeforeAfterSlider from './BeforeAfterSlider';
import './BeforeAfterCarousel.css';

const SWIPE_THRESHOLD = 50;

function ArrowIcon({ direction }) {
  const d = direction === 'prev' ? 'M15 5l-7 7 7 7' : 'M9 5l7 7-7 7';
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true" focusable="false">
      <path d={d} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function BeforeAfterCarousel({ slides }) {
  const [index, setIndex] = useState(0);
  const touchStartRef = useRef(null);
  const total = slides.length;
  const current = slides[index];

  const goTo = (next) => setIndex(Math.min(total - 1, Math.max(0, next)));

  const handleTouchStart = (event) => {
    const touch = event.touches[0];
    touchStartRef.current = { x: touch.clientX, y: touch.clientY };
  };

  const handleTouchEnd = (event) => {
    const start = touchStartRef.current;
    touchStartRef.current = null;
    if (!start) return;
    const touch = event.changedTouches[0];
    const dx = touch.clientX - start.x;
    const dy = touch.clientY - start.y;
    if (Math.abs(dx) < SWIPE_THRESHOLD || Math.abs(dx) < Math.abs(dy)) return;
    goTo(dx < 0 ? index + 1 : index - 1);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'ArrowLeft') goTo(index - 1);
    if (event.key === 'ArrowRight') goTo(index + 1);
  };

  return (
    <div
      className="ba-carousel"
      role="region"
      aria-roledescription="carrusel"
      aria-label="Resultados reales de limpieza de cristales"
      onKeyDown={handleKeyDown}
    >
      <div className="ba-carousel__head">
        <h3 className="ba-carousel__heading">Resultados reales</h3>
        <p className="ba-carousel__count" aria-live="polite" aria-atomic="true">
          <span className="ba-carousel__count-current">{index + 1}</span> de {total}
        </p>
      </div>

      <div className="ba-carousel__stage">
        <div
          className="ba-carousel__viewport"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <ul className="ba-carousel__track" style={{ '--ba-index': index }}>
            {slides.map((slide, i) => {
              const isActive = i === index;
              return (
                <li
                  key={slide.id}
                  className={`ba-carousel__slide${isActive ? ' is-active' : ''}`}
                  role="group"
                  aria-roledescription="diapositiva"
                  aria-label={`${i + 1} de ${total}: ${slide.title}`}
                  aria-hidden={!isActive}
                  onClick={isActive ? undefined : () => goTo(i)}
                >
                  <div className="ba-carousel__frame">
                    {slide.type === 'compare' ? (
                      <BeforeAfterSlider
                        before={slide.before}
                        after={slide.after}
                        beforeAlt={slide.beforeAlt}
                        afterAlt={slide.afterAlt}
                        width={slide.width}
                        height={slide.height}
                        focusable={isActive}
                      />
                    ) : (
                      <>
                        <img
                          className="ba-carousel__img"
                          src={slide.image}
                          alt={slide.alt}
                          width={slide.width}
                          height={slide.height}
                          loading="lazy"
                          decoding="async"
                          draggable="false"
                        />
                        <span className="ba-carousel__label ba-carousel__label--before" aria-hidden="true">Antes</span>
                        <span className="ba-carousel__label ba-carousel__label--after" aria-hidden="true">Después</span>
                      </>
                    )}
                  </div>
                </li>
              );
            })}
          </ul>
        </div>

        <button
          type="button"
          className="ba-carousel__arrow ba-carousel__arrow--prev"
          onClick={() => goTo(index - 1)}
          disabled={index === 0}
          aria-label="Ver resultado anterior"
        >
          <ArrowIcon direction="prev" />
        </button>
        <button
          type="button"
          className="ba-carousel__arrow ba-carousel__arrow--next"
          onClick={() => goTo(index + 1)}
          disabled={index === total - 1}
          aria-label="Ver siguiente resultado"
        >
          <ArrowIcon direction="next" />
        </button>
      </div>

      <div className="ba-carousel__caption" key={current.id}>
        <p className="ba-carousel__title">{current.title}</p>
        <p className="ba-carousel__desc">{current.description}</p>
      </div>

      <div className="ba-carousel__dots">
        {slides.map((slide, i) => (
          <button
            key={slide.id}
            type="button"
            className={`ba-carousel__dot${i === index ? ' is-active' : ''}`}
            onClick={() => goTo(i)}
            aria-label={`Ir al resultado ${i + 1}: ${slide.title}`}
            aria-current={i === index ? 'true' : undefined}
          />
        ))}
      </div>
    </div>
  );
}
