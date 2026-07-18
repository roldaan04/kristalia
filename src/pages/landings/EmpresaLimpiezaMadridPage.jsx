import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Seo, { SITE_URL } from '../../components/Seo';
import Button from '../../components/ui/Button';
import { WHATSAPP_URL, PHONE_DISPLAY } from '../../utils/constants';
import heroImg from '../../assets/fachadas/edificio-fachada-acristalada.webp';
import portalImg from '../../assets/comunidades/comunidad.webp';
import cristalesImg from '../../assets/cristales/cristalera-chalet.webp';
import alturaImg from '../../assets/cristales/cristalera3.webp';
import panelesImg from '../../assets/paneles-solares/paneles2.webp';
import interiorImg from '../../assets/escaparates/escaparate-cocina.webp';
import './EmpresaLimpiezaMadridPage.css';

const PATH = '/empresa-de-limpieza-madrid';

// Fuera del componente: Seo.jsx lleva `jsonLd` en las dependencias de su
// useEffect y una referencia nueva por render dispararía el efecto en bucle.
const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${SITE_URL}${PATH}#service`,
    serviceType: 'Servicios de limpieza profesional',
    name: 'Empresa de limpieza en Madrid',
    description:
      'Servicios de limpieza profesional en Madrid para comunidades de propietarios, oficinas, locales y particulares: cristales, trabajos en altura, paneles solares, cristalizado de suelos, moquetas, tapicerías, canalones, toldos, persianas y eliminación de grafitis.',
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
      name: 'Servicios de limpieza en Madrid',
      itemListElement: [
        'Limpieza de cristales',
        'Limpieza de cristales en altura',
        'Limpieza de paneles solares',
        'Cristalizado y abrillantado de suelos',
        'Limpieza de moquetas',
        'Limpieza de tapicerías',
        'Limpieza de canalones',
        'Eliminación de grafitis',
        'Limpieza de toldos',
        'Limpieza de persianas',
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
        name: 'Empresa de limpieza en Madrid',
        item: `${SITE_URL}${PATH}`,
      },
    ],
  },
];

const serviciosPrincipales = [
  {
    id: 'cristales',
    titulo: 'Limpieza de cristales',
    imagen: cristalesImg,
    alt: 'Porche acristalado de una vivienda con los cristales limpios y transparentes',
    texto:
      'Es nuestra especialidad y el origen de la empresa. Ventanas, cerramientos, mamparas, portales acristalados y escaparates, con un lavado que disuelve la película de partículas de tráfico antes de secar con labio de goma.',
  },
  {
    id: 'altura',
    titulo: 'Limpieza de cristales en altura',
    imagen: alturaImg,
    alt: 'Ventanal situado a gran altura sobre un espacio interior de doble altura con barandilla de vidrio',
    texto:
      'Fachadas acristaladas, lucernarios, patios interiores y ventanales a los que no se llega desde el suelo. Según el edificio se resuelve con pértiga telescópica de agua osmotizada, plataforma elevadora o acceso desde cubierta.',
  },
  {
    id: 'paneles',
    titulo: 'Limpieza de paneles solares',
    imagen: panelesImg,
    alt: 'Instalación de paneles solares sobre la cubierta de una nave industrial',
    texto:
      'En Madrid llueve poco y los veranos pasan casi sin precipitación, así que el polvo no se lava solo: se queda sobre el panel y baja la producción. Limpiamos con agua desmineralizada, sin productos que ataquen el vidrio ni presiones que fuercen los anclajes.',
  },
];

const serviciosAdicionales = [
  {
    titulo: 'Cristalizado y abrillantado de suelos',
    texto:
      'El mármol y el terrazo de los portales madrileños de los años sesenta y setenta se apagan por el tránsito y por la arenilla que entra de la calle. El cristalizado devuelve el brillo sin sustituir el suelo, que es la alternativa cara.',
  },
  {
    titulo: 'Limpieza de moquetas',
    texto:
      'Plantas de oficina, salas de reuniones y zonas comunes enmoquetadas. Limpieza por inyección-extracción, que retira la suciedad incrustada en la fibra en lugar de repartirla, con secado rápido para no parar la actividad.',
  },
  {
    titulo: 'Limpieza de tapicerías',
    texto:
      'Sofás, butacas y sillería de oficina. Tratamos el tejido según su composición y probamos siempre en una zona oculta antes de intervenir sobre el conjunto.',
  },
  {
    titulo: 'Limpieza de canalones',
    texto:
      'Madrid es de las capitales europeas con más arbolado viario y en noviembre la hojarasca acaba en las cubiertas. Un canalón atascado no da problemas hasta la primera tormenta fuerte de verano, y entonces el agua entra por la última planta.',
  },
  {
    titulo: 'Eliminación de grafitis',
    texto:
      'El tratamiento depende del material, no de la pintura. El granito de la sierra y la caliza son porosos y absorben; el ladrillo visto y el monocapa admiten otra cosa. Valoramos la fachada antes de tocarla para no dejar una mancha peor que el grafiti.',
  },
  {
    titulo: 'Limpieza de toldos',
    texto:
      'La lona clara de las terrazas de hostelería marca el polvo y la contaminación en pocos meses, y es lo primero que ve un cliente desde la acera. Limpieza en su sitio, sin desmontar el brazo salvo que haga falta.',
  },
  {
    titulo: 'Limpieza de persianas',
    texto:
      'Lamas de aluminio y cajón interior. Es donde más polvo se acumula de toda la ventana y donde nadie llega en la limpieza del día a día. Se limpia cuando se hacen los cristales, aprovechando la misma visita.',
  },
];

