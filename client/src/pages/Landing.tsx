import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { ServicesSection } from "@/components/ServicesSection";
import { PricingSection } from "@/components/PricingSection";
import { FreeDemoSection } from "@/components/FreeDemoSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { ContactSection } from "@/components/ContactSection";
import { DisclaimerSection } from "@/components/DisclaimerSection";
import { Footer } from "@/components/Footer";

export default function Landing() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <ServicesSection />
        <PricingSection />
        <FreeDemoSection />
        <TestimonialsSection />
        <ContactSection />
        <DisclaimerSection />
      </main>
      <Footer />
    </div>
  );
}
