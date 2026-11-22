"use client";

import { useEffect, useState } from "react";

const PHRASES = [
  "Software Engineer & Technical Lead",
  "Python · Django · PostgreSQL · Redis",
  "Next.js · React Native · TypeScript",
  "AWS · GCP · Docker · CI/CD",
  "Leading teams, shipping production systems",
];

export default function TypedPhrases() {
  const [text, setText] = useState(PHRASES[0]);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) {
      // One-time read of a client-only media query on mount, not a reactive sync.
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setShowCursor(false);
      return; // keep the first phrase, static, no blinking caret
    }

    let phraseIndex = 0;
    let charIndex = 0;
    let deleting = false;
    let timeout: ReturnType<typeof setTimeout>;

    function tick() {
      const phrase = PHRASES[phraseIndex];
      if (!deleting) {
        charIndex++;
        setText(phrase.slice(0, charIndex));
        if (charIndex >= phrase.length) {
          deleting = true;
          timeout = setTimeout(tick, 1400); // pause on full phrase
          return;
        }
      } else {
        charIndex--;
        setText(phrase.slice(0, charIndex));
        if (charIndex <= 0) {
          deleting = false;
          phraseIndex = (phraseIndex + 1) % PHRASES.length;
        }
      }
      timeout = setTimeout(tick, deleting ? 35 : 65);
    }

    timeout = setTimeout(tick, 900);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <span className="inline-block px-2 py-1 rounded bg-surface font-mono text-sm min-h-[1.45rem]">
      {text}
      {showCursor && <span className="inline-block w-px h-[1.05rem] ml-1 bg-accent align-middle animate-pulse" />}
    </span>
  );
}
