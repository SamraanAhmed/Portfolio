import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, TrendingUp } from "lucide-react";
import { Layout } from "@/components/layout/Layout";

const experiences = [
  {
    title: "Frontend Development Intern",
    company: "Developers Hub",
    location: "Rawalpindi, Pakistan",
    period: "Jun 2025 - Aug 2025",
    type: "Internship",
    description:
      "Focused on creating responsive, accessible user interfaces using modern frontend frameworks. Collaborated with designers and UX teams to implement pixel-perfect designs.",
    achievements: [
      "Built 5 responsive UI components used across 3 major projects",
      "Improved website loading speed by 40% through optimization",
      "Implemented accessibility features achieving WCAG 2.1 AA compliance",
      "Created mobile-first designs with 99% cross-device compatibility",
    ],
    technologies: ["React", "TypeScript", "Tailwind CSS", "Figma", "Git"],
    current: false,
  },
  {
    title: "UI Development Intern",
    company: "Creative Digital Agency",
    location: "Rawalpindi, Pakistan",
    period: "Jan 2024 - Mar 2024",
    type: "Internship",
    description:
      "Developed interactive user interfaces and collaborated with design teams to bring creative concepts to life. Gained experience with modern CSS frameworks and animation libraries.",
    achievements: [
      "Created 8+ reusable React.js components for the design system",
      "Implemented smooth animations increasing user engagement by 25%",
      "Converted 10+ Figma designs into functional web interfaces",
      "Optimized CSS bundle size reducing load time by 35%",
    ],
    technologies: ["React.js", "JavaScript", "CSS Animations", "Figma", "Jest"],
  },
];

export default function Experience() {
  return (
    <Layout>
      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Professional Experience
            </h1>
            <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
            <p className="max-w-3xl mx-auto text-xl text-muted-foreground">
              My journey through internships and hands-on learning in frontend
              development and user interface design.
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-border"></div>

            <div className="space-y-12">
              {experiences.map((experience, index) => (
                <div
                  key={index}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background z-10">
                    {experience.current && (
                      <div className="absolute inset-0 bg-primary rounded-full animate-ping"></div>
                    )}
                  </div>

                  {/* Experience Card */}
                  <div className="w-full md:w-5/12">
                    <Card className="group hover:shadow-lg transition-all duration-300">
                      <CardHeader>
                        <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                          <Badge variant="secondary" className="text-xs">
                            {experience.type}
                          </Badge>
                          <div className="flex items-center text-sm text-muted-foreground">
                            <Calendar className="w-4 h-4 mr-1" />
                            {experience.period}
                          </div>
                        </div>
                        <CardTitle className="text-xl group-hover:text-primary transition-colors">
                          {experience.title}
                        </CardTitle>
                        <div className="space-y-1">
                          <div className="font-semibold text-primary">
                            {experience.company}
                          </div>
                          <div className="flex items-center text-sm text-muted-foreground">
                            <MapPin className="w-4 h-4 mr-1" />
                            {experience.location}
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <p className="text-muted-foreground leading-relaxed">
                          {experience.description}
                        </p>

                        {/* Key Achievements */}
                        <div>
                          <h4 className="font-semibold text-foreground mb-2 flex items-center">
                            <TrendingUp className="w-4 h-4 mr-2 text-primary" />
                            Key Achievements:
                          </h4>
                          <ul className="text-sm text-muted-foreground space-y-1">
                            {experience.achievements.map((achievement, idx) => (
                              <li key={idx} className="flex items-start">
                                <span className="w-1.5 h-1.5 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></span>
                                {achievement}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Technologies */}
                        <div>
                          <h4 className="font-semibold text-foreground mb-2">
                            Technologies:
                          </h4>
                          <div className="flex flex-wrap gap-1">
                            {experience.technologies.map((tech, idx) => (
                              <Badge
                                key={idx}
                                variant="outline"
                                className="text-xs"
                              >
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="hidden md:block w-2/12"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
