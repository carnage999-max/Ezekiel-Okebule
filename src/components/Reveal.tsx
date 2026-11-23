"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

/**
 * Minimal scroll-reveal: fades + lifts a block in once it crosses the
 * viewport. Replaces the AOS library (one <IntersectionObserver>, no
 * dependency, no CDN).
 *
 * Correctness note: this defaults to VISIBLE. That default is what gets
 * server-rendered, and it's what stays true forever if JS never runs or
 * errors before this mounts — so "no JS" always means "fully visible page",
 * never a silently blank one. Only once we're certain the effect is live do
 * we hide an element (if it's below the fold) to animate it in on scroll.
 * `prefers-reduced-motion` is handled globally in globals.css by zeroing
 * transition durations, so this component doesn't need its own branch.
 */
export default function Reveal({
  children,
  delay = 0,
  className = "",
  as: Tag = "div",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "section" | "li" | "article";
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const alreadyInView = el.getBoundingClientRect().top < window.innerHeight * 0.92;
    if (alreadyInView) return; // nothing to animate; leave it visible

    setVisible(false); // now that JS + the observer are confirmed live, hide-to-reveal
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag
      ref={ref as never}
      className={`transition-all duration-700 ease-out will-change-transform ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      } ${className}`}
      style={{ transitionDelay: visible ? `${delay}ms` : "0ms" }}
    >
      {children}
    </Tag>
  );
}
