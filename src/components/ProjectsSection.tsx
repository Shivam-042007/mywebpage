import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, Star, Gamepad2, Globe, Code } from "lucide-react";
import ParallaxSection from "./ParallaxSection";

interface Project {
  name: string;
  description: string;
  url: string;
  language: string;
  stars: number;
  icon: React.ElementType;
  category: string;
}

const ProjectsSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects: Project[] = [
    {
      name: "3D Minecraft",
      description: "Enjoy playing Minecraft on web browser without download - A browser-based 3D Minecraft clone",
      url: "https://github.com/Shivam-042007/3dminecraft",
      language: "JavaScript",
      stars: 1,
      icon: Gamepad2,
      category: "Game",
    },
    {
      name: "HypeEngine",
      description: "A Chrome startup page extension - Your personalized browser homepage",
      url: "https://github.com/Shivam-042007/HypeEngine",
      language: "HTML",
      stars: 1,
      icon: Globe,
      category: "Extension",
    },
    {
      name: "ChessAI",
      description: "A JavaScript-based chess game with AI opponent for challenging gameplay",
      url: "https://github.com/Shivam-042007/ChessAI",
      language: "JavaScript",
      stars: 1,
      icon: Gamepad2,
      category: "Game",
    },
    {
      name: "JS-SNAKE",
      description: "Classic snake game built with JavaScript - Simple yet addictive gameplay",
      url: "https://github.com/Shivam-042007/JS-SNAKE",
      language: "JavaScript",
      stars: 1,
      icon: Gamepad2,
      category: "Game",
    },
    {
      name: "Ludo Board Game",
      description: "Digital version of the classic Ludo board game for multiplayer fun",
      url: "https://github.com/Shivam-042007/Ludo-Board-Game",
      language: "JavaScript",
      stars: 1,
      icon: Gamepad2,
      category: "Game",
    },
    {
      name: "Save The Planet",
      description: "An environmental-themed game promoting awareness about saving our planet",
      url: "https://github.com/Shivam-042007/Savetheplanet.io",
      language: "JavaScript",
      stars: 1,
      icon: Gamepad2,
      category: "Game",
    },
    {
      name: "HexGL Game",
      description: "Futuristic racing game with stunning visuals and fast-paced gameplay",
      url: "https://github.com/Shivam-042007/HexGL-Game",
      language: "JavaScript",
      stars: 1,
      icon: Gamepad2,
      category: "Game",
    },
    {
      name: "Timesheet Invader",
      description: "Space invaders style game with a productivity twist",
      url: "https://github.com/Shivam-042007/timesheetinvader",
      language: "CSS",
      stars: 1,
      icon: Gamepad2,
      category: "Game",
    },
    {
      name: "KPS Rairangpur",
      description: "Modern, responsive website for Kerala Public School with smooth animations",
      url: "https://github.com/Shivam-042007/KPS-Rairangpur",
      language: "HTML",
      stars: 1,
      icon: Globe,
      category: "Website",
    },
    {
      name: "KPS Website (v2)",
      description: "Complete UI overhaul with professional Teal/Green theme and scroll animations",
      url: "https://github.com/Shivam-042007/kps",
      language: "HTML",
      stars: 0,
      icon: Globe,
      category: "Website",
    },
    {
      name: "My QR Code",
      description: "Personal QR code generator and display page",
      url: "https://github.com/Shivam-042007/MyQrCode",
      language: "HTML",
      stars: 1,
      icon: Code,
      category: "Utility",
    },
    {
      name: "Happy Diwali",
      description: "Festive Diwali celebration webpage with animations",
      url: "https://github.com/Shivam-042007/HAPPYDIWALI",
      language: "HTML",
      stars: 0,
      icon: Globe,
      category: "Creative",
    },
  ];

  const getLanguageColor = (language: string) => {
    const colors: Record<string, string> = {
      JavaScript: "bg-yellow-500",
      HTML: "bg-orange-500",
      CSS: "bg-blue-500",
      Python: "bg-green-500",
    };
    return colors[language] || "bg-gray-500";
  };

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-10" />
      
      <ParallaxSection offset={50} className="absolute top-20 left-10 w-64 h-64 rounded-full bg-primary/5 blur-3xl" />
      <ParallaxSection offset={-40} className="absolute bottom-40 right-10 w-80 h-80 rounded-full bg-accent/5 blur-3xl" />

      <div ref={ref} className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            My <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            A collection of games, websites, and tools I've built to learn and have fun
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.a
              key={project.name}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group glass-card p-6 hover:border-primary/30 transition-all duration-300 relative overflow-hidden block"
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Category badge */}
              <span className="absolute top-4 right-4 text-xs px-2 py-1 rounded-full bg-muted text-muted-foreground">
                {project.category}
              </span>

              <div className="relative z-10">
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl mb-4 flex items-center justify-center bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <project.icon size={24} />
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors flex items-center gap-2">
                  {project.name}
                  <ExternalLink size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </h3>

                {/* Description */}
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Footer */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className={`w-3 h-3 rounded-full ${getLanguageColor(project.language)}`} />
                    <span className="text-sm text-muted-foreground">{project.language}</span>
                  </div>
                  {project.stars > 0 && (
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <Star size={14} className="fill-current" />
                      <span className="text-sm">{project.stars}</span>
                    </div>
                  )}
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 1 }}
          className="text-center mt-12"
        >
          <motion.a
            href="https://github.com/Shivam-042007?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-primary/50 text-primary hover:bg-primary/10 transition-all font-medium"
          >
            <Github size={20} />
            View All on GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
