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
  return (
    <main>
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
