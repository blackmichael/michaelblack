import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, ArrowDown } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBackground} 
          alt="Professional workspace" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-95" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground leading-tight">
            Hi, I'm <span className="text-accent">Your Name</span>
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 font-light">
            Full Stack Developer & Creative Problem Solver
          </p>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            Building elegant solutions to complex problems. Passionate about creating 
            seamless user experiences and scalable applications.
          </p>

          {/* Social Links */}
          <div className="flex justify-center gap-4 pt-4">
            <Button 
              variant="outline" 
              size="icon"
              className="bg-primary-foreground/10 border-primary-foreground/20 hover:bg-primary-foreground/20 text-primary-foreground"
            >
              <Github className="h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              size="icon"
              className="bg-primary-foreground/10 border-primary-foreground/20 hover:bg-primary-foreground/20 text-primary-foreground"
            >
              <Linkedin className="h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              size="icon"
              className="bg-primary-foreground/10 border-primary-foreground/20 hover:bg-primary-foreground/20 text-primary-foreground"
            >
              <Mail className="h-5 w-5" />
            </Button>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button 
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground"
              onClick={() => scrollToSection('projects')}
            >
              View My Work
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="bg-primary-foreground/10 border-primary-foreground/20 hover:bg-primary-foreground/20 text-primary-foreground"
              onClick={() => scrollToSection('contact')}
            >
              Get In Touch
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={() => scrollToSection('about')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-primary-foreground/60 hover:text-primary-foreground transition-colors cursor-pointer animate-bounce"
        aria-label="Scroll to next section"
      >
        <ArrowDown className="h-6 w-6" />
      </button>
    </section>
  );
};

export default Hero;
