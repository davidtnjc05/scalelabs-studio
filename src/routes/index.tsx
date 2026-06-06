import { createFileRoute } from "@tanstack/react-router";
import { LoadingScreen } from "@/components/scalelabs/LoadingScreen";
import { Nav } from "@/components/scalelabs/Nav";
import { Hero } from "@/components/scalelabs/Hero";
import { Services } from "@/components/scalelabs/Services";
import { ViralLab } from "@/components/scalelabs/ViralLab";
import { Results } from "@/components/scalelabs/Results";
import { Process } from "@/components/scalelabs/Process";
import { CTA } from "@/components/scalelabs/CTA";
import { Footer } from "@/components/scalelabs/Footer";
import { CookieConsent } from "@/components/scalelabs/CookieConsent";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ScaleLabs Studio — Moderne Webseiten & Social Media für lokale Unternehmen" },
      { name: "description", content: "ScaleLabs Studio hilft Restaurants, Friseuren, Cafés, Studios und Handwerkern mit modernen Webseiten, Social Media und lokaler Werbung sichtbar zu wachsen." },
      { property: "og:title", content: "ScaleLabs Studio — Moderne Webseiten & Social Media für lokale Unternehmen" },
      { property: "og:description", content: "Webseiten, Social Media, Werbung und Recruiting für lokale Unternehmen — persönlich, modern und mit System." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <LoadingScreen />
      <Nav />
      <main>
        <Hero />
        <Services />
        <ViralLab />
        <Results />
        <Process />
        <CTA />
      </main>
      <Footer />
      <CookieConsent />
    </div>
  );
}
