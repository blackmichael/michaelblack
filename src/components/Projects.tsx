import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with real-time inventory management, payment integration, and admin dashboard. Built with React, Node.js, and PostgreSQL.",
      tags: ["React", "Node.js", "PostgreSQL", "Stripe"],
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Task Management App",
      description: "Collaborative project management tool with real-time updates, team chat, and progress tracking. Features drag-and-drop kanban boards.",
      tags: ["TypeScript", "Next.js", "MongoDB", "Socket.io"],
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Analytics Dashboard",
      description: "Data visualization dashboard for business metrics with interactive charts, custom reports, and export functionality. Processes 1M+ data points.",
      tags: ["React", "D3.js", "Express", "Redis"],
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Social Media App",
      description: "Modern social networking platform with posts, stories, real-time messaging, and image sharing. Supports 10K+ concurrent users.",
      tags: ["Vue.js", "GraphQL", "AWS", "Docker"],
      demoUrl: "#",
      githubUrl: "#"
    }
  ];

  return (
    <section id="projects" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-primary mb-12 text-center">
          Featured Projects
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="p-6 shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1 flex flex-col"
            >
              <h3 className="text-2xl font-semibold text-foreground mb-3">
                {project.title}
              </h3>
              <p className="text-foreground/70 mb-4 flex-grow">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex gap-3">
                <Button 
                  variant="outline"
                  className="flex-1 gap-2"
                  asChild
                >
                  <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4" />
                    Demo
                  </a>
                </Button>
                <Button 
                  variant="outline"
                  className="flex-1 gap-2"
                  asChild
                >
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4" />
                    Code
                  </a>
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
