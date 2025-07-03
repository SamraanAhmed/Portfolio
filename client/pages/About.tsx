import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Globe, Server, Database } from "lucide-react";
import { Layout } from "@/components/layout/Layout";

const highlights = [
  {
    icon: Code,
    title: "Modern Frameworks",
    description: "React",
  },
  {
    icon: Globe,
    title: "Responsive Design",
    description: "CSS, Tailwind CSS, Figma",
  },
  {
    icon: Server,
    title: "Deployment Platforms",
    description: "Netlify, Vercel",
  },
  {
    icon: Database,
    title: "Performance",
    description: "Optimization, SEO",
  },
];

const coreSkills = [
  "JavaScript",
  "TypeScript",
  "React",
  "HTML / CSS",
  "Tailwind CSS",
  "Figma",
  "Git/GitHub",
  "Responsive Design",
  "Python",
  "C++",
  "REST APIs",
  "UI/UX Design",
];

export default function About() {
  return (
    <Layout>
      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              About Me
            </h1>
            <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Bio */}
            <div className="space-y-6">
              <div className="prose prose-lg max-w-none text-muted-foreground">
                <p className="text-xl leading-relaxed">
                  I'm a passionate Frontend Web Developer with{" "}
                  <span className="text-primary font-semibold">3+ years</span>{" "}
                  of experience through internships and personal projects. I
                  specialize in creating beautiful, responsive, and accessible
                  user interfaces with modern frontend technologies.
                </p>
                <p className="text-lg leading-relaxed">
                  My expertise focuses on crafting pixel-perfect user interfaces
                  using React, and modern CSS frameworks. I'm passionate about
                  responsive design, performance optimization, accessibility,
                  and creating delightful user experiences that engage and
                  convert.
                </p>
              </div>

              {/* Core Skills */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-foreground">
                  Core Technologies
                </h3>
                <div className="flex flex-wrap gap-2">
                  {coreSkills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="px-3 py-1 text-sm"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>

            {/* Highlights Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {highlights.map((item, index) => (
                <Card
                  key={index}
                  className="group hover:shadow-lg transition-all duration-300"
                >
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                      <item.icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
