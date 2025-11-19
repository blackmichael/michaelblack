import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, MapPin, Phone, Github, Linkedin, Twitter } from "lucide-react";

const Contact = () => {

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

          {/* Google Forms Embed */}
          <div className="h-full">
            <iframe
              src="/features/custom-domain#do-i-need-to-connect-a-www-subdomain-separately"
              width="100%"
              height="800"
              frameBorder="0"
              marginHeight={0}
              marginWidth={0}
              className="rounded-lg shadow-soft"
            >
              Loading…
            </iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
