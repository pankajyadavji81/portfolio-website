import { GraduationCap, Briefcase } from "lucide-react";

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
    description:
      "Building responsive web applications using React, TypeScript, and Tailwind CSS. Collaborating with design and backend teams.",
  },
  {
    title: "Freelance Developer",
    subtitle: "Self-Employed",
    period: "2022 — 2023",
    description:
      "Developed custom websites and web apps for small businesses, focusing on performance and UX.",
  },
];

interface TimelineItemProps {
  item: { title: string; subtitle: string; period: string; description: string };
}

const TimelineItem = ({ item }: TimelineItemProps) => (
  <div className="glass rounded-xl p-5 glass-hover">
    <span className="text-xs text-primary font-medium">{item.period}</span>
    <h4 className="font-semibold mt-1">{item.title}</h4>
    <p className="text-sm text-muted-foreground">{item.subtitle}</p>
    <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{item.description}</p>
  </div>
);

const ExperienceSection = () => (
  <section id="experience" className="py-24 px-6">
    <div className="max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-2">
        Experience & <span className="text-gradient">Education</span>
      </h2>
      <p className="text-muted-foreground text-center mb-12 text-sm">My journey so far</p>

      <div className="grid md:grid-cols-2 gap-10">
        <div>
          <div className="flex items-center gap-2 mb-6">
            <Briefcase size={20} className="text-primary" />
            <h3 className="text-xl font-semibold">Experience</h3>
          </div>
          <div className="space-y-4">
            {experience.map((e) => (
              <TimelineItem key={e.title} item={e} />
            ))}
          </div>
        </div>
        <div>
          <div className="flex items-center gap-2 mb-6">
            <GraduationCap size={20} className="text-primary" />
            <h3 className="text-xl font-semibold">Education</h3>
          </div>
          <div className="space-y-4">
            {education.map((e) => (
              <TimelineItem key={e.title} item={e} />
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default ExperienceSection;
