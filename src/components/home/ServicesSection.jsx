import { useCallback, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { services } from '../../data/services';
import './ServicesSection.css';

// Tiempo entre cada avance automático del carrusel (ms).
const AUTOPLAY_DELAY = 4000;

export default function ServicesSection() {
  const trackRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Desplaza el carrusel hasta la tarjeta indicada (solo en horizontal,
  // para no mover la página verticalmente).
  const scrollToIndex = useCallback((index) => {
    const track = trackRef.current;
    if (!track) return;

    const total = track.children.length;
    const safeIndex = (index + total) % total;
    const card = track.children[safeIndex];

    // .services__track tiene position: relative, así offsetLeft es relativo al track.
    track.scrollTo({
      left: card.offsetLeft,
      behavior: 'smooth',
    });
  }, []);

  // Índice de la primera tarjeta visible, calculado a partir del scroll real.
  const getCurrentIndex = useCallback(() => {
    const track = trackRef.current;
    if (!track || track.children.length < 2) return 0;

    // Distancia entre tarjetas (ancho + separación).
    const step = track.children[1].offsetLeft - track.children[0].offsetLeft;
    return Math.min(Math.round(track.scrollLeft / step), services.length - 1);
  }, []);

  // Avanza una tarjeta; si ya se ven las últimas, vuelve al principio.
  const goNext = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;

    const atEnd = track.scrollLeft + track.clientWidth >= track.scrollWidth - 2;
    scrollToIndex(atEnd ? 0 : getCurrentIndex() + 1);
  }, [getCurrentIndex, scrollToIndex]);

  const goPrev = () => {
    const track = trackRef.current;
    if (!track) return;

    const atStart = track.scrollLeft <= 2;
    scrollToIndex(atStart ? services.length - 1 : getCurrentIndex() - 1);
  };

  // Actualiza el punto activo según la posición del scroll
  // (funciona también cuando el usuario desliza con el dedo).
  const handleScroll = () => setActiveIndex(getCurrentIndex());

  // Autoplay: se detiene al pasar el ratón, al enfocar con teclado o si el
  // usuario ha pedido reducir el movimiento en su sistema.
  useEffect(() => {
    if (isPaused) return undefined;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;

    const timer = setInterval(goNext, AUTOPLAY_DELAY);
    return () => clearInterval(timer);
  }, [isPaused, goNext]);

  const pause = () => setIsPaused(true);
  const resume = () => setIsPaused(false);

  return (
    <section id="servicios" className="services section">
      <div className="container">
        <header className="section-header--center">
          <span className="section-tag">Lo que hacemos</span>
          <div className="gold-line gold-line--center" />
          <h2 className="section-title">Servicios de limpieza profesional</h2>
          <p className="section-subtitle section-subtitle--center">
            Trabajamos con todo tipo de superficies acristaladas, en altura o a nivel del suelo, para empresas, comunidades y particulares.
          </p>
        </header>

        <div
          className="services__carousel"
          role="region"
          aria-roledescription="carrusel"
          aria-label="Servicios de limpieza"
          onMouseEnter={pause}
          onMouseLeave={resume}
          onFocus={pause}
          onBlur={resume}
          onTouchStart={pause}
          onTouchEnd={resume}
        >
          <div className="services__track" ref={trackRef} onScroll={handleScroll}>
            {services.map((service, idx) => (
              <article
                id={`servicio-${service.id}`}
                key={service.id}
                className="service-item"
                aria-roledescription="diapositiva"
                aria-label={`${idx + 1} de ${services.length}`}
              >
                <div className="service-item__image-wrap">
                  <img
                    src={service.image}
                    alt={service.alt}
                    className="service-item__image"
                    loading={idx < 2 ? 'eager' : 'lazy'}
                    decoding="async"
                    fetchPriority={idx < 2 ? 'high' : 'auto'}
                  />
                </div>

                <div className="service-item__body">
                  <span className="service-item__number">
                    {String(service.id).padStart(2, '0')}
                  </span>
                  <h3 className="service-item__title">{service.title}</h3>
                  <p className="service-item__desc">{service.description}</p>
                  {service.href && (
                    <Link to={service.href} className="service-item__link">
                      Ver servicio →
                    </Link>
                  )}
                </div>
              </article>
            ))}
          </div>

          <div className="services__controls">
            <button
              type="button"
              className="services__arrow"
              onClick={goPrev}
              aria-label="Servicio anterior"
            >
              ←
            </button>

            <div className="services__dots">
              {services.map((service, idx) => (
                <button
                  key={service.id}
                  type="button"
                  className={`services__dot${idx === activeIndex ? ' services__dot--active' : ''}`}
                  onClick={() => scrollToIndex(idx)}
                  aria-label={`Ir al servicio ${idx + 1}`}
                  aria-current={idx === activeIndex ? 'true' : undefined}
                />
              ))}
            </div>

            <button
              type="button"
              className="services__arrow"
              onClick={goNext}
              aria-label="Servicio siguiente"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
