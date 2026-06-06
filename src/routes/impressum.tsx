import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/impressum")({
  head: () => ({
    meta: [
      { title: "Impressum — ScaleLabs Studio" },
      { name: "description", content: "Impressum und Anbieterkennzeichnung von ScaleLabs Studio nach § 5 TMG." },
    ],
  }),
  component: ImpressumPage,
});

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="rounded-2xl surface p-6 md:p-8">
      <h2 className="text-foreground text-lg md:text-xl font-semibold mb-3">{title}</h2>
      <div className="text-sm md:text-[15px] leading-relaxed text-muted-foreground space-y-3">{children}</div>
    </section>
  );
}

function ImpressumPage() {
  return (
    <main className="min-h-screen bg-background pt-32 pb-24">
      <div className="mx-auto max-w-3xl px-4 md:px-6">
        <Link to="/" className="text-sm text-muted-foreground hover:text-foreground">← Zurück zur Startseite</Link>
        <div className="mt-6 mb-10">
          <div className="text-xs font-medium uppercase tracking-[0.18em] text-brand-blue mb-3">Rechtliches</div>
          <h1 className="font-display text-4xl md:text-5xl font-bold tracking-tight">Impressum</h1>
          <p className="mt-3 text-muted-foreground">Angaben gemäß § 5 TMG sowie § 18 Abs. 2 MStV.</p>
        </div>

        <div className="space-y-5">
          <Section title="Anbieter">
            <p>
              ScaleLabs Studio<br />
              Inhaber: David Tunjic<br />
              Landkreis Bad Tölz-Wolfratshausen<br />
              Deutschland
            </p>
            <p className="text-xs">
              Die ladungsfähige Anschrift wird auf Anfrage per E-Mail mitgeteilt.
            </p>
          </Section>

          <Section title="Kontakt">
            <p>
              E-Mail: <a href="mailto:david.tunjic@scalelabsstudio.com" className="text-brand-blue hover:underline">david.tunjic@scalelabsstudio.com</a>
            </p>
          </Section>

          <Section title="Umsatzsteuer">
            <p>
              Gemäß § 19 UStG (Kleinunternehmerregelung) wird keine Umsatzsteuer
              berechnet und ausgewiesen.
            </p>
          </Section>

          <Section title="Redaktionell verantwortlich">
            <p>David Tunjic (Anschrift wie oben)</p>
          </Section>

          <Section title="EU-Streitschlichtung">
            <p>
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung
              (OS) bereit:{" "}
              <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer" className="text-brand-blue hover:underline">
                https://ec.europa.eu/consumers/odr
              </a>
              . Unsere E-Mail-Adresse finden Sie oben.
            </p>
            <p>
              Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor
              einer Verbraucherschlichtungsstelle teilzunehmen.
            </p>
          </Section>

          <Section title="Haftung für Inhalte">
            <p>
              Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf
              diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10
              TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte
              oder gespeicherte fremde Informationen zu überwachen.
            </p>
            <p>
              Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen
              nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche
              Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten
              Rechtsverletzung möglich.
            </p>
          </Section>

          <Section title="Haftung für Links">
            <p>
              Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte
              wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte
              auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist
              stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
            </p>
          </Section>

          <Section title="Urheberrecht">
            <p>
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen
              Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung,
              Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen
              des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen
              Autors bzw. Erstellers.
            </p>
          </Section>
        </div>
      </div>
    </main>
  );
}
