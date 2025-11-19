const About = () => {
  return (
    <section id="about" className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-8 text-center">
            About Me
          </h2>
          <div className="space-y-6 text-lg text-foreground/80 leading-relaxed">
            <p>
              I'm a passionate full-stack developer with a keen eye for design and a love for 
              clean, efficient code. With several years of experience in web development, I specialize 
              in building modern, responsive applications that deliver exceptional user experiences.
            </p>
            <p>
              My journey in tech has been driven by curiosity and a constant desire to learn. 
              I thrive in collaborative environments where I can contribute to meaningful projects 
              and grow alongside talented teammates. When I'm not coding, you'll find me exploring 
              new technologies, contributing to open-source projects, or sharing knowledge with the 
              developer community.
            </p>
            <p>
              I believe in writing code that not only works but is also maintainable, scalable, 
              and accessible. My goal is to create digital experiences that make a positive impact 
              on users' lives while pushing the boundaries of what's possible on the web.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
