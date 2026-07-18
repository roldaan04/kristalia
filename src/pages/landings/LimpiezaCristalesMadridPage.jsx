import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Seo, { SITE_URL } from '../../components/Seo';
import Button from '../../components/ui/Button';
import { WHATSAPP_URL, PHONE_DISPLAY } from '../../utils/constants';
import heroImg from '../../assets/cristales/cristalera4.webp';
import metodoImg from '../../assets/cristales/cristalera.webp';
import aticoImg from '../../assets/cristales/cristalera2.webp';
import escaparateImg from '../../assets/escaparates/escaparates.webp';
import lucernarioImg from '../../assets/fachadas/fachada-acristalada.webp';
import calleImg from '../../assets/fachadas/fachadaAcristalada.webp';
import './LimpiezaCristalesMadridPage.css';

const PATH = '/empresa-de-limpieza-de-cristales-madrid';

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
      'Limpieza profesional de cristales, escaparates, cerramientos de ático, lucernarios y fachadas acristaladas en los 21 distritos de Madrid capital, con medios adaptados al acceso de cada edificio.',
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
    id: 'ensanche',
    titulo: 'Miradores y patios del Ensanche',
    imagen: calleImg,
    alt: 'Fachada estrecha con ventanas de aluminio vista en contrapicado desde la acera',
    texto:
      'Las fincas de Salamanca, Chamberí o Retiro tienen miradores acristalados, carpintería antigua y patios de luces de apenas dos metros. Ahí no entra una plataforma: se trabaja desde el interior, ventana por ventana, y con pértiga para lo que da a patio.',
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
      'Un escaparate en un eje de tráfico como Alcalá, Bravo Murillo o Príncipe de Vergara se ensucia varias veces más rápido que el mismo escaparate en una calle peatonal de Malasaña. La periodicidad no puede ser la misma.',
  },
  {
    id: 'lucernarios',
    titulo: 'Lucernarios y atrios',
    imagen: lucernarioImg,
    alt: 'Lucernario acristalado de gran superficie sobre el atrio interior de un edificio',
    texto:
      'Portales con cubierta de vidrio, atrios de oficinas y galerías comerciales. Son superficies grandes, en horizontal y con muy mal acceso, donde la suciedad se acumula sin que nadie la vea hasta que la luz baja de golpe.',
  },
];

