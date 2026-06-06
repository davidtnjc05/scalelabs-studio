import { Link } from "@tanstack/react-router";
import { showcases } from "./showcaseData";

export function ViralLab() {
  return (
    <section id="cases" className="relative py-24 md:py-28">
      <div className="relative mx-auto max-w-6xl px-4 md:px-6">
        <div className="max-w-2xl mb-14">
          <div className="inline-flex items-center gap-2 rounded-full surface px-4 py-1.5 text-xs font-medium shadow-soft mb-6">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-blue" />
            Showcase
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight leading-[1.1]">
            Moderner Auftritt für{" "}
            <span className="text-gradient">lokale Unternehmen.</span>
          </h2>
          <p className="mt-5 text-lg text-muted-foreground max-w-2xl leading-relaxed">
            Eine kleine Auswahl an Projekten — ruhig, hochwertig und auf
            das Wesentliche reduziert.
          </p>
        </div>

        {/* Cards — quieter, more whitespace, smaller badges */}
        <div className="grid md:grid-cols-3 gap-6">
          {showcases.map((c) => (
            <Link
              key={c.slug}
              to="/showcase/$slug"
              params={{ slug: c.slug }}
              className="group flex flex-col h-full"
            >
              {/* Visual — compact, quieter */}
              <div className="relative aspect-[16/10] rounded-xl overflow-hidden border border-border bg-secondary/30 transition-all duration-300 group-hover:border-brand-blue/30 group-hover:shadow-soft">
                <div className={`absolute inset-0 bg-gradient-to-br ${c.accent} opacity-70`} />
                <div className="absolute inset-0 dot-bg opacity-30" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />

                {/* Centered icon mark */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="h-11 w-11 rounded-lg bg-background/70 backdrop-blur border border-border/60 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                    <c.Icon className="h-4 w-4 text-brand-blue" />
                  </div>
                </div>

                {/* Branch label */}
                <div className="absolute top-2.5 left-3 text-[10px] font-mono uppercase tracking-[0.16em] text-foreground/60">
                  {c.branch}
                </div>
              </div>

              {/* Meta */}
              <div className="mt-5">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="font-display text-[17px] font-semibold tracking-tight">
                    {c.name}
                  </h3>
                  <span className="text-[11px] text-muted-foreground">{c.city}</span>
                </div>
                <p className="mt-2 text-[13.5px] text-muted-foreground leading-relaxed line-clamp-2">
                  {c.summary}
                </p>
                <div className="mt-4 flex items-center justify-between">
                  <div className="flex flex-wrap gap-x-3 gap-y-1">
                    {c.tags.slice(0, 2).map((t) => (
                      <span
                        key={t}
                        className="text-[11px] text-muted-foreground/90"
                      >
                        · {t}
                      </span>
                    ))}
                  </div>
                  <span className="text-[12px] font-medium text-brand-blue opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all">
                    Ansehen →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
