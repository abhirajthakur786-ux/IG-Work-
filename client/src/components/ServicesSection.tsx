import { Users, Heart, Eye, MessageCircle, TrendingUp, Shield } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

const services = [
  {
    icon: Users,
    title: "Instagram Followers",
    description: "High-quality followers to boost your profile credibility and reach. Auto-refill system for dropped followers.",
    color: "from-purple-500 to-purple-600",
  },
  {
    icon: Heart,
    title: "Instagram Likes",
    description: "Get instant likes on your posts to increase engagement and visibility. Non-drop guaranteed.",
    color: "from-pink-500 to-pink-600",
  },
  {
    icon: Eye,
    title: "Instagram Views",
    description: "Boost your video and reel views to improve algorithm ranking. Fast delivery within minutes.",
    color: "from-orange-500 to-orange-600",
  },
  {
    icon: MessageCircle,
    title: "Instagram Comments",
    description: "Custom or random comments to increase post engagement. Real-looking comments from real accounts.",
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: TrendingUp,
    title: "Story Views",
    description: "Get more views on your Instagram stories to reach more people. Instant delivery guaranteed.",
    color: "from-green-500 to-green-600",
  },
  {
    icon: Shield,
    title: "Auto Refill",
    description: "Free refill for any dropped followers within 30 days. Your growth is protected.",
    color: "from-yellow-500 to-yellow-600",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-muted/30">
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
              Our Services
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Premium Instagram growth services designed to boost your social media presence
            with real engagement and instant delivery.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full transition-transform duration-300 hover:-translate-y-1">
                <CardContent className="p-6">
                  <div
                    className={`w-14 h-14 rounded-lg bg-gradient-to-br ${service.color} flex items-center justify-center mb-4`}
                  >
                    <service.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2" data-testid={`text-service-title-${index}`}>
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
