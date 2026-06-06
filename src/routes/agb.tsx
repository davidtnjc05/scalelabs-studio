import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/agb")({
  head: () => ({
    meta: [
      { title: "AGB — ScaleLabs Studio" },
      { name: "description", content: "Allgemeine Geschäftsbedingungen von ScaleLabs Studio für Webdesign-, Social-Media- und Marketing-Leistungen." },
    ],
  }),
  component: AGBPage,
});

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="rounded-2xl surface p-6 md:p-8">
      <h2 className="text-foreground text-lg md:text-xl font-semibold mb-3">{title}</h2>
      <div className="text-sm md:text-[15px] leading-relaxed text-muted-foreground space-y-3">{children}</div>
    </section>
  );
}

function AGBPage() {
  return (
    <main className="min-h-screen bg-background pt-32 pb-24">
      <div className="mx-auto max-w-3xl px-4 md:px-6">
        <Link to="/" className="text-sm text-muted-foreground hover:text-foreground">← Zurück zur Startseite</Link>
        <div className="mt-6 mb-10">
          <div className="text-xs font-medium uppercase tracking-[0.18em] text-brand-blue mb-3">Rechtliches</div>
          <h1 className="font-display text-4xl md:text-5xl font-bold tracking-tight">Allgemeine Geschäftsbedingungen</h1>
          <p className="mt-3 text-muted-foreground">
            Diese AGB regeln die Geschäftsbeziehung zwischen ScaleLabs Studio
            (David Tunjic) und seinen Auftraggebern.
          </p>
        </div>

        <div className="space-y-5">
          <Section title="§ 1 Geltungsbereich">
            <p>
              (1) Diese Allgemeinen Geschäftsbedingungen (nachfolgend „AGB")
              gelten für sämtliche Verträge zwischen ScaleLabs Studio, Inhaber
              David Tunjic (nachfolgend „Agentur"), und dem Auftraggeber über
              Leistungen in den Bereichen Webdesign, Webentwicklung, Social
              Media, Online-Marketing, Content-Erstellung sowie Recruiting.
            </p>
            <p>
              (2) Abweichende oder entgegenstehende Bedingungen des Auftraggebers
              werden nur dann Vertragsbestandteil, wenn die Agentur diesen
              ausdrücklich schriftlich zustimmt.
            </p>
            <p>
              (3) Die Leistungen richten sich ausschließlich an Unternehmer im
              Sinne des § 14 BGB.
            </p>
          </Section>

          <Section title="§ 2 Vertragsschluss">
            <p>
              (1) Angebote der Agentur sind freibleibend. Ein Vertrag kommt durch
              die schriftliche oder textliche (z. B. per E-Mail) Annahme eines
              Angebots durch den Auftraggeber zustande.
            </p>
            <p>
              (2) Mündliche Nebenabreden bestehen nicht. Ergänzungen oder
              Änderungen bedürfen der Textform.
            </p>
          </Section>

          <Section title="§ 3 Leistungsumfang">
            <p>
              (1) Art und Umfang der Leistungen ergeben sich aus dem
              individuellen Angebot bzw. der Auftragsbestätigung.
            </p>
            <p>
              (2) Die Agentur ist berechtigt, zur Vertragserfüllung
              Subunternehmer einzusetzen.
            </p>
            <p>
              (3) Konzeptionelle und gestalterische Leistungen sind
              Dienstleistungen, kein Werkerfolg, sofern nicht ausdrücklich anders
              vereinbart.
            </p>
          </Section>

          <Section title="§ 4 Mitwirkungspflichten des Auftraggebers">
            <p>
              (1) Der Auftraggeber stellt sämtliche zur Leistungserbringung
              erforderlichen Informationen, Texte, Bilder, Logos und Zugangsdaten
              rechtzeitig und in geeigneter Form bereit.
            </p>
            <p>
              (2) Der Auftraggeber versichert, dass die bereitgestellten Inhalte
              frei von Rechten Dritter sind und nicht gegen geltendes Recht
              verstoßen. Er stellt die Agentur insoweit von Ansprüchen Dritter
              frei.
            </p>
            <p>
              (3) Verzögerungen, die auf einer Verletzung von Mitwirkungspflichten
              beruhen, gehen nicht zu Lasten der Agentur.
            </p>
          </Section>

          <Section title="§ 5 Termine & Fristen">
            <p>
              Termine und Fristen sind nur dann verbindlich, wenn sie
              ausdrücklich als verbindlich vereinbart wurden. Höhere Gewalt sowie
              Umstände, die die Agentur nicht zu vertreten hat, verlängern
              Fristen angemessen.
            </p>
          </Section>

          <Section title="§ 6 Vergütung & Zahlungsbedingungen">
            <p>
              (1) Die Vergütung richtet sich nach dem jeweiligen Angebot.
              Sämtliche Preise verstehen sich in Euro. Die Agentur weist gemäß
              § 19 UStG keine Umsatzsteuer aus (Kleinunternehmerregelung), sofern
              im Angebot nicht ausdrücklich anders vermerkt.
            </p>
            <p>
              (2) Sofern nichts anderes vereinbart ist, sind Rechnungen innerhalb
              von 14 Tagen nach Rechnungsdatum ohne Abzug zur Zahlung fällig.
            </p>
            <p>
              (3) Bei Projekten ab einem Auftragswert von 1.000 € ist die Agentur
              berechtigt, eine Anzahlung in Höhe von 30 % bis 50 % vor
              Projektbeginn zu verlangen.
            </p>
            <p>
              (4) Bei Zahlungsverzug ist die Agentur berechtigt, laufende
              Leistungen bis zum Zahlungseingang einzustellen.
            </p>
          </Section>

          <Section title="§ 7 Laufende Leistungen (Abos & Retainer)">
            <p>
              Bei monatlichen Leistungen (z. B. Social-Media-Betreuung,
              Website-Pflege) beträgt die Mindestlaufzeit, sofern nicht anders
              vereinbart, drei Monate. Das Vertragsverhältnis verlängert sich
              automatisch um jeweils einen Monat, sofern es nicht mit einer Frist
              von 14 Tagen zum Monatsende in Textform gekündigt wird.
            </p>
          </Section>

          <Section title="§ 8 Nutzungs- und Urheberrechte">
            <p>
              (1) Mit vollständiger Zahlung der vereinbarten Vergütung räumt die
              Agentur dem Auftraggeber die für den vertraglich vorgesehenen Zweck
              erforderlichen Nutzungsrechte an den erstellten Werken ein.
            </p>
            <p>
              (2) Die Übertragung von Nutzungsrechten an Dritte sowie
              Bearbeitungen der Werke bedürfen der vorherigen Zustimmung der
              Agentur.
            </p>
            <p>
              (3) Die Agentur ist berechtigt, erstellte Arbeiten zu
              Referenzzwecken (z. B. im Portfolio, auf Social Media) zu
              verwenden, sofern dem keine berechtigten Interessen des
              Auftraggebers entgegenstehen.
            </p>
          </Section>

          <Section title="§ 9 Gewährleistung">
            <p>
              Die Agentur erbringt ihre Leistungen mit der Sorgfalt eines
              ordentlichen Kaufmanns nach dem aktuellen Stand der Technik.
              Offensichtliche Mängel sind innerhalb von 14 Tagen nach Übergabe in
              Textform zu rügen. Die Agentur ist berechtigt, Mängel innerhalb
              angemessener Frist nachzubessern.
            </p>
          </Section>

          <Section title="§ 10 Haftung">
            <p>
              (1) Die Agentur haftet unbeschränkt für Vorsatz und grobe
              Fahrlässigkeit sowie nach den Vorschriften des
              Produkthaftungsgesetzes.
            </p>
            <p>
              (2) Für leichte Fahrlässigkeit haftet die Agentur nur bei Verletzung
              wesentlicher Vertragspflichten und beschränkt auf den
              vertragstypischen, vorhersehbaren Schaden.
            </p>
            <p>
              (3) Eine Haftung für entgangenen Gewinn, ausgebliebene Marketing-
              oder Werbeerfolge sowie für Datenverluste, die durch
              ordnungsgemäße Datensicherung vermeidbar gewesen wären, ist
              ausgeschlossen.
            </p>
          </Section>

          <Section title="§ 11 Datenschutz & Vertraulichkeit">
            <p>
              Beide Parteien verpflichten sich, alle im Rahmen der
              Zusammenarbeit erlangten vertraulichen Informationen vertraulich zu
              behandeln. Hinsichtlich der Verarbeitung personenbezogener Daten
              wird auf die{" "}
              <Link to="/datenschutz" className="text-brand-blue hover:underline">Datenschutzerklärung</Link>{" "}
              verwiesen. Bei Auftragsverarbeitung wird ein gesonderter AV-Vertrag
              gemäß Art. 28 DSGVO geschlossen.
            </p>
          </Section>

          <Section title="§ 12 Schlussbestimmungen">
            <p>
              (1) Es gilt das Recht der Bundesrepublik Deutschland unter
              Ausschluss des UN-Kaufrechts.
            </p>
            <p>
              (2) Erfüllungsort und ausschließlicher Gerichtsstand für Streitig­keiten
              mit Kaufleuten ist der Sitz der Agentur, soweit gesetzlich zulässig.
            </p>
            <p>
              (3) Sollten einzelne Bestimmungen dieser AGB unwirksam sein oder
              werden, bleibt die Wirksamkeit der übrigen Bestimmungen unberührt.
              Anstelle der unwirksamen Bestimmung gilt die gesetzlich zulässige
              Regelung, die dem wirtschaftlichen Zweck am nächsten kommt.
            </p>
            <p className="text-xs">Stand: 2026</p>
          </Section>
        </div>
      </div>
    </main>
  );
}
