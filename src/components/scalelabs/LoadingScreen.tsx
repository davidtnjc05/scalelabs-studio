import { useEffect, useState } from "react";

export function LoadingScreen() {
  const [hidden, setHidden] = useState(false);
  const [gone, setGone] = useState(false);

  useEffect(() => {
    // Hide as soon as the page is ready instead of forcing a long delay.
    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    const isMobile =
      typeof window !== "undefined" && window.innerWidth < 768;

    if (reduce) {
      setHidden(true);
      setGone(true);
      return;
    }

    const hideMs = isMobile ? 250 : 600;
    const goneMs = isMobile ? 500 : 950;
    const t1 = setTimeout(() => setHidden(true), hideMs);
    const t2 = setTimeout(() => setGone(true), goneMs);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  if (gone) return null;

  return (
    <div className={`fixed inset-0 z-[100] flex items-center justify-center bg-background transition-opacity duration-500 ${hidden ? "opacity-0 pointer-events-none" : "opacity-100"}`}>
      <div className="absolute inset-0 dot-bg opacity-50 hidden md:block" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,oklch(0.55_0.15_245/0.08),transparent_60%)] hidden md:block" />
      <div className="relative flex flex-col items-center gap-5">
        <div className="relative h-12 w-12">
          <div className="absolute inset-0 rounded-xl bg-gradient-primary opacity-90 shadow-brand" />
          <div className="absolute inset-[3px] rounded-lg bg-background flex items-center justify-center">
            <div className="h-2 w-2 rounded-full bg-gradient-primary" />
          </div>
        </div>
        <div className="font-display text-base font-semibold tracking-tight">
          ScaleLabs <span className="text-brand-blue">Studio</span>
        </div>
        <div className="h-[2px] w-48 overflow-hidden rounded-full bg-secondary">
          <div className="h-full bg-gradient-primary" style={{ animation: "loading-bar 1.2s ease-out forwards" }} />
        </div>
      </div>
    </div>
  );
}