const distritos = [
  'Centro', 'Arganzuela', 'Retiro', 'Salamanca', 'Chamartín', 'Tetuán',
  'Chamberí', 'Fuencarral-El Pardo', 'Moncloa-Aravaca', 'Latina', 'Carabanchel',
  'Usera', 'Puente de Vallecas', 'Moratalaz', 'Ciudad Lineal', 'Hortaleza',
  'Villaverde', 'Villa de Vallecas', 'Vicálvaro', 'San Blas-Canillejas', 'Barajas',
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
      'Sí, es una parte importante de lo que hacemos en Madrid capital: portales acristalados, puertas de acceso, lucernarios de patio y ventanas de zonas comunes. Damos un presupuesto por escrito con precio cerrado por visita, que es lo que necesita cualquier administrador para llevarlo a junta.',
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
        description="Empresa de limpieza de cristales en Madrid capital: escaparates, oficinas, comunidades, áticos y lucernarios. Trabajo en altura. Presupuesto gratis."
        path={PATH}
        image="/og-image.jpg"
        jsonLd={jsonLd}
        jsonLdId="landing"
      />

      <section className="crismad-hero" aria-labelledby="crismad-hero-title">
        <img
          src={heroImg}
          alt="Techo y cerramiento acristalado de una terraza de ático en Madrid tras la limpieza"
          className="crismad-hero__img"
          loading="eager"
          fetchPriority="high"
          decoding="async"
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
            Trabajamos solo en Madrid y solo con cristal. Escaparates, oficinas,
            comunidades, cerramientos de ático y lucernarios en los 21 distritos
            de la capital.
          </p>

          <div className="crismad-hero__actions">
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

      <section className="crismad-intro section" aria-labelledby="crismad-intro-title">
        <div className="container">
          <div className="crismad-intro__layout">
            <div className="crismad-intro__text">
              <span className="section-tag">Especialistas en cristal</span>
              <div className="gold-line" />
              <h2 id="crismad-intro-title" className="section-title">
                El cristal en Madrid no se ensucia como en otras ciudades
              </h2>
              <p>
                Es la diferencia que más sorprende a quien viene de fuera. El agua
                que llega a Madrid procede de los embalses de la sierra de
                Guadarrama, sobre roca granítica, y es de las más blandas de
                España. Aquí prácticamente no hay incrustación de cal en el vidrio,
                el problema que domina en el Levante o en el sur.
              </p>
              <p>
                Lo que sí hay es una película grasa de partículas en suspensión:
                hollín de tráfico, polvo y polen. No se va con agua y un paño,
                porque al arrastrarla se reparte por el cristal en lugar de
                retirarse. De ahí el velo que aparece al secar y la sensación de
                que el cristal está peor después de limpiarlo.
              </p>
              <p>
                Por eso trabajamos con un lavado previo que disuelve esa película
                y un secado con labio de goma, sin abrasivos y sin producto de más.
                Es un método pensado para la suciedad que hay en esta ciudad, no
                un procedimiento genérico.
              </p>
            </div>

            <div className="crismad-intro__image-wrap">
              <img
                src={metodoImg}
                alt="Cerramiento acristalado de una vivienda durante la limpieza, con escalera telescópica y útiles de trabajo"
                className="crismad-intro__image"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="crismad-factores section bg-alt" aria-labelledby="crismad-factores-title">
        <div className="container">
          <header className="section-header--center">
            <span className="section-tag">Condiciones locales</span>
            <div className="gold-line gold-line--center" />
            <h2 id="crismad-factores-title" className="section-title">
              Qué ensucia los cristales en Madrid
            </h2>
            <p className="section-subtitle section-subtitle--center">
              Tres factores explican casi toda la suciedad que encontramos en la
              capital. Saber cuál pesa más en tu edificio es lo que fija la
              periodicidad correcta.
            </p>
          </header>

          <ol className="crismad-factores__list">
            <li className="crismad-factor">
              <span className="crismad-factor__number">01</span>
              <div className="crismad-factor__body">
                <h3 className="crismad-factor__title">El tráfico</h3>
                <p className="crismad-factor__text">
                  La M-30, la Castellana y los grandes ejes de entrada concentran
                  un tránsito constante que deja una película fina y grasa sobre
                  cualquier superficie vertical. Es la razón por la que un local
                  a pie de calle necesita una frecuencia distinta a la de una
                  oficina en una octava planta del mismo edificio.
                </p>
              </div>
            </li>

            <li className="crismad-factor">
              <span className="crismad-factor__number">02</span>
              <div className="crismad-factor__body">
                <h3 className="crismad-factor__title">La calima</h3>
                <p className="crismad-factor__text">
                  Los episodios de polvo sahariano dejan un poso rojizo sobre
                  cristales, cerramientos y toldos en cuestión de horas. El de
                  marzo de 2022 fue el más intenso registrado y llenó media
                  ciudad. Después de un episodio así, adelantar la limpieza
                  evita que el polvo se fije con la primera lluvia.
                </p>
              </div>
            </li>

            <li className="crismad-factor">
              <span className="crismad-factor__number">03</span>
              <div className="crismad-factor__body">
                <h3 className="crismad-factor__title">La sequedad</h3>
                <p className="crismad-factor__text">
                  Madrid ronda los 430 mm de lluvia al año y pasa veranos casi
                  sin precipitación. La suciedad no se lava sola: se acumula
                  durante meses y se compacta. En zonas con obra cerca, además,
                  el polvo de cemento es alcalino y puede dejar marca permanente
                  en el vidrio si se deja secar.
                </p>
              </div>
            </li>
          </ol>
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
                  <img
                    src={item.imagen}
                    alt={item.alt}
                    className="crismad-tipologia__image"
                    loading="lazy"
                    decoding="async"
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

      <section className="crismad-zonas section" aria-labelledby="crismad-zonas-title">
        <div className="container">
          <header className="section-header--center">
            <span className="section-tag">Cobertura</span>
            <div className="gold-line gold-line--center" />
            <h2 id="crismad-zonas-title" className="section-title">
              Los 21 distritos de Madrid capital
            </h2>
            <p className="section-subtitle section-subtitle--center">
              Nos movemos por toda la ciudad. Estas son las zonas donde más
              trabajo tenemos y en las que podemos ajustar mejor el precio por la
              cercanía entre servicios.
            </p>
          </header>

          <ul className="crismad-zonas__grid">
            {distritos.map((distrito) => (
              <li key={distrito} className="crismad-zonas__item">{distrito}</li>
            ))}
          </ul>

          <p className="crismad-zonas__note">
            ¿Tu edificio está fuera de la capital? Cuéntanoslo igualmente en la{' '}
            <Link to="/" className="crismad-link">página de inicio</Link> y
            valoramos el desplazamiento. Si además necesitas suelos, moquetas o
            tapicerías, puedes ver el{' '}
            <Link to="/empresa-de-limpieza-madrid" className="crismad-link">
              resto de servicios de limpieza que ofrecemos en Madrid
            </Link>.
          </p>
        </div>
      </section>

      <section className="crismad-faq section bg-alt" aria-labelledby="crismad-faq-title">
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

      <section className="crismad-cta bg-dark" aria-labelledby="crismad-cta-title">
        <div className="container crismad-cta__inner">
          <h2 id="crismad-cta-title" className="crismad-cta__title">
            Dinos qué edificio es y te decimos cómo se limpia
          </h2>
          <p className="crismad-cta__text">
            Con la dirección, la planta y una foto tenemos suficiente para darte
            un precio cerrado. Sin visita comercial y sin compromiso.
          </p>

          <div className="crismad-cta__actions">
            <Button variant="gold" size="lg" href="/#contacto">
              Solicitar presupuesto
            </Button>
            <Button
              variant="outline-light"
              size="lg"
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              Hablar por WhatsApp
            </Button>
          </div>

          <p className="crismad-cta__phone">
            O llámanos directamente al{' '}
            <a href={`tel:${PHONE_DISPLAY.replace(/\s/g, '')}`} className="crismad-cta__phone-link">
              {PHONE_DISPLAY}
            </a>
          </p>

          <p className="crismad-cta__links">
            <Link to="/quienes-somos" className="crismad-cta__link">Conoce a Kristalia</Link>
            <span aria-hidden="true"> · </span>
            <Link to="/empresa-de-limpieza-madrid" className="crismad-cta__link">
              Empresa de limpieza en Madrid
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
}
