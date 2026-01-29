import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Coffee, Heart, Star, Sparkles } from "lucide-react";
import ParallaxSection from "./ParallaxSection";

const SupportSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="support" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-10" />
      
      <ParallaxSection offset={40} className="absolute top-20 right-20 w-72 h-72 rounded-full bg-accent/10 blur-3xl" />
      <ParallaxSection offset={-30} className="absolute bottom-20 left-20 w-80 h-80 rounded-full bg-primary/5 blur-3xl" />

      <div ref={ref} className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          {/* Floating Coffee Icon */}
          <motion.div
            animate={{ y: [0, -15, 0], rotate: [0, 5, -5, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="inline-block mb-8"
          >
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-accent blur-2xl opacity-50" />
              <div className="relative w-24 h-24 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <Coffee size={48} className="text-primary-foreground" />
              </div>
            </div>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold mb-6"
          >
            Buy Me a <span className="gradient-text">Coffee</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground mb-8"
          >
            If you enjoy my work and want to support my journey as a developer,
            consider buying me a coffee! Your support helps me stay caffeinated
            and motivated to build more cool projects. ☕
          </motion.p>

          {/* Support Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="glass-card p-8 md:p-12 relative overflow-hidden"
          >
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-primary/10 to-transparent rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-accent/10 to-transparent rounded-full translate-y-1/2 -translate-x-1/2" />

            <div className="relative z-10">
              <div className="flex justify-center gap-3 mb-6">
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: 0.4 + i * 0.1 }}
                  >
                    <Star
                      size={28}
                      className="text-primary fill-primary"
                    />
                  </motion.div>
                ))}
              </div>

              <p className="text-muted-foreground mb-8 max-w-md mx-auto">
                Every coffee counts! Your support fuels my passion for creating
                games, tools, and web experiences.
              </p>

              <motion.a
                href="https://github.com/sponsors/Shivam-042007"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-primary to-accent text-primary-foreground font-bold text-lg neon-glow hover:opacity-90 transition-all"
              >
                <Coffee size={24} />
                Buy Me a Coffee
                <Sparkles size={20} />
              </motion.a>

              <motion.div
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="flex items-center justify-center gap-2 mt-6 text-muted-foreground"
              >
                <Heart size={18} className="text-accent fill-accent" />
                <span>Thank you for your support!</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Alternative Support Methods */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="mt-12 flex flex-wrap justify-center gap-4"
          >
            <a
              href="https://github.com/Shivam-042007"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl glass-card hover:border-primary/50 transition-all flex items-center gap-2 text-muted-foreground hover:text-primary"
            >
              <Star size={18} />
              Star my repos
            </a>
            <a
              href="https://www.instagram.com/hype_coding"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl glass-card hover:border-accent/50 transition-all flex items-center gap-2 text-muted-foreground hover:text-accent"
            >
              <Heart size={18} />
              Follow on Instagram
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default SupportSection;
