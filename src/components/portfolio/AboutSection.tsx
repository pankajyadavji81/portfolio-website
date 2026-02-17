import { Badge } from "@/components/ui/badge";

const techs = [
  "HTML", "CSS", "JavaScript", "TypeScript", "React", "Node.js",
  "MongoDB", "Tailwind CSS", "Git", "REST APIs",
];

const AboutSection = () => (
  <section id="about" className="py-24 px-6">
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-2">
        About <span className="text-gradient">Me</span>
      </h2>
      <p className="text-muted-foreground text-center mb-12 text-sm">Get to know me</p>

      <div className="glass rounded-2xl p-8 glow">
        <p className="text-muted-foreground leading-relaxed mb-6">
          I'm a passionate Frontend Developer with a strong foundation in
          building responsive, user-friendly web applications. With experience
          in both frontend and backend technologies, I enjoy turning complex
          problems into elegant, intuitive interfaces.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-8">
          My journey in web development started with curiosity and has grown
          into a deep commitment to crafting high-quality digital experiences.
          I'm constantly learning and exploring new technologies to stay at the
          forefront of the industry.
        </p>

        <div className="flex flex-wrap gap-2">
          {techs.map((t) => (
            <Badge
              key={t}
              variant="secondary"
              className="rounded-full px-4 py-1.5 text-xs font-medium border border-border/50 hover:border-primary/40 transition-colors"
            >
              {t}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;
