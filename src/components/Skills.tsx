import type { IconType } from "react-icons";
import { SiDjango, SiReact, SiPostgresql, SiGithubactions } from "react-icons/si";
import { FaCode, FaCloud, FaWandMagicSparkles, FaVialCircleCheck } from "react-icons/fa6";
import { skills } from "@/data/resume";
import Reveal from "./Reveal";

const CATEGORY_ICON: Record<string, IconType> = {
  Languages: FaCode,
  Backend: SiDjango,
  "Frontend & Mobile": SiReact,
  "Databases & Caching": SiPostgresql,
  "Cloud Infrastructure": FaCloud,
  DevOps: SiGithubactions,
  "AI Integration": FaWandMagicSparkles,
  Testing: FaVialCircleCheck,
};

export default function Skills() {
  return (
    <section id="skills" className="p-5 sm:p-8 lg:p-16 bg-gradient-to-b from-transparent to-surface/10">
      <div className="max-w-4xl mx-auto">
        <Reveal>
          <h2 className="text-2xl font-semibold">Skills</h2>
          <p className="text-muted mt-2">Technologies and tools I work with, grouped the way my CV groups them.</p>
        </Reveal>

        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {skills.map((group, i) => {
            const Icon = CATEGORY_ICON[group.label] ?? FaCode;
            return (
              <Reveal key={group.label} delay={i * 70}>
                <div className="p-4 rounded-xl bg-surface/50 ring-1 ring-border h-full">
                  <div className="flex items-center gap-2.5 mb-2.5">
                    <Icon className="text-accent text-lg shrink-0" aria-hidden />
                    <span className="font-semibold text-sm">{group.label}</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="text-[0.72rem] font-mono px-2 py-1 rounded-full bg-surface-raised border border-border text-foreground/80"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
