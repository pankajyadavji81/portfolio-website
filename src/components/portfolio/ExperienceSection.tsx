import { GraduationCap, Briefcase, Calendar } from "lucide-react";
import { motion } from "framer-motion";

const education = [
  {
    title: "Bachelor of Technology",
    subtitle: "Computer Science & Engineering",
    period: "2020 — 2024",
    description: "Focused on web technologies, data structures, and software engineering principles.",
  },
  {
    title: "Higher Secondary",
    subtitle: "Science Stream",
    period: "2018 — 2020",
    description: "Completed with distinction in Mathematics and Computer Science.",
  },
];

const experience = [
  {
    title: "Frontend Developer Intern",
    subtitle: "Tech Company",
    period: "2023 — Present",
    description: "Building responsive web applications using React, TypeScript, and Tailwind CSS.",
  },
  {
    title: "Freelance Developer",
    subtitle: "Self-Employed",
    period: "2022 — 2023",
    description: "Developed custom websites and web apps for small businesses.",
  },
];

interface TimelineItemProps {
  item: { title: string; subtitle: string; period: string; description: string };
  index: number;
  baseDelay: number;
}

const TimelineItem = ({ item, index, baseDelay }: TimelineItemProps) => (
  <motion.div
    initial={{ opacity: 0, x: -15 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4, delay: baseDelay + index * 0.15 }}
    className="relative"
  >
    {/* Timeline line */}
    <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-primary/40 to-transparent ml-3" />
    <div className="pl-9 relative">
      {/* Dot */}
      <div className="absolute left-1.5 top-2 w-3 h-3 rounded-full bg-primary/30 border-2 border-primary" />
      <div className="glass rounded-xl p-5 glass-hover">
        <div className="flex items-center gap-2 text-xs text-primary font-mono mb-2">
          <Calendar size={12} />
          {item.period}
        </div>
        <h4 className="font-semibold">{item.title}</h4>
        <p className="text-sm text-muted-foreground">{item.subtitle}</p>
        <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{item.description}</p>
      </div>
    </div>
  </motion.div>
);

const ExperienceSection = () => (
  <section id="experience" className="py-28 px-6">
    <div className="max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-primary font-mono text-sm text-center mb-2">// journey</p>
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
          Experience & <span className="text-gradient">Education</span>
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-8"
          >
            <div className="p-2.5 rounded-lg bg-primary/10 text-primary">
              <Briefcase size={20} />
            </div>
            <h3 className="text-xl font-semibold">Experience</h3>
          </motion.div>
          <div className="space-y-6">
            {experience.map((e, i) => (
              <TimelineItem key={e.title} item={e} index={i} baseDelay={0.2} />
            ))}
          </div>
        </div>
        <div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-8"
          >
            <div className="p-2.5 rounded-lg bg-accent/10 text-accent">
              <GraduationCap size={20} />
            </div>
            <h3 className="text-xl font-semibold">Education</h3>
          </motion.div>
          <div className="space-y-6">
            {education.map((e, i) => (
              <TimelineItem key={e.title} item={e} index={i} baseDelay={0.3} />
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default ExperienceSection;
