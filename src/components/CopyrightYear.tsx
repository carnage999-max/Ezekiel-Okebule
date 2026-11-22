"use client";

import { useEffect, useState } from "react";

// A fixed fallback keeps this usable (and correct on first paint) even if JS
// is slow to hydrate; it's then corrected client-side. Isolating this in its
// own client component, deferred to an effect, keeps the rest of the page
// statically prerenderable — Next 16 treats `new Date()` read directly during
// render (server OR client component) as an unstable value and either forces
// the route dynamic or refuses to prerender it; deferring to an effect is
// one of Next's own documented escape hatches for this.
export default function CopyrightYear() {
  const [year, setYear] = useState(2026);
  useEffect(() => {
    // One-time read of a client-only value on mount, not a reactive sync.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setYear(new Date().getFullYear());
  }, []);
  return <>{year}</>;
}
