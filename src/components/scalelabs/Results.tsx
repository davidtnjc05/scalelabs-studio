import { Heart, Sparkles, Eye, Handshake, Rocket, MessageSquare } from "lucide-react";

const pillars = [
  {
    I: Eye,
    t: "Sichtbar werden",
    d: "Ich sorge dafür, dass Menschen in deiner Region dich überhaupt finden — auf Google, Instagram und über lokale Anzeigen.",
  },
  {
    I: Heart,
    t: "Vertrauen aufbauen",
    d: "Ein moderner Auftritt vermittelt Qualität, bevor das erste Gespräch stattfindet. Genau das schafft Anfragen.",
  },
  {
    I: Handshake,
    t: "Persönlich bleiben",
    d: "Du hast einen festen Ansprechpartner. Keine Hotline, keine Tickets — einfach reden, wenn etwas ansteht.",
  },
  {
    I: Rocket,
    t: "Schnell starten",
    d: "Schlank und direkt umsetzbar gebaut. In wenigen Wochen steht dein neuer Auftritt online.",
  },
  {
    I: Sparkles,
    t: "Individuell statt Baukasten",
    d: "Kein Template, das auch 50 andere haben. Alles eigens für deine Marke und deine Kunden entworfen.",
  },
  {
    I: MessageSquare,
    t: "Ehrlich kommunizieren",
    d: "Du weißt jederzeit, was passiert, warum und was als nächstes kommt. Keine leeren Versprechen.",
  },
];

export function Results() {
  return (
    <section
      id="results"
      className="relative py-24 md:py-28 overflow-hidden"
    >
      {/* Soft background */}
      <div className="absolute inset-0 opacity-60">
        <div className="absolute top-20 -left-20 h-72 w-72 rounded-full bg-brand-soft/40 blur-3xl animate-pulse-soft" />
        <div
          className="absolute bottom-10 right-0 h-72 w-72 rounded-full bg-brand-blue/10 blur-3xl animate-pulse-soft"
          style={{ animationDelay: "1.5s" }}
        />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 md:px-6">
        <div className="max-w-2xl mb-14">
          <div className="inline-flex items-center gap-2 rounded-full surface px-4 py-1.5 text-xs font-medium shadow-soft mb-6">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-blue" />
            Was du bekommst
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight leading-[1.1]">
            Modernes Design.{" "}
            <span className="text-gradient">Klare Kommunikation.</span>
            <br />
            Persönliche Betreuung.
          </h2>
          <p className="mt-5 text-lg text-muted-foreground max-w-2xl leading-relaxed">
            Sechs Prinzipien, die jedes Projekt prägen — ruhig, persönlich und auf das Wesentliche reduziert.
          </p>
        </div>

        {/* Timeline — asymmetric alternating layout */}
        <div className="relative">
          {/* Vertical line (desktop only) */}
          <div
            aria-hidden
            className="absolute left-1/2 -translate-x-px top-2 bottom-2 w-px bg-gradient-to-b from-transparent via-border to-transparent hidden md:block"
          />

          <div className="space-y-12 md:space-y-20">
            {pillars.map((p, i) => {
              const left = i % 2 === 0;
              return (
                <div
                  key={p.t}
                  className="grid md:grid-cols-2 gap-6 md:gap-12 items-center group"
                  style={{ animationDelay: `${i * 70}ms` }}
                >
                  {/* Content cell */}
                  <div
                    className={`relative ${
                      left ? "md:order-1 md:text-right md:pr-10" : "md:order-2 md:text-left md:pl-10"
                    }`}
                  >
                    <div
                      className={`inline-flex items-center gap-3 ${
                        left ? "md:flex-row-reverse" : ""
                      }`}
                    >
                      <span className="font-mono text-[11px] text-muted-foreground">
                        0{i + 1}
                      </span>
                      <span className="h-px w-8 bg-border" />
                    </div>
                    <h3 className="mt-3 font-display text-2xl md:text-3xl font-semibold tracking-tight">
                      {p.t}
                    </h3>
                    <p className="mt-3 text-[15px] text-muted-foreground leading-relaxed max-w-md md:inline-block">
                      {p.d}
                    </p>
                  </div>

                  {/* Icon node cell */}
                  <div
                    className={`relative ${
                      left ? "md:order-2 md:pl-10" : "md:order-1 md:pr-10 md:flex md:justify-end"
                    }`}
                  >
                    <div className="relative inline-flex">
                      {/* node dot on the line */}
                      <span
                        aria-hidden
                        className={`hidden md:block absolute top-1/2 -translate-y-1/2 h-2 w-2 rounded-full bg-brand-blue ring-4 ring-background ${
                          left ? "-left-[42px]" : "-right-[42px]"
                        }`}
                      />
                      <div className="relative h-16 w-16 md:h-20 md:w-20 rounded-2xl bg-gradient-to-br from-brand-blue/10 to-brand-soft/30 border border-brand-blue/15 backdrop-blur flex items-center justify-center shadow-soft group-hover:scale-[1.04] group-hover:shadow-soft-lg transition-all duration-300">
                        <p.I className="h-6 w-6 md:h-7 md:w-7 text-brand-blue" />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
