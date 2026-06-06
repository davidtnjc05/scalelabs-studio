import { ArrowRight, MapPin, CheckCircle2, Globe, Sparkles } from "lucide-react";

const trustItems = [
  "Persönliche Betreuung",
  "Mobil optimiert",
  "Lokaler Fokus",
  "Schnelle Umsetzung",
];

const industries = [
  "Restaurants", "Friseure", "Cafés", "Tattoo-Studios", "Kosmetikstudios",
  "Fitness-Coaching", "Bauunternehmen", "Autohäuser", "Handwerker", "Barbershops",
];

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-20">
      <div className="absolute inset-0 dot-bg opacity-40 hidden md:block" />
      <div className="absolute inset-x-0 top-0 h-[700px] bg-[radial-gradient(ellipse_at_50%_0%,oklch(0.55_0.15_245/0.10),transparent_60%)]" />
      <div className="absolute -left-32 top-40 h-[420px] w-[420px] rounded-full bg-brand-soft/30 blur-[120px] hidden md:block" />
      <div className="absolute -right-20 top-20 h-[420px] w-[420px] rounded-full bg-brand-blue/10 blur-[120px] hidden md:block" />

      <div className="relative mx-auto max-w-7xl px-4 md:px-6 grid lg:grid-cols-12 gap-12 items-center">
        {/* LEFT */}
        <div className="lg:col-span-7 space-y-7 animate-fade-up">
          <div className="inline-flex items-center gap-2 rounded-full surface px-4 py-1.5 text-xs font-medium shadow-soft">
            <span className="flex h-2 w-2">
              <span className="absolute h-2 w-2 rounded-full bg-brand-blue/40 animate-ping" />
              <span className="relative h-2 w-2 rounded-full bg-brand-blue" />
            </span>
            <span className="text-muted-foreground">Neue Projekte · 2026</span>
          </div>

          <h1 className="font-display font-bold text-4xl md:text-6xl lg:text-7xl tracking-tight leading-[1.05]">
            Mehr Kunden für{" "}
            <span className="text-gradient">lokale Unternehmen.</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
            Moderne Webseiten, Social Media und ein Auftritt, der wirklich
            überzeugt — ich begleite dich persönlich von der Planung bis zur
            Umsetzung.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-1">
            <a
              href="#cta"
              className="group relative inline-flex items-center gap-2 rounded-xl bg-gradient-primary px-7 py-4 text-base font-semibold text-primary-foreground shadow-brand ring-1 ring-white/20 hover:shadow-soft-lg hover:-translate-y-0.5 transition-all"
            >
              <span className="absolute inset-0 rounded-xl bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="relative">Kostenlose Beratung</span>
              <ArrowRight className="relative h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Trust tags — premium, soft, floating */}
          <div className="flex flex-wrap items-center gap-x-5 gap-y-3 pt-8 max-w-2xl">
            {trustItems.map((label) => (
              <div
                key={label}
                className="inline-flex items-center gap-2 text-[12px] sm:text-[13px] text-muted-foreground/90"
              >
                <span className="h-1 w-1 rounded-full bg-brand-blue/70" />
                <span className="font-medium tracking-tight">{label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT: realistic workspace mockup */}
        <div className="lg:col-span-5 relative h-[560px] hidden lg:block">
          {/* Soft surface "desk" */}
          <div className="absolute inset-x-0 bottom-0 h-[340px] rounded-[40px] bg-gradient-to-br from-secondary/70 via-background to-secondary/40 border border-border/60 backdrop-blur-xl" />
          <div className="absolute inset-x-8 bottom-4 h-6 bg-gradient-to-b from-black/[0.04] to-transparent blur-xl" />

          {/* Laptop */}
          <div className="absolute left-2 top-10 w-[440px] animate-fade-up">
            {/* Screen */}
            <div className="rounded-t-2xl bg-[#0f1115] p-2.5 shadow-soft-lg ring-1 ring-black/20">
              <div className="rounded-lg overflow-hidden bg-background border border-white/5">
                <div className="flex items-center gap-1.5 px-3 py-2 border-b border-border bg-secondary/60">
                  <span className="h-2 w-2 rounded-full bg-red-400/60" />
                  <span className="h-2 w-2 rounded-full bg-yellow-400/60" />
                  <span className="h-2 w-2 rounded-full bg-green-400/60" />
                  <div className="ml-3 flex items-center gap-1.5 rounded-md bg-background px-2 py-0.5 text-[10px] text-muted-foreground border border-border">
                    <Globe className="h-3 w-3" />
                    scalelabsstudio.com
                  </div>
                </div>
                <div className="relative h-[230px] bg-gradient-to-br from-background via-background to-secondary/60">
                  <div className="absolute inset-0 dot-bg opacity-25" />
                  <div className="absolute -left-10 -top-10 h-40 w-40 rounded-full bg-brand-blue/15 blur-3xl" />
                  <div className="absolute -right-8 bottom-0 h-32 w-32 rounded-full bg-brand-soft/30 blur-3xl" />
                  <div className="relative p-5">
                    <div className="flex items-center gap-1.5 text-[9px] font-mono uppercase tracking-[0.2em] text-muted-foreground">
                      <span className="h-1 w-1 rounded-full bg-brand-blue" />
                      ScaleLabs Studio
                    </div>
                    <div className="mt-2 font-display text-[20px] font-bold leading-[1.1] tracking-tight text-foreground">
                      Mehr Kunden für
                      <br />
                      <span className="text-gradient">lokale Unternehmen.</span>
                    </div>
                    <div className="mt-3 flex gap-2">
                      <span className="rounded-md bg-gradient-primary text-primary-foreground px-2.5 py-1 text-[10px] font-medium shadow-brand">
                        Kostenlose Beratung
                      </span>
                      <span className="rounded-md border border-border bg-background/60 px-2.5 py-1 text-[10px] font-medium text-muted-foreground">
                        Leistungen
                      </span>
                    </div>
                    <div className="mt-4 grid grid-cols-3 gap-1.5">
                      {[0, 1, 2].map((i) => (
                        <div
                          key={i}
                          className="rounded-md border border-border/60 bg-background/70 backdrop-blur-sm p-1.5"
                        >
                          <div className="h-1 w-6 rounded-full bg-brand-blue/60" />
                          <div className="mt-1 h-1 w-10 rounded-full bg-muted-foreground/30" />
                          <div className="mt-0.5 h-1 w-8 rounded-full bg-muted-foreground/20" />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Laptop base */}
            <div className="h-2.5 mx-[-12px] rounded-b-[14px] bg-gradient-to-b from-[#1a1d23] to-[#2a2d34] shadow-soft" />
            <div className="mx-auto h-1 w-24 rounded-b-md bg-[#0f1115]/70" />
          </div>

          {/* Phone */}
          <div
            className="absolute right-2 bottom-6 w-[150px] animate-float"
            style={{ animationDelay: "0.4s" }}
          >
            <div className="rounded-[28px] bg-[#0f1115] p-1.5 shadow-soft-lg ring-1 ring-black/20">
              <div className="rounded-[22px] overflow-hidden bg-background border border-white/5 relative aspect-[9/19]">
                <div className="absolute top-1.5 left-1/2 -translate-x-1/2 h-3 w-14 rounded-full bg-[#0f1115] z-10" />
                <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/60" />
                <div className="absolute -right-6 top-6 h-24 w-24 rounded-full bg-brand-blue/15 blur-2xl" />
                <div className="relative p-2.5 pt-6">
                  <div className="text-[7px] font-mono uppercase tracking-[0.15em] text-muted-foreground">
                    ScaleLabs
                  </div>
                  <div className="mt-0.5 font-display text-[11px] font-bold leading-tight tracking-tight">
                    Mehr Kunden.
                  </div>
                  <div className="mt-2 space-y-1">
                    {[1, 2].map((i) => (
                      <div
                        key={i}
                        className="rounded-md border border-border/60 bg-background/70 p-1.5"
                      >
                        <div className="h-1 w-5 rounded-full bg-brand-blue/60" />
                        <div className="mt-1 h-1 w-8 rounded-full bg-muted-foreground/25" />
                      </div>
                    ))}
                  </div>
                  <div className="mt-2 rounded-md bg-gradient-primary text-primary-foreground py-1 text-center text-[8px] font-medium shadow-brand">
                    Beratung
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Floating info tags — premium, glass */}
          <div className="absolute left-0 top-2 inline-flex items-center gap-2 rounded-full bg-background/70 backdrop-blur-md border border-border/60 px-3 py-1.5 text-[11px] font-medium shadow-soft animate-float">
            <Sparkles className="h-3 w-3 text-brand-blue" />
            Persönlich begleitet
          </div>
          <div
            className="absolute right-4 top-32 inline-flex items-center gap-2 rounded-full bg-background/70 backdrop-blur-md border border-border/60 px-3 py-1.5 text-[11px] font-medium shadow-soft animate-float-slow"
            style={{ animationDelay: "0.8s" }}
          >
            <CheckCircle2 className="h-3 w-3 text-emerald-500" />
            Mobil optimiert
          </div>
          <div
            className="absolute left-6 bottom-2 inline-flex items-center gap-2 rounded-full bg-background/70 backdrop-blur-md border border-border/60 px-3 py-1.5 text-[11px] font-medium shadow-soft animate-float"
            style={{ animationDelay: "0.3s" }}
          >
            <MapPin className="h-3 w-3 text-brand-blue" />
            Lokal verankert
          </div>
        </div>
      </div>

      {/* Industry marquee */}
      <div className="relative mt-24 border-y border-border py-6 overflow-hidden bg-secondary/30">
        <div className="text-center text-[11px] font-medium uppercase tracking-[0.3em] text-muted-foreground mb-4">
          Branchen, mit denen ich arbeite
        </div>
        <div className="marquee-track flex w-max whitespace-nowrap will-change-transform">
          {Array.from({ length: 2 }).map((_, dup) => (
            <div key={dup} className="flex shrink-0 items-center" aria-hidden={dup === 1}>
              {industries.map((label, i) => (
                <div
                  key={`${dup}-${i}`}
                  className="flex items-center text-sm font-medium text-muted-foreground px-8"
                >
                  <span className="h-1 w-1 rounded-full bg-brand-blue/70 mr-3" />
                  {label}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
