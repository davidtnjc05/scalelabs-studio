import { ArrowUpRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { services } from "./servicesData";

export function Services() {
  return (
    <section id="systems" className="relative py-24 md:py-28 bg-secondary/40 border-y border-border">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="relative mx-auto max-w-6xl px-4 md:px-6">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full surface px-4 py-1.5 text-xs font-medium shadow-soft mb-6">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-blue" />
            Unsere Leistungen
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight leading-[1.1]">
            Alles aus einer Hand —<br />
            <span className="text-gradient">damit dein Unternehmen wächst.</span>
          </h2>
          <p className="mt-5 text-lg text-muted-foreground max-w-2xl leading-relaxed">
            Von der Webseite über Social Media bis zur lokalen Werbung —
            ich begleite dich persönlich, mit System und ohne Agentur-Sprech.
          </p>
        </div>

        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <Link
                key={s.slug}
                to="/leistungen/$slug"
                params={{ slug: s.slug }}
                className="group relative rounded-2xl surface p-7 lift-on-hover flex flex-col h-full"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="relative h-11 w-11 rounded-xl bg-gradient-to-br from-brand-blue/15 to-brand-soft/40 flex items-center justify-center border border-brand-blue/15">
                    <Icon className="h-5 w-5 text-brand-blue" />
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-[0.18em] text-muted-foreground">{s.tag}</span>
                </div>
                <h3 className="font-display text-xl font-semibold tracking-tight">{s.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                <div className="mt-6 pt-0 flex items-center gap-1.5 text-xs font-medium text-brand-blue opacity-80 group-hover:opacity-100 transition-opacity mt-auto">
                  Mehr erfahren
                  <ArrowUpRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
