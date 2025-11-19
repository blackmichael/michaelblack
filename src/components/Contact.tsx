import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Mail, MapPin, Phone, Github, Linkedin, Twitter } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! I'll get back to you soon.");
  };

  return (
    <section id="contact" className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-primary mb-12 text-center">
          Get In Touch
        </h2>
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-4">
                Let's Connect
              </h3>
              <p className="text-foreground/70 mb-6">
                I'm always open to discussing new projects, creative ideas, or 
                opportunities to be part of your vision. Feel free to reach out!
              </p>
            </div>

            <Card className="p-6 space-y-4 shadow-soft">
              <div className="flex items-center gap-3 text-foreground/80">
                <Mail className="h-5 w-5 text-accent" />
                <span>your.email@example.com</span>
              </div>
              <div className="flex items-center gap-3 text-foreground/80">
                <Phone className="h-5 w-5 text-accent" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3 text-foreground/80">
                <MapPin className="h-5 w-5 text-accent" />
                <span>San Francisco, CA</span>
              </div>
            </Card>

            <div>
              <h4 className="text-lg font-semibold text-foreground mb-4">
                Follow Me
              </h4>
              <div className="flex gap-3">
                <Button variant="outline" size="icon">
                  <Github className="h-5 w-5" />
                </Button>
                <Button variant="outline" size="icon">
                  <Linkedin className="h-5 w-5" />
                </Button>
                <Button variant="outline" size="icon">
                  <Twitter className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="p-6 shadow-soft">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Name
                </label>
                <Input 
                  id="name" 
                  placeholder="Your name" 
                  required 
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email
                </label>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="your.email@example.com" 
                  required 
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                  Subject
                </label>
                <Input 
                  id="subject" 
                  placeholder="What's this about?" 
                  required 
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <Textarea 
                  id="message" 
                  placeholder="Your message..." 
                  rows={5}
                  required 
                />
              </div>
              <Button 
                type="submit" 
                className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
              >
                Send Message
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
