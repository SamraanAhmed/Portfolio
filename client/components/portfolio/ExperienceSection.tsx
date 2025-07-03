import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, TrendingUp } from "lucide-react";

const experiences = [
  {
    title: "Senior Full Stack Developer",
    company: "TechCorp Solutions",
    location: "Rawalpindi, Pakistan",
    period: "2022 - Present",
    type: "Full-time",
    description:
      "Lead development of scalable web applications serving 100K+ users. Architected microservices infrastructure and mentored junior developers.",
    achievements: [
      "Improved application performance by 60% through optimization",
      "Led migration from monolith to microservices architecture",
      "Mentored 5 junior developers and conducted code reviews",
      "Implemented CI/CD pipeline reducing deployment time by 80%",
    ],
    technologies: [
      "React",
      "Node.js",
      "AWS",
      "Docker",
      "TypeScript",
      "PostgreSQL",
    ],
    current: true,
  },
  {
    title: "Full Stack Developer",
    company: "InnovateLab",
    location: "Rawalpindi, Pakistan",
    period: "2020 - 2022",
    type: "Full-time",
    description:
      "Developed and maintained multiple client projects using modern web technologies. Collaborated with design and product teams to deliver pixel-perfect implementations.",
    achievements: [
      "Built 15+ production applications from scratch",
      "Reduced bug reports by 40% through comprehensive testing",
      "Integrated third-party APIs for payment and analytics",
      "Optimized database queries improving response time by 50%",
    ],
    technologies: ["Vue.js", "Express", "MongoDB", "React", "Python", "AWS"],
  },
  {
    title: "Frontend Developer",
    company: "Digital Agency Pro",
    location: "Remote",
    period: "2019 - 2020",
    type: "Contract",
    description:
      "Specialized in creating responsive, accessible web interfaces for various clients across different industries including e-commerce, healthcare, and finance.",
    achievements: [
      "Delivered 20+ responsive websites with 98% client satisfaction",
      "Implemented accessibility standards (WCAG 2.1 AA compliance)",
      "Reduced page load times by 45% through optimization",
      "Created reusable component library used across projects",
    ],
    technologies: ["React", "Sass", "JavaScript", "Webpack", "Figma"],
  },
  {
    title: "Junior Web Developer",
    company: "StartupXYZ",
    location: "Rawalpindi, Pakistan",
    period: "2018 - 2019",
    type: "Full-time",
    description:
      "Entry-level position where I gained hands-on experience with full-stack development while contributing to the company's main product and internal tools.",
    achievements: [
      "Contributed to features used by 10K+ daily active users",
      "Fixed 150+ bugs and implemented 50+ new features",
      "Participated in agile development process",
      "Learned modern development practices and tools",
    ],
    technologies: ["JavaScript", "HTML/CSS", "jQuery", "PHP", "MySQL"],
  },
];

export function ExperienceSection() {
  return (
    <section id="experience" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Professional Experience
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          <p className="max-w-3xl mx-auto text-xl text-muted-foreground">
            A journey of continuous growth and learning in the ever-evolving
            world of web development.
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
                    {experience.current && (
                      <div className="bg-primary text-primary-foreground text-center py-2 text-sm font-medium rounded-t-lg">
                        Current Position
                      </div>
                    )}
                    <CardHeader>
                      <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                        <Badge
                          variant={experience.current ? "default" : "secondary"}
                          className="text-xs"
                        >
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
    </section>
  );
}
