import { profile, stats, researchInterests } from "@/data/resume";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" className="p-5 sm:p-8 lg:p-16">
      <Reveal>
        <div className="max-w-4xl mx-auto grid lg:grid-cols-3 gap-8 items-start">
          <div className="lg:col-span-1">
            <h2 className="text-2xl font-semibold">About</h2>
            <p className="mt-3 text-foreground/80 text-sm leading-relaxed">{profile.summary}</p>

            <div className="mt-6 space-y-2 text-sm text-muted">
              <div>
                <strong className="text-foreground/80">Email:</strong>{" "}
                <a href={`mailto:${profile.email}`} className="text-foreground/90 hover:text-accent">
                  {profile.email}
                </a>
              </div>
              <div>
                <strong className="text-foreground/80">Phone:</strong>{" "}
                <a href={`tel:${profile.phone}`} className="text-foreground/90">
                  {profile.phoneDisplay}
                </a>
              </div>
              <div>
                <strong className="text-foreground/80">Location:</strong> {profile.location}
              </div>
              <div>
                <strong className="text-foreground/80">Availability:</strong> Remote / Hybrid / On-site
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="grid grid-cols-3 gap-3">
              {stats.map((s) => (
                <div key={s.label} className="p-3 rounded-xl bg-surface/40 ring-1 ring-border text-center">
                  <div className="text-2xl font-bold text-accent">{s.value}</div>
                  <div className="text-xs text-muted mt-1">{s.label}</div>
                </div>
              ))}
            </div>

            <div className="mt-5">
              <div className="text-xs font-mono uppercase tracking-wider text-subtle mb-2">
                Research interests
              </div>
              <div className="flex flex-wrap gap-1.5">
                {researchInterests.map((item) => (
                  <span
                    key={item}
                    className="text-[0.72rem] font-mono px-2 py-1 rounded-full bg-surface-raised border border-border text-foreground/75"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
