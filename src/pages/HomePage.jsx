import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import Seo from '../components/Seo';
import Hero from '../components/home/Hero';
import ServicesSection from '../components/home/ServicesSection';
import BusinessSection from '../components/home/BusinessSection';
import BenefitsSection from '../components/home/BenefitsSection';
import ProcessSection from '../components/home/ProcessSection';
import GallerySection from '../components/home/GallerySection';
import TestimonialsSection from '../components/home/TestimonialsSection';
import FaqSection from '../components/home/FaqSection';
import ContactSection from '../components/home/ContactSection';

// FAQPage schema movido aquí desde index.html: solo debe aparecer donde las
// preguntas son visibles (la home, en <FaqSection>), no en todas las rutas.
// El texto es idéntico al que había en el <head> global.
const faqLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '¿Con qué frecuencia se recomienda limpiar los cristales?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Depende del entorno y el tipo de instalación. En zonas urbanas con mucho tráfico o polución, recomendamos una limpieza mensual o bimensual. Para comunidades o viviendas con menor exposición, una vez cada dos o tres meses puede ser suficiente. En todos los casos, hacemos una valoración inicial gratuita.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Trabajáis en altura y con andamios?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sí. Contamos con los equipos y la formación necesarios para trabajar en altura de forma segura: plataformas elevadoras, pértigas telescópicas con sistema de agua purificada y sistemas de acceso vertical según las necesidades de cada edificio.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Hacéis presupuesto sin compromiso?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Siempre. Evaluamos el trabajo, el tipo de superficie, la accesibilidad y la periodicidad necesaria, y te damos un presupuesto claro y detallado sin coste ni compromiso. Puedes solicitarlo por teléfono, por WhatsApp o a través del formulario de contacto.',
      },
    },
    {
      '@type': 'Question',
      name: '¿En qué zonas trabajáis?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Actualmente operamos en Madrid y provincia. Si tienes un proyecto fuera de esta área, consúltanos igualmente y valoramos si podemos desplazarnos según las características del trabajo.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Qué productos utilizáis?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Usamos productos profesionales de limpieza de cristales homologados, sin componentes abrasivos, específicos según el tipo de superficie: vidrio templado, vidrio laminado, policarbonato, cristal con tratamiento solar, etc. Para superficies con incrustaciones de cal o suciedad persistente, aplicamos tratamientos específicos de eliminación.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Podéis encargaros del mantenimiento periódico de mi empresa?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sí. Ofrecemos contratos de mantenimiento con visitas programadas según la periodicidad que necesites. Se fija un precio cerrado por visita y un calendario de servicio adaptado a tu actividad. Es la opción más cómoda y económica para empresas y comunidades.',
      },
    },
  ],
};

export default function HomePage() {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) return;

    const timeout = setTimeout(() => {
      const section = document.querySelector(location.hash);

      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }, 150);

    return () => clearTimeout(timeout);
  }, [location]);

  return (
    <main>
      <Seo
        title="Limpieza de cristales en Madrid | Kristalia"
        description="Limpieza profesional de cristales, escaparates y fachadas acristaladas en Madrid y provincia. Para empresas, comunidades y particulares. Presupuesto sin compromiso."
        path="/"
        jsonLd={faqLd}
        jsonLdId="faq"
      />
      <Hero />
      <ServicesSection />
      <BusinessSection />
      <BenefitsSection />
      <ProcessSection />
      <GallerySection />
      <TestimonialsSection />
      <FaqSection />
      <ContactSection />
    </main>
  );
}