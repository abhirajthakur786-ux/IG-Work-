import { Instagram, Heart } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";

const WHATSAPP_NUMBER = "7024183739";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const openWhatsApp = () => {
    window.open(`https://wa.me/91${WHATSAPP_NUMBER}`, "_blank");
  };

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 flex items-center justify-center">
                <Instagram className="w-6 h-6 text-white" />
              </div>
              <span className="font-bold text-xl bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 bg-clip-text text-transparent">
                IG Services
              </span>
            </div>
            <p className="text-muted-foreground text-sm">
              Premium Instagram growth services with instant delivery. 
              Boost your social media presence today.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection("services")}
                  className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                  data-testid="link-footer-services"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("pricing")}
                  className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                  data-testid="link-footer-pricing"
                >
                  Pricing
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("demo")}
                  className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                  data-testid="link-footer-demo"
                >
                  Free Demo
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                  data-testid="link-footer-contact"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <span className="text-muted-foreground text-sm">Terms of Service</span>
              </li>
              <li>
                <span className="text-muted-foreground text-sm">Privacy Policy</span>
              </li>
              <li>
                <span className="text-muted-foreground text-sm">Refund Policy</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Connect With Us</h4>
            <div className="flex gap-3 mb-4">
              <button
                onClick={openWhatsApp}
                className="w-10 h-10 rounded-lg bg-green-600 flex items-center justify-center text-white transition-transform hover:scale-105"
                data-testid="button-footer-whatsapp"
              >
                <SiWhatsapp className="w-5 h-5" />
              </button>
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 flex items-center justify-center text-white">
                <Instagram className="w-5 h-5" />
              </div>
            </div>
            <p className="text-muted-foreground text-sm">
              Phone: {WHATSAPP_NUMBER}
            </p>
          </div>
        </div>

        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-muted-foreground text-sm">
              {currentYear} IG Services. All rights reserved.
            </p>
            <p className="text-muted-foreground text-sm flex items-center gap-1">
              Made with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> for Instagram creators
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
