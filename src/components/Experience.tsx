import { Briefcase, Calendar } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Senior Full Stack Developer",
      company: "Tech Company Inc.",
      period: "2022 - Present",
      description: "Leading development of scalable web applications using React, Node.js, and cloud technologies. Mentoring junior developers and driving technical decisions.",
      achievements: [
        "Improved application performance by 40%",
        "Led migration to microservices architecture",
        "Established CI/CD pipelines reducing deployment time by 60%"
      ]
    },
    {
      title: "Full Stack Developer",
      company: "Digital Solutions Ltd.",
      period: "2020 - 2022",
      description: "Developed and maintained multiple client-facing applications. Collaborated with design team to implement pixel-perfect responsive interfaces.",
      achievements: [
        "Built 15+ production-ready web applications",
        "Implemented automated testing increasing code coverage to 85%",
        "Reduced bug reports by 50% through improved QA processes"
      ]
    },
    {
      title: "Junior Developer",
      company: "StartUp Ventures",
      period: "2018 - 2020",
      description: "Started my professional journey building features and fixing bugs. Gained hands-on experience with modern web technologies and agile methodologies.",
      achievements: [
        "Contributed to 3 major product launches",
        "Optimized database queries improving load times by 30%",
        "Received 'Rising Star' award for outstanding contributions"
      ]
    }
  ];

  return (
    <section id="experience" className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-primary mb-12 text-center">
          Work Experience
        </h2>
        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className="relative pl-8 pb-8 border-l-2 border-accent/30 last:pb-0"
            >
              <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-accent" />
              <div className="bg-card p-6 rounded-lg shadow-soft hover:shadow-medium transition-shadow">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 gap-2">
                  <div>
                    <h3 className="text-2xl font-semibold text-foreground flex items-center gap-2">
                      <Briefcase className="h-5 w-5 text-accent" />
                      {exp.title}
                    </h3>
                    <p className="text-lg text-muted-foreground font-medium mt-1">
                      {exp.company}
                    </p>
                  </div>
                  <span className="inline-flex items-center gap-2 text-sm text-muted-foreground bg-secondary px-3 py-1 rounded-full w-fit">
                    <Calendar className="h-4 w-4" />
                    {exp.period}
                  </span>
                </div>
                <p className="text-foreground/80 mb-4">
                  {exp.description}
                </p>
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, achIndex) => (
                    <li 
                      key={achIndex}
                      className="text-foreground/70 flex items-start gap-2"
                    >
                      <span className="text-accent mt-1">▸</span>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
