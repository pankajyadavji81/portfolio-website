import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { Code2, Palette, Zap } from "lucide-react";

const techs = [
  "HTML", "CSS", "JavaScript", "TypeScript", "React", "Node.js",
  "MongoDB", "Tailwind CSS", "Git", "REST APIs",
];

const highlights = [
  { icon: Code2, title: "Clean Code", desc: "Writing maintainable, scalable code" },
  { icon: Palette, title: "UI/UX Focus", desc: "Pixel-perfect, user-centered design" },
  { icon: Zap, title: "Performance", desc: "Optimized for speed and efficiency" },
];

const AboutSection = () => (
  <section id="about" className="py-28 px-6 relative">
    <div className="absolute inset-0 bg-dots opacity-20 pointer-events-none" />
    <div className="max-w-5xl mx-auto relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-primary font-mono text-sm text-center mb-2">// about me</p>
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
          Who <span className="text-gradient">I Am</span>
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-5 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="md:col-span-3 glass rounded-2xl p-8 glow"
        >
          <p className="text-muted-foreground leading-relaxed mb-5">
            I'm a passionate Frontend Developer with a strong foundation in
            building responsive, user-friendly web applications. With experience
            in both frontend and backend technologies, I enjoy turning complex
            problems into elegant, intuitive interfaces.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-8">
            My journey in web development started with curiosity and has grown
            into a deep commitment to crafting high-quality digital experiences.
            I'm constantly learning new technologies to stay at the forefront of the industry.
          </p>

          <div className="flex flex-wrap gap-2">
            {techs.map((t, i) => (
              <motion.div
                key={t}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.05 }}
              >
                <Badge
                  variant="secondary"
                  className="rounded-full px-4 py-1.5 text-xs font-medium border border-border/50 hover:border-primary/40 hover:bg-primary/10 transition-all duration-300 cursor-default"
                >
                  {t}
                </Badge>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="md:col-span-2 flex flex-col gap-4"
        >
          {highlights.map((h, i) => (
            <motion.div
              key={h.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 + i * 0.1 }}
              className="glass rounded-xl p-5 glass-hover group"
            >
              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                  <h.icon size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-sm mb-1">{h.title}</h4>
                  <p className="text-xs text-muted-foreground">{h.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  </section>
);

export default AboutSection;
