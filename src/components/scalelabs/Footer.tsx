import { Instagram, Linkedin, Mail, MapPin } from "lucide-react";
import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="relative border-t border-border py-16 bg-secondary/40">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="grid md:grid-cols-12 gap-12">
          <div className="md:col-span-5 space-y-5">
            <div className="flex items-center gap-2.5">
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
            </div>
            <p className="text-sm text-muted-foreground max-w-sm">
              Die moderne Marketing-Agentur für lokale Unternehmen — Webseiten,
              Social Media, Werbung und Recruiting aus einer Hand.
            </p>
            <div className="space-y-1.5 text-sm">
              <a href="mailto:david.tunjic@scalelabsstudio.com" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
                <Mail className="h-4 w-4 text-brand-blue" />
                david.tunjic@scalelabsstudio.com
              </a>
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="h-4 w-4 text-brand-blue" />
                Landkreis Bad Tölz-Wolfratshausen & Umgebung
              </div>
            </div>
          </div>

          <div className="md:col-span-3">
            <div className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground mb-4">Navigation</div>
            <ul className="space-y-2.5">
              {[
                ["Leistungen", "#systems"],
                ["Showcase", "#cases"],
                ["Warum wir", "#results"],
                ["Vorgehen", "#process"],
                ["Über uns", "#about"],
              ].map(([l, h]) => (
                <li key={h}><a href={h} className="text-sm hover:text-foreground text-muted-foreground transition-colors">{l}</a></li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <div className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground mb-4">Folge uns</div>
            <div className="flex gap-3">
              {[Instagram, Linkedin].map((I, i) => (
                <a key={i} href="#" className="h-10 w-10 rounded-lg surface flex items-center justify-center hover:border-brand-blue/40 hover:text-brand-blue transition-all">
                  <I className="h-4 w-4" />
                </a>
              ))}
            </div>
            <div className="mt-6 rounded-xl surface p-4">
              <div className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Verfügbarkeit</div>
              <div className="mt-1.5 flex items-center gap-2 text-sm">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                Wir nehmen aktuell Neukunden auf
              </div>
            </div>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-xs text-muted-foreground">© 2026 ScaleLabs Studio · Alle Rechte vorbehalten</div>
          <div className="text-xs text-muted-foreground flex items-center gap-4">
            <Link to="/datenschutz" className="hover:text-foreground transition-colors">Datenschutz</Link>
            <Link to="/agb" className="hover:text-foreground transition-colors">AGB</Link>
            <Link to="/impressum" className="hover:text-foreground transition-colors">Impressum</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
