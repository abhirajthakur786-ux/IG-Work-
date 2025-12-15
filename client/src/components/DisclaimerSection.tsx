import { AlertTriangle, Info } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

export function DisclaimerSection() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Card className="border-yellow-500/30 bg-yellow-500/5">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-yellow-500/20 flex items-center justify-center flex-shrink-0">
                  <AlertTriangle className="w-6 h-6 text-yellow-600 dark:text-yellow-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
                    Important Information
                    <Info className="w-4 h-4 text-muted-foreground" />
                  </h3>
                  <div className="space-y-3 text-muted-foreground">
                    <p>
                      <strong className="text-foreground">Follower Quality:</strong> Approximately 70-75% of the followers 
                      provided are bot accounts. These are not genuine, active Instagram users.
                    </p>
                    <p>
                      <strong className="text-foreground">Purpose:</strong> Our services are designed to boost your profile's 
                      appearance and social proof. They are ideal for new accounts looking to establish credibility.
                    </p>
                    <p>
                      <strong className="text-foreground">Engagement:</strong> Bot followers will not actively engage with 
                      your content through likes, comments, or story views beyond what is included in your package.
                    </p>
                    <p>
                      <strong className="text-foreground">Risk Awareness:</strong> While we take precautions, there is always 
                      a small risk associated with growth services. We recommend gradual delivery for larger orders.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
