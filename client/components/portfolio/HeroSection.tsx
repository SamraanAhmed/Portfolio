import { Button } from "@/components/ui/button";
import { ArrowDown, Download, Mail } from "lucide-react";
import { Link } from "react-router-dom";

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-background via-muted/30 to-background">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center relative">
        <div className="space-y-8">
          {/* Profile Image */}
          <div className="mx-auto w-32 h-32 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center border-4 border-primary/20 group hover:w-80 hover:h-32 hover:rounded-full transition-all duration-500 ease-in-out cursor-pointer">
            <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center group-hover:w-80 group-hover:h-24 group-hover:rounded-full group-hover:px-6 transition-all duration-500 ease-in-out">
              <span className="text-3xl font-bold text-primary transition-all duration-500 ease-in-out overflow-hidden whitespace-nowrap">
                <span className="group-hover:hidden">SA</span>
                <span className="hidden group-hover:inline">Samraan Ahmed</span>
              </span>
            </div>
          </div>

          {/* Main Heading */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold text-foreground tracking-tight">
              Frontend Web Developer
            </h1>
            <div className="text-2xl md:text-3xl font-medium text-primary">
              Crafting Beautiful User Experiences
            </div>
          </div>

          {/* Tagline */}
          <p className="max-w-3xl mx-auto text-xl md:text-2xl text-muted-foreground leading-relaxed">
            Creating stunning, responsive, and interactive user interfaces with
            modern frontend technologies. Passionate about pixel-perfect design
            and seamless user experiences.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button asChild size="lg" className="px-8 py-6 text-lg font-medium">
              <Link to="/projects">
                View Projects
                <ArrowDown className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="px-8 py-6 text-lg font-medium"
            >
              <Link to="/contact">
                <Mail className="mr-2 h-5 w-5" />
                Contact Me
              </Link>
            </Button>
            <Button
              variant="secondary"
              size="lg"
              className="px-8 py-6 text-lg font-medium"
              onClick={() => {
                // Trigger download of resume PDF
                const link = document.createElement("a");
                link.href = "/resume.pdf";
                link.download = "Samraan_Ahmed_Resume.pdf";
                link.click();
              }}
            >
              <Download className="mr-2 h-5 w-5" />
              Resume
            </Button>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ArrowDown className="h-6 w-6 text-muted-foreground" />
          </div>
        </div>
      </div>
    </section>
  );
}
