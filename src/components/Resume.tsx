import { FaAward } from "react-icons/fa6";
import { profile, education } from "@/data/resume";
import Reveal from "./Reveal";
import ExperienceTimeline from "./ExperienceTimeline";

export default function Resume() {
  return (
    <section id="resume" className="p-5 sm:p-8 lg:p-16">
      <div className="max-w-4xl mx-auto">
        <Reveal>
          <div className="mb-6">
            <h2 className="text-2xl font-semibold">Resume</h2>
            <p className="text-muted mt-2">{profile.tagline} — leading teams and architecting systems end to end.</p>
          </div>
        </Reveal>

        <Reveal>
          <div className="grid lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-3">Summary</h3>
              <div className="p-4 rounded-xl bg-surface/50 ring-1 ring-border">
                <h4 className="font-semibold">{profile.name}</h4>
                <p className="text-sm text-foreground/80 italic">{profile.summary}</p>
                <ul className="mt-3 text-sm text-muted space-y-1">
                  <li>{profile.location}</li>
                  <li>
                    <a href={`tel:${profile.phone}`} className="text-foreground/90">
                      {profile.phoneDisplay}
                    </a>
                  </li>
                  <li>
                    <a href={`mailto:${profile.email}`} className="text-foreground/90">
                      {profile.email}
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">Education</h3>
              <div className="p-4 rounded-xl bg-surface/50 ring-1 ring-border">
                <h4 className="font-semibold">{education.degree}</h4>
                <div className="text-sm text-muted font-mono">{education.dates}</div>
                <div className="text-sm text-foreground/80 mt-1">CGPA: {education.grade}</div>
                <p className="mt-2 text-sm text-foreground/80 italic">
                  {education.school}, {education.location}
                </p>
                <p className="mt-2 text-sm text-foreground/80">
                  <strong>Final Year Project:</strong> {education.project}
                </p>
                <p className="mt-2 flex items-start gap-1.5">
                  <FaAward className="text-amber-400 mt-0.5 shrink-0" />
                  <strong className="text-sm text-amber-300">{education.honor}</strong>
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal className="mt-10">
          <ExperienceTimeline />
        </Reveal>
      </div>
    </section>
  );
}
