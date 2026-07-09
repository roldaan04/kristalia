import Button from '../ui/Button';
import heroImg from '../../assets/cristales/cristaleraa.jpg';
import './Hero.css';

export default function Hero() {
  const scrollToSection = (hash) => {
    const el = document.querySelector(hash);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="inicio"
      className="hero"
      style={{ backgroundImage: `url(${heroImg})` }}
      aria-label="Bienvenida a Kristalia"
    >
      <div className="hero__overlay" aria-hidden="true" />

      <div className="hero__content container">
        <div className="hero__text">
          <span className="hero__tag">Limpieza especializada en cristales</span>

          <h1 className="hero__title">
            Cristales impecables para empresas, comunidades y particulares.
          </h1>

          <p className="hero__subtitle">
            Servicio rápido, seguro y adaptado a cada espacio. Presupuesto sin compromiso.
          </p>

          <div className="hero__actions hero__actions--single">
            <Button
              variant="outline-light"
              size="lg"
              className="hero__services-btn"
              onClick={() => scrollToSection('#servicios')}
            >
              Ver servicios
            </Button>
          </div>
        </div>
      </div>

      <div className="hero__scroll-indicator" aria-hidden="true">
        <div className="hero__scroll-line" />
      </div>
    </section>
  );
}