import { Github, Linkedin, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const socialLinks = [
  {
    icon: Github,
    href: "https://github.com/SamraanAhmed",
    label: "GitHub",
  },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/samraan-ahmed/",
    label: "LinkedIn",
  },
  {
    icon: Mail,
    href: "mailto:samraanahmed9484@email.com",
    label: "Email",
  },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col items-center space-y-8">
          {/* Logo/Name */}
          <div className="text-center">
            <Link
              to="/"
              className="text-3xl font-bold text-primary hover:scale-105 transition-transform duration-200 inline-block"
            >
              Samraan Ahmed
            </Link>
            <p className="text-muted-foreground mt-2">Frontend Web Developer</p>
          </div>

          {/* Social Links */}
          <div className="flex space-x-6">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-muted hover:bg-primary/10 rounded-full flex items-center justify-center transition-colors duration-200 group"
                aria-label={link.label}
              >
                <link.icon className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
            ))}
          </div>

          {/* Navigation Links */}
          <div className="flex flex-wrap justify-center gap-8 text-sm">
            {[
              { name: "About", href: "/about" },
              { name: "Skills", href: "/skills" },
              { name: "Projects", href: "/projects" },
              { name: "Experience", href: "/experience" },
              { name: "Contact", href: "/contact" },
            ].map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
