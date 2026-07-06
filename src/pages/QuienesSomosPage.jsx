import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';
import { WHATSAPP_URL } from '../utils/constants';
import cristalera2Img from '../assets/particulares/particular.jpeg';
import cristaleraImg from '../assets/fachadas/fachada-acristalada (2).jpeg';
import heroIllustration from '../assets/hero.png';
import './QuienesSomosPage.css';

const values = [
  {
    number: '01',
    title: 'Transparencia',
    description: 'Presupuestos claros antes de empezar. Sin costes añadidos, sin cambios de precio una vez acordado el trabajo.',
  },
  {
    number: '02',
    title: 'Profesionalidad',
    description: 'Formación específica, equipos adecuados y productos homologados. Cada trabajo se hace con los medios que requiere.',
  },
  {
    number: '03',
    title: 'Puntualidad',
    description: 'Llegamos en el horario acordado y terminamos el trabajo en el plazo estimado. Tu tiempo es tan valioso como el nuestro.',
  },
  {
    number: '04',
    title: 'Compromiso',
    description: 'Nuestro trabajo solo termina cuando el resultado es el esperado. Antes de irnos, comprobamos contigo que todo esté impecable.',
  },
];

export default function QuienesSomosPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="about-page">
      <section
        className="about-hero"
        style={{ backgroundImage: `url(${cristalera2Img})` }}
        aria-label="Quiénes somos — Kristalia"
      >
        <div className="about-hero__overlay" aria-hidden="true" />
        <div className="about-hero__content container">
          <nav className="about-hero__breadcrumb" aria-label="Migas de pan">
            <Link to="/" className="about-hero__breadcrumb-link">Inicio</Link>
            <span aria-hidden="true"> / </span>
            <span>Quiénes somos</span>
          </nav>
          <h1 className="about-hero__title">Kristalia.</h1>
          <p className="about-hero__subtitle">
            Una empresa de limpieza profesional de cristales con un método claro, un equipo serio y un compromiso real con el resultado.
          </p>
        </div>
      </section>

      <section className="about-intro section">
        <div className="container">
          <div className="about-intro__layout">
            <div className="about-intro__text">
              <span className="section-tag">Nuestra historia</span>
              <div className="gold-line" />
              <h2 className="section-title">Especialistas en lo que hacemos</h2>
              <p>
                Kristalia nació de la convicción de que la limpieza de cristales es un oficio que merece hacerse bien. No como un servicio secundario, sino como una especialidad con método, técnica y atención al detalle.
              </p>
              <p>
                Trabajamos con empresas, comunidades de propietarios, locales comerciales y particulares que exigen un resultado impecable. Cada cliente es diferente, y eso lo sabemos desde el primer contacto.
              </p>
              <p>
                Contamos con los equipos y la formación necesarios para trabajar en cualquier tipo de superficie acristalada, a cualquier altura, con los productos y técnicas adecuados a cada caso.
              </p>
            </div>
            <div className="about-intro__image-wrap">
              <img
                src={cristaleraImg}
                alt="Cristalera residencial recién limpiada con escalera en exterior"
                className="about-intro__image"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="about-values section bg-alt">
        <div className="container">
          <header className="section-header--center">
            <span className="section-tag">Nuestra forma de trabajar</span>
            <div className="gold-line gold-line--center" />
            <h2 className="section-title">Valores que guían cada trabajo</h2>
            <p className="section-subtitle section-subtitle--center">
              No son eslóganes. Son las cuatro cosas que cualquier cliente puede esperar de nosotros en cada visita.
            </p>
          </header>

          <div className="about-values__grid">
            {values.map((item) => (
              <div key={item.number} className="about-value">
                <span className="about-value__number">{item.number}</span>
                <h3 className="about-value__title">{item.title}</h3>
                <p className="about-value__desc">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="about-clients section">
        <div className="container">
          <header className="section-header--center">
            <span className="section-tag">A quién servimos</span>
            <div className="gold-line gold-line--center" />
            <h2 className="section-title">Servicio para todo tipo de cliente</h2>
          </header>

          <div className="about-clients__grid">
            <div className="about-client">
              <h3 className="about-client__title">Empresas y oficinas</h3>
              <p className="about-client__desc">
                Contratos de mantenimiento periódico adaptados al horario de tu equipo. Cristaleras, ventanas de oficina y fachadas acristaladas siempre impecables.
              </p>
            </div>
            <div className="about-client">
              <h3 className="about-client__title">Locales y comercios</h3>
              <p className="about-client__desc">
                Tu escaparate es tu presentación. Servicio semanal, quincenal o mensual para que la imagen de tu local esté siempre al nivel de lo que vendes.
              </p>
            </div>
            <div className="about-client">
              <h3 className="about-client__title">Comunidades de propietarios</h3>
              <p className="about-client__desc">
                Zonas comunes, portales acristalados, marquesinas y fachadas. Trabajamos con administradores y presidentes de comunidad para mantener el edificio en perfecto estado.
              </p>
            </div>
            <div className="about-client">
              <h3 className="about-client__title">Particulares</h3>
              <p className="about-client__desc">
                Cristaleras, terrazas, ventanas de difícil acceso o acristalamientos especiales. Para cuando quieres que lo haga alguien que realmente sabe.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="about-cta" aria-label="Solicitar presupuesto">
        <div className="about-cta__image-wrap">
          <div className="about-cta__illustration">
            <img
              src={heroIllustration}
              alt="Ilustración de cristal Kristalia"
              className="about-cta__illustration-img"
              aria-hidden="true"
            />
          </div>
          <div className="about-cta__content container">
            <h2 className="about-cta__title">¿Listo para tener los cristales impecables?</h2>
            <p className="about-cta__text">
              Cuéntanos qué necesitas. Te respondemos en menos de 24 horas con un presupuesto claro y sin compromiso.
            </p>
              <div className="about-cta__actions">
                <Button
                  variant="gold"
                  size="lg"
                  href="/#contacto"
                >
                  Solicitar presupuesto
                </Button>
                <Button
                  variant="outline-light"
                  size="lg"
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.49"/>
                  </svg>
                  Hablar por WhatsApp
                </Button>
              </div>
          </div>
        </div>
      </section>
    </main>
  );
}
