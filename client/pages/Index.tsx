import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/portfolio/HeroSection";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faJs,
  faNodeJs,
  faPython,
  faAws,
  faDocker,
  faGitAlt,
  faLinux,
  faHtml5,
  faCss3Alt,
} from "@fortawesome/free-brands-svg-icons";
import {
  faCode,
  faDatabase,
  faServer,
  faCog,
  faCloud,
  faCodeBranch,
} from "@fortawesome/free-solid-svg-icons";

const skills = [
  { name: "React", icon: faReact, color: "#61DAFB" },
  { name: "TypeScript", icon: faCode, color: "#3178C6" },
  { name: "Next.js", icon: faReact, color: "#000000" },
  { name: "JavaScript", icon: faJs, color: "#F7DF1E" },
  { name: "Node.js", icon: faNodeJs, color: "#339933" },
  { name: "Python", icon: faPython, color: "#3776AB" },
  { name: "Express.js", icon: faServer, color: "#000000" },
  { name: "MongoDB", icon: faDatabase, color: "#47A248" },
  { name: "PostgreSQL", icon: faDatabase, color: "#336791" },
  { name: "AWS", icon: faAws, color: "#FF9900" },
  { name: "Docker", icon: faDocker, color: "#2496ED" },
  { name: "Git", icon: faGitAlt, color: "#F05032" },
  { name: "Tailwind CSS", icon: faCss3Alt, color: "#06B6D4" },
  { name: "GraphQL", icon: faCodeBranch, color: "#E10098" },
  { name: "REST APIs", icon: faCloud, color: "#FF6B6B" },
  { name: "Jest", icon: faCog, color: "#C21325" },
  { name: "Webpack", icon: faCog, color: "#8DD6F9" },
  { name: "Linux", icon: faLinux, color: "#FCC624" },
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

          <div className="relative flex justify-center items-center h-96">
            <div className="relative w-80 h-80 animate-circular-motion">
              {skills.map((skill, index) => {
                const angle = (index * 360) / skills.length;
                return (
                  <Card
                    key={index}
                    className="absolute w-20 h-20 hover:shadow-lg hover:scale-110 transition-all duration-300 cursor-pointer"
                    style={{
                      transform: `rotate(${angle}deg) translateX(140px) rotate(-${angle}deg)`,
                      transformOrigin: "50% 50%",
                    }}
                  >
                    <CardContent className="p-2 text-center h-full flex flex-col justify-center">
                      <div className="text-lg mb-1">
                        <FontAwesomeIcon
                          icon={skill.icon}
                          style={{ color: skill.color }}
                        />
                      </div>
                      <h3 className="font-medium text-xs text-foreground leading-tight">
                        {skill.name}
                      </h3>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
