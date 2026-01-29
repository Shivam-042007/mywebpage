import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code, Gamepad2, Terminal, Laptop } from "lucide-react";
import ParallaxSection from "./ParallaxSection";

const AboutSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const highlights = [
    {
      icon: Gamepad2,
      title: "Game Developer",
      description: "Creating immersive web games with JavaScript and modern game engines",
      color: "primary",
    },
    {
      icon: Code,
      title: "Web Developer",
      description: "Building responsive websites with HTML, CSS, and JavaScript",
      color: "secondary",
    },
    {
      icon: Terminal,
      title: "Linux Enthusiast",
      description: "Tinkering with Linux environments and server configurations",
      color: "accent",
    },
    {
      icon: Laptop,
      title: "Lifelong Learner",
      description: "Always exploring new technologies and frameworks",
      color: "primary",
    },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 grid-pattern opacity-10" />
      
      <ParallaxSection offset={30} className="absolute top-20 -left-20 w-72 h-72 rounded-full bg-primary/5 blur-3xl" />
      <ParallaxSection offset={-40} className="absolute bottom-20 -right-20 w-96 h-96 rounded-full bg-secondary/5 blur-3xl" />

      <div ref={ref} className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            A passionate student and developer from India, dedicated to building
            creative web experiences and games that bring joy to users.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="glass-card p-6 h-full hover:border-primary/30 transition-all duration-300 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div className={`w-14 h-14 rounded-xl mb-4 flex items-center justify-center ${
                  item.color === "primary" ? "bg-primary/10 text-primary" :
                  item.color === "secondary" ? "bg-secondary/10 text-secondary" :
                  "bg-accent/10 text-accent"
                }`}>
                  <item.icon size={28} />
                </div>
                
                <h3 className="text-xl font-semibold mb-2 relative z-10">{item.title}</h3>
                <p className="text-muted-foreground text-sm relative z-10">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 glass-card p-8 md:p-12"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                My <span className="text-primary">Journey</span>
              </h3>
              <p className="text-muted-foreground mb-4">
                As a student passionate about technology, I've been exploring the world of
                web development and game creation. My journey started with simple HTML
                pages and has evolved into building interactive games and web applications.
              </p>
              <p className="text-muted-foreground">
                I believe in learning by doing, and every project I undertake teaches me
                something new. From Chrome extensions to 3D Minecraft clones, I love
                pushing the boundaries of what's possible on the web.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="glass-card p-4 text-center">
                <span className="text-3xl font-bold text-primary">15+</span>
                <p className="text-sm text-muted-foreground mt-1">Projects Built</p>
              </div>
              <div className="glass-card p-4 text-center">
                <span className="text-3xl font-bold text-secondary">5+</span>
                <p className="text-sm text-muted-foreground mt-1">Web Games</p>
              </div>
              <div className="glass-card p-4 text-center">
                <span className="text-3xl font-bold text-accent">3+</span>
                <p className="text-sm text-muted-foreground mt-1">Years Coding</p>
              </div>
              <div className="glass-card p-4 text-center">
                <span className="text-3xl font-bold text-primary">∞</span>
                <p className="text-sm text-muted-foreground mt-1">Lines of Code</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
