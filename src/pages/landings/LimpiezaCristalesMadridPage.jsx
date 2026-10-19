import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Seo, { SITE_URL } from '../../components/Seo';
import ResponsiveImage from '../../components/ui/ResponsiveImage';
import ConversionBlock, { HeroQuoteActions } from '../../components/conversion/ConversionBlock';
import { responsiveImage } from '../../utils/images';
import hero828 from '../../assets/cristales/fondoImageAtico-828.webp';
import hero1280 from '../../assets/cristales/fondoImageAtico-1280.webp';
import hero1672 from '../../assets/cristales/fondoImageAtico-1672.webp';
import atico600 from '../../assets/cristales/cristalera2-600.webp';
import atico900 from '../../assets/cristales/cristalera2-900.webp';
import escaparate800 from '../../assets/escaparates/escaparateCalle-800.webp';
import escaparate1200 from '../../assets/escaparates/escaparateCalle-1200.webp';
import calle600 from '../../assets/fachadas/fachadaAcristalada-600.webp';
import calle900 from '../../assets/fachadas/fachadaAcristalada-900.webp';
import './LimpiezaCristalesMadridPage.css';

const PATH = '/empresa-de-limpieza-de-cristales-madrid';

// Variantes generadas con scripts/optimize-images.py
const heroImg = responsiveImage({ 828: hero828, 1280: hero1280, 1672: hero1672 }, 1672, 941);
const aticoImg = responsiveImage({ 600: atico600, 900: atico900 }, 900, 1599);
const escaparateImg = responsiveImage({ 800: escaparate800, 1200: escaparate1200 }, 1200, 900);
const calleImg = responsiveImage({ 600: calle600, 900: calle900 }, 900, 1599);

// Definido fuera del componente a propósito: Seo.jsx incluye `jsonLd` en las
// dependencias de su useEffect, así que una referencia nueva en cada render
// reejecutaría el efecto en bucle.
const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${SITE_URL}${PATH}#service`,
    serviceType: 'Limpieza profesional de cristales',
    name: 'Limpieza de cristales en Madrid',
    description:
    'Limpieza profesional de cristales, escaparates, cerramientos, ventanales y cristales de difícil acceso en Madrid, con medios adaptados a las características de cada trabajo.',
    url: `${SITE_URL}${PATH}`,
    provider: { '@id': `${SITE_URL}/#business` },
    areaServed: { '@type': 'City', name: 'Madrid' },
    availableChannel: {
      '@type': 'ServiceChannel',
      serviceUrl: `${SITE_URL}${PATH}`,
      servicePhone: '+34614744754',
    },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Inicio', item: `${SITE_URL}/` },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Empresa de limpieza de cristales en Madrid',
        item: `${SITE_URL}${PATH}`,
      },
    ],
  },
];

const tipologias = [
  {
    id: 'dificil-acceso',
    titulo: 'Ventanas de difícil acceso',
    imagen: calleImg,
    alt: 'Ventanas altas en la fachada de un edificio',
    texto:
      'No todas las ventanas pueden limpiarse desde el interior o con medios convencionales. En viviendas, comunidades y edificios con huecos elevados adaptamos el método de trabajo a cada caso, para llegar al cristal con seguridad y conseguir un acabado uniforme.',
  },
  {
    id: 'aticos',
    titulo: 'Áticos con terraza cerrada',
    imagen: aticoImg,
    alt: 'Cerramiento acristalado de un ático de Madrid durante la limpieza, con los bloques de ladrillo del barrio al fondo',
    texto:
      'El cerramiento de terraza es una de las reformas más repetidas en Madrid. El techo acristalado acumula polvo y hojarasca, se ve desde el salón todo el día y solo puede limpiarse combinando trabajo interior y acceso por cubierta.',
  },
  {
    id: 'escaparates',
    titulo: 'Escaparates a pie de calle',
    imagen: escaparateImg,
    alt: 'Escaparate de una clínica dental a pie de calle con el tráfico reflejado en el cristal',
    texto:
    'Un escaparate limpio transmite cuidado, profesionalidad y buena imagen desde el primer vistazo. Trabajamos sobre cristaleras comerciales de distintos tamaños, cuidando el acabado para conseguir una superficie uniforme, transparente y sin marcas.',
  },
];

