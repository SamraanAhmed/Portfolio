import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/portfolio/HeroSection";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

const skillCategories = [
  {
    title: "Frontend Development",
    icon: "🎨",
    skills: [
      { name: "React", level: 95 },
      { name: "TypeScript", level: 90 },
      { name: "Next.js", level: 88 },
      { name: "Tailwind CSS", level: 92 },
      { name: "JavaScript", level: 95 },
    ],
  },
  {
    title: "Backend Development",
    icon: "⚙️",
    skills: [
      { name: "Node.js", level: 90 },
      { name: "Express.js", level: 88 },
      { name: "Python", level: 85 },
      { name: "REST APIs", level: 92 },
      { name: "GraphQL", level: 80 },
    ],
  },
  {
    title: "Database & Cloud",
    icon: "☁️",
    skills: [
      { name: "MongoDB", level: 88 },
      { name: "PostgreSQL", level: 85 },
      { name: "AWS", level: 82 },
      { name: "Docker", level: 78 },
      { name: "Redis", level: 75 },
    ],
  },
  {
    title: "Tools & Workflow",
    icon: "🔧",
    skills: [
      { name: "Git", level: 95 },
      { name: "CI/CD", level: 85 },
      { name: "Jest", level: 88 },
      { name: "Webpack", level: 80 },
      { name: "Linux", level: 82 },
    ],
  },
];

const coreSkills = [
  "JavaScript",
  "TypeScript",
  "React",
  "Node.js",
  "Python",
  "MongoDB",
  "PostgreSQL",
  "AWS",
  "Docker",
  "Git",
];

export default function Index() {
  return (
    <Layout>
      <HeroSection />

      {/* About Me Section */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              About Me
            </h2>
            <div className="w-16 h-1 bg-primary mx-auto mb-6"></div>
          </div>

          <div className="text-center space-y-6">
            <p className="text-lg md:text-xl leading-relaxed text-muted-foreground max-w-3xl mx-auto">
              I'm a passionate Full Stack Web Developer with{" "}
              <span className="text-primary font-semibold">5+ years</span> of
              experience building scalable web applications. I specialize in
              modern JavaScript technologies and have a proven track record of
              delivering high-quality solutions.
            </p>

            <div className="pt-4">
              <h3 className="text-lg font-semibold text-foreground mb-4">
                Core Technologies
              </h3>
              <div className="flex flex-wrap justify-center gap-2">
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
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Technical Skills
            </h2>
            <div className="w-16 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              My expertise across the full stack development spectrum
            </p>
          </div>

          <div className="space-y-6">
            {skillCategories.map((category, index) => (
              <Card
                key={index}
                className="group hover:shadow-lg transition-all duration-300 animate-slide-in-left"
                style={{
                  animationDelay: `${index * 200}ms`,
                  animationFillMode: "both",
                }}
              >
                <CardHeader>
                  <CardTitle className="flex items-center space-x-3">
                    <span className="text-2xl">{category.icon}</span>
                    <span>{category.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex}>
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-medium text-foreground">
                            {skill.name}
                          </span>
                          <span className="text-sm text-muted-foreground">
                            {skill.level}%
                          </span>
                        </div>
                        <Progress value={skill.level} className="h-2" />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
