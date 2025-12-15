import { useState } from "react";
import { Gift, CheckCircle, Loader2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";

const demoFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  instagramHandle: z.string().min(1, "Instagram handle is required").regex(/^[a-zA-Z0-9._]+$/, "Invalid Instagram handle"),
  whatsappNumber: z.string().min(10, "Enter a valid WhatsApp number"),
});

type DemoFormValues = z.infer<typeof demoFormSchema>;

export function FreeDemoSection() {
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<DemoFormValues>({
    resolver: zodResolver(demoFormSchema),
    defaultValues: {
      name: "",
      instagramHandle: "",
      whatsappNumber: "",
    },
  });

  const mutation = useMutation({
    mutationFn: async (data: DemoFormValues) => {
      await apiRequest("POST", "/api/demo-request", data);
    },
    onSuccess: () => {
      setIsSubmitted(true);
      toast({
        title: "Demo Request Submitted!",
        description: "We'll contact you on WhatsApp within 24 hours.",
      });
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: DemoFormValues) => {
    mutation.mutate(data);
  };

  return (
    <section id="demo" className="py-24 bg-gradient-to-br from-purple-900/90 via-pink-800/80 to-orange-600/70 dark:from-purple-950/95 dark:via-pink-900/90 dark:to-orange-800/80 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-20 w-64 h-64 bg-white rounded-full mix-blend-overlay filter blur-3xl" />
        <div className="absolute bottom-10 right-20 w-64 h-64 bg-yellow-300 rounded-full mix-blend-overlay filter blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
              <Gift className="w-4 h-4 text-yellow-400" />
              <span className="text-white/90 text-sm font-medium">Limited Time Offer</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Try Us{" "}
              <span className="text-yellow-300">FREE</span>
            </h2>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">100</span>
                </div>
                <div>
                  <p className="text-white font-semibold">Free Followers</p>
                  <p className="text-white/70 text-sm">Added to your profile</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-pink-500 to-orange-500 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">100</span>
                </div>
                <div>
                  <p className="text-white font-semibold">Free Likes</p>
                  <p className="text-white/70 text-sm">On your latest post</p>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2 text-white/80">
              <CheckCircle className="w-5 h-5 text-green-400" />
              <span>No Credit Card Required</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="bg-white/10 backdrop-blur-lg border-white/20">
              <CardContent className="p-6">
                {isSubmitted ? (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 rounded-full bg-green-500 flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">Thank You!</h3>
                    <p className="text-white/80">
                      Your demo request has been submitted successfully. 
                      We'll contact you on WhatsApp within 24 hours.
                    </p>
                  </div>
                ) : (
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                      <h3 className="text-xl font-semibold text-white mb-4">Get Your Free Demo</h3>
                      
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-white/90">Your Name</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Enter your name"
                                className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                                data-testid="input-demo-name"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage className="text-red-300" />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="instagramHandle"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-white/90">Instagram Username</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="your_username"
                                className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                                data-testid="input-demo-instagram"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage className="text-red-300" />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="whatsappNumber"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-white/90">WhatsApp Number</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="+91 XXXXXXXXXX"
                                className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                                data-testid="input-demo-whatsapp"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage className="text-red-300" />
                          </FormItem>
                        )}
                      />

                      <Button
                        type="submit"
                        className="w-full bg-white text-purple-700 hover:bg-white/90 font-semibold"
                        disabled={mutation.isPending}
                        data-testid="button-submit-demo"
                      >
                        {mutation.isPending ? (
                          <>
                            <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                            Submitting...
                          </>
                        ) : (
                          "Get Free Demo"
                        )}
                      </Button>
                    </form>
                  </Form>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
