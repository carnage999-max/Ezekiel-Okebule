"use client";

import { useState } from "react";
import { experience } from "@/data/resume";
import Reveal from "./Reveal";

export default function ExperienceTimeline() {
  // Default to the most recent role — the one a visitor should see first
  // without having to interact with anything.
  const defaultIndex = experience.length - 1;
  const [active, setActive] = useState(defaultIndex);
  const current = experience[active];

  return (
    <div>
      <div className="flex items-baseline justify-between gap-4 flex-wrap mb-2">
        <h3 className="text-lg font-semibold">Experience</h3>
        <span className="text-[0.68rem] sm:text-xs font-mono text-subtle">
          tap or hover a point for detail
        </span>
      </div>

      {/* Rail */}
      <div
        className="flex overflow-x-auto overflow-y-hidden pb-2 -mx-1 px-1 [scrollbar-width:thin]"
        role="group"
        aria-label="Career timeline, earliest to most recent"
      >
        {experience.map((job, i) => {
          const isActive = i === active;
          return (
            <Reveal key={job.id} delay={i * 110} className="flex-1 min-w-[9.5rem]">
              <button
                type="button"
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                onClick={() => setActive(i)}
                aria-pressed={isActive}
                className="relative w-full pt-6 pb-1 px-2 text-center cursor-pointer group focus:outline-none"
              >
                {/* rail line */}
                <span
                  aria-hidden
                  className={`absolute top-[0.56rem] h-px bg-border ${
                    i === 0 ? "left-1/2 right-0" : i === experience.length - 1 ? "left-0 right-1/2" : "left-0 right-0"
                  }`}
                />
                {/* dot */}
                <span
                  aria-hidden
                  className={`absolute top-[0.19rem] left-1/2 -ml-[0.44rem] h-[0.88rem] w-[0.88rem] rounded-full border-2 transition-all duration-300 ${
                    isActive
                      ? "border-accent bg-accent-dim scale-125"
                      : job.current
                        ? "border-accent/70 bg-accent-dim/70"
                        : "border-border-hover bg-background group-hover:border-accent-soft group-hover:bg-accent-dim"
                  }`}
                />
                <span
                  className={`block text-[0.8rem] font-semibold leading-snug transition-colors ${
                    isActive ? "text-foreground" : "text-foreground/80"
                  }`}
                >
                  {job.role}
                </span>
                <span className="block text-[0.72rem] text-muted mt-0.5">{job.company}</span>
                <span className="block text-[0.66rem] font-mono text-subtle mt-0.5">{job.dateShort}</span>
              </button>
            </Reveal>
          );
        })}
      </div>

      {/* Detail panel */}
      <div className="mt-5 rounded-xl border border-border bg-surface p-5 transition-colors duration-300">
        <h4 className="font-semibold">
          {current.role} <span className="text-muted font-normal">— {current.company}</span>
        </h4>
        <div className="text-sm text-muted font-mono mt-0.5">
          {current.dateFull} · {current.place}
        </div>
        <ul className="mt-3 text-sm text-foreground/85 list-disc list-inside space-y-1.5">
          {current.bullets.map((b, i) => (
            <li key={i}>{b}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
