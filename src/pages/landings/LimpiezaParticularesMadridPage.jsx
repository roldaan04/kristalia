import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Seo, { SITE_URL } from '../../components/Seo';
import Button from '../../components/ui/Button';
import { WHATSAPP_URL, PHONE_DISPLAY } from '../../utils/constants';
import heroImg from '../../assets/particulares/particular.webp';
import introImg from '../../assets/cristales/cristalera-casa.webp';
import cristalesImg from '../../assets/cristales/cristaleraa.webp';
import cerramientoImg from '../../assets/cristales/cristalera2.webp';
import panelesImg from '../../assets/paneles-solares/paneles.webp';
import viviendaImg from '../../assets/cristales/cristalera.webp';
import './LimpiezaParticularesMadridPage.css';

const PATH = '/limpieza-particulares-madrid';

// Definido fuera del componente a propósito: Seo.jsx incluye `jsonLd` en las
// dependencias de su useEffect, así que una referencia nueva en cada render
// reejecutaría el efecto en bucle.
const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${SITE_URL}${PATH}#service`,
    serviceType: 'Limpieza especializada para viviendas',
    name: 'Limpieza para particulares en Madrid',
    description:
      'Servicios de limpieza especializada para pisos, áticos y chalets en Madrid: cristales, ventanales, cerramientos, cristales de difícil acceso, paneles solares, persianas, toldos y canalones.',
    url: `${SITE_URL}${PATH}`,
    provider: { '@id': `${SITE_URL}/#business` },
    areaServed: { '@type': 'City', name: 'Madrid' },
    availableChannel: {
      '@type': 'ServiceChannel',
      serviceUrl: `${SITE_URL}${PATH}`,
      servicePhone: '+34614744754',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Limpieza para viviendas en Madrid',
      itemListElement: [
        'Limpieza de cristales y ventanales',
        'Limpieza de cerramientos acristalados',
        'Limpieza de cristales de difícil acceso',
        'Limpieza de paneles solares',
        'Limpieza de persianas',
        'Limpieza de toldos',
        'Limpieza de canalones',
      ].map((name) => ({
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name },
      })),
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
        name: 'Limpieza para particulares en Madrid',
        item: `${SITE_URL}${PATH}`,
      },
    ],
  },
];

const servicios = [
  {
    id: 'cristales',
    titulo: 'Cristales y ventanales',
    imagen: cristalesImg,
    alt: 'Galería acristalada de un chalet con los cristales limpios y el jardín al fondo',
    texto:
      'Ventanas, ventanales y grandes cristaleras de la vivienda, por dentro y por fuera. Un lavado que disuelve el polvo y la película de partículas antes de secar con labio de goma, para que el cristal quede transparente y sin marcas.',
  },
  {
    id: 'cerramientos',
    titulo: 'Cerramientos y cristales de difícil acceso',
    imagen: cerramientoImg,
    alt: 'Cerramiento acristalado de la terraza de un ático de Madrid con los bloques del barrio al fondo',
    texto:
      'Cerramientos de terraza, galerías y techos acristalados que solo se limpian bien combinando trabajo por dentro y acceso por fuera. Adaptamos el método a cada hueco para llegar al cristal con seguridad.',
  },
  {
    id: 'paneles',
    titulo: 'Paneles solares',
    imagen: panelesImg,
    alt: 'Operario limpiando una amplia instalación de placas solares sobre una cubierta',
    texto:
      'En Madrid llueve poco y el polvo no se va solo: se queda sobre la placa y baja la producción. Limpiamos con agua desmineralizada, sin productos que ataquen el vidrio ni presiones que fuercen los anclajes.',
  },
];

const viviendas = [
  {
    titulo: 'Pisos',
    texto:
      'Ventanas y ventanales a los que no se llega desde dentro, cerramientos de terraza y persianas que acumulan el polvo del tráfico. Trabajos puntuales para dejar la casa a punto sin tener que subirte tú a ningún sitio.',
  },
  {
    titulo: 'Áticos',
    texto:
      'El cerramiento y las grandes cristaleras se ven desde el salón todo el día, y el exterior de la terraza suele ser lo más difícil de alcanzar. También toldos y cristales que solo se limpian bien desde fuera.',
  },
  {
    titulo: 'Chalets',
    texto:
      'Grandes superficies acristaladas, paneles solares, persianas, toldos y canalones que en otoño se llenan de hojarasca. Servicios que un chalet necesita de forma puntual o una o dos veces al año.',
  },
];

