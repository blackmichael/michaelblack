const Footer = () => {
  return (
    <footer className="py-8 bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} Your Name. Built with React & Tailwind CSS.
        </p>
        <p className="text-xs mt-2 text-primary-foreground/70">
          Designed & Developed with ❤️
        </p>
      </div>
    </footer>
  );
};

export default Footer;
