import { Code2, Lightbulb, Rocket, Users } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Full-Stack Development",
    description:
      "Building web applications with React, FastAPI, Flask, and PostgreSQL.",
  },
  {
    icon: Rocket,
    title: "AI & Document Search",
    description:
      "Applying RAG, hybrid search, reranking, OCR, and multimodal AI to document intelligence.",
  },
  {
    icon: Users,
    title: "Problem Solving",
    description:
      "Combining technical and analytical skills to solve practical problems.",
  },
  {
    icon: Lightbulb,
    title: "Communication",
    description:
      "Bringing clear, ethical communication and a willingness to learn.",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                About Me
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
              Computer Science student,
              <span className="font-serif italic font-normal text-white">
                {" "}
                focused on building useful software.
              </span>
            </h2>

            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
              <p>
                I'm pursuing a Master of Technology in Computer Science at
                Dayananda Sagar University (CGPA: 8.93), after completing my
                Bachelor of Engineering in Computer Science at Global Academy
                of Technology (CGPA: 8.16).
              </p>
              <p>
                During my software development internship at Scontinent
                Technologies, I built a FastAPI and PostgreSQL REST API and a
                Flask/React application for analyzing GitHub data.
              </p>
              <p>
                My current interests include full-stack development, generative
                AI, and building practical tools for searching and understanding
                complex documents.
              </p>
            </div>

            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
              <p className="text-lg font-medium italic text-foreground">
                "I’m looking for an entry-level role where I can apply my
                technical and analytical skills, learn from a strong team, and
                contribute to useful software."
              </p>
            </div>
          </div>

          {/* Right Column - Hilights */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="glass p-6 rounded-2xl animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div id="education" className="mt-20">
          <h3 className="text-2xl font-semibold mb-6 text-secondary-foreground">
            Education
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <article className="glass rounded-2xl p-6">
              <p className="text-sm text-primary font-medium">
                2025 — 2027 · Bengaluru
              </p>
              <h4 className="text-lg font-semibold mt-2">
                Master of Technology in Computer Science
              </h4>
              <p className="text-muted-foreground">
                Dayananda Sagar University
              </p>
              <p className="text-sm text-muted-foreground mt-2">CGPA: 8.93</p>
            </article>
            <article className="glass rounded-2xl p-6">
              <p className="text-sm text-primary font-medium">
                2021 — 2025 · Bengaluru
              </p>
              <h4 className="text-lg font-semibold mt-2">
                Bachelor of Engineering in Computer Science
              </h4>
              <p className="text-muted-foreground">
                Global Academy of Technology
              </p>
              <p className="text-sm text-muted-foreground mt-2">CGPA: 8.16</p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};
