import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import {
  Search,
  Filter,
  Star,
  Award,
  Zap,
  Code,
  Palette,
  Database,
  Cloud,
  Shield,
} from "lucide-react";

// Professional skill data with detailed information
const skillsData = {
  "Frontend Development": {
    icon: Palette,
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-50 dark:bg-blue-950/20",
    borderColor: "border-blue-200 dark:border-blue-800",
    skills: [
      {
        name: "React",
        level: 95,
        experience: "4+ years",
        description: "Advanced component architecture, hooks, state management",
        certifications: ["React Professional", "Meta React Advanced"],
      },
      {
        name: "TypeScript",
        level: 92,
        experience: "3+ years",
        description: "Type-safe development, advanced generics, utility types",
        certifications: ["TypeScript Expert"],
      },
      {
        name: "Next.js",
        level: 90,
        experience: "3+ years",
        description: "SSR, SSG, API routes, performance optimization",
        certifications: ["Vercel Expert"],
      },
      {
        name: "Tailwind CSS",
        level: 94,
        experience: "3+ years",
        description: "Utility-first styling, custom design systems",
        certifications: [],
      },
      {
        name: "Vue.js",
        level: 85,
        experience: "2+ years",
        description: "Composition API, Vuex, Nuxt.js development",
        certifications: [],
      },
    ],
  },
  "Backend Development": {
    icon: Code,
    color: "from-green-500 to-emerald-500",
    bgColor: "bg-green-50 dark:bg-green-950/20",
    borderColor: "border-green-200 dark:border-green-800",
    skills: [
      {
        name: "Node.js",
        level: 90,
        experience: "4+ years",
        description: "Express, Fastify, microservices architecture",
        certifications: ["Node.js Application Developer"],
      },
      {
        name: "Python",
        level: 88,
        experience: "3+ years",
        description: "Django, FastAPI, data processing, automation",
        certifications: ["Python Institute PCAP"],
      },
      {
        name: "GraphQL",
        level: 82,
        experience: "2+ years",
        description: "Apollo Server, schema design, federation",
        certifications: [],
      },
      {
        name: "REST APIs",
        level: 95,
        experience: "5+ years",
        description: "RESTful design, API documentation, versioning",
        certifications: ["API Design Professional"],
      },
    ],
  },
  "Database & Storage": {
    icon: Database,
    color: "from-purple-500 to-violet-500",
    bgColor: "bg-purple-50 dark:bg-purple-950/20",
    borderColor: "border-purple-200 dark:border-purple-800",
    skills: [
      {
        name: "PostgreSQL",
        level: 88,
        experience: "3+ years",
        description: "Complex queries, performance tuning, migrations",
        certifications: ["PostgreSQL Professional"],
      },
      {
        name: "MongoDB",
        level: 85,
        experience: "3+ years",
        description: "Aggregation pipelines, indexing strategies",
        certifications: ["MongoDB Developer"],
      },
      {
        name: "Redis",
        level: 80,
        experience: "2+ years",
        description: "Caching strategies, session storage, pub/sub",
        certifications: [],
      },
      {
        name: "Prisma",
        level: 82,
        experience: "2+ years",
        description: "Type-safe database access, migrations, relations",
        certifications: [],
      },
    ],
  },
  "Cloud & DevOps": {
    icon: Cloud,
    color: "from-orange-500 to-red-500",
    bgColor: "bg-orange-50 dark:bg-orange-950/20",
    borderColor: "border-orange-200 dark:border-orange-800",
    skills: [
      {
        name: "AWS",
        level: 85,
        experience: "3+ years",
        description: "EC2, S3, Lambda, RDS, CloudFormation",
        certifications: ["AWS Solutions Architect Associate"],
      },
      {
        name: "Docker",
        level: 82,
        experience: "2+ years",
        description: "Containerization, multi-stage builds, orchestration",
        certifications: ["Docker Certified Associate"],
      },
      {
        name: "Kubernetes",
        level: 75,
        experience: "1+ years",
        description: "Container orchestration, deployments, services",
        certifications: [],
      },
      {
        name: "CI/CD",
        level: 88,
        experience: "3+ years",
        description: "GitHub Actions, Jenkins, automated testing",
        certifications: [],
      },
    ],
  },
};

