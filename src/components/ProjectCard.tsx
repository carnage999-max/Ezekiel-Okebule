import { FaGlobe, FaAppStoreIos, FaGooglePlay, FaGithub, FaCircle, FaDownload } from "react-icons/fa6";
import type { Project } from "@/data/resume";

const LINK_ICON = {
  web: FaGlobe,
  "app-store": FaAppStoreIos,
  "play-store": FaGooglePlay,
  github: FaGithub,
};

const LINK_STYLE: Record<Project["links"][number]["kind"], string> = {
  web: "bg-sky-950/60 text-sky-300 border-sky-800/60",
  "app-store": "bg-indigo-950/60 text-indigo-300 border-indigo-800/60",
  "play-store": "bg-emerald-950/60 text-emerald-300 border-emerald-800/60",
  github: "bg-surface-raised text-foreground/80 border-border",
};

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article
      className={`group p-5 rounded-xl bg-surface/50 ring-1 transition-all duration-200 hover:-translate-y-1 ${
        project.featured ? "md:col-span-2 ring-accent/35 hover:shadow-[0_0_20px_rgba(16,185,129,0.15)]" : "ring-border"
      }`}
    >
      <div className="flex items-start justify-between gap-4 flex-wrap">
        <div>
          <div className="flex items-center gap-2 flex-wrap">
            <h3 className="font-semibold text-lg">{project.name}</h3>
            {project.live && (
              <span className="inline-flex items-center gap-1.5 text-[0.65rem] font-semibold px-2.5 py-1 rounded-full bg-emerald-950 text-emerald-300 border border-emerald-800">
                <FaCircle className="text-[5px] animate-pulse" /> Live
              </span>
            )}
            {project.metric && (
              <span className="inline-flex items-center gap-1.5 text-[0.65rem] font-semibold px-2.5 py-1 rounded-full bg-surface-raised text-foreground/70 border border-border">
                <FaDownload className="text-[9px]" /> {project.metric}
              </span>
            )}
          </div>
          {project.role && <div className="text-xs text-muted mt-1">{project.role}</div>}
          {project.links.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-2">
              {project.links.map((link) => {
                const Icon = LINK_ICON[link.kind];
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full border transition-opacity hover:opacity-80 ${LINK_STYLE[link.kind]}`}
                  >
                    <Icon className="text-[10px]" /> {link.label}
                  </a>
                );
              })}
            </div>
          )}
        </div>
      </div>

      <p className="text-sm text-muted mt-2">
        <strong className="text-foreground/80">Technologies:</strong> {project.tech.join(", ")}
      </p>
      <p className="mt-3 text-sm text-foreground/85 leading-relaxed">{project.description}</p>
    </article>
  );
}
