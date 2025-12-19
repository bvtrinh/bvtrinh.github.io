import { Github, Linkedin, Mail, ArrowUpRight, FileText } from "lucide-react";
import { personalInfo, aboutSections, projects, footer } from "./data/content";

function App() {
  const featuredProject = projects.find((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      {/* Hero */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <img
              src={personalInfo.logoPath}
              alt={`${personalInfo.name} Logo`}
              className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover"
            />
            <h1 className="text-6xl md:text-7xl font-bold text-white bg-clip-text text-transparent">
              {personalInfo.name}
            </h1>
          </div>
          <p className="text-2xl text-zinc-400 mb-8 max-w-2xl">{personalInfo.title}</p>
          <div className="flex gap-3 flex-wrap">
            <a
              href={personalInfo.resumePath}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-white text-black rounded-lg font-medium hover:bg-zinc-200 transition flex items-center gap-2"
            >
              <FileText className="w-4 h-4" />
              View Resume
            </a>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-zinc-900 hover:bg-zinc-800 rounded-lg transition"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-zinc-900 hover:bg-zinc-800 rounded-lg transition"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="p-3 bg-zinc-900 hover:bg-zinc-800 rounded-lg transition"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12">About Me</h2>

          <div className="space-y-8 max-w-4xl">
            {aboutSections.map((section, index) => (
              <div key={index} className={`border-l-4 ${section.borderColor} pl-6`}>
                <h3 className="text-xl font-bold mb-3">{section.title}</h3>
                <p className="text-zinc-400 leading-relaxed">{section.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bento Grid Projects */}
      <section id="work" className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12">Featured Work</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Featured Project - Large */}
            {featuredProject && (
              <div className="md:col-span-2 md:row-span-1 bg-gradient-to-br from-zinc-900 to-zinc-800 rounded-2xl p-8 border border-zinc-800 hover:border-zinc-700 transition group">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{featuredProject.title}</h3>
                    <p className="text-zinc-400">{featuredProject.subtitle}</p>
                  </div>
                  {featuredProject.codeLink && (
                    <a
                      href={featuredProject.codeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-zinc-500 group-hover:text-white transition"
                      aria-label="View code"
                    >
                      <ArrowUpRight className="w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition" />
                    </a>
                  )}
                </div>
                <div className="space-y-4 mb-6">
                  <p className="text-zinc-300">{featuredProject.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {featuredProject.techStack.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-zinc-800 text-zinc-300 text-sm rounded-lg"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Other Projects */}
            {otherProjects.map((project) => (
              <div
                key={project.id}
                className="bg-zinc-900 rounded-2xl p-8 border border-zinc-800 hover:border-zinc-700 transition group"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    {project.subtitle && (
                      <p className="text-zinc-400 text-sm">{project.subtitle}</p>
                    )}
                  </div>
                  {project.codeLink && (
                    <a
                      href={project.codeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-zinc-500 group-hover:text-white transition"
                      aria-label="View code"
                    >
                      <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition" />
                    </a>
                  )}
                </div>
                <p className="text-zinc-300 text-sm mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-zinc-800 text-zinc-400 text-xs rounded-lg"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-zinc-900">
        <div className="max-w-7xl mx-auto text-center text-sm text-zinc-600">
          © {footer.year} {footer.text}
        </div>
      </footer>
    </div>
  );
}

export default App;
