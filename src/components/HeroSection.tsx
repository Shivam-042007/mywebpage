import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ChevronDown, Github, Instagram, Code2, Gamepad2 } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

  return (
    <section
      ref={ref}
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Parallax Background */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 z-0"
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        <div className="absolute inset-0 bg-background/80" />
        <div className="absolute inset-0 grid-pattern opacity-30" />
      </motion.div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            y: [0, -30, 0],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 left-10 md:left-20 w-20 h-20 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center"
        >
          <Code2 className="w-10 h-10 text-primary/50" />
        </motion.div>

        <motion.div
          animate={{
            y: [0, 30, 0],
            rotate: [0, -5, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute bottom-1/4 right-10 md:right-20 w-16 h-16 rounded-xl bg-secondary/10 border border-secondary/20 flex items-center justify-center"
        >
          <Gamepad2 className="w-8 h-8 text-secondary/50" />
        </motion.div>

        <motion.div
          animate={{
            y: [0, -20, 0],
            x: [0, 10, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute top-1/3 right-1/4 w-3 h-3 rounded-full bg-accent/60"
        />

        <motion.div
          animate={{
            y: [0, 20, 0],
            x: [0, -15, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-1/3 left-1/4 w-4 h-4 rounded-full bg-primary/60"
        />
      </div>

      {/* Main Content */}
      <motion.div
        style={{ opacity, scale }}
        className="relative z-10 container mx-auto px-4 text-center"
      >
        {/* Avatar */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 15,
            delay: 0.2,
          }}
          className="mb-8"
        >
          <div className="relative inline-block">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary via-secondary to-accent blur-xl opacity-50 animate-pulse" />
            <img
              src="https://avatars.githubusercontent.com/u/85301544?v=4"
              alt="Shivam Kumar Chejara"
              className="relative w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-primary/50 object-cover"
            />
          </div>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4"
        >
          <span className="gradient-text">Shivam Kumar Chejara</span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-lg md:text-xl lg:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto"
        >
          🎓 Student & Developer | 🕹️ Building web games in JavaScript
          <br />
          🛠️ Tinkering with PHP & Linux | 🚀 Turning caffeine into code
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <motion.a
            href="#projects"
            className="px-8 py-3 rounded-xl bg-primary text-primary-foreground font-semibold neon-glow hover:scale-105 transition-transform"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View My Work
          </motion.a>
          <motion.a
            href="https://github.com/Shivam-042007"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 rounded-xl border border-primary/50 text-primary font-semibold hover:bg-primary/10 transition-all flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Github size={20} />
            GitHub Profile
          </motion.a>
        </motion.div>

        {/* Social Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="flex justify-center gap-8 mt-12"
        >
          <div className="text-center">
            <span className="block text-2xl md:text-3xl font-bold text-primary">3</span>
            <span className="text-sm text-muted-foreground">Followers</span>
          </div>
          <div className="text-center">
            <span className="block text-2xl md:text-3xl font-bold text-secondary">15+</span>
            <span className="text-sm text-muted-foreground">Projects</span>
          </div>
          <div className="text-center">
            <span className="block text-2xl md:text-3xl font-bold text-accent">∞</span>
            <span className="text-sm text-muted-foreground">Coffee Cups</span>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.a
          href="#about"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
        >
          <span className="text-sm">Scroll Down</span>
          <ChevronDown size={24} />
        </motion.a>
      </motion.div>
    </section>
  );
};

export default HeroSection;
