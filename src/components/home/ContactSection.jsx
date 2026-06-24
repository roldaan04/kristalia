import { useState } from 'react';
import Button from '../ui/Button';
import { WHATSAPP_URL, PHONE_DISPLAY, EMAIL } from '../../utils/constants';
import './ContactSection.css';

const CLIENT_TYPES = ['Empresa', 'Comunidad de propietarios', 'Local comercial', 'Particular'];
const SERVICE_TYPES = [
  'Limpieza de cristales en altura',
  'Escaparates y locales',
  'Comunidades',
  'Mantenimiento periódico',
  'Paneles solares',
  'Fachadas acristaladas',
  'Otro',
];

export default function ContactSection() {
  const [form, setForm] = useState({
    name: '', company: '', phone: '', email: '',
    clientType: '', serviceType: '', location: '', message: '',
    privacy: false,
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="contact section">
      <span id="contacto" className="contact__anchor" aria-hidden="true" />
      <div className="container">
        <div className="contact__layout">
          <div className="contact__info">
            <span className="section-tag">Contacto</span>
            <div className="gold-line" />
            <h2 className="section-title">Solicita tu presupuesto</h2>
            <p className="contact__intro">
              Cuéntanos qué necesitas y te respondemos en menos de 24 horas. Sin compromiso, sin letra pequeña.
            </p>

            <ul className="contact__details">
              <li>
                <a href={`tel:${PHONE_DISPLAY.replace(/\s/g, '')}`} className="contact__detail-link">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 11a19.79 19.79 0 01-3.07-8.67A2 2 0 012 .18h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.09-1.09a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
                  </svg>
                  {PHONE_DISPLAY}
                </a>
              </li>
              <li>
                <a href={`mailto:${EMAIL}`} className="contact__detail-link">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                  {EMAIL}
                </a>
              </li>
              <li>
                <Button
                  variant="whatsapp"
                  size="md"
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact__whatsapp-btn"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.49"/>
                  </svg>
                  Hablar por WhatsApp
                </Button>
              </li>
            </ul>

            <div className="contact__note">
              <p>Respondemos en menos de 24 horas. Visitas sin coste para presupuestos en Madrid.</p>
            </div>
          </div>

          <div className="contact__form-wrap">
            {submitted ? (
              <div className="contact__success">
                <div className="contact__success-icon" aria-hidden="true">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"/>
                    <polyline points="22 4 12 14.01 9 11.01"/>
                  </svg>
                </div>
                <h3>Mensaje recibido</h3>
                <p>Gracias por contactar con Kristalia. Te respondemos en menos de 24 horas.</p>
              </div>
            ) : (
              <form className="contact__form" onSubmit={handleSubmit} noValidate>
                <div className="contact__form-row">
                  <div className="contact__field">
                    <label htmlFor="name" className="contact__label">Nombre *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      className="contact__input"
                      placeholder="Tu nombre"
                      required
                      autoComplete="name"
                    />
                  </div>
                  <div className="contact__field">
                    <label htmlFor="company" className="contact__label">Empresa</label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={form.company}
                      onChange={handleChange}
                      className="contact__input"
                      placeholder="Nombre de la empresa"
                      autoComplete="organization"
                    />
                  </div>
                </div>

                <div className="contact__form-row">
                  <div className="contact__field">
                    <label htmlFor="phone" className="contact__label">Teléfono *</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      className="contact__input"
                      placeholder="+34 600 000 000"
                      required
                      autoComplete="tel"
                    />
                  </div>
                  <div className="contact__field">
                    <label htmlFor="email" className="contact__label">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      className="contact__input"
                      placeholder="tu@email.com"
                      autoComplete="email"
                    />
                  </div>
                </div>

                <div className="contact__form-row">
                  <div className="contact__field">
                    <label htmlFor="clientType" className="contact__label">Tipo de cliente</label>
                    <select
                      id="clientType"
                      name="clientType"
                      value={form.clientType}
                      onChange={handleChange}
                      className="contact__input contact__select"
                    >
                      <option value="">Selecciona una opción</option>
                      {CLIENT_TYPES.map((t) => (
                        <option key={t} value={t}>{t}</option>
                      ))}
                    </select>
                  </div>
                  <div className="contact__field">
                    <label htmlFor="serviceType" className="contact__label">Tipo de servicio</label>
                    <select
                      id="serviceType"
                      name="serviceType"
                      value={form.serviceType}
                      onChange={handleChange}
                      className="contact__input contact__select"
                    >
                      <option value="">Selecciona un servicio</option>
                      {SERVICE_TYPES.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="contact__field">
                  <label htmlFor="location" className="contact__label">Ubicación</label>
                  <input
                    type="text"
                    id="location"
                    name="location"
                    value={form.location}
                    onChange={handleChange}
                    className="contact__input"
                    placeholder="Ciudad o dirección aproximada"
                  />
                </div>

                <div className="contact__field">
                  <label htmlFor="message" className="contact__label">Mensaje</label>
                  <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    className="contact__input contact__textarea"
                    placeholder="Descríbenos brevemente lo que necesitas..."
                    rows={4}
                  />
                </div>

                <div className="contact__privacy">
                  <label className="contact__checkbox-label">
                    <input
                      type="checkbox"
                      name="privacy"
                      checked={form.privacy}
                      onChange={handleChange}
                      required
                      className="contact__checkbox"
                    />
                    <span>
                      He leído y acepto la{' '}
                      <a href="#" className="contact__privacy-link">política de privacidad</a>
                    </span>
                  </label>
                </div>

                <Button type="submit" variant="primary" size="lg" className="contact__submit">
                  Enviar solicitud
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
