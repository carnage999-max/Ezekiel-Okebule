import { projects } from "@/data/resume";
import Reveal from "./Reveal";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section id="projects" className="p-5 sm:p-8 lg:p-16">
      <div className="max-w-4xl mx-auto">
        <Reveal>
          <h2 className="text-2xl font-semibold">Projects</h2>
          <p className="text-muted mt-2">Things I&apos;ve built, shipped, and led.</p>
        </Reveal>

        <div className="mt-6 grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <Reveal key={project.id} delay={i * 90} className={project.featured ? "md:col-span-2" : undefined}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
