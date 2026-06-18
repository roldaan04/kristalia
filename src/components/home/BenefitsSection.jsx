import { benefits } from '../../data/benefits';
import './BenefitsSection.css';

export default function BenefitsSection() {
  return (
    <section className="benefits section bg-alt">
      <div className="container">
        <header className="section-header--center">
          <span className="section-tag">Por qué elegirnos</span>
          <div className="gold-line gold-line--center" />
          <h2 className="section-title">Un servicio que se nota</h2>
          <p className="section-subtitle section-subtitle--center">
            No solo limpiamos cristales. Cuidamos la imagen de tu espacio y te damos la tranquilidad de que el trabajo queda bien hecho.
          </p>
        </header>

        <div className="benefits__grid">
          {benefits.map((item) => (
            <div key={item.id} className="benefit-item">
              <span className="benefit-item__number">{item.number}</span>
              <h3 className="benefit-item__title">{item.title}</h3>
              <p className="benefit-item__desc">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
