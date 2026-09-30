import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Seo, { SITE_URL } from '../../components/Seo';
import Button from '../../components/ui/Button';
import { WHATSAPP_URL, PHONE_DISPLAY } from '../../utils/constants';
// TODO: sustituir por foto real de pista de pádel (imagen provisional).
import heroImg from '../../assets/cristales/pexels-padel-1.webp';
// TODO: sustituir por foto real de pista de pádel (imagen provisional).
import introImg from '../../assets/cristales/pexels-padel-2.webp';
import './LimpiezaPistasPadelMadridPage.css';

const PATH = '/limpieza-cristales-pistas-padel-madrid';

// Definido fuera del componente a propósito: Seo.jsx incluye `jsonLd` en las
// dependencias de su useEffect, así que una referencia nueva en cada render
// reejecutaría el efecto en bucle.
const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${SITE_URL}${PATH}#service`,
    serviceType: 'Limpieza de cristales de pistas de pádel',
    name: 'Limpieza de cristales de pistas de pádel en Madrid',
    description:
      'Limpieza de los cristales de pistas de pádel en Madrid para clubes, centros deportivos y comunidades con pista propia. Limpieza puntual o mantenimiento periódico con visitas programadas.',
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
        name: 'Limpieza de cristales de pistas de pádel',
        item: `${SITE_URL}${PATH}`,
      },
    ],
  },
];

const servicio = [
  {
    titulo: 'Todos los cristales de la pista',
    texto:
      'Limpiamos los paños de vidrio que cierran la pista, por la cara de juego y por la exterior, para que queden transparentes y sin marcas.',
  },
  {
    titulo: 'Solo cristales',
    texto:
      'Nuestro trabajo en la pista se centra en el vidrio. No limpiamos el césped ni la estructura metálica: nos dedicamos a lo que mejor sabemos hacer.',
  },
  {
    titulo: 'Coordinado con tu instalación',
    texto:
      'Acordamos contigo el día y la hora de la visita para que la limpieza encaje con las reservas y la actividad de las pistas.',
  },
  {
    titulo: 'Presupuesto claro',
    texto:
      'Con la dirección, el número de pistas y unas fotos solemos tener suficiente para darte una valoración, sin coste y sin compromiso.',
  },
];

const clientes = [
  {
    titulo: 'Clubes de pádel',
    texto:
      'Las pistas son el escaparate del club. Unos cristales limpios transmiten cuidado a socios y jugadores desde el primer partido del día.',
  },
  {
    titulo: 'Centros deportivos y polideportivos',
    texto:
      'Instalaciones con varias pistas deportivas y mucho uso, donde conviene que la limpieza de los cristales forme parte del mantenimiento habitual.',
  },
  {
    titulo: 'Comunidades y urbanizaciones con pista',
    texto:
      'Pistas de pádel en zonas comunes que usan los vecinos. Trabajamos con administradores de fincas y comunidades de propietarios.',
  },
];

const faqs = [
  {
    pregunta: '¿Limpiáis toda la pista de pádel o solo los cristales?',
    respuesta:
      'Solo los cristales. Nuestro servicio en pistas de pádel se centra en el vidrio que cierra la pista, por dentro y por fuera. No limpiamos el césped ni la estructura.',
  },
  {
    pregunta: '¿Puedo contratar una limpieza puntual?',
    respuesta:
      'Sí. Puedes pedir una limpieza concreta cuando la necesites, por ejemplo antes de un torneo o de la temporada, sin contratar nada periódico.',
  },
  {
    pregunta: '¿Ofrecéis mantenimiento periódico para clubes?',
    respuesta:
      'Sí. Igual que con empresas y comunidades, podemos organizar un mantenimiento con visitas programadas. La periodicidad la valoramos contigo según el uso de las pistas.',
  },
  {
    pregunta: '¿En qué zonas trabajáis?',
    respuesta:
      'Trabajamos en Madrid y provincia. Si tu instalación está fuera de esta área, consúltanos y valoramos si podemos desplazarnos.',
  },
  {
    pregunta: '¿Qué necesitáis para preparar el presupuesto?',
    respuesta:
      'La dirección de la instalación, cuántas pistas hay y unas fotos de los cristales. Con eso te damos una valoración inicial sin coste ni compromiso.',
  },
];

export default function LimpiezaPistasPadelMadridPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="padelmad-page">
      <Seo
        title="Limpieza de cristales de pistas de pádel en Madrid | Kristalia"
        description="Limpieza de cristales de pistas de pádel en Madrid para clubes, centros deportivos y comunidades. Servicio puntual o periódico. Presupuesto sin compromiso."
        path={PATH}
        image="/og-image.jpg"
        jsonLd={jsonLd}
        jsonLdId="landing"
      />

      <section className="padelmad-hero" aria-labelledby="padelmad-hero-title">
        <img
          src={heroImg}
          alt="Pasillo entre dos pistas de pádel cubiertas con cerramiento de cristal"
          className="padelmad-hero__img"
          loading="eager"
          fetchPriority="high"
          decoding="async"
        />
        <div className="padelmad-hero__overlay" aria-hidden="true" />

        <div className="padelmad-hero__content container">
          <nav className="padelmad-hero__breadcrumb" aria-label="Migas de pan">
            <Link to="/" className="padelmad-hero__breadcrumb-link">Inicio</Link>
            <span aria-hidden="true"> / </span>
            <span>Limpieza de cristales de pistas de pádel</span>
          </nav>

          <h1 id="padelmad-hero-title" className="padelmad-hero__title">
            Limpieza de cristales de pistas de pádel en Madrid
          </h1>

          <p className="padelmad-hero__subtitle">
            Para clubes, centros deportivos y comunidades con pista propia.
            Dejamos los cristales de tus pistas limpios y transparentes, con una
            limpieza puntual o un mantenimiento periódico.
          </p>

          <div className="padelmad-hero__actions">
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

      <section className="padelmad-intro section" aria-labelledby="padelmad-intro-title">
        <div className="container">
          <div className="padelmad-intro__layout">
            <div className="padelmad-intro__text">
              <span className="section-tag">Por qué importa</span>
              <div className="gold-line" />
              <h2 id="padelmad-intro-title" className="section-title">
                Por qué mantener limpios los cristales de la pista
              </h2>
              <p>
                Los cristales de las pistas de pádel están a la vista de todos:
                de quien juega, de quien espera turno y de quien mira el partido
                desde fuera. Con el uso acumulan huellas, polvo y marcas de
                pelota, y poco a poco pierden transparencia.
              </p>
              <p>
                Un cristal limpio se nota en la visibilidad desde la grada y en
                la imagen que da la instalación. Es de lo primero que percibe un
                socio o un jugador que reserva por primera vez.
              </p>
              <p>
                En Kristalia somos especialistas en{' '}
                <Link to="/empresa-de-limpieza-de-cristales-madrid" className="padelmad-link">
                  limpieza de cristales en Madrid
                </Link>
                , y aplicamos ese mismo cuidado a los cristales de pistas de
                pádel.
              </p>
            </div>

            <div className="padelmad-intro__image-wrap">
              <img
                src={introImg}
                alt="Pistas de pádel con cerramiento de cristal y malla en un club deportivo al atardecer"
                className="padelmad-intro__image"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="padelmad-servicio section bg-alt" aria-labelledby="padelmad-servicio-title">
        <div className="container">
          <header className="section-header--center">
            <span className="section-tag">El servicio</span>
            <div className="gold-line gold-line--center" />
            <h2 id="padelmad-servicio-title" className="section-title">
              Cómo es nuestra limpieza de cristales de pistas de pádel
            </h2>
            <p className="section-subtitle section-subtitle--center">
              Un servicio centrado en el vidrio de la pista, organizado para que
              no interfiera con la actividad de tu instalación.
            </p>
          </header>

          <ul className="padelmad-servicio__grid">
            {servicio.map((item) => (
              <li key={item.titulo} className="padelmad-paso">
                <h3 className="padelmad-paso__title">{item.titulo}</h3>
                <p className="padelmad-paso__text">{item.texto}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="padelmad-clientes section" aria-labelledby="padelmad-clientes-title">
        <div className="container">
          <div className="padelmad-clientes__layout">
            <div className="padelmad-clientes__intro">
              <span className="section-tag">Para quién</span>
              <div className="gold-line" />
              <h2 id="padelmad-clientes-title" className="section-title">
                Para clubes, centros deportivos e instalaciones con pista
              </h2>
              <p className="section-subtitle">
                Trabajamos con cualquier instalación que tenga pistas de pádel
                y quiera mantener sus cristales en buen estado.
              </p>
            </div>

            <ul className="padelmad-clientes__list">
              {clientes.map((cliente) => (
                <li key={cliente.titulo} className="padelmad-cliente">
                  <h3 className="padelmad-cliente__title">{cliente.titulo}</h3>
                  <p className="padelmad-cliente__text">{cliente.texto}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="padelmad-frecuencia section bg-alt" aria-labelledby="padelmad-frecuencia-title">
        <div className="container">
          <header className="section-header--center">
            <span className="section-tag">Puntual o periódica</span>
            <div className="gold-line gold-line--center" />
            <h2 id="padelmad-frecuencia-title" className="section-title">
              Limpieza puntual o mantenimiento periódico
            </h2>
          </header>

          <ul className="padelmad-frecuencia__grid">
            <li className="padelmad-paso">
              <h3 className="padelmad-paso__title">Limpieza puntual</h3>
              <p className="padelmad-paso__text">
                Una limpieza concreta cuando la necesites: antes de un torneo,
                al empezar la temporada o cuando los cristales lo pidan. Sin
                contratar nada periódico.
              </p>
            </li>
            <li className="padelmad-paso">
              <h3 className="padelmad-paso__title">Mantenimiento periódico</h3>
              <p className="padelmad-paso__text">
                Visitas programadas para el mantenimiento de los cristales de
                tus pistas de pádel. La periodicidad la valoramos contigo según
                el uso de la instalación.
              </p>
            </li>
          </ul>

          <div className="padelmad-zona">
            <h2 className="padelmad-zona__title">Dónde trabajamos</h2>
            <p className="padelmad-zona__text">
              Trabajamos en Madrid y provincia. Si tu instalación está fuera de
              esta área, consúltanos y valoramos si podemos desplazarnos.
            </p>
          </div>
        </div>
      </section>

      <section className="padelmad-faq section" aria-labelledby="padelmad-faq-title">
        <div className="container padelmad-faq__container">
          <header className="section-header--center">
            <span className="section-tag">Dudas frecuentes</span>
            <div className="gold-line gold-line--center" />
            <h2 id="padelmad-faq-title" className="section-title">
              Preguntas frecuentes sobre la limpieza de pistas de pádel
            </h2>
          </header>

          <dl className="padelmad-faq__list">
            {faqs.map((faq) => (
              <div key={faq.pregunta} className="padelmad-faq__item">
                <dt className="padelmad-faq__question">{faq.pregunta}</dt>
                <dd className="padelmad-faq__answer">{faq.respuesta}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="padelmad-cta bg-alt" aria-labelledby="padelmad-cta-title">
        <div className="container padelmad-cta__inner">
          <span className="section-tag">Presupuesto sin compromiso</span>
          <div className="gold-line gold-line--center" />

          <h2 id="padelmad-cta-title" className="padelmad-cta__title">
            Pide presupuesto para tus pistas
          </h2>

          <p className="padelmad-cta__text">
            Cuéntanos dónde está la instalación y cuántas pistas tiene, y
            envíanos unas fotos. Te damos una valoración sin coste y sin
            compromiso.
          </p>

          <div className="padelmad-cta__actions">
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

          <p className="padelmad-cta__phone">
            O llámanos directamente al{' '}
            <a
              href={`tel:${PHONE_DISPLAY.replace(/\s/g, '')}`}
              className="padelmad-cta__phone-link"
            >
              {PHONE_DISPLAY}
            </a>
          </p>

          <p className="padelmad-cta__links">
            <Link to="/quienes-somos" className="padelmad-cta__link">
              Conoce a Kristalia
            </Link>

            <span aria-hidden="true"> · </span>

            <Link
              to="/empresa-de-limpieza-de-cristales-madrid"
              className="padelmad-cta__link"
            >
              Limpieza de cristales en Madrid
            </Link>

            <span aria-hidden="true"> · </span>

            <Link to="/empresa-de-limpieza-madrid" className="padelmad-cta__link">
              Empresa de limpieza en Madrid
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
}
