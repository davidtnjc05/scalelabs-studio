import { CheckCircle2, Handshake, Clock, ShieldCheck } from "lucide-react";
import logo from "@/assets/scalelabs-logo.png";

const values = [
  { icon: Handshake, title: "Persönlich", desc: "Fester Ansprechpartner statt Hotline." },
  { icon: ShieldCheck, title: "Verlässlich", desc: "Faire Verträge, klare Leistungen." },
  { icon: Clock, title: "Schnell", desc: "Webseite startklar in 14 Tagen." },
  { icon: CheckCircle2, title: "Fokussiert", desc: "Moderne Lösungen für lokale Betriebe." },
];

export function About() {
  return (
    <section id="about" className="relative py-28 bg-secondary/40 border-y border-border">
      <div className="relative mx-auto max-w-7xl px-4 md:px-6 grid lg:grid-cols-2 gap-16 items-center">
        <div className="relative h-[460px]">
          <div className="absolute inset-0 rounded-3xl surface overflow-hidden shadow-soft-lg">
            <div className="absolute inset-0 bg-gradient-to-br from-brand-soft/30 via-white to-brand-blue/10" />
            <div className="absolute inset-0 dot-bg opacity-50" />

            <div className="absolute top-8 left-8 surface rounded-xl px-4 py-3 shadow-soft animate-float">
              <div className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground">Branchen</div>
              <div className="font-display text-sm font-bold mt-0.5">Gastro · Beauty · Handwerk</div>
            </div>
            <div className="absolute top-32 right-10 surface rounded-xl px-4 py-3 shadow-soft animate-float-slow">
              <div className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground">Fokus</div>
              <div className="font-display text-sm font-bold mt-0.5">Lokale Unternehmen</div>
            </div>
            <div className="absolute bottom-28 left-10 surface rounded-xl px-4 py-3 shadow-soft animate-float" style={{ animationDelay: "0.8s" }}>
              <div className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground">Region</div>
              <div className="font-display text-sm font-bold mt-0.5">Bad Tölz · Wolfratshausen</div>
            </div>
            <div className="absolute bottom-8 right-12 surface rounded-xl px-4 py-3 shadow-soft animate-float-slow" style={{ animationDelay: "0.4s" }}>
              <div className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground">Stil</div>
              <div className="font-display text-sm font-bold mt-0.5">Modern · Persönlich</div>
            </div>

            <div className="absolute inset-0 flex items-center justify-center">
              <img
                src={logo}
                alt="ScaleLabs Studio Logo"
                width={220}
                height={220}
                loading="lazy"
                className="h-44 w-44 object-contain drop-shadow-xl"
              />
            </div>
          </div>
        </div>

        <div className="space-y-7">
          <div className="inline-flex items-center gap-2 rounded-full surface px-4 py-1.5 text-xs font-medium shadow-soft">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-blue" />
            Über ScaleLabs Studio
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight">
            Die moderne Marketing­abteilung für{" "}
            <span className="text-gradient">lokale Unternehmen.</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Wir verbinden moderne Webseiten, Social Media und lokale Werbung
            zu einem klaren System — damit du dich um dein Geschäft kümmern
            kannst und nicht um Marketing.
          </p>

          <div className="grid grid-cols-2 gap-4 pt-2">
            {values.map((v) => (
              <div key={v.title} className="rounded-xl surface p-4">
                <v.icon className="h-5 w-5 text-brand-blue" />
                <div className="mt-3 font-display text-base font-semibold">{v.title}</div>
                <div className="text-sm text-muted-foreground mt-1">{v.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
