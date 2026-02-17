import { ExternalLink, Github } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce application with product listings, cart functionality, and secure checkout.",
    tech: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
    github: "#",
    live: "#",
    gradient: "from-[hsl(173,80%,50%)/0.15] to-[hsl(199,89%,48%)/0.15]",
    accent: "hsl(173 80% 50%)",
  },
  {
    title: "Task Management App",
    description: "A productivity tool for managing tasks with drag-and-drop, categories, and real-time updates.",
    tech: ["React", "TypeScript", "Firebase"],
    github: "#",
    live: "#",
    gradient: "from-[hsl(270,60%,60%)/0.15] to-[hsl(300,50%,55%)/0.15]",
    accent: "hsl(270 60% 60%)",
  },
  {
    title: "Portfolio Website",
    description: "A modern developer portfolio built with React and Tailwind CSS featuring smooth animations.",
    tech: ["React", "Tailwind CSS", "Framer Motion"],
    github: "#",
    live: "#",
    gradient: "from-[hsl(43,96%,56%)/0.15] to-[hsl(20,90%,55%)/0.15]",
    accent: "hsl(43 96% 56%)",
  },
  {
    title: "Weather Dashboard",
    description: "Real-time weather application with location search, forecasts, and interactive charts.",
    tech: ["React", "REST API", "Chart.js"],
    github: "#",
    live: "#",
    gradient: "from-[hsl(199,89%,48%)/0.15] to-[hsl(173,80%,50%)/0.15]",
    accent: "hsl(199 89% 48%)",
  },
];

const ProjectsSection = () => (
  <section id="projects" className="py-28 px-6 relative">
    <div className="absolute inset-0 bg-dots opacity-20 pointer-events-none" />
    <div className="max-w-5xl mx-auto relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-primary font-mono text-sm text-center mb-2">// projects</p>
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
          Featured <span className="text-gradient">Work</span>
        </h2>
      </motion.div>

      <div className="grid sm:grid-cols-2 gap-6">
        {projects.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="glass rounded-2xl overflow-hidden glass-hover group"
          >
            <div className={`h-48 bg-gradient-to-br ${p.gradient} flex items-center justify-center relative overflow-hidden`}>
              <div className="absolute inset-0 bg-grid opacity-30" />
              <motion.span
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="text-4xl font-bold text-gradient opacity-40 group-hover:opacity-80 transition-opacity duration-500 relative z-10"
              >
                {p.title.split(" ").map(w => w[0]).join("")}
              </motion.span>
            </div>
            <div className="p-6">
              <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors duration-300">
                {p.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {p.description}
              </p>
              <div className="flex flex-wrap gap-1.5 mb-5">
                {p.tech.map((t) => (
                  <Badge
                    key={t}
                    variant="secondary"
                    className="text-[11px] rounded-full px-2.5 py-0.5 border border-border/30"
                  >
                    {t}
                  </Badge>
                ))}
              </div>
              <div className="flex gap-3">
                <Button
                  variant="outline"
                  size="sm"
                  className="gap-1.5 rounded-full text-xs hover:border-primary/50 hover:bg-primary/5 transition-all"
                  asChild
                >
                  <a href={p.github} target="_blank" rel="noreferrer">
                    <Github size={14} /> Code
                  </a>
                </Button>
                <Button
                  size="sm"
                  className="gap-1.5 rounded-full text-xs shadow-md shadow-primary/15 hover:shadow-primary/30 transition-all"
                  asChild
                >
                  <a href={p.live} target="_blank" rel="noreferrer">
                    <ExternalLink size={14} /> Live Demo
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;