const proceso = [
  {
    titulo: 'Presupuesto sencillo',
    texto:
      'Con la dirección, unas fotos y una breve descripción de lo que hay que limpiar solemos tener suficiente para darte una valoración inicial, sin visita comercial.',
  },
  {
    titulo: 'Nos adaptamos al acceso',
    texto:
      'Cada vivienda y cada cristal tienen un acceso distinto. Elegimos el método adecuado para cada caso: desde el interior, con pértiga de agua osmotizada o con acceso por el exterior.',
  },
  {
    titulo: 'Trabajos puntuales',
    texto:
      'Puedes contratar un trabajo concreto cuando lo necesites, sin contrato ni permanencia. Si te interesa repetirlo cada cierto tiempo, te proponemos una periodicidad orientativa.',
  },
  {
    titulo: 'Cuidado con tu casa',
    texto:
      'Trabajamos con orden dentro de la vivienda y recogemos al terminar. Antes de empezar te confirmamos qué se va a hacer para que no haya sorpresas.',
  },
];

const faqs = [
  {
    pregunta: '¿Trabajáis en pisos, áticos y chalets?',
    respuesta:
      'Sí. Buena parte de lo que hacemos para particulares son cristales, cerramientos y cristaleras de viviendas de todo tipo en Madrid, desde un piso con la terraza cerrada hasta un chalet con grandes superficies acristaladas. Nos cuentas qué vivienda es y qué hay que limpiar, y te decimos cómo lo resolvemos.',
  },
  {
    pregunta: '¿Podéis limpiar cristales de difícil acceso?',
    respuesta:
      'Es una de las cosas por las que más nos llaman. Ventanas altas, cerramientos que no se abren del todo, techos acristalados o cristales exteriores a los que no se llega desde dentro. Según el caso se resuelve desde el interior, con pértiga telescópica de agua osmotizada o con acceso por el exterior.',
  },
  {
    pregunta: '¿Puedo contratar solo una limpieza puntual?',
    respuesta:
      'Sí. No hace falta contratar nada periódico ni firmar permanencia. Puedes pedir un trabajo concreto —los cristales antes de una comida familiar, el cerramiento después del invierno, los paneles una vez al año— y ya está.',
  },
  {
    pregunta: '¿Qué información necesitáis para preparar el presupuesto?',
    respuesta:
      'Con la dirección, un par de fotos y una descripción de lo que quieres limpiar solemos tener suficiente para darte una valoración inicial. Si el trabajo es más complejo o el acceso lo requiere, lo comprobamos antes para que el precio sea realista.',
  },
  {
    pregunta: '¿Cada cuánto conviene limpiar los cristales de una vivienda?',
    respuesta:
      'Depende sobre todo de dónde estén. Los cristales de una vivienda en calle tranquila aguantan bien cada dos o tres meses; los de una terraza expuesta o junto a una calle con tráfico piden más frecuencia. Después de un episodio de calima conviene adelantar la limpieza, porque el polvo se deposita en pocas horas.',
  },
  {
    pregunta: '¿También limpiáis persianas, toldos o paneles solares?',
    respuesta:
      'Sí, son trabajos que solemos hacer en viviendas. Las persianas se aprovechan cuando se hacen los cristales, que es cuando quedan a la vista; los toldos y los paneles solares se limpian según el estado y la época del año. Dinos qué tienes y lo valoramos.',
  },
];

export default function LimpiezaParticularesMadridPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="partmad-page">
      <Seo
        title="Limpieza para particulares en Madrid | Kristalia"
        description="Servicios de limpieza especializada para pisos, áticos y chalets en Madrid: cristales, ventanales, cerramientos, cristales de difícil acceso y paneles solares."
        path={PATH}
        image="/og-image.jpg"
        jsonLd={jsonLd}
        jsonLdId="landing"
      />

      <section className="partmad-hero" aria-labelledby="partmad-hero-title">
        <img
          src={heroImg}
          alt="Piscina de un chalet en la sierra de Madrid rodeada de una valla de cristal transparente"
          className="partmad-hero__img"
          loading="eager"
          fetchPriority="high"
          decoding="async"
        />
        <div className="partmad-hero__overlay" aria-hidden="true" />

        <div className="partmad-hero__content container">
          <nav className="partmad-hero__breadcrumb" aria-label="Migas de pan">
            <Link to="/" className="partmad-hero__breadcrumb-link">Inicio</Link>
            <span aria-hidden="true"> / </span>
            <span>Limpieza para particulares en Madrid</span>
          </nav>

          <h1 id="partmad-hero-title" className="partmad-hero__title">
            Limpieza para particulares en Madrid: pisos, áticos y chalets
          </h1>

          <p className="partmad-hero__subtitle">
            Servicios de limpieza especializada para tu vivienda. Cristales,
            ventanales, cerramientos, zonas de difícil acceso y otros trabajos
            puntuales que necesitan medios, técnica o acceso específicos.
          </p>

          <div className="partmad-hero__actions">
            <Button variant="gold" size="lg" href="/#contacto">
              Pedir presupuesto
            </Button>
            <Button
              variant="outline-light"
              size="lg"
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              Escribir por WhatsApp
            </Button>
          </div>
        </div>
      </section>

      <section className="partmad-intro section" aria-labelledby="partmad-intro-title">
        <div className="container">
          <div className="partmad-intro__layout">
            <div className="partmad-intro__text">
              <span className="section-tag">Para tu vivienda</span>
              <div className="gold-line" />
              <h2 id="partmad-intro-title" className="section-title">
                Hay trabajos en casa que piden algo más que una limpieza habitual
              </h2>
              <p>
                Kristalia no es un servicio de limpieza doméstica por horas.
                Somos una empresa de{' '}
                <Link to="/empresa-de-limpieza-de-cristales-madrid" className="partmad-link">
                  limpieza de cristales
                </Link>{' '}
                y otros trabajos especializados que un particular necesita de
                forma puntual: los que requieren medios, técnica o un acceso que
                no se resuelve con un cubo y una bayeta.
              </p>
              <p>
                Ventanales a los que no se llega desde dentro, el cerramiento de
                la terraza que se ve desde el salón, los paneles solares del
                tejado o las persianas llenas del polvo de todo el año. Trabajos
                concretos, sin contrato ni permanencia.
              </p>
              <p>
                Trabajamos para pisos, áticos y chalets por todo Madrid, con una
                valoración clara antes de empezar.
              </p>
            </div>

            <div className="partmad-intro__image-wrap">
              <img
                src={introImg}
                alt="Patio de una vivienda con una habitación acristalada y una piscina en primer término"
                className="partmad-intro__image"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="partmad-servicios section bg-alt" aria-labelledby="partmad-servicios-title">
        <div className="container">
          <header className="section-header--center">
            <span className="section-tag">Servicios para tu vivienda</span>
            <div className="gold-line gold-line--center" />
            <h2 id="partmad-servicios-title" className="section-title">
              Lo que más nos piden en casa
            </h2>
            <p className="section-subtitle section-subtitle--center">
              Tres trabajos concentran la mayoría de las llamadas de
              particulares. Todos tienen algo en común: no son fáciles de hacer
              bien sin medios.
            </p>
          </header>

          <div className="partmad-servicios__grid">
            {servicios.map((servicio) => (
              <article key={servicio.id} className="partmad-servicio">
                <div className="partmad-servicio__image-wrap">
                  <img
                    src={servicio.imagen}
                    alt={servicio.alt}
                    className="partmad-servicio__image"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <h3 className="partmad-servicio__title">{servicio.titulo}</h3>
                <p className="partmad-servicio__text">{servicio.texto}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="partmad-viviendas section" aria-labelledby="partmad-viviendas-title">
        <div className="container">
          <div className="partmad-viviendas__layout">
            <div className="partmad-viviendas__image-wrap">
              <img
                src={viviendaImg}
                alt="Porche acristalado de una vivienda unifamiliar durante la limpieza de los cristales, con el jardín al fondo"
                className="partmad-viviendas__image"
                loading="lazy"
                decoding="async"
              />
            </div>

            <div className="partmad-viviendas__body">
              <span className="section-tag">Pisos, áticos y chalets</span>
              <div className="gold-line" />
              <h2 id="partmad-viviendas-title" className="section-title">
                Cada vivienda plantea un trabajo distinto
              </h2>
              <p className="section-subtitle">
                No todas las casas tienen los mismos elementos. Estos son los
                casos más habituales con los que nos encontramos.
              </p>

              <ul className="partmad-viviendas__list">
                {viviendas.map((item) => (
                  <li key={item.titulo} className="partmad-vivienda">
                    <h3 className="partmad-vivienda__title">{item.titulo}</h3>
                    <p className="partmad-vivienda__text">{item.texto}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="partmad-proceso section bg-alt" aria-labelledby="partmad-proceso-title">
        <div className="container">
          <header className="section-header--center">
            <span className="section-tag">Cómo trabajamos</span>
            <div className="gold-line gold-line--center" />
            <h2 id="partmad-proceso-title" className="section-title">
              Cómo trabajamos en tu vivienda
            </h2>
            <p className="section-subtitle section-subtitle--center">
              La idea es que pedir un trabajo para casa sea sencillo y que sepas
              a qué atenerte antes de que aparezcamos.
            </p>
          </header>

          <ul className="partmad-proceso__grid">
            {proceso.map((paso) => (
              <li key={paso.titulo} className="partmad-paso">
                <h3 className="partmad-paso__title">{paso.titulo}</h3>
                <p className="partmad-paso__text">{paso.texto}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="partmad-faq section" aria-labelledby="partmad-faq-title">
        <div className="container partmad-faq__container">
          <header className="section-header--center">
            <span className="section-tag">Dudas frecuentes</span>
            <div className="gold-line gold-line--center" />
            <h2 id="partmad-faq-title" className="section-title">
              Preguntas de particulares
            </h2>
          </header>

          <dl className="partmad-faq__list">
            {faqs.map((faq) => (
              <div key={faq.pregunta} className="partmad-faq__item">
                <dt className="partmad-faq__question">{faq.pregunta}</dt>
                <dd className="partmad-faq__answer">{faq.respuesta}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="partmad-cta bg-alt" aria-labelledby="partmad-cta-title">
        <div className="container partmad-cta__inner">
          <span className="section-tag">Presupuesto sin compromiso</span>
          <div className="gold-line gold-line--center" />

          <h2 id="partmad-cta-title" className="partmad-cta__title">
            Cuéntanos qué necesitas limpiar en casa
          </h2>

          <p className="partmad-cta__text">
            Con la dirección, un par de fotos y lo que quieres limpiar te damos
            una valoración clara. Sin visita comercial y sin compromiso.
          </p>

          <div className="partmad-cta__actions">
            <Button variant="gold" size="lg" href="/#contacto">
              Solicitar presupuesto
            </Button>

            <Button
              variant="outline"
              size="lg"
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              Hablar por WhatsApp
            </Button>
          </div>

          <p className="partmad-cta__phone">
            O llámanos directamente al{' '}
            <a
              href={`tel:${PHONE_DISPLAY.replace(/\s/g, '')}`}
              className="partmad-cta__phone-link"
            >
              {PHONE_DISPLAY}
            </a>
          </p>

          <p className="partmad-cta__links">
            <Link to="/quienes-somos" className="partmad-cta__link">
              Conoce a Kristalia
            </Link>

            <span aria-hidden="true"> · </span>

            <Link
              to="/empresa-de-limpieza-de-cristales-madrid"
              className="partmad-cta__link"
            >
              Limpieza de cristales en Madrid
            </Link>

            <span aria-hidden="true"> · </span>

            <Link to="/empresa-de-limpieza-madrid" className="partmad-cta__link">
              Empresa de limpieza en Madrid
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
}
