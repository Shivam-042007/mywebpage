import { motion } from "framer-motion";
import { Github, Instagram, Heart, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-12 relative overflow-hidden border-t border-border/50">
      <div className="absolute inset-0 grid-pattern opacity-5" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Copyright */}
          <div className="text-center md:text-left">
            <motion.a
              href="#home"
              className="text-2xl font-bold gradient-text inline-block mb-2"
              whileHover={{ scale: 1.05 }}
            >
              Shivam
            </motion.a>
            <p className="text-sm text-muted-foreground">
              © 2025 Shivam Kumar Chejara. All rights reserved.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <motion.a
              href="https://github.com/Shivam-042007"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -3 }}
              className="p-3 rounded-xl glass-card text-muted-foreground hover:text-primary hover:border-primary/50 transition-all"
            >
              <Github size={20} />
            </motion.a>
            <motion.a
              href="https://www.instagram.com/hype_coding"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -3 }}
              className="p-3 rounded-xl glass-card text-muted-foreground hover:text-accent hover:border-accent/50 transition-all"
            >
              <Instagram size={20} />
            </motion.a>
          </div>

          {/* Back to top */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1, y: -3 }}
            whileTap={{ scale: 0.95 }}
            className="p-3 rounded-xl glass-card text-muted-foreground hover:text-primary hover:border-primary/50 transition-all"
          >
            <ArrowUp size={20} />
          </motion.button>
        </div>

        {/* Bottom text */}
        <div className="mt-8 pt-6 border-t border-border/30 text-center">
          <p className="text-sm text-muted-foreground flex items-center justify-center gap-2">
            Made with <Heart size={14} className="text-accent fill-accent" /> and lots of
            <span className="text-primary">☕</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
