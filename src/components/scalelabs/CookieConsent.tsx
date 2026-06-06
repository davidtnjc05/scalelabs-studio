import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";

const KEY = "cookie-consent-v1";

export function CookieConsent() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => {
      if (!localStorage.getItem(KEY)) setShow(true);
    }, 600);
    return () => clearTimeout(t);
  }, []);

  const decide = (value: "accepted" | "declined") => {
    localStorage.setItem(KEY, value);
    setShow(false);
  };

  if (!show) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Cookie-Hinweis"
      className="fixed inset-x-3 bottom-3 z-[90] md:inset-x-auto md:right-6 md:bottom-6 md:max-w-md animate-fade-up"
    >
      <div className="glass-strong rounded-2xl p-5 shadow-soft-lg">
        <div className="font-display text-base font-semibold">Wir nutzen Cookies</div>
        <p className="mt-1.5 text-sm text-muted-foreground">
          Wir verwenden technisch notwendige Cookies und optionale Analyse-Cookies, um diese
          Webseite zu verbessern. Mehr dazu in der{" "}
          <Link to="/datenschutz" className="underline hover:text-foreground">Datenschutzerklärung</Link>.
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          <button
            onClick={() => decide("accepted")}
            className="inline-flex items-center justify-center rounded-lg bg-gradient-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-brand hover:-translate-y-px transition-all"
          >
            Alle akzeptieren
          </button>
          <button
            onClick={() => decide("declined")}
            className="inline-flex items-center justify-center rounded-lg surface px-4 py-2 text-sm font-medium hover:border-brand-blue/40 transition-all"
          >
            Nur notwendige
          </button>
        </div>
      </div>
    </div>
  );
}
