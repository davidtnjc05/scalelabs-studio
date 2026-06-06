import { MessageSquare, Wrench, Rocket } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    n: "01",
    title: "Beratung",
    desc: "Wir lernen dein Unternehmen kennen — Ziele, Zielgruppe, Budget. Klar, ehrlich und ohne Buzzwords.",
    points: ["Kostenfreies Erstgespräch", "Bedarfsanalyse", "Klare Empfehlung"],
  },
  {
    icon: Wrench,
    n: "02",
    title: "Aufbau",
    desc: "Wir bauen deinen modernen Auftritt: Webseite, Social Media, Werbeanzeigen und Google-Präsenz — sauber und Hand in Hand.",
    points: ["Webseite & Branding", "Content & Social Setup", "Werbe-Konten startklar"],
  },
  {
    icon: Rocket,
    n: "03",
    title: "Wachstum",
    desc: "Wir betreuen, optimieren und berichten monatlich — du siehst genau, was funktioniert und woher die neuen Kunden kommen.",
    points: ["Laufende Betreuung", "Monatliches Reporting", "Persönlicher Ansprechpartner"],
  },
];

export function Process() {
  return (
    <section id="process" className="relative py-24 md:py-28">
      <div className="relative mx-auto max-w-6xl px-4 md:px-6">
        <div className="max-w-2xl mb-14">
          <div className="inline-flex items-center gap-2 rounded-full surface px-4 py-1.5 text-xs font-medium shadow-soft mb-6">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-blue" />
            So arbeiten wir
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight leading-[1.1]">
            Unser Vorgehen — <span className="text-gradient">in drei klaren Schritten.</span>
          </h2>
          <p className="mt-5 text-lg text-muted-foreground max-w-2xl leading-relaxed">
            Persönlich, transparent und auf dein Unternehmen zugeschnitten.
          </p>
        </div>

        <div className="relative">
          <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-px bg-gradient-to-r from-transparent via-brand-blue/40 to-transparent" />

          <div className="grid md:grid-cols-3 gap-6">
            {steps.map((s) => (
              <div key={s.n} className="relative rounded-2xl surface p-7 flex flex-col">
                <div className="flex justify-center">
                  <div className="relative h-20 w-20 rounded-2xl bg-gradient-to-br from-brand-blue/10 to-brand-soft/30 border border-brand-blue/15 flex items-center justify-center shadow-soft">
                    <s.icon className="h-7 w-7 text-brand-blue" />
                    <div className="absolute -top-2 -right-2 font-mono text-[10px] surface px-2 py-1 rounded-md tracking-wider shadow-soft">{s.n}</div>
                  </div>
                </div>
                <div className="mt-6 text-center">
                  <h3 className="font-display text-xl font-semibold tracking-tight">{s.title}</h3>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>
                <ul className="mt-6 space-y-2">
                  {s.points.map((p) => (
                    <li key={p} className="flex items-center gap-2 text-sm text-foreground/80 rounded-lg border border-border bg-background/60 px-3 py-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-brand-blue" /> {p}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
