import { services } from '../../data/services';
import './ServicesSection.css';

export default function ServicesSection() {
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

        <div className="services__grid">
          {services.map((service, idx) => (
            <article
              id={`servicio-${service.id}`}
              key={service.id}
              className="service-item"
            >
              <div className="service-item__image-wrap">
                <img
                  src={service.image}
                  alt={service.alt}
                  className="service-item__image"
                  loading={idx < 2 ? 'eager' : 'lazy'}
                />
              </div>

              <div className="service-item__body">
                <span className="service-item__number">
                  {String(service.id).padStart(2, '0')}
                </span>
                <h3 className="service-item__title">{service.title}</h3>
                <p className="service-item__desc">{service.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}