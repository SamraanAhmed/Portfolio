import { Layout } from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
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
  faVuejs,
  faAngular,
} from "@fortawesome/free-brands-svg-icons";
import {
  faCode,
  faDatabase,
  faServer,
  faCog,
  faCloud,
  faCodeBranch,
  faLaptopCode,
  faNetworkWired,
  faShield,
  faCube,
} from "@fortawesome/free-solid-svg-icons";

const skills = [
  { name: "React", icon: faReact, color: "#61DAFB" },
  { name: "TypeScript", icon: faCode, color: "#3178C6" },
  { name: "JavaScript", icon: faJs, color: "#F7DF1E" },
  // { name: "Next.js", icon: faReact, color: "#000000" },
  // { name: "Vue.js", icon: faVuejs, color: "#4FC08D" },
  // { name: "Angular", icon: faAngular, color: "#DD0031" },
  // { name: "Node.js", icon: faNodeJs, color: "#339933" },
  { name: "Python", icon: faPython, color: "#3776AB" },
  // { name: "Express.js", icon: faServer, color: "#000000" },
  // { name: "PostgreSQL", icon: faDatabase, color: "#336791" },
  // { name: "MongoDB", icon: faDatabase, color: "#47A248" },
  // { name: "Redis", icon: faCube, color: "#DC382D" },
  // { name: "GraphQL", icon: faCodeBranch, color: "#E10098" },
  { name: "REST APIs", icon: faNetworkWired, color: "#FF6B6B" },
  // { name: "AWS", icon: faAws, color: "#FF9900" },
  // { name: "Docker", icon: faDocker, color: "#2496ED" },
  { name: "Git", icon: faGitAlt, color: "#F05032" },
  // { name: "Linux", icon: faLinux, color: "#FCC624" },
  { name: "HTML5", icon: faHtml5, color: "#E34F26" },
  { name: "CSS3", icon: faCss3Alt, color: "#1572B6" },
  { name: "Tailwind CSS", icon: faCss3Alt, color: "#06B6D4" },
  // { name: "Jest", icon: faCog, color: "#C21325" },
  // { name: "Webpack", icon: faCog, color: "#8DD6F9" },
  // { name: "Kubernetes", icon: faCloud, color: "#326CE5" },
];

export default function Skills() {
  return (
    <Layout>
      <div className="min-h-screen bg-background pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Technical Skills
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-blue-500 mx-auto mb-8 rounded-full"></div>
            <p className="max-w-3xl mx-auto text-xl text-muted-foreground leading-relaxed">
              Technologies and tools I work with to build modern, scalable
              applications
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
            {skills.map((skill) => (
              <Card
                key={skill.name}
                className="group hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer bg-white dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-700 hover:border-primary/50"
              >
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4 transition-transform duration-300 group-hover:scale-110">
                    <FontAwesomeIcon
                      icon={skill.icon}
                      style={{ color: skill.color }}
                    />
                  </div>
                  <h3 className="font-semibold text-foreground text-sm leading-tight">
                    {skill.name}
                  </h3>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="mt-20 text-center">
            <div className="bg-gradient-to-r from-primary/10 to-blue-500/10 rounded-2xl p-8 border border-primary/20">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Ready to collaborate?
              </h3>
              <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
                Let's discuss how these technologies can bring your project to
                life. I'm always excited to work with new tools and tackle
                challenging problems.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
