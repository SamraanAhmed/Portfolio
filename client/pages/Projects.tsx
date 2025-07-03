import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Zap, Users, TrendingUp } from "lucide-react";
import { Layout } from "@/components/layout/Layout";

// Import images with relative paths
import XeeTechImage from "@/components/Images/XeeTechlogo.png";
import DataVizImage from "@/components/Images/ImageBot.png";
import PortfolioTemplateImage from "@/components/Images/ImageBot.png";
import CSSPlaygroundImage from "@/components/Images/ImageBot.png";

const projects = [
  {
    title: "XeeTech",
    description:
      "A web application build for a Digital Software House, dealing with SaaS products and services. It features a modern design, responsive layout, and showcases various projects and services offered by the company.",
    image: XeeTechImage,
    technologies: ["React", "TypeScript", "Tailwind CSS", "Netlify"],
    features: [
      "SaaS product showcase",
      "Project portfolio",
      "Mobile responsive design",
      "Dark/light theme support",
    ],
    metrics: {
      icon: TrendingUp,
      label: "40% faster development",
    },
    liveUrl: "https://xeetech.xyz",
    // githubUrl: "https://github.com/samraanahmed/ecommerce-ui-kit",
    featured: true,
  },
  // Uncomment the following projects to include them in the showcase
  // {
  //   title: "Interactive Data Visualization",
  //   description:
  //     "A dynamic dashboard showcasing complex data through beautiful, interactive charts and graphs. Features smooth animations, filtering capabilities, and responsive design.",
  //   image: DataVizImage,
  //   technologies: [
  //     "Vue.js",
  //     "D3.js",
  //     "Chart.js",
  //     "CSS Grid",
  //     "Sass",
  //     "Webpack",
  //   ],
  //   features: [
  //     "Interactive chart components",
  //     "Real-time data updates",
  //     "Responsive grid layout",
  //     "Custom animations",
  //   ],
  //   metrics: {
  //     icon: Users,
  //     label: "98% user satisfaction",
  //   },
  //   liveUrl: "https://data-viz-demo.com",
  //   githubUrl: "https://github.com/samraanahmed/data-visualization",
  // },
  // {
  //   title: "Portfolio Website Template",
  //   description:
  //     "A modern, minimalist portfolio template built with React and Next.js. Features smooth scrolling, parallax effects, and optimized performance for creative professionals.",
  //   image: PortfolioTemplateImage,
  //   technologies: [
  //     "Next.js",
  //     "React",
  //     "Styled Components",
  //     "GSAP",
  //     "Vercel",
  //     "TypeScript",
  //   ],
  //   features: [
  //     "Smooth scroll animations",
  //     "Parallax effects",
  //     "SEO optimized",
  //     "Performance score 95+",
  //   ],
  //   metrics: {
  //     icon: Zap,
  //     label: "95+ Lighthouse score",
  //   },
  //   liveUrl: "https://portfolio-template-demo.com",
  //   githubUrl: "https://github.com/samraanahmed/portfolio-template",
  // },
  // {
  //   title: "CSS Animation Playground",
  //   description:
  //     "An interactive playground for experimenting with CSS animations and transitions. Features live code editing, animation presets, and export functionality.",
  //   image: CSSPlaygroundImage,
  //   technologies: ["Vanilla JS", "CSS3", "HTML5", "Monaco Editor", "Sass"],
  //   features: [
  //     "Live CSS editing",
  //     "Animation presets library",
  //     "Export to CodePen",
  //     "Mobile-friendly interface",
  //   ],
  //   metrics: {
  //     icon: Users,
  //     label: "10K+ animations created",
  //   },
  //   liveUrl: "https://css-playground-demo.com",
  //   githubUrl: "https://github.com/samraanahmed/css-animation-playground",
  // },
];

export default function Projects() {
  return (
    <Layout>
      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Featured Projects
            </h1>
            <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
            <p className="max-w-3xl mx-auto text-xl text-muted-foreground">
              A showcase of my frontend projects demonstrating UI/UX design,
              responsive development, and modern web technologies to create
              beautiful user experiences.
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
                  <div className="relative overflow-hidden rounded-lg flex items-center justify-center">
                    {project.image ? (
                      <img
                        src={project.image}
                        alt={`${project.title} screenshot`}
                        className="w-full object-contain aspect-video max-h-[300px]"
                        loading="lazy"
                      />
                    ) : (
                      <div className="aspect-video bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
                        <div className="text-6xl font-bold text-primary/20">
                          {project.title
                            .split(" ")
                            .map((word) => word[0])
                            .join("")}
                        </div>
                      </div>
                    )}
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
                    {/* <div className="flex items-center space-x-2 text-primary">
                      <project.metrics.icon className="w-5 h-5" />
                      <span className="font-semibold">
                        {project.metrics.label}
                      </span>
                    </div> */}

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
                          Live
                        </a>
                      </Button>
                      {/* <Button variant="outline" asChild>
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center"
                        >
                          <Github className="w-4 h-4 mr-2" />
                          Source Code
                        </a>
                      </Button> */}
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
      </div>
    </Layout>
  );
}