const faqs = [
  {
    pregunta: '¿Cada cuánto hay que limpiar los cristales en Madrid?',
    respuesta:
      'Depende sobre todo de dónde estén. Un escaparate en una calle con tráfico denso pide una limpieza mensual para mantener el cristal transparente de verdad. En una oficina en planta alta o en una vivienda de calle tranquila, cada dos o tres meses suele ser suficiente. Después de un episodio de calima conviene adelantar la visita, porque el polvo en suspensión se deposita en cuestión de horas.',
  },
  {
    pregunta: '¿Podéis trabajar en el centro con la Zona de Bajas Emisiones?',
    respuesta:
      'Sí. Distrito Centro es Zona de Bajas Emisiones y eso condiciona el acceso de vehículos y las ventanas de carga y descarga, así que el trabajo en esa zona se planifica con antelación. En calles del casco histórico donde no cabe una plataforma, resolvemos con pértiga telescópica de agua osmotizada desde la acera.',
  },
  {
    pregunta: '¿Hace falta permiso para poner una plataforma elevadora?',
    respuesta:
      'Si la plataforma ocupa acera o calzada, sí: el Ayuntamiento de Madrid exige autorización de ocupación de vía pública, y a menudo hay que reservar plazas de aparcamiento. Lo valoramos en la visita previa y te decimos si el trabajo se puede resolver sin ocupar la calle, que suele ser más rápido y más barato.',
  },
  {
    pregunta: '¿Trabajáis con comunidades de propietarios y administradores?',
    respuesta:
      'Sí, es una parte importante de lo que hacemos en Madrid capital: portales acristalados, puertas de acceso y ventanas de zonas comunes. Damos un presupuesto por escrito con precio cerrado por visita, que es lo que necesita cualquier administrador para llevarlo a junta.',
  },
  {
    pregunta: '¿Por qué mis cristales quedan con marcas aunque los limpie?',
    respuesta:
      'Casi siempre es la película de partículas de tráfico, que es grasa y no sale solo con agua y un paño. Al arrastrarla se reparte por el cristal en lugar de retirarse, y al secar deja el típico velo. Se resuelve con un lavado previo que disuelve esa película y un secado con labio de goma, no con más producto.',
  },
];

export default function LimpiezaCristalesMadridPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="crismad-page">
      <Seo
        title="Empresa de limpieza de cristales en Madrid | Kristalia"
        description="Limpieza profesional de cristales, escaparates, cerramientos, ventanales y cristales de difícil acceso en Madrid, con medios adaptados a las características de cada trabajo."
        path={PATH}
        image="/og-image.jpg"
        jsonLd={jsonLd}
        jsonLdId="landing"
      />

      <section className="crismad-hero" aria-labelledby="crismad-hero-title">
        <ResponsiveImage
          image={heroImg}
          sizes="100vw"
          alt="Techo y cerramiento acristalado de una terraza de ático en Madrid tras la limpieza"
          className="crismad-hero__img"
          priority
        />
        <div className="crismad-hero__overlay" aria-hidden="true" />

        <div className="crismad-hero__content container">
          <nav className="crismad-hero__breadcrumb" aria-label="Migas de pan">
            <Link to="/" className="crismad-hero__breadcrumb-link">Inicio</Link>
            <span aria-hidden="true"> / </span>
            <span>Limpieza de cristales en Madrid</span>
          </nav>

          <h1 id="crismad-hero-title" className="crismad-hero__title">
            Empresa de limpieza de cristales en Madrid
          </h1>

          <p className="crismad-hero__subtitle">
            {/* Escritorio: texto completo. Móvil (≤640px): versión breve. */}
            <span className="crismad-hero__subtitle-full">
              Especialistas en limpieza profesional de cristales para viviendas,
              comunidades, oficinas y locales. Desde escaparates y ventanales hasta
              cerramientos y cristales de difícil acceso.
            </span>
            <span className="crismad-hero__subtitle-short">
              Ventanas, escaparates, cerramientos y cristales de difícil acceso, para viviendas, comunidades y negocios.
            </span>
          </p>

          <HeroQuoteActions />
        </div>
      </section>

      <section className="crismad-tipologias section" aria-labelledby="crismad-tipologias-title">
        <div className="container">
          <header className="section-header--center">
            <span className="section-tag">Tipos de edificio</span>
            <div className="gold-line gold-line--center" />
            <h2 id="crismad-tipologias-title" className="section-title">
              Dónde trabajamos en la capital
            </h2>
            <p className="section-subtitle section-subtitle--center">
              Madrid tiene una mezcla de edificación muy concreta y cada tipo
              plantea un problema distinto de acceso.
            </p>
          </header>

          <div className="crismad-tipologias__list">
            {tipologias.map((item) => (
              <article key={item.id} className="crismad-tipologia">
                <div className="crismad-tipologia__image-wrap">
                  <ResponsiveImage
                    image={item.imagen}
                    sizes="(max-width: 960px) 100vw, 480px"
                    alt={item.alt}
                    className="crismad-tipologia__image"
                  />
                </div>
                <div className="crismad-tipologia__body">
                  <h3 className="crismad-tipologia__title">{item.titulo}</h3>
                  <p className="crismad-tipologia__text">{item.texto}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="crismad-acceso section bg-alt" aria-labelledby="crismad-acceso-title">
        <div className="container">
          <div className="crismad-acceso__layout">
            <div className="crismad-acceso__intro">
              <span className="section-tag">Medios y acceso</span>
              <div className="gold-line" />
              <h2 id="crismad-acceso-title" className="section-title">
                Trabajar en el centro tiene sus reglas
              </h2>
              <p className="section-subtitle">
                Buena parte del presupuesto de una limpieza de cristales en Madrid
                no la decide la superficie: la decide cómo se llega hasta ella.
              </p>
            </div>

            <ul className="crismad-acceso__list">
              <li className="crismad-acceso__item">
                <h3 className="crismad-acceso__item-title">Zona de Bajas Emisiones</h3>
                <p>
                  Distrito Centro es ZBE y las ventanas de carga y descarga son
                  limitadas. El trabajo dentro de la almendra se planifica con
                  antelación para no depender de una autorización de última hora.
                </p>
              </li>
              <li className="crismad-acceso__item">
                <h3 className="crismad-acceso__item-title">Calles donde no cabe una plataforma</h3>
                <p>
                  En Austrias, La Latina o buena parte del casco histórico, el
                  ancho de calle descarta la elevadora. Se resuelve con pértiga
                  telescópica de agua osmotizada, que alcanza sin dejar cerco al
                  secar porque el agua va desmineralizada.
                </p>
              </li>
              <li className="crismad-acceso__item">
                <h3 className="crismad-acceso__item-title">Ocupación de vía pública</h3>
                <p>
                  Si hay que ocupar acera o calzada con una plataforma, el
                  Ayuntamiento exige autorización previa. Lo comprobamos antes de
                  presupuestar y te decimos si el trabajo se puede resolver sin
                  ocupar la calle.
                </p>
              </li>
              <li className="crismad-acceso__item">
                <h3 className="crismad-acceso__item-title">Patios de luces</h3>
                <p>
                  Es el punto ciego de casi todas las fincas antiguas del centro.
                  Sin acceso desde fuera y con muy poco espacio, se trabaja desde
                  las propias viviendas o desde cubierta, coordinando con la
                  comunidad.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="crismad-faq section" aria-labelledby="crismad-faq-title">
        <div className="container crismad-faq__container">
          <header className="section-header--center">
            <span className="section-tag">Dudas frecuentes</span>
            <div className="gold-line gold-line--center" />
            <h2 id="crismad-faq-title" className="section-title">
              Preguntas que nos hacen en Madrid
            </h2>
          </header>

          <dl className="crismad-faq__list">
            {faqs.map((faq) => (
              <div key={faq.pregunta} className="crismad-faq__item">
                <dt className="crismad-faq__question">{faq.pregunta}</dt>
                <dd className="crismad-faq__answer">{faq.respuesta}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <ConversionBlock
        titleId="crismad-cta-title"
        title="Dinos qué edificio es y te decimos cómo se limpia"
        text="Con la dirección, la planta y una foto tenemos suficiente para darte un precio cerrado. Sin visita comercial y sin compromiso."
      >
        <p>
          <Link to="/quienes-somos">Conoce a Kristalia</Link>
          <span aria-hidden="true"> · </span>
          <Link to="/empresa-de-limpieza-madrid">Empresa de limpieza en Madrid</Link>
        </p>
      </ConversionBlock>
    </main>
  );
}
