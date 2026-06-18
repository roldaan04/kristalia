import './ProcessSection.css';

const steps = [
  {
    number: '1',
    title: 'Nos cuentas qué necesitas',
    description: 'Por teléfono, WhatsApp o formulario. Cuéntanos el tipo de espacio, la superficie aproximada y lo que necesitas.',
  },
  {
    number: '2',
    title: 'Analizamos el trabajo',
    description: 'Evaluamos el tipo de cristal, la altura, el acceso y la dificultad para darte un precio real y detallado.',
  },
  {
    number: '3',
    title: 'Presupuesto claro',
    description: 'Sin letra pequeña, sin costes ocultos. Recibes el presupuesto por escrito antes de confirmar nada.',
  },
  {
    number: '4',
    title: 'Agendamos el servicio',
    description: 'Elegimos juntos el día y la franja horaria que menos afecte a tu actividad.',
  },
  {
    number: '5',
    title: 'Limpieza y revisión final',
    description: 'Realizamos el trabajo y hacemos una revisión antes de irnos. Si no queda perfecto, lo repetimos.',
  },
];

export default function ProcessSection() {
  return (
    <section className="process section">
      <div className="container">
        <header className="section-header--center">
          <span className="section-tag">Cómo trabajamos</span>
          <div className="gold-line gold-line--center" />
          <h2 className="section-title">Un proceso sencillo y transparente</h2>
          <p className="section-subtitle section-subtitle--center">
            Desde que contactas hasta que terminamos el trabajo, sabes exactamente qué va a pasar y cuánto va a costar.
          </p>
        </header>

        <ol className="process__steps" aria-label="Pasos del proceso de trabajo">
          {steps.map((step, idx) => (
            <li key={idx} className="process__step">
              <div className="process__step-number" aria-hidden="true">{step.number}</div>
              <div className="process__step-body">
                <h3 className="process__step-title">{step.title}</h3>
                <p className="process__step-desc">{step.description}</p>
              </div>
              {idx < steps.length - 1 && (
                <div className="process__connector" aria-hidden="true" />
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
