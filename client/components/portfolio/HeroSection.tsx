import { Button } from "@/components/ui/button";
import { ArrowDown, Download, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import DotGrid from "@/components/ui/DotGrid";

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
          <div className="mx-auto w-80 h-32 flex items-center justify-center cursor-pointer group">
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center border-4 border-primary/20 group-hover:w-80 group-hover:h-32 group-hover:rounded-full transition-all duration-500 ease-in-out relative overflow-hidden">
              <div className="absolute inset-2 rounded-full bg-primary/10 flex items-center justify-center group-hover:rounded-full transition-all duration-500 ease-in-out">
                <span className="text-3xl font-bold text-primary transition-all duration-500 ease-in-out overflow-hidden whitespace-nowrap">
                  <span className="group-hover:hidden">SA</span>
                  <span className="hidden group-hover:inline">
                    Samraan Ahmed
                  </span>
                </span>
              </div>
            </div>
          </div>

          {/* Main Heading */}
          <div className="space-y-4">
            <div className="bg-background/40 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-border/30">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight drop-shadow-sm">
                Frontend Web Developer
              </h1>
              <div className="text-2xl md:text-3xl font-medium text-primary drop-shadow-sm mt-4">
                Crafting Beautiful User Experiences
              </div>
            </div>
          </div>

          {/* Tagline */}
          <div className="bg-background/30 backdrop-blur-sm rounded-xl p-6 shadow-md border border-border/20 max-w-3xl mx-auto">
            <p className="text-xl md:text-2xl text-foreground leading-relaxed drop-shadow-sm">
              Creating stunning, responsive, and interactive user interfaces
              with modern frontend technologies. Passionate about pixel-perfect
              design and seamless user experiences.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="bg-background/60 backdrop-blur-sm rounded-xl p-6 shadow-md border border-border/30">
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                asChild
                size="lg"
                className="px-8 py-6 text-lg font-medium shadow-lg"
              >
                <Link to="/projects">
                  View Projects
                  {/* <ArrowDown className="ml-2 h-5 w-5" /> */}
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="px-8 py-6 text-lg font-medium shadow-lg bg-background/80 backdrop-blur-sm"
              >
                <Link to="/contact">
                  <Mail className="mr-2 h-5 w-5" />
                  Contact Me
                </Link>
              </Button>
              <Button
                variant="secondary"
                size="lg"
                className="px-8 py-6 text-lg font-medium shadow-lg bg-background/80 backdrop-blur-sm"
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
          </div>

          {/* Scroll indicator */}
          {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ArrowDown className="h-6 w-6 text-muted-foreground" />
          </div> */}
        </div>
      </div>
    </section>
  );
}
