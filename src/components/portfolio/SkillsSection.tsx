import { Progress } from "@/components/ui/progress";

const categories = [
  {
    title: "Frontend",
    skills: [
      { name: "React", level: 90 },
      { name: "JavaScript / TypeScript", level: 85 },
      { name: "HTML & CSS", level: 95 },
      { name: "Tailwind CSS", level: 90 },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", level: 75 },
      { name: "Express.js", level: 70 },
      { name: "MongoDB", level: 70 },
      { name: "REST APIs", level: 80 },
    ],
  },
  {
    title: "Tools & Others",
    skills: [
      { name: "Git & GitHub", level: 85 },
      { name: "VS Code", level: 90 },
      { name: "Figma", level: 65 },
      { name: "Responsive Design", level: 90 },
    ],
  },
];

const SkillsSection = () => (
  <section id="skills" className="py-24 px-6">
    <div className="max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-2">
        My <span className="text-gradient">Skills</span>
      </h2>
      <p className="text-muted-foreground text-center mb-12 text-sm">Technologies I work with</p>

      <div className="grid md:grid-cols-3 gap-6">
        {categories.map((cat) => (
          <div
            key={cat.title}
            className="glass rounded-2xl p-6 glass-hover glow"
          >
            <h3 className="text-lg font-semibold mb-5 text-primary">
              {cat.title}
            </h3>
            <div className="space-y-5">
              {cat.skills.map((s) => (
                <div key={s.name}>
                  <div className="flex justify-between text-sm mb-1.5">
                    <span className="text-foreground font-medium">{s.name}</span>
                    <span className="text-muted-foreground">{s.level}%</span>
                  </div>
                  <Progress
                    value={s.level}
                    className="h-2 bg-secondary"
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default SkillsSection;
