import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/portfolio/HeroSection";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

const skills = [
  { name: "React", icon: "⚛️" },
  { name: "TypeScript", icon: "🔷" },
  { name: "Next.js", icon: "▲" },
  { name: "JavaScript", icon: "🟨" },
  { name: "Node.js", icon: "🟢" },
  { name: "Python", icon: "🐍" },
  { name: "Express.js", icon: "🚂" },
  { name: "MongoDB", icon: "🍃" },
  { name: "PostgreSQL", icon: "🐘" },
  { name: "AWS", icon: "☁️" },
  { name: "Docker", icon: "🐳" },
  { name: "Git", icon: "📦" },
  { name: "Tailwind CSS", icon: "🎨" },
  { name: "GraphQL", icon: "📊" },
  { name: "REST APIs", icon: "🔌" },
  { name: "Jest", icon: "🧪" },
  { name: "Webpack", icon: "📦" },
  { name: "Linux", icon: "🐧" },
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
        <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Technical Skills
            </h2>
            <div className="w-16 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Technologies I work with
            </p>
          </div>

          <div className="relative">
            <div className="flex animate-scroll-left">
              {/* First set of skills */}
              {skills.map((skill, index) => (
                <Card
                  key={`first-${index}`}
                  className="flex-shrink-0 w-32 mx-2 hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer"
                >
                  <CardContent className="p-4 text-center">
                    <div className="text-3xl mb-2">{skill.icon}</div>
                    <h3 className="font-medium text-xs text-foreground">
                      {skill.name}
                    </h3>
                  </CardContent>
                </Card>
              ))}
              {/* Duplicate set for seamless loop */}
              {skills.map((skill, index) => (
                <Card
                  key={`second-${index}`}
                  className="flex-shrink-0 w-32 mx-2 hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer"
                >
                  <CardContent className="p-4 text-center">
                    <div className="text-3xl mb-2">{skill.icon}</div>
                    <h3 className="font-medium text-xs text-foreground">
                      {skill.name}
                    </h3>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
