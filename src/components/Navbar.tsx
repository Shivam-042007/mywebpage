import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Github, Instagram, Coffee } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Support", href: "#support" },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "glass-card py-3" : "py-5"
        }`}
      >
        <div className="container mx-auto px-4 flex items-center justify-between">
          <motion.a
            href="#home"
            className="text-2xl font-bold gradient-text"
            whileHover={{ scale: 1.05 }}
          >
            Shivam
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                className="text-muted-foreground hover:text-primary transition-colors relative group"
                whileHover={{ y: -2 }}
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
              </motion.a>
            ))}
          </div>

          {/* Social Links */}
          <div className="hidden md:flex items-center gap-4">
            <motion.a
              href="https://github.com/Shivam-042007"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg hover:bg-muted transition-colors text-muted-foreground hover:text-primary"
              whileHover={{ scale: 1.1, rotate: 5 }}
            >
              <Github size={20} />
            </motion.a>
            <motion.a
              href="https://www.instagram.com/hype_coding"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg hover:bg-muted transition-colors text-muted-foreground hover:text-accent"
              whileHover={{ scale: 1.1, rotate: -5 }}
            >
              <Instagram size={20} />
            </motion.a>
            <motion.a
              href="#support"
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-primary/20 to-secondary/20 border border-primary/30 text-primary hover:border-primary/50 transition-all"
              whileHover={{ scale: 1.05 }}
            >
              <Coffee size={18} />
              <span className="text-sm font-medium">Support</span>
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-foreground"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 pt-20 bg-background/95 backdrop-blur-lg md:hidden"
          >
            <div className="flex flex-col items-center gap-6 p-8">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-xl font-medium text-foreground hover:text-primary transition-colors"
                >
                  {link.name}
                </motion.a>
              ))}
              <div className="flex gap-4 mt-4">
                <a
                  href="https://github.com/Shivam-042007"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-muted text-foreground"
                >
                  <Github size={24} />
                </a>
                <a
                  href="https://www.instagram.com/hype_coding"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-muted text-foreground"
                >
                  <Instagram size={24} />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
