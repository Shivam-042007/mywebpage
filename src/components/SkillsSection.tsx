import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import ParallaxSection from "./ParallaxSection";

const SkillsSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skills = [
    { name: "JavaScript", level: 90, color: "from-yellow-400 to-yellow-600" },
    { name: "HTML/CSS", level: 95, color: "from-orange-400 to-red-500" },
    { name: "Python", level: 70, color: "from-blue-400 to-blue-600" },
    { name: "PHP", level: 65, color: "from-purple-400 to-purple-600" },
    { name: "React", level: 75, color: "from-cyan-400 to-blue-500" },
    { name: "Linux", level: 80, color: "from-green-400 to-emerald-600" },
    { name: "Game Dev", level: 85, color: "from-pink-400 to-rose-600" },
    { name: "Git/GitHub", level: 85, color: "from-gray-400 to-gray-600" },
  ];

  const technologies = [
    "JavaScript", "TypeScript", "HTML5", "CSS3", "React", "Node.js",
    "Python", "PHP", "MySQL", "Git", "Linux", "VS Code",
    "Chrome Extensions", "Game Development", "Responsive Design"
  ];

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-10" />
      
      <ParallaxSection offset={40} className="absolute top-40 -right-32 w-80 h-80 rounded-full bg-secondary/5 blur-3xl" />
      <ParallaxSection offset={-30} className="absolute bottom-40 -left-32 w-96 h-96 rounded-full bg-accent/5 blur-3xl" />

      <div ref={ref} className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            A collection of tools and technologies I use to bring ideas to life
          </p>
        </motion.div>

        {/* Skills Bars */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="grid md:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card p-4"
              >
                <div className="flex justify-between mb-2">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-muted-foreground">{skill.level}%</span>
                </div>
                <div className="h-3 rounded-full bg-muted overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${skill.level}%` } : {}}
                    transition={{ duration: 1, delay: 0.3 + index * 0.1, ease: "easeOut" }}
                    className={`h-full rounded-full bg-gradient-to-r ${skill.color}`}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Technology Tags */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto"
        >
          {technologies.map((tech, index) => (
            <motion.span
              key={tech}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.3, delay: 0.9 + index * 0.05 }}
              whileHover={{ scale: 1.1, y: -3 }}
              className="px-4 py-2 rounded-full glass-card text-sm font-medium hover:border-primary/50 hover:text-primary transition-all cursor-default"
            >
              {tech}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