const calendario = [
  {
    estacion: 'Otoño',
    texto:
      'Es el mes de los canalones. Entre octubre y noviembre cae la hoja del arbolado viario y las cubiertas planas se llenan. Revisar canalones y sumideros ahora cuesta una fracción de lo que cuesta una filtración en enero.',
  },
  {
    estacion: 'Invierno',
    texto:
      'Los días son cortos y se nota cada superficie que roba luz: lucernarios, patios interiores, claraboyas de portal. También es cuando los paneles solares producen menos y la suciedad acumulada pesa más sobre el rendimiento.',
  },
  {
    estacion: 'Primavera',
    texto:
      'El polen de plátano de sombra se pega a cristales, toldos y tapicerías de terraza. Coincide con el arranque de la temporada de terrazas, así que es el momento natural para poner a punto lonas y mobiliario exterior.',
  },
  {
    estacion: 'Verano',
    texto:
      'Calima y sequedad. Con apenas lluvia entre junio y septiembre, la suciedad se compacta en lugar de arrastrarse. Tras un episodio de polvo sahariano conviene adelantar la limpieza antes de que se fije con la primera tormenta.',
  },
];

const clientes = [
  {
    titulo: 'Comunidades de propietarios',
    texto:
      'Portales, puertas acristaladas, suelos de mármol, patios y canalones. Trabajamos con administradores de fincas y damos presupuesto por escrito con precio cerrado, que es lo que se necesita para llevarlo a junta.',
  },
  {
    titulo: 'Oficinas y empresas',
    texto:
      'Cristaleras, moquetas, tapicería de sillería y mantenimiento periódico con visitas programadas fuera del horario de trabajo si hace falta.',
  },
  {
    titulo: 'Locales y hostelería',
    texto:
      'Escaparates, toldos de terraza y suelos. La imagen de la calle es la primera venta, y en Madrid la suciedad de tráfico va rápido.',
  },
  {
    titulo: 'Particulares',
    texto:
      'Cerramientos de terraza, ventanas de difícil acceso, sofás y moquetas. Trabajos puntuales sin contrato ni permanencia.',
  },
];

const faqs = [
  {
    pregunta: '¿Hacéis limpieza de oficinas del día a día?',
    respuesta:
      'No. Kristalia es una empresa de limpieza especializada, no un servicio de limpieza diaria de mantenimiento. Nos dedicamos a los trabajos que requieren equipo y técnica concretos: cristales, altura, paneles solares, suelos, textiles, canalones, toldos y grafitis. Si necesitas limpieza diaria de una oficina, no somos la opción adecuada y preferimos decírtelo antes.',
  },
  {
    pregunta: '¿Se pueden contratar varios servicios en la misma visita?',
    respuesta:
      'Sí, y casi siempre sale mejor de precio. Lo más habitual en comunidades es juntar cristales del portal, cristalizado del suelo y revisión de canalones en una sola intervención. En oficinas, cristales y moqueta. Al agrupar se reparte el desplazamiento y el montaje entre todos los trabajos.',
  },
  {
    pregunta: '¿Trabajáis fuera de Madrid capital?',
    respuesta:
      'Nuestra base de trabajo son los 21 distritos de la capital, que es donde podemos garantizar mejor plazo y mejor precio. Para trabajos en municipios de la Comunidad de Madrid lo valoramos caso por caso según el volumen y la distancia. Consúltanos y te decimos con claridad si podemos o no.',
  },
  {
    pregunta: '¿Cuánto cuesta un servicio de limpieza?',
    respuesta:
      'No damos tarifas cerradas por adelantado porque dependen del acceso, la superficie y el estado de partida, y cualquier cifra genérica acabaría siendo falsa. Lo que sí hacemos es dar un presupuesto por escrito, con precio cerrado, sin coste y sin compromiso. Con unas fotos y la dirección suele bastar.',
  },
  {
    pregunta: '¿Cada cuánto conviene contratar el servicio?',
    respuesta:
      'Cada superficie tiene su ritmo. Los cristales de un local a pie de calle, mensual; los de una oficina en altura, trimestral. Canalones, una vez al año después de la caída de la hoja. Cristalizado de un portal, cada uno o dos años según el tránsito. Paneles solares, una o dos veces al año. En la valoración inicial te proponemos un calendario concreto para tu caso.',
  },
];

export default function EmpresaLimpiezaMadridPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="limpmad-page">
      <Seo
        title="Empresa de limpieza en Madrid | Kristalia"
        description="Empresa de limpieza en Madrid para comunidades, oficinas y locales: cristales, altura, paneles solares, suelos, moquetas, toldos y grafitis."
        path={PATH}
        image="/og-image.jpg"
        jsonLd={jsonLd}
        jsonLdId="landing"
      />

      <section className="limpmad-hero" aria-labelledby="limpmad-hero-title">
        <img
          src={heroImg}
          alt="Fachada de un edificio de oficinas en Madrid con grandes ventanales de vidrio reflectante limpios"
          className="limpmad-hero__img"
          loading="eager"
          fetchPriority="high"
          decoding="async"
        />
        <div className="limpmad-hero__overlay" aria-hidden="true" />

        <div className="limpmad-hero__content container">
          <nav className="limpmad-hero__breadcrumb" aria-label="Migas de pan">
            <Link to="/" className="limpmad-hero__breadcrumb-link">Inicio</Link>
            <span aria-hidden="true"> / </span>
            <span>Empresa de limpieza en Madrid</span>
          </nav>

          <h1 id="limpmad-hero-title" className="limpmad-hero__title">
            Empresa de limpieza en Madrid
          </h1>

          <p className="limpmad-hero__subtitle">
            Comunidades, oficinas, locales y particulares. Cristales y trabajo en
            altura como especialidad, más los servicios que suelen quedarse sin
            hacer: suelos, textiles, canalones, toldos y grafitis.
          </p>

          <div className="limpmad-hero__actions">
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

      <section className="limpmad-intro section" aria-labelledby="limpmad-intro-title">
        <div className="container">
          <div className="limpmad-intro__layout">
            <div className="limpmad-intro__text">
              <span className="section-tag">Quiénes somos</span>
              <div className="gold-line" />
              <h2 id="limpmad-intro-title" className="section-title">
                Una empresa de limpieza especializada, no generalista
              </h2>
              <p>
                Kristalia empezó limpiando cristales en Madrid y sigue siendo lo
                que mejor hacemos. Con el tiempo, los mismos clientes —sobre todo
                comunidades de propietarios y oficinas— nos fueron pidiendo lo
                que nadie les resolvía: el portal de mármol apagado, la moqueta
                de la planta, el canalón atascado, el grafiti de la fachada.
              </p>
              <p>
                Así se formó el catálogo actual. No hacemos limpieza diaria de
                mantenimiento ni competimos por volumen: nos dedicamos a los
                trabajos que necesitan equipo específico, criterio sobre el
                material y alguien que sepa cuándo no hay que tocar algo.
              </p>
              <p>
                Trabajamos en los 21 distritos de Madrid capital, con presupuesto
                por escrito y precio cerrado antes de empezar.
              </p>
            </div>

            <div className="limpmad-intro__image-wrap">
              <img
                src={portalImg}
                alt="Portal de una comunidad de vecinos con puerta acristalada y suelo de mármol pulido"
                className="limpmad-intro__image"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="limpmad-servicios section bg-alt" aria-labelledby="limpmad-servicios-title">
        <div className="container">
          <header className="section-header--center">
            <span className="section-tag">Nuestros servicios</span>
            <div className="gold-line gold-line--center" />
            <h2 id="limpmad-servicios-title" className="section-title">
              Lo que hacemos todos los días
            </h2>
            <p className="section-subtitle section-subtitle--center">
              Tres servicios concentran la mayor parte de nuestro trabajo en
              Madrid. Son los que dominamos de verdad.
            </p>
          </header>

          <div className="limpmad-servicios__grid">
            {serviciosPrincipales.map((servicio) => (
              <article key={servicio.id} className="limpmad-servicio">
                <div className="limpmad-servicio__image-wrap">
                  <img
                    src={servicio.imagen}
                    alt={servicio.alt}
                    className="limpmad-servicio__image"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <h3 className="limpmad-servicio__title">{servicio.titulo}</h3>
                <p className="limpmad-servicio__text">{servicio.texto}</p>
              </article>
            ))}
          </div>

          <p className="limpmad-servicios__note">
            Si lo que necesitas es solo cristal, tenemos una página con el detalle
            del{' '}
            <Link to="/empresa-de-limpieza-de-cristales-madrid" className="limpmad-link">
              servicio de limpieza de cristales en Madrid
            </Link>
            : tipos de edificio, medios de acceso y cobertura por distrito.
          </p>
        </div>
      </section>

      <section className="limpmad-adicionales section" aria-labelledby="limpmad-adicionales-title">
        <div className="container">
          <div className="limpmad-adicionales__layout">
            <div className="limpmad-adicionales__intro">
              <span className="section-tag">Servicios adicionales</span>
              <div className="gold-line" />
              <h2 id="limpmad-adicionales-title" className="section-title">
                Lo que casi nadie quiere hacer
              </h2>
              <p className="section-subtitle">
                Son trabajos puntuales, incómodos y con poco margen de error.
                Precisamente por eso cuesta encontrar quien los haga bien en
                Madrid.
              </p>
            </div>

            <ul className="limpmad-adicionales__list">
              {serviciosAdicionales.map((servicio) => (
                <li key={servicio.titulo} className="limpmad-adicional">
                  <h3 className="limpmad-adicional__title">{servicio.titulo}</h3>
                  <p className="limpmad-adicional__text">{servicio.texto}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="limpmad-calendario section bg-alt" aria-labelledby="limpmad-calendario-title">
        <div className="container">
          <header className="section-header--center">
            <span className="section-tag">Clima y calendario</span>
            <div className="gold-line gold-line--center" />
            <h2 id="limpmad-calendario-title" className="section-title">
              El año de limpieza en Madrid
            </h2>
            <p className="section-subtitle section-subtitle--center">
              Con unos 430 mm de lluvia al año, Madrid no limpia nada por sí sola.
              Cada estación deja su marca en una superficie distinta.
            </p>
          </header>

          <div className="limpmad-calendario__grid">
            {calendario.map((bloque) => (
              <article key={bloque.estacion} className="limpmad-estacion">
                <h3 className="limpmad-estacion__title">{bloque.estacion}</h3>
                <p className="limpmad-estacion__text">{bloque.texto}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="limpmad-clientes section" aria-labelledby="limpmad-clientes-title">
        <div className="container">
          <div className="limpmad-clientes__layout">
            <div className="limpmad-clientes__image-wrap">
              <img
                src={interiorImg}
                alt="Interior de una vivienda reformada con mampara de vidrio y suelo hidráulico"
                className="limpmad-clientes__image"
                loading="lazy"
                decoding="async"
              />
            </div>

            <div className="limpmad-clientes__body">
              <span className="section-tag">A quién servimos</span>
              <div className="gold-line" />
              <h2 id="limpmad-clientes-title" className="section-title">
                Cuatro tipos de cliente, cuatro formas de trabajar
              </h2>

              <ul className="limpmad-clientes__list">
                {clientes.map((cliente) => (
                  <li key={cliente.titulo} className="limpmad-cliente">
                    <h3 className="limpmad-cliente__title">{cliente.titulo}</h3>
                    <p className="limpmad-cliente__text">{cliente.texto}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="limpmad-faq section bg-alt" aria-labelledby="limpmad-faq-title">
        <div className="container limpmad-faq__container">
          <header className="section-header--center">
            <span className="section-tag">Dudas frecuentes</span>
            <div className="gold-line gold-line--center" />
            <h2 id="limpmad-faq-title" className="section-title">
              Antes de llamarnos
            </h2>
          </header>

          <dl className="limpmad-faq__list">
            {faqs.map((faq) => (
              <div key={faq.pregunta} className="limpmad-faq__item">
                <dt className="limpmad-faq__question">{faq.pregunta}</dt>
                <dd className="limpmad-faq__answer">{faq.respuesta}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="limpmad-cta bg-dark" aria-labelledby="limpmad-cta-title">
        <div className="container limpmad-cta__inner">
          <h2 id="limpmad-cta-title" className="limpmad-cta__title">
            Cuéntanos qué hay que limpiar
          </h2>
          <p className="limpmad-cta__text">
            Con la dirección, un par de fotos y lo que necesitas te damos un
            presupuesto por escrito con precio cerrado. Sin visita comercial y sin
            compromiso.
          </p>

          <div className="limpmad-cta__actions">
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

          <p className="limpmad-cta__phone">
            O llámanos al{' '}
            <a href={`tel:${PHONE_DISPLAY.replace(/\s/g, '')}`} className="limpmad-cta__phone-link">
              {PHONE_DISPLAY}
            </a>
          </p>

          <p className="limpmad-cta__links">
            <Link to="/quienes-somos" className="limpmad-cta__link">Conoce a Kristalia</Link>
            <span aria-hidden="true"> · </span>
            <Link to="/empresa-de-limpieza-de-cristales-madrid" className="limpmad-cta__link">
              Limpieza de cristales en Madrid
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
}
