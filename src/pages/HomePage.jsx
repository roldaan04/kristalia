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