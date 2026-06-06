import { Scissors, UtensilsCrossed, Dumbbell, Smartphone, Globe, MapPin, type LucideIcon } from "lucide-react";

export type ShowcaseItem = {
  slug: string;
  Icon: LucideIcon;
  branch: string;
  name: string;
  city: string;
  accent: string;
  accentBorder: string;
  tags: string[];
  extra: { icon: LucideIcon; label: string };
  summary: string;
  challenge: string;
  goals: string[];
  process: { title: string; text: string }[];
  delivered: string[];
  outcome: string;
};

export const showcases: ShowcaseItem[] = [
  {
    slug: "fitness-coaching",
    Icon: Dumbbell,
    branch: "Fitness Coaching",
    name: "1:1 Personal Coaching",
    city: "Lokal vor Ort",
    accent: "from-slate-100 to-blue-100",
    accentBorder: "border-blue-200",
    tags: ["Moderne Webseite", "Mobil optimiert"],
    extra: { icon: Smartphone, label: "Mobil optimiert" },
    summary:
      "Moderne Webseite für einen Personal Coach — klar strukturiert, mobil optimiert und auf das Wesentliche reduziert.",
    challenge:
      "Der bisherige Auftritt wirkte veraltet und vermittelte nicht die Qualität des persönlichen Coachings.",
    goals: [
      "Professioneller, vertrauenswürdiger Webauftritt",
      "Klare Kommunikation des Coaching-Angebots",
      "Sauberes Erlebnis auf allen Geräten",
    ],
    process: [
      { title: "Beratungsgespräch", text: "Gemeinsam Zielgruppe, Tonalität und Angebot geschärft." },
      { title: "Konzept & Design", text: "Ruhiges, modernes Webdesign mit Fokus auf Inhalt und Klarheit." },
      { title: "Umsetzung", text: "Webseite umgesetzt, mobil optimiert und sauber ausgeliefert." },
    ],
    delivered: ["Neue Webseite", "Mobiloptimierung", "Klare Inhaltsstruktur", "Technische Grundlagen"],
    outcome:
      "Ein moderner, glaubwürdiger Webauftritt — die Seite vermittelt heute klar, was den Coach besonders macht.",
  },
  {
    slug: "barbershop-geretsried",
    Icon: Scissors,
    branch: "Barbershop",
    name: "Barbershop Geretsried",
    city: "Geretsried",
    accent: "from-zinc-100 to-stone-100",
    accentBorder: "border-stone-200",
    tags: ["Moderne Webseite", "Lokale Sichtbarkeit"],
    extra: { icon: MapPin, label: "Lokal verankert" },
    summary:
      "Moderne, lokal verankerte Webseite für einen Barbershop — klar, hochwertig und mobil optimiert.",
    challenge:
      "Der Shop hatte bisher keinen professionellen Webauftritt, der zur Qualität der Arbeit passt.",
    goals: [
      "Professioneller, lokal verankerter Auftritt",
      "Klare Darstellung von Leistungen und Stil",
      "Sauberes Erlebnis auf dem Smartphone",
    ],
    process: [
      { title: "Beratung & Konzept", text: "Branding, Tonalität und Inhalte gemeinsam definiert." },
      { title: "Design & Umsetzung", text: "Moderne Webseite mit Fokus auf Klarheit und Atmosphäre umgesetzt." },
      { title: "Übergabe", text: "Saubere Auslieferung und Einweisung in die Inhalte." },
    ],
    delivered: ["Webseite mit modernem Design", "Mobiloptimierung", "Lokale SEO-Grundlagen", "Klare Inhaltsstruktur"],
    outcome:
      "Der Barbershop hat heute einen Auftritt, der zur Qualität der Arbeit passt — modern, lokal und hochwertig.",
  },
  {
    slug: "soprano",
    Icon: UtensilsCrossed,
    branch: "Restaurant",
    name: "Soprano",
    city: "Italienisches Restaurant",
    accent: "from-amber-100 to-orange-100",
    accentBorder: "border-amber-200",
    tags: ["Moderne Webseite", "Lokale Sichtbarkeit"],
    extra: { icon: Globe, label: "Moderne Webseite" },
    summary:
      "Neue Webseite für ein italienisches Restaurant — hochwertig, atmosphärisch und mobil optimiert.",
    challenge:
      "Das Restaurant hatte keinen digitalen Auftritt, der die Qualität der Küche widerspiegelt.",
    goals: [
      "Hochwertiger, authentisch italienischer Webauftritt",
      "Klare Darstellung von Atmosphäre und Angebot",
      "Stärkere lokale Sichtbarkeit",
    ],
    process: [
      { title: "Beratung & Markenbild", text: "Stil, Tonalität und Inhalte gemeinsam ausgearbeitet." },
      { title: "Design", text: "Ruhiges, modernes Webdesign mit Fokus auf Atmosphäre und Speisekarte." },
      { title: "Umsetzung", text: "Saubere Umsetzung — modern, schnell und mobil optimiert." },
    ],
    delivered: ["Neue Webseite", "Mobiloptimierung", "Lokale SEO-Grundlagen", "Klare Inhaltsstruktur"],
    outcome:
      "Soprano hat heute einen Webauftritt, der zur Küche passt — hochwertig, modern und lokal sichtbar.",
  },
];

export function getShowcase(slug: string) {
  return showcases.find((s) => s.slug === slug);
}