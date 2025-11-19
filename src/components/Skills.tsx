import { Code2, Database, Palette, Server } from "lucide-react";
import { Card } from "@/components/ui/card";

const Skills = () => {
  const skillCategories = [
    {
      icon: Code2,
      title: "Frontend Development",
      skills: ["React", "TypeScript", "Tailwind CSS", "Next.js", "Vue.js"]
    },
    {
      icon: Server,
      title: "Backend Development",
      skills: ["Node.js", "Express", "Python", "REST APIs", "GraphQL"]
    },
    {
      icon: Database,
      title: "Database & Tools",
      skills: ["PostgreSQL", "MongoDB", "Redis", "Docker", "Git"]
    },
    {
      icon: Palette,
      title: "Design & UX",
      skills: ["Figma", "UI/UX Design", "Responsive Design", "Accessibility", "Prototyping"]
    }
  ];

  return (
    <section id="skills" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-primary mb-12 text-center">
          Skills & Expertise
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card 
                key={index}
                className="p-8 shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1 border-border/50"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-accent/10">
                    <Icon className="h-6 w-6 text-accent" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-foreground mb-4">
                      {category.title}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
