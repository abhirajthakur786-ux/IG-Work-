import { ArrowRight, Star, Users, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/90 via-pink-800/80 to-orange-600/70 dark:from-purple-950/95 dark:via-pink-900/90 dark:to-orange-800/80" />
      
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" />
        <div className="absolute top-40 right-10 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000" />
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-2000" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8">
            <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
            <span className="text-white/90 text-sm font-medium">
              Free Demo Available - 100 Followers + 100 Likes
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-white">Grow Your</span>
            <br />
            <span className="bg-gradient-to-r from-yellow-300 via-orange-300 to-pink-300 bg-clip-text text-transparent">
              Instagram Presence
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-white/80 max-w-2xl mx-auto mb-10">
            Premium Instagram growth services with instant delivery. 
            Get real followers, likes, views & comments to boost your profile.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Button
              size="lg"
              onClick={() => scrollToSection("demo")}
              className="bg-white text-purple-700 hover:bg-white/90 font-semibold text-lg px-8 py-6"
              data-testid="button-hero-demo"
            >
              Get Free Demo
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("pricing")}
              className="border-white/30 text-white bg-white/10 backdrop-blur-sm hover:bg-white/20 font-semibold text-lg px-8 py-6"
              data-testid="button-hero-pricing"
            >
              View Pricing
            </Button>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-8">
            <div className="flex items-center gap-2 text-white/80">
              <Users className="w-5 h-5 text-green-400" />
              <span className="font-medium">10,000+ Happy Customers</span>
            </div>
            <div className="flex items-center gap-2 text-white/80">
              <Zap className="w-5 h-5 text-yellow-400" />
              <span className="font-medium">Instant Delivery</span>
            </div>
            <div className="flex items-center gap-2 text-white/80">
              <Star className="w-5 h-5 text-orange-400" />
              <span className="font-medium">24/7 Support</span>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
