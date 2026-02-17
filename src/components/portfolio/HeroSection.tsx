import { ArrowDown, Download, Mail, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6 pt-20 relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-grid opacity-30" />
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.08, 0.15, 0.08] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary rounded-full blur-[150px] pointer-events-none"
      />
      <motion.div
        animate={{ scale: [1, 1.3, 1], opacity: [0.06, 0.12, 0.06] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-accent rounded-full blur-[130px] pointer-events-none"
      />
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.04, 0.08, 0.04] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 4 }}
        className="absolute top-1/2 right-1/3 w-[300px] h-[300px] bg-[hsl(199,89%,48%)] rounded-full blur-[120px] pointer-events-none"
      />

      <div className="max-w-6xl mx-auto w-full flex flex-col-reverse md:flex-row items-center gap-16 relative z-10">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex-1 text-center md:text-left"
        >
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-6"
          >
            <Sparkles size={14} className="text-primary" />
            <span className="text-primary text-xs font-medium tracking-wider uppercase">
              Available for hire
            </span>
          </motion.div>

          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-[1.1] mb-4 tracking-tight">
            Hi, I'm{" "}
            <span className="text-gradient">Pankaj</span>
            <br />
            <span className="text-gradient">Yadav</span>
          </h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <p className="font-mono text-primary/80 text-sm sm:text-base mb-4 tracking-wide">
              &lt; Frontend Developer /&gt;
            </p>
            <p className="text-muted-foreground max-w-lg mb-8 leading-relaxed text-sm sm:text-base">
              I craft modern, responsive web applications with clean code and
              pixel-perfect design. Passionate about creating exceptional user
              experiences with React and cutting-edge technologies.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-wrap gap-4 justify-center md:justify-start"
          >
            <Button size="lg" className="gap-2 rounded-full px-7 shadow-lg shadow-primary/20 hover:shadow-primary/40 hover:scale-105 transition-all duration-300">
              <Download size={18} />
              Download Resume
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="gap-2 rounded-full px-7 border-primary/30 hover:border-primary hover:bg-primary/5 hover:scale-105 transition-all duration-300"
              asChild
            >
              <a href="#contact">
                <Mail size={18} />
                Contact Me
              </a>
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.0 }}
            className="flex gap-8 mt-12 justify-center md:justify-start"
          >
            {[
              { value: "2+", label: "Years Exp." },
              { value: "15+", label: "Projects" },
              { value: "10+", label: "Technologies" },
            ].map((stat) => (
              <div key={stat.label} className="text-center md:text-left">
                <p className="text-2xl font-bold text-gradient">{stat.value}</p>
                <p className="text-xs text-muted-foreground mt-0.5">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Avatar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex-shrink-0"
        >
          <div className="relative group">
            {/* Animated rings */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-4 rounded-full border border-dashed border-primary/20"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-10 rounded-full border border-dashed border-accent/10"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/30 rounded-full blur-3xl scale-125 group-hover:scale-150 transition-transform duration-700" />
            <Avatar className="w-56 h-56 sm:w-72 sm:h-72 border-2 border-primary/20 relative shadow-2xl shadow-primary/10 group-hover:border-primary/40 transition-all duration-500">
              <AvatarFallback className="text-6xl font-bold bg-gradient-to-br from-secondary to-muted text-gradient">
                PY
              </AvatarFallback>
            </Avatar>
            {/* Status dot */}
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute bottom-4 right-4 w-5 h-5 bg-success rounded-full border-4 border-background shadow-lg shadow-success/30"
            />
          </div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors"
      >
        <ArrowDown size={22} />
      </motion.a>
    </section>
  );
};

export default HeroSection;
