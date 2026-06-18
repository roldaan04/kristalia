import { useState } from 'react';
import { faqs } from '../../data/faqs';
import './FaqSection.css';

export default function FaqSection() {
  const [open, setOpen] = useState(null);

  const toggle = (id) => setOpen(open === id ? null : id);

  return (
    <section className="faq section bg-alt">
      <div className="container">
        <div className="faq__layout">
          <div className="faq__header">
            <span className="section-tag">Preguntas frecuentes</span>
            <div className="gold-line" />
            <h2 className="section-title">Resolvemos tus dudas</h2>
            <p className="section-subtitle">
              Si tienes alguna pregunta que no está aquí, escríbenos por WhatsApp o llámanos directamente.
            </p>
          </div>

          <div className="faq__list">
            {faqs.map((faq) => (
              <div
                key={faq.id}
                className={`faq__item ${open === faq.id ? 'faq__item--open' : ''}`}
              >
                <button
                  className="faq__question"
                  onClick={() => toggle(faq.id)}
                  aria-expanded={open === faq.id}
                  aria-controls={`faq-answer-${faq.id}`}
                >
                  <span>{faq.question}</span>
                  <span className="faq__icon" aria-hidden="true">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </span>
                </button>
                <div
                  id={`faq-answer-${faq.id}`}
                  className="faq__answer"
                  role="region"
                  hidden={open !== faq.id}
                >
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
