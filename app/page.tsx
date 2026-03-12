import { HeroSection } from "@/components/home/hero-section";
import { LogoStrip } from "@/components/home/logo-strip";
import { ServicesSection } from "@/components/home/services-section";
import { ProcessSection } from "@/components/home/process-section";
import { WhySection } from "@/components/home/why-section";
import { TestimonialsSection } from "@/components/home/testimonials-section";
import { LocationsSection } from "@/components/home/locations-section";
import { ContactSection } from "@/components/home/contact-section";

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <LogoStrip />
      <ServicesSection />
      <ProcessSection />
      <WhySection />
      <TestimonialsSection />
      <LocationsSection />
      <ContactSection />
    </main>
  );
}
