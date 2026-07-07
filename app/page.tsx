import HeroSection from '@/components/hero-section';
import ProjectsSection from '@/components/projects-section';
import ServicesSection from '@/components/services-section';
import AboutSection from '@/components/about-section';
import ContactSection from '@/components/contact-section';

export default function Home() {
  return (
    <div className="w-full">
      <HeroSection />
      <ProjectsSection />
      <ServicesSection />
      <AboutSection />
      <ContactSection />
    </div>
  );
}
