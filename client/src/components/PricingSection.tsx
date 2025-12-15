import { Check, Sparkles } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

const followerPackages = [
  {
    name: "Starter",
    quantity: "1,000",
    price: "Rs. 250",
    perUnit: "Rs. 0.25 / follower",
    features: ["Instant Start", "Auto Refill 30 Days", "24/7 Support", "Non-Drop Guaranteed"],
    popular: false,
  },
  {
    name: "Growth",
    quantity: "5,000",
    price: "Rs. 950",
    perUnit: "Rs. 0.19 / follower",
    features: ["Instant Start", "Auto Refill 30 Days", "Priority Support", "Non-Drop Guaranteed", "Gradual Delivery"],
    popular: true,
  },
  {
    name: "Pro",
    quantity: "10,000",
    price: "Rs. 1,750",
    perUnit: "Rs. 0.175 / follower",
    features: ["Instant Start", "Auto Refill 60 Days", "VIP Support", "Non-Drop Guaranteed", "Gradual Delivery", "Free Bonus Likes"],
    popular: false,
  },
];

const likesPackages = [
  { quantity: "5,000 Likes", price: "Rs. 350" },
  { quantity: "10,000 Likes", price: "Rs. 650" },
  { quantity: "20,000 Likes + 50K Views", price: "Rs. 1,750" },
  { quantity: "50K Likes + 10K Views", price: "Rs. 2,650" },
];

const commentsPackage = { quantity: "50 Comments", price: "Rs. 200" };

export function PricingSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="pricing" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 bg-clip-text text-transparent">
              Pricing Packages
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose the perfect package for your Instagram growth needs. 
            All packages include instant delivery and auto-refill protection.
          </p>
        </motion.div>

        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-8 text-center">Follower Packages</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {followerPackages.map((pkg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card
                  className={`h-full relative ${
                    pkg.popular
                      ? "border-2 border-purple-500 dark:border-purple-400"
                      : ""
                  }`}
                >
                  {pkg.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <Badge className="bg-gradient-to-r from-purple-600 to-pink-500 text-white border-0">
                        <Sparkles className="w-3 h-3 mr-1" />
                        Most Popular
                      </Badge>
                    </div>
                  )}
                  <CardHeader className="text-center pb-4">
                    <p className="text-muted-foreground font-medium">{pkg.name}</p>
                    <div className="mt-2">
                      <span className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
                        {pkg.quantity}
                      </span>
                      <p className="text-muted-foreground text-sm mt-1">Followers</p>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center mb-6">
                      <p className="text-3xl font-bold" data-testid={`text-price-${index}`}>{pkg.price}</p>
                      <p className="text-sm text-muted-foreground">{pkg.perUnit}</p>
                    </div>
                    <ul className="space-y-3 mb-6">
                      {pkg.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm">
                          <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button
                      className="w-full bg-gradient-to-r from-purple-600 to-pink-500 text-white border-0"
                      onClick={() => scrollToSection("contact")}
                      data-testid={`button-order-${index}`}
                    >
                      Order Now
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card>
              <CardHeader>
                <h3 className="text-xl font-semibold">Likes & Views Packages</h3>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {likesPackages.map((pkg, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between py-3 border-b border-border last:border-0"
                    >
                      <span className="font-medium">{pkg.quantity}</span>
                      <span className="text-lg font-semibold text-purple-600 dark:text-purple-400">
                        {pkg.price}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card>
              <CardHeader>
                <h3 className="text-xl font-semibold">Comments Package</h3>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between py-3">
                  <span className="font-medium">{commentsPackage.quantity}</span>
                  <span className="text-lg font-semibold text-purple-600 dark:text-purple-400">
                    {commentsPackage.price}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground mt-4">
                  Custom or random comments available. Real-looking engagement from real accounts.
                </p>
              </CardContent>
            </Card>

            <Card className="mt-6 bg-gradient-to-br from-purple-600/10 to-pink-600/10">
              <CardContent className="p-6">
                <h4 className="font-semibold mb-2">Need a Custom Package?</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Contact us for bulk orders or custom packages tailored to your needs.
                </p>
                <Button
                  variant="outline"
                  onClick={() => scrollToSection("contact")}
                  data-testid="button-custom-package"
                >
                  Contact for Custom Package
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
