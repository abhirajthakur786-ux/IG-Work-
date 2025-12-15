import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Priya Sharma",
    handle: "@priya_style",
    avatar: "PS",
    content: "Amazing service! Got 5000 followers within 24 hours. My profile looks so much more credible now. Highly recommended!",
    followers: "+5,000",
    rating: 5,
  },
  {
    name: "Rahul Kumar",
    handle: "@rahul_fitness",
    avatar: "RK",
    content: "The free demo convinced me to try their premium service. Fast delivery and great customer support via WhatsApp.",
    followers: "+10,000",
    rating: 5,
  },
  {
    name: "Ananya Patel",
    handle: "@ananya_travels",
    avatar: "AP",
    content: "Best prices in the market! The auto-refill feature is fantastic. No more worrying about drops.",
    followers: "+2,000",
    rating: 5,
  },
  {
    name: "Vikram Singh",
    handle: "@vikram_tech",
    avatar: "VS",
    content: "Professional service with instant delivery. The likes and views combo package is excellent value.",
    followers: "+8,000",
    rating: 5,
  },
  {
    name: "Sneha Reddy",
    handle: "@sneha_beauty",
    avatar: "SR",
    content: "Started with the demo and now I'm a regular customer. My engagement has improved significantly!",
    followers: "+15,000",
    rating: 5,
  },
  {
    name: "Arjun Nair",
    handle: "@arjun_music",
    avatar: "AN",
    content: "The comments package helped make my posts look more authentic. Great quality comments too!",
    followers: "+3,000",
    rating: 5,
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-24 bg-muted/30">
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
              What Our Customers Say
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join thousands of satisfied customers who have grown their Instagram presence with our services.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Avatar className="w-12 h-12 border border-border">
                      <AvatarFallback className="bg-gradient-to-br from-purple-600 to-pink-500 text-white font-semibold">
                        {testimonial.avatar}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold" data-testid={`text-testimonial-name-${index}`}>{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.handle}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-1 mb-3">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                    ))}
                  </div>

                  <p className="text-muted-foreground mb-4">{testimonial.content}</p>

                  <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-green-500/10 text-green-600 dark:text-green-400 text-sm font-medium">
                    {testimonial.followers} followers gained
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
