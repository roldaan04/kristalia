import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Seo from '../../components/Seo';
import ResponsiveImage from '../../components/ui/ResponsiveImage';
import ConversionBlock, { HeroQuoteActions } from '../../components/conversion/ConversionBlock';
import './ServicioExtraLanding.css';

/**
 * Plantilla común de las landings de servicios adicionales (sofás, moquetas,
 * suelos). Hero y bloque de conversión replican los de
 * LimpiezaParticularesMadridPage; cada página aporta su copy y su SEO.
 */
export default function ServicioExtraLanding({
  seo,
  breadcrumb,
  hero,
  intro,
  espacios,
  faqs,
  cta,
  whatsappUrl,
}) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="extra-page">
      <Seo {...seo} image="/og-image.jpg" jsonLdId="landing" />

      <section className="extra-hero" aria-labelledby="extra-hero-title">
        <ResponsiveImage
          image={hero.image}
          sizes="100vw"
          alt={hero.alt}
          className="extra-hero__img"
          priority
        />
        <div className="extra-hero__overlay" aria-hidden="true" />

        <div className="extra-hero__content container">
          <nav className="extra-hero__breadcrumb" aria-label="Migas de pan">
            <Link to="/" className="extra-hero__breadcrumb-link">Inicio</Link>
            <span aria-hidden="true"> / </span>
            <span>{breadcrumb}</span>
          </nav>

          <h1 id="extra-hero-title" className="extra-hero__title">
            {hero.title}
          </h1>

          <p className="extra-hero__subtitle">
            {/* Escritorio: texto completo. Móvil (≤640px): versión breve. */}
            <span className="extra-hero__subtitle-full">{hero.subtitle}</span>
            <span className="extra-hero__subtitle-short">{hero.subtitleShort}</span>
          </p>

          <HeroQuoteActions whatsappUrl={whatsappUrl} />
        </div>
      </section>

      <section className="extra-intro section" aria-labelledby="extra-intro-title">
        <div className="container">
          <div className="extra-intro__layout">
            <div className="extra-intro__text">
              <span className="section-tag">{intro.tag}</span>
              <div className="gold-line" />
              <h2 id="extra-intro-title" className="section-title">
                {intro.title}
              </h2>
              {intro.paragraphs.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            <div className="extra-intro__aside">
              <h3 className="extra-intro__aside-title">{intro.listTitle}</h3>
              <ul className="extra-intro__list">
                {intro.list.map((item) => (
                  <li key={item.titulo} className="extra-incluye">
                    <h4 className="extra-incluye__title">{item.titulo}</h4>
                    <p className="extra-incluye__text">{item.texto}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="extra-espacios section bg-alt" aria-labelledby="extra-espacios-title">
        <div className="container">
          <header className="section-header--center">
            <span className="section-tag">{espacios.tag}</span>
            <div className="gold-line gold-line--center" />
            <h2 id="extra-espacios-title" className="section-title">
              {espacios.title}
            </h2>
            <p className="section-subtitle section-subtitle--center">{espacios.subtitle}</p>
          </header>

          <ul className="extra-espacios__grid">
            {espacios.items.map((item) => (
              <li key={item.titulo} className="extra-espacio">
                <h3 className="extra-espacio__title">{item.titulo}</h3>
                <p className="extra-espacio__text">{item.texto}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="extra-faq section" aria-labelledby="extra-faq-title">
        <div className="container extra-faq__container">
          <header className="section-header--center">
            <span className="section-tag">Dudas frecuentes</span>
            <div className="gold-line gold-line--center" />
            <h2 id="extra-faq-title" className="section-title">
              Preguntas frecuentes
            </h2>
          </header>

          <dl className="extra-faq__list">
            {faqs.map((faq) => (
              <div key={faq.pregunta} className="extra-faq__item">
                <dt className="extra-faq__question">{faq.pregunta}</dt>
                <dd className="extra-faq__answer">{faq.respuesta}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <ConversionBlock
        titleId="extra-cta-title"
        title={cta.title}
        text={cta.text}
        whatsappUrl={whatsappUrl}
      >
        <p>
          <Link to="/quienes-somos">Conoce a Kristalia</Link>
          <span aria-hidden="true"> · </span>
          <Link to="/limpieza-particulares-madrid">Limpieza para particulares</Link>
          <span aria-hidden="true"> · </span>
          <Link to="/empresa-de-limpieza-madrid">Empresa de limpieza en Madrid</Link>
        </p>
      </ConversionBlock>
    </main>
  );
}
