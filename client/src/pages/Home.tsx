import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { ServicesSection } from "@/components/ServicesSection";
import { PricingSection } from "@/components/PricingSection";
import { FreeDemoSection } from "@/components/FreeDemoSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { ContactSection } from "@/components/ContactSection";
import { DisclaimerSection } from "@/components/DisclaimerSection";
import { Footer } from "@/components/Footer";
import { useAuth } from "@/hooks/useAuth";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Gift, Users, Heart, Eye } from "lucide-react";
import { motion } from "framer-motion";

function WelcomeBanner() {
  const { user } = useAuth();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="pt-24 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Card className="bg-gradient-to-r from-purple-600/10 via-pink-600/10 to-orange-600/10 border-purple-500/20">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-purple-600 to-pink-500 flex items-center justify-center text-white text-xl font-bold">
                    {user?.firstName?.[0] || user?.email?.[0]?.toUpperCase() || "U"}
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold" data-testid="text-welcome-name">
                      Welcome back, {user?.firstName || "User"}!
                    </h2>
                    <p className="text-muted-foreground">
                      Ready to grow your Instagram presence?
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Button
                    onClick={() => scrollToSection("demo")}
                    className="bg-gradient-to-r from-purple-600 to-pink-500 text-white border-0"
                    data-testid="button-welcome-demo"
                  >
                    <Gift className="w-4 h-4 mr-2" />
                    Get Free Demo
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => scrollToSection("pricing")}
                    data-testid="button-welcome-pricing"
                  >
                    View Packages
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6"
        >
          <Card className="text-center p-4">
            <Users className="w-8 h-8 mx-auto mb-2 text-purple-500" />
            <p className="text-2xl font-bold">10K+</p>
            <p className="text-sm text-muted-foreground">Happy Customers</p>
          </Card>
          <Card className="text-center p-4">
            <Heart className="w-8 h-8 mx-auto mb-2 text-pink-500" />
            <p className="text-2xl font-bold">50M+</p>
            <p className="text-sm text-muted-foreground">Likes Delivered</p>
          </Card>
          <Card className="text-center p-4">
            <Users className="w-8 h-8 mx-auto mb-2 text-orange-500" />
            <p className="text-2xl font-bold">100M+</p>
            <p className="text-sm text-muted-foreground">Followers Delivered</p>
          </Card>
          <Card className="text-center p-4">
            <Eye className="w-8 h-8 mx-auto mb-2 text-blue-500" />
            <p className="text-2xl font-bold">200M+</p>
            <p className="text-sm text-muted-foreground">Views Delivered</p>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <WelcomeBanner />
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
