import { ArrowDown, Download, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6 pt-20 relative overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-accent/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto w-full flex flex-col-reverse md:flex-row items-center gap-12 relative z-10">
        {/* Text */}
        <div className="flex-1 text-center md:text-left">
          <p className="text-primary font-medium mb-3 tracking-wide text-sm uppercase">
            Hello, I'm
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-4">
            Pankaj <span className="text-gradient">Yadav</span>
          </h1>
          <h2 className="text-xl sm:text-2xl text-muted-foreground font-medium mb-6">
            Frontend Developer
          </h2>
          <p className="text-muted-foreground max-w-lg mb-8 leading-relaxed">
            I craft modern, responsive web applications with clean code and
            pixel-perfect design. Passionate about creating exceptional user
            experiences with React and modern technologies.
          </p>
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <Button size="lg" className="gap-2 rounded-full px-6">
              <Download size={18} />
              Download Resume
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="gap-2 rounded-full px-6 border-primary/30 hover:border-primary"
              asChild
            >
              <a href="#contact">
                <Mail size={18} />
                Contact Me
              </a>
            </Button>
          </div>
        </div>

        {/* Avatar */}
        <div className="flex-shrink-0">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/40 to-accent/40 rounded-full blur-2xl scale-110" />
            <Avatar className="w-52 h-52 sm:w-64 sm:h-64 border-2 border-primary/30 relative">
              <AvatarFallback className="text-5xl font-bold bg-secondary text-gradient">
                PY
              </AvatarFallback>
            </Avatar>
          </div>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground animate-bounce"
      >
        <ArrowDown size={22} />
      </a>
    </section>
  );
};

export default HeroSection;
