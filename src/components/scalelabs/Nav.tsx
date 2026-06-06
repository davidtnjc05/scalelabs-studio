import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Moon, Sun } from "lucide-react";

const links = [
  { label: "Leistungen", href: "#systems" },
  { label: "Showcase", href: "#cases" },
  { label: "Warum wir", href: "#results" },
  { label: "Vorgehen", href: "#process" },
];

function useDarkMode() {
  const [dark, setDark] = useState(false);
  useEffect(() => {
    const saved = localStorage.getItem("theme");
    const isDark =
      saved === "dark" ||
      (saved === null &&
        typeof window !== "undefined" &&
        window.matchMedia?.("(prefers-color-scheme: dark)").matches);
    document.documentElement.classList.toggle("dark", isDark);
    setDark(isDark);
  }, []);
  const toggle = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };
  return { dark, toggle };
}

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { dark, toggle } = useDarkMode();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled ? "py-3" : "py-5"}`}>
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className={`grid grid-cols-[1fr_auto_1fr] items-center rounded-2xl px-4 py-3 transition-all duration-500 ${scrolled ? "glass-strong shadow-soft" : ""}`}>
          <Link to="/" hash="top" className="flex items-center gap-2.5 group justify-self-start" aria-label="Zur Startseite">
            <div className="relative h-8 w-8">
              <div className="absolute inset-0 rounded-lg bg-gradient-primary shadow-brand" />
              <div className="absolute inset-[3px] rounded-md bg-background flex items-center justify-center">
                <div className="h-2 w-2 rounded-full bg-gradient-primary" />
              </div>
            </div>
            <span className="font-display font-bold text-lg tracking-tight">
              Scale<span className="text-brand-blue">Labs</span>
              <span className="text-muted-foreground font-normal text-sm ml-1">Studio</span>
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-8 justify-self-center">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors relative group">
                {l.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-brand-blue group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2 justify-self-end">
            <button
              onClick={toggle}
              aria-label={dark ? "Hellen Modus aktivieren" : "Dunklen Modus aktivieren"}
              className="h-9 w-9 rounded-lg surface flex items-center justify-center hover:border-brand-blue/40 transition-all"
            >
              {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>
            <a href="#cta" className="hidden sm:inline-flex items-center gap-2 rounded-lg bg-gradient-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-brand hover:shadow-soft-lg hover:-translate-y-px transition-all">
              Beratung anfragen
            </a>
            <button onClick={() => setOpen(!open)} className="md:hidden h-9 w-9 rounded-lg surface flex items-center justify-center" aria-label="Menü">
              <div className="flex flex-col gap-1">
                <span className={`h-px w-4 bg-foreground transition-transform ${open ? "translate-y-[3px] rotate-45" : ""}`} />
                <span className={`h-px w-4 bg-foreground transition-transform ${open ? "-translate-y-[3px] -rotate-45" : ""}`} />
              </div>
            </button>
          </div>
        </div>
        {open && (
          <div className="md:hidden mt-2 glass-strong rounded-2xl p-4 flex flex-col gap-3 shadow-soft animate-fade-up">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-sm text-muted-foreground hover:text-foreground py-1">{l.label}</a>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}