const additionalSkills = [
  { name: "Agile/Scrum", category: "Methodology" },
  { name: "Test-Driven Development", category: "Testing" },
  { name: "Performance Optimization", category: "Optimization" },
  { name: "Accessibility (A11y)", category: "UX" },
  { name: "Design Systems", category: "Design" },
  { name: "Microservices", category: "Architecture" },
  { name: "WebRTC", category: "Communication" },
  { name: "Socket.io", category: "Real-time" },
  { name: "Electron", category: "Desktop" },
  { name: "React Native", category: "Mobile" },
];

const certifications = [
  {
    name: "AWS Solutions Architect Associate",
    issuer: "Amazon Web Services",
    year: "2023",
    level: "Professional",
  },
  {
    name: "Google Cloud Professional Developer",
    issuer: "Google Cloud",
    year: "2023",
    level: "Professional",
  },
  {
    name: "React Professional Certification",
    issuer: "Meta",
    year: "2022",
    level: "Advanced",
  },
  {
    name: "Node.js Application Developer",
    issuer: "OpenJS Foundation",
    year: "2022",
    level: "Professional",
  },
];

export default function Skills() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [expandedSkill, setExpandedSkill] = useState<string | null>(null);

  const categories = ["All", ...Object.keys(skillsData)];

  const filteredSkillsData = Object.entries(skillsData).reduce(
    (acc, [category, data]) => {
      if (selectedCategory === "All" || selectedCategory === category) {
        const filteredSkills = data.skills.filter(
          (skill) =>
            skill.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            skill.description.toLowerCase().includes(searchTerm.toLowerCase()),
        );
        if (filteredSkills.length > 0) {
          acc[category] = { ...data, skills: filteredSkills };
        }
      }
      return acc;
    },
    {} as typeof skillsData,
  );

  const getSkillLevelColor = (level: number) => {
    if (level >= 90) return "text-green-600 dark:text-green-400";
    if (level >= 80) return "text-blue-600 dark:text-blue-400";
    if (level >= 70) return "text-yellow-600 dark:text-yellow-400";
    return "text-gray-600 dark:text-gray-400";
  };

  const getSkillLevelLabel = (level: number) => {
    if (level >= 90) return "Expert";
    if (level >= 80) return "Advanced";
    if (level >= 70) return "Intermediate";
    return "Beginner";
  };

  return (
    <Layout>
      <div className="min-h-screen bg-background pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Technical Expertise
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-blue-500 mx-auto mb-8 rounded-full"></div>
            <p className="max-w-3xl mx-auto text-xl text-muted-foreground leading-relaxed">
              A comprehensive overview of my technical skills, certifications,
              and professional experience across the full-stack development
              spectrum.
            </p>
          </div>

          {/* Search and Filter Section */}
          <div className="mb-12">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-8">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  placeholder="Search skills, technologies..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 h-12 bg-white dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-700 focus:border-primary"
                />
              </div>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={
                      selectedCategory === category ? "default" : "outline"
                    }
                    onClick={() => setSelectedCategory(category)}
                    className={cn(
                      "transition-all duration-200",
                      selectedCategory === category
                        ? "bg-primary text-primary-foreground shadow-lg"
                        : "hover:bg-secondary",
                    )}
                  >
                    <Filter className="w-4 h-4 mr-2" />
                    {category}
                  </Button>
                ))}
              </div>
            </div>
          </div>

          {/* Skills Categories */}
          <div className="space-y-12">
            {Object.entries(filteredSkillsData).map(
              ([categoryName, categoryData]) => {
                const IconComponent = categoryData.icon;

                return (
                  <div key={categoryName} className="group">
                    <div className="flex items-center mb-8">
                      <div
                        className={cn(
                          "p-3 rounded-xl mr-4",
                          categoryData.bgColor,
                          categoryData.borderColor,
                          "border-2",
                        )}
                      >
                        <IconComponent className="h-6 w-6" />
                      </div>
                      <h2 className="text-3xl font-bold text-foreground">
                        {categoryName}
                      </h2>
                      <div
                        className={cn(
                          "flex-1 h-1 ml-6 rounded-full bg-gradient-to-r",
                          categoryData.color,
                        )}
                      />
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {categoryData.skills.map((skill) => (
                        <Card
                          key={skill.name}
                          className={cn(
                            "group/card cursor-pointer transition-all duration-300",
                            "hover:shadow-xl hover:-translate-y-2",
                            categoryData.bgColor,
                            categoryData.borderColor,
                            "border-2 hover:border-primary/50",
                            expandedSkill === skill.name &&
                              "ring-2 ring-primary shadow-xl",
                          )}
                          onClick={() =>
                            setExpandedSkill(
                              expandedSkill === skill.name ? null : skill.name,
                            )
                          }
                        >
                          <CardContent className="p-6">
                            <div className="flex items-center justify-between mb-4">
                              <h3 className="text-xl font-semibold text-foreground">
                                {skill.name}
                              </h3>
                              <div className="flex items-center gap-2">
                                <Star
                                  className={cn(
                                    "h-4 w-4",
                                    getSkillLevelColor(skill.level),
                                  )}
                                />
                                <span
                                  className={cn(
                                    "text-sm font-medium",
                                    getSkillLevelColor(skill.level),
                                  )}
                                >
                                  {getSkillLevelLabel(skill.level)}
                                </span>
                              </div>
                            </div>

                            <div className="mb-4">
                              <div className="flex justify-between text-sm mb-2">
                                <span className="text-muted-foreground">
                                  Proficiency
                                </span>
                                <span className="font-medium">
                                  {skill.level}%
                                </span>
                              </div>
                              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                                <div
                                  className={cn(
                                    "h-2 rounded-full bg-gradient-to-r transition-all duration-1000",
                                    categoryData.color,
                                  )}
                                  style={{ width: `${skill.level}%` }}
                                />
                              </div>
                            </div>

                            <div className="space-y-2 text-sm">
                              <div className="flex items-center justify-between">
                                <span className="text-muted-foreground">
                                  Experience:
                                </span>
                                <span className="font-medium">
                                  {skill.experience}
                                </span>
                              </div>
                            </div>

                            {expandedSkill === skill.name && (
                              <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700 animate-fade-in">
                                <p className="text-sm text-muted-foreground mb-3">
                                  {skill.description}
                                </p>
                                {skill.certifications.length > 0 && (
                                  <div>
                                    <h4 className="text-sm font-semibold mb-2 flex items-center">
                                      <Award className="h-4 w-4 mr-1" />
                                      Certifications
                                    </h4>
                                    <div className="flex flex-wrap gap-1">
                                      {skill.certifications.map((cert) => (
                                        <Badge
                                          key={cert}
                                          variant="secondary"
                                          className="text-xs"
                                        >
                                          {cert}
                                        </Badge>
                                      ))}
                                    </div>
                                  </div>
                                )}
                              </div>
                            )}
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                );
              },
            )}
          </div>

          {/* Professional Certifications */}
          <div className="mt-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Professional Certifications
              </h2>
              <p className="text-lg text-muted-foreground">
                Industry-recognized certifications and achievements
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {certifications.map((cert) => (
                <Card
                  key={cert.name}
                  className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 border-2"
                >
                  <CardContent className="p-6 text-center">
                    <div className="bg-primary/10 p-3 rounded-full w-fit mx-auto mb-4">
                      <Award className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2 text-sm leading-tight">
                      {cert.name}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-2">
                      {cert.issuer}
                    </p>
                    <div className="flex items-center justify-between text-xs">
                      <Badge variant="outline" className="text-xs">
                        {cert.level}
                      </Badge>
                      <span className="text-muted-foreground">{cert.year}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Additional Skills Cloud */}
          <div className="mt-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Additional Technologies & Methodologies
              </h2>
              <p className="text-lg text-muted-foreground">
                Complementary skills and emerging technologies
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
              {additionalSkills.map((skill, index) => (
                <Badge
                  key={skill.name}
                  variant="outline"
                  className={cn(
                    "px-4 py-2 text-sm font-medium transition-all duration-200",
                    "hover:bg-primary hover:text-primary-foreground hover:scale-105",
                    "border-2 hover:border-primary cursor-default",
                    "bg-white dark:bg-gray-900",
                  )}
                  style={{
                    animationDelay: `${index * 50}ms`,
                  }}
                >
                  <Zap className="w-3 h-3 mr-1" />
                  {skill.name}
                </Badge>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-20 text-center">
            <div className="bg-gradient-to-r from-primary/10 to-blue-500/10 rounded-2xl p-8 border border-primary/20">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Ready to collaborate?
              </h3>
              <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
                Let's discuss how my technical expertise can contribute to your
                next project. I'm always excited to work with new technologies
                and tackle challenging problems.
              </p>
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary to-blue-500 hover:from-primary/90 hover:to-blue-500/90 text-white shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Get In Touch
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
