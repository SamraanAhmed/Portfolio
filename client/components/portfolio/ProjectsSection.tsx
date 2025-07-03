import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Zap, Users, TrendingUp } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-featured e-commerce platform with real-time inventory management, payment processing, and admin dashboard. Built for scalability with microservices architecture.",
    image: "/api/placeholder/600/400",
    technologies: [
      "React",
      "Node.js",
      "MongoDB",
      "Stripe",
      "AWS",
      "Docker",
      "Redis",
    ],
    features: [
      "Real-time inventory tracking",
      "Payment gateway integration",
      "Admin analytics dashboard",
      "Mobile-responsive design",
    ],
    metrics: {
      icon: TrendingUp,
      label: "40% performance improvement",
    },
    liveUrl: "https://demo-ecommerce.com",
    githubUrl: "https://github.com/username/ecommerce-platform",
    featured: true,
  },
  {
    title: "Task Management App",
    description:
      "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features. Designed for remote teams.",
    image: "/api/placeholder/600/400",
    technologies: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Socket.io",
      "Vercel",
    ],
    features: [
      "Real-time collaboration",
      "Drag & drop interface",
      "Team permissions",
      "File attachments",
    ],
    metrics: {
      icon: Users,
      label: "1000+ active users",
    },
    liveUrl: "https://taskflow-demo.com",
    githubUrl: "https://github.com/username/task-management",
  },
  {
    title: "API Analytics Dashboard",
    description:
      "A comprehensive analytics dashboard for API monitoring with real-time metrics, error tracking, and performance insights. Processes millions of requests daily.",
    image: "/api/placeholder/600/400",
    technologies: [
      "React",
      "D3.js",
      "Express",
      "InfluxDB",
      "Grafana",
      "Kubernetes",
    ],
    features: [
      "Real-time metrics visualization",
      "Custom alert system",
      "Performance optimization insights",
      "Multi-tenant architecture",
    ],
    metrics: {
      icon: Zap,
      label: "99.9% uptime achieved",
    },
    liveUrl: "https://api-analytics-demo.com",
    githubUrl: "https://github.com/username/api-analytics",
  },
  {
    title: "Social Media Dashboard",
    description:
      "A unified social media management platform that allows users to schedule posts, analyze engagement, and manage multiple accounts from a single interface.",
    image: "/api/placeholder/600/400",
    technologies: ["Vue.js", "Python", "FastAPI", "PostgreSQL", "AWS Lambda"],
    features: [
      "Multi-platform posting",
      "Engagement analytics",
      "Content scheduling",
      "Audience insights",
    ],
    metrics: {
      icon: Users,
      label: "50K+ posts managed",
    },
    liveUrl: "https://social-dashboard-demo.com",
    githubUrl: "https://github.com/username/social-dashboard",
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          <p className="max-w-3xl mx-auto text-xl text-muted-foreground">
            A showcase of my recent work demonstrating technical expertise,
            problem-solving abilities, and commitment to delivering exceptional
            user experiences.
          </p>
        </div>

        <div className="grid gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className={`group hover:shadow-xl transition-all duration-300 overflow-hidden ${
                project.featured ? "ring-2 ring-primary/20" : ""
              }`}
            >
              {project.featured && (
                <div className="bg-primary text-primary-foreground text-center py-2 text-sm font-medium">
                  Featured Project
                </div>
              )}
              <div className="grid lg:grid-cols-2 gap-8 p-8">
                {/* Project Image */}
                <div className="relative overflow-hidden rounded-lg bg-muted">
                  <div className="aspect-video bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
                    <div className="text-6xl font-bold text-primary/20">
                      {project.title
                        .split(" ")
                        .map((word) => word[0])
                        .join("")}
                    </div>
                  </div>
                </div>

                {/* Project Details */}
                <div className="space-y-6">
                  <div>
                    <CardTitle className="text-2xl mb-3 group-hover:text-primary transition-colors">
                      {project.title}
                    </CardTitle>
                    <p className="text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Key Features */}
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">
                      Key Features:
                    </h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {project.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">
                      Technologies Used:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => (
                        <Badge
                          key={idx}
                          variant="secondary"
                          className="text-xs"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Metrics */}
                  <div className="flex items-center space-x-2 text-primary">
                    <project.metrics.icon className="w-5 h-5" />
                    <span className="font-semibold">
                      {project.metrics.label}
                    </span>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-4 pt-4">
                    <Button asChild>
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                    <Button variant="outline" asChild>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center"
                      >
                        <Github className="w-4 h-4 mr-2" />
                        Source Code
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* View More Projects CTA */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="px-8">
            <Github className="w-5 h-5 mr-2" />
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
}
