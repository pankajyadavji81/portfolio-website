import { Github, Linkedin, Heart } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => (
  <footer className="border-t border-border/30 py-10 px-6 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-t from-primary/[0.02] to-transparent pointer-events-none" />
    <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 relative z-10">
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-sm text-muted-foreground flex items-center gap-1.5"
      >
        © {new Date().getFullYear()} Pankaj Yadav · Built with <Heart size={12} className="text-destructive" /> and React
      </motion.p>
      <div className="flex gap-3">
        {[
          { icon: Github, href: "https://github.com" },
          { icon: Linkedin, href: "https://linkedin.com" },
        ].map((s) => (
          <a
            key={s.href}
            href={s.href}
            target="_blank"
            rel="noreferrer"
            className="p-2.5 rounded-lg glass text-muted-foreground hover:text-primary hover:border-primary/30 transition-all duration-300"
          >
            <s.icon size={16} />
          </a>
        ))}
      </div>
    </div>
  </footer>
);

export default Footer;
