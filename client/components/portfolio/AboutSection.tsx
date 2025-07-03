import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Globe, Server, Database } from "lucide-react";

const highlights = [
  {
    icon: Code,
    title: "Frontend Development",
    description: "React, TypeScript, Next.js",
  },
  {
    icon: Server,
    title: "Backend Development",
    description: "Node.js, Express, Python",
  },
  {
    icon: Database,
    title: "Database & DevOps",
    description: "MongoDB, PostgreSQL, AWS",
  },
  {
    icon: Globe,
    title: "Full Stack Solutions",
    description: "End-to-end development",
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

export function AboutSection() {
  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            About Me
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Bio */}
          <div className="space-y-6">
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="text-xl leading-relaxed">
                I'm a passionate Full Stack Web Developer with{" "}
                <span className="text-primary font-semibold">5+ years</span> of
                experience building scalable web applications. I specialize in
                modern JavaScript technologies and have a proven track record of
                delivering high-quality solutions for both startups and
                enterprise clients.
              </p>
              <p className="text-lg leading-relaxed">
                My expertise spans the entire web development stack, from
                crafting intuitive user interfaces with React and TypeScript to
                building robust backend systems with Node.js and cloud
                infrastructure. I'm particularly passionate about performance
                optimization, clean code architecture, and creating seamless
                user experiences.
              </p>
              <p className="text-lg leading-relaxed">
                When I'm not coding, you'll find me contributing to open-source
                projects, writing technical articles, or exploring the latest
                developments in web technologies. I believe in continuous
                learning and staying at the forefront of industry trends.
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
    </section>
  );
}
