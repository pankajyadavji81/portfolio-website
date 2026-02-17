import { ExternalLink, Github } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce application with product listings, cart functionality, and secure checkout.",
    tech: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
    github: "#",
    live: "#",
  },
  {
    title: "Task Management App",
    description:
      "A productivity tool for managing tasks with drag-and-drop, categories, and real-time updates.",
    tech: ["React", "TypeScript", "Firebase"],
    github: "#",
    live: "#",
  },
  {
    title: "Portfolio Website",
    description:
      "A modern developer portfolio built with React and Tailwind CSS featuring smooth animations.",
    tech: ["React", "Tailwind CSS", "Framer Motion"],
    github: "#",
    live: "#",
  },
  {
    title: "Weather Dashboard",
    description:
      "Real-time weather application with location search, forecasts, and interactive charts.",
    tech: ["React", "REST API", "Chart.js"],
    github: "#",
    live: "#",
  },
];

const ProjectsSection = () => (
  <section id="projects" className="py-24 px-6">
    <div className="max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-2">
        My <span className="text-gradient">Projects</span>
      </h2>
      <p className="text-muted-foreground text-center mb-12 text-sm">Things I've built</p>

      <div className="grid sm:grid-cols-2 gap-6">
        {projects.map((p) => (
          <div
            key={p.title}
            className="glass rounded-2xl overflow-hidden glass-hover group"
          >
            {/* Gradient placeholder image */}
            <div className="h-44 bg-gradient-to-br from-primary/20 via-secondary to-accent/20 flex items-center justify-center">
              <span className="text-2xl font-bold text-gradient opacity-60 group-hover:opacity-100 transition-opacity">
                {p.title.split(" ").map(w => w[0]).join("")}
              </span>
            </div>
            <div className="p-6">
              <h3 className="text-lg font-semibold mb-2">{p.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {p.description}
              </p>
              <div className="flex flex-wrap gap-1.5 mb-5">
                {p.tech.map((t) => (
                  <Badge
                    key={t}
                    variant="secondary"
                    className="text-[11px] rounded-full px-2.5 py-0.5"
                  >
                    {t}
                  </Badge>
                ))}
              </div>
              <div className="flex gap-3">
                <Button variant="outline" size="sm" className="gap-1.5 rounded-full text-xs" asChild>
                  <a href={p.github} target="_blank" rel="noreferrer">
                    <Github size={14} /> Code
                  </a>
                </Button>
                <Button size="sm" className="gap-1.5 rounded-full text-xs" asChild>
                  <a href={p.live} target="_blank" rel="noreferrer">
                    <ExternalLink size={14} /> Live Demo
                  </a>
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;
