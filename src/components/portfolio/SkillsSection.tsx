import { motion } from "framer-motion";

const categories = [
  {
    title: "Frontend",
    color: "from-[hsl(173,80%,50%)] to-[hsl(199,89%,48%)]",
    skills: [
      { name: "React", level: 90 },
      { name: "JavaScript / TypeScript", level: 85 },
      { name: "HTML & CSS", level: 95 },
      { name: "Tailwind CSS", level: 90 },
    ],
  },
  {
    title: "Backend",
    color: "from-[hsl(270,60%,60%)] to-[hsl(300,50%,55%)]",
    skills: [
      { name: "Node.js", level: 75 },
      { name: "Express.js", level: 70 },
      { name: "MongoDB", level: 70 },
      { name: "REST APIs", level: 80 },
    ],
  },
  {
    title: "Tools & Others",
    color: "from-[hsl(43,96%,56%)] to-[hsl(20,90%,55%)]",
    skills: [
      { name: "Git & GitHub", level: 85 },
      { name: "VS Code", level: 90 },
      { name: "Figma", level: 65 },
      { name: "Responsive Design", level: 90 },
    ],
  },
];

const SkillBar = ({ name, level, delay, color }: { name: string; level: number; delay: number; color: string }) => (
  <div>
    <div className="flex justify-between text-sm mb-2">
      <span className="text-foreground font-medium">{name}</span>
      <span className="text-muted-foreground font-mono text-xs">{level}%</span>
    </div>
    <div className="h-2.5 bg-secondary rounded-full overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${level}%` }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay, ease: "easeOut" }}
        className={`h-full rounded-full bg-gradient-to-r ${color} relative`}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-[shimmer_2s_infinite]" />
      </motion.div>
    </div>
  </div>
);

const SkillsSection = () => (
  <section id="skills" className="py-28 px-6 relative">
    <div className="max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-primary font-mono text-sm text-center mb-2">// skills</p>
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
          My <span className="text-gradient">Skills</span>
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6">
        {categories.map((cat, ci) => (
          <motion.div
            key={cat.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: ci * 0.15 }}
            className="glass rounded-2xl p-7 glass-hover group relative overflow-hidden"
          >
            {/* Top gradient bar */}
            <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${cat.color} opacity-60 group-hover:opacity-100 transition-opacity`} />
            <h3 className={`text-lg font-semibold mb-6 bg-gradient-to-r ${cat.color} bg-clip-text text-transparent`}>
              {cat.title}
            </h3>
            <div className="space-y-5">
              {cat.skills.map((s, si) => (
                <SkillBar
                  key={s.name}
                  {...s}
                  delay={0.2 + ci * 0.15 + si * 0.1}
                  color={cat.color}
                />
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default SkillsSection;
