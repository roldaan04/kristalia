import { testimonials } from '../../data/testimonials';
import './TestimonialsSection.css';

export default function TestimonialsSection() {
  return (
    <section className="testimonials section">
      <div className="container">
        <header className="section-header--center">
          <span className="section-tag">Opiniones</span>
          <div className="gold-line gold-line--center" />
          <h2 className="section-title">Lo que dicen nuestros clientes</h2>
        </header>

        <div className="testimonials__grid">
          {testimonials.map((item) => (
            <blockquote key={item.id} className="testimonial">
              <div className="testimonial__quote-mark" aria-hidden="true">"</div>
              <p className="testimonial__text">{item.quote}</p>
              <footer className="testimonial__footer">
                <span className="testimonial__name">{item.name}</span>
                <span className="testimonial__role">{item.role} — {item.location}</span>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
