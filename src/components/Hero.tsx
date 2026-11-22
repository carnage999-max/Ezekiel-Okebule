import { FaGithub, FaLinkedin, FaFileLines } from "react-icons/fa6";
import { profile } from "@/data/resume";
import TypedPhrases from "./TypedPhrases";

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-0 lg:min-h-[55vh] flex items-center p-5 pt-6 sm:p-8 lg:p-16 overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 -left-24 w-[40rem] h-[40rem] bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -right-24 w-[36rem] h-[36rem] bg-sky-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto w-full">
        <div className="rounded-2xl bg-gradient-to-b from-surface/70 to-transparent p-5 sm:p-6 md:p-8 ring-1 ring-border">
          <h1 className="text-[1.65rem] sm:text-4xl lg:text-5xl font-extrabold leading-tight">
            Hi, I&apos;m <span className="text-foreground">{profile.name}</span> 👋
          </h1>

          <p className="mt-3 text-sm sm:text-base text-foreground/80 max-w-2xl">{profile.summary}</p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded bg-surface hover:bg-surface-raised inline-flex items-center gap-2 min-h-[44px] transition-colors"
            >
              <FaGithub /> GitHub
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded bg-surface hover:bg-surface-raised inline-flex items-center gap-2 min-h-[44px] transition-colors"
            >
              <FaLinkedin /> LinkedIn
            </a>
            <a
              href={profile.resumeHref}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded bg-accent text-background font-semibold inline-flex items-center gap-2 min-h-[44px] hover:bg-accent-soft transition-colors"
            >
              <FaFileLines /> View Resume
            </a>
          </div>

          <div className="mt-6 text-sm text-muted">
            <TypedPhrases />
          </div>
        </div>
      </div>
    </section>
  );
}
