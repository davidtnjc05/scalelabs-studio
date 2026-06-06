import { Globe, Share2, Users, Sparkles, MapPin, Megaphone, type LucideIcon } from "lucide-react";

export type ServiceItem = {
  slug: string;
  icon: LucideIcon;
  title: string;
  desc: string;
  tag: string;
  intro: string;
  highlights: string[];
  highlight?: string;
  process: { title: string; text: string }[];
  faq?: { q: string; a: string }[];
};

export const services: ServiceItem[] = [
  {
    slug: "webseiten",
    icon: Globe,
    title: "Moderne Webseiten",
    desc: "Professionelle, schnelle Webseiten, die echte Anfragen, Reservierungen und Termine bringen — mobil optimiert und Google-ready.",
    tag: "01 / Web",
    intro:
      "Eine moderne Webseite ist heute die Visitenkarte deines Unternehmens. Ich baue schlanke, schnelle Seiten, die deine Besucher in Kunden verwandeln — ohne Baukasten-Optik und ohne aufgeblähten Schnickschnack.",
    highlight: "Startklar in 14 Tagen",
    highlights: [
      "Individuelles Design, das zu deiner Marke passt",
      "Mobil optimiert für Smartphone & Tablet",
      "Google-ready (SEO-Grundlagen inklusive)",
      "Schnelle Ladezeiten & sauberer Code",
    ],
    process: [
      { title: "Beratung", text: "Wir analysieren dein Geschäft und definieren das Ziel der Webseite." },
      { title: "Design & Umsetzung", text: "Wir gestalten und bauen die Seite individuell für dich." },
      { title: "Go-Live & Pflege", text: "Wir veröffentlichen, schulen dich kurz ein und sind weiter ansprechbar." },
    ],
  },
  {
    slug: "social-media",
    icon: Share2,
    title: "Social Media Betreuung",
    desc: "Ich übernehme Instagram, TikTok und moderne Social-Media-Plattformen für dein Unternehmen — Content, Posting und Community-Management aus einer Hand.",
    tag: "02 / Social",
    intro:
      "Ich kümmere mich um deine Social-Media-Präsenz, damit du dich um dein Geschäft kümmern kannst. Konsistent, modern und auf deine Branche zugeschnitten — von Instagram über TikTok bis zu weiteren modernen Plattformen.",
    highlights: [
      "Content-Konzept passend zu deiner Marke",
      "Regelmäßiges Posting & Stories",
      "Community-Management & Reaktionen",
      "Monatliche Auswertung",
    ],
    process: [
      { title: "Strategie", text: "Wir definieren Ziele, Tonalität und Themen." },
      { title: "Content-Produktion", text: "Wir erstellen Beiträge, Reels und Stories." },
      { title: "Betreuung", text: "Wir posten, betreuen und werten regelmäßig aus." },
    ],
  },
  {
    slug: "lokale-werbung",
    icon: Megaphone,
    title: "Lokale Werbung",
    desc: "Meta, Google und TikTok Ads, die gezielt Menschen in deiner Stadt erreichen — mehr Kunden, kalkulierbares Budget.",
    tag: "03 / Ads",
    intro:
      "Wir schalten Werbeanzeigen, die wirklich Anfragen bringen — gezielt für deine Region und mit klarem Budget-Rahmen.",
    highlights: [
      "Zielgruppen-Targeting auf deine Region",
      "Klares Budget — keine versteckten Kosten",
      "Anzeigen für Meta, Google & TikTok",
      "Laufende Optimierung der Kampagnen",
    ],
    process: [
      { title: "Setup", text: "Wir richten Konten ein und definieren Zielgruppe & Budget." },
      { title: "Kampagne", text: "Wir erstellen Anzeigen und starten die Kampagne." },
      { title: "Optimierung", text: "Wir werten Ergebnisse aus und passen laufend an." },
    ],
  },
  {
    slug: "recruiting",
    icon: Users,
    title: "Mitarbeiter-Recruiting",
    desc: "Recruiting-Funnels, die qualifizierte Bewerber bringen — für Handwerk, Gastronomie, Beauty und Dienstleister.",
    tag: "04 / Recruiting",
    intro:
      "Fachkräftemangel ist real. Wir bauen Recruiting-Funnels, die gezielt Bewerber aus deiner Region anziehen — auch ohne klassische Stellenanzeige.",
    highlights: [
      "Bewerber aus deiner Region",
      "Einfacher Bewerbungs-Funnel (kein Lebenslauf nötig)",
      "Werbeanzeigen auf TikTok, Instagram & Meta",
      "Vorqualifizierung der Bewerber",
    ],
    process: [
      { title: "Stelle definieren", text: "Wir besprechen die Position und das ideale Bewerberprofil." },
      { title: "Funnel & Anzeigen", text: "Wir bauen den Bewerber-Funnel und schalten Anzeigen." },
      { title: "Bewerber übergeben", text: "Du erhältst vorqualifizierte Bewerber zur Auswahl." },
    ],
  },
  {
    slug: "branding",
    icon: Sparkles,
    title: "Branding & Identität",
    desc: "Logo, Farben und visuelle Identität, mit denen dein Unternehmen modern, professionell und unverwechselbar wirkt.",
    tag: "05 / Brand",
    intro:
      "Eine starke Marke schafft Vertrauen. Wir entwickeln dein visuelles Auftreten — vom Logo über Farben bis zur kompletten Bildsprache.",
    highlights: [
      "Logo-Design & Varianten",
      "Farbpalette & Typografie",
      "Visitenkarten & Druck-Vorlagen",
      "Anwendung auf Web & Social Media",
    ],
    process: [
      { title: "Workshop", text: "Wir lernen dein Unternehmen und deine Werte kennen." },
      { title: "Konzept & Entwürfe", text: "Wir entwickeln das visuelle Konzept." },
      { title: "Übergabe", text: "Du erhältst alle Dateien & ein Marken-Handbuch." },
    ],
  },
  {
    slug: "google-praesenz",
    icon: MapPin,
    title: "Google Präsenz",
    desc: "Google Business Profil, lokale SEO und Bewertungs­management — damit Kunden dich finden und vertrauen.",
    tag: "06 / Local SEO",
    intro:
      "Wenn jemand „Friseur in deiner Stadt“ googelt, solltest du oben stehen. Wir sorgen dafür — mit einem optimierten Google-Profil und lokalen SEO-Grundlagen.",
    highlights: [
      "Google Business Profil einrichten & optimieren",
      "Lokale Keywords & SEO-Grundlagen",
      "Bewertungs­management",
      "Branchenbuch-Einträge",
    ],
    process: [
      { title: "Analyse", text: "Wir prüfen deine aktuelle Sichtbarkeit." },
      { title: "Optimierung", text: "Wir richten alles ein und optimieren bestehende Einträge." },
      { title: "Betreuung", text: "Wir betreuen Bewertungen und Updates laufend." },
    ],
  },
];

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}
