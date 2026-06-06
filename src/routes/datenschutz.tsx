import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/datenschutz")({
  head: () => ({
    meta: [
      { title: "Datenschutzerklärung — ScaleLabs Studio" },
      { name: "description", content: "Informationen zur Verarbeitung personenbezogener Daten bei ScaleLabs Studio gemäß DSGVO." },
    ],
  }),
  component: DatenschutzPage,
});

function Section({ title, children, id }: { title: string; children: React.ReactNode; id?: string }) {
  return (
    <section id={id} className="rounded-2xl surface p-6 md:p-8 scroll-mt-32">
      <h2 className="text-foreground text-lg md:text-xl font-semibold mb-3">{title}</h2>
      <div className="text-sm md:text-[15px] leading-relaxed text-muted-foreground space-y-3">{children}</div>
    </section>
  );
}

function DatenschutzPage() {
  return (
    <main className="min-h-screen bg-background pt-32 pb-24">
      <div className="mx-auto max-w-3xl px-4 md:px-6">
        <Link to="/" className="text-sm text-muted-foreground hover:text-foreground">← Zurück zur Startseite</Link>
        <div className="mt-6 mb-10">
          <div className="text-xs font-medium uppercase tracking-[0.18em] text-brand-blue mb-3">Rechtliches</div>
          <h1 className="font-display text-4xl md:text-5xl font-bold tracking-tight">Datenschutzerklärung</h1>
          <p className="mt-3 text-muted-foreground">
            Der Schutz Ihrer personenbezogenen Daten ist uns wichtig. Nachfolgend
            informieren wir Sie transparent über Art, Umfang und Zweck der
            Verarbeitung personenbezogener Daten im Rahmen unserer Website und
            Dienstleistungen.
          </p>
        </div>

        <div className="space-y-5">
          <Section title="1. Verantwortlicher">
            <p>
              Verantwortlich im Sinne der DSGVO sowie weiterer nationaler
              Datenschutzgesetze ist:
            </p>
            <p>
              ScaleLabs Studio<br />
              David Tunjic<br />
              Landkreis Bad Tölz-Wolfratshausen<br />
              E-Mail:{" "}
              <a href="mailto:david.tunjic@scalelabsstudio.com" className="text-brand-blue hover:underline">
                david.tunjic@scalelabsstudio.com
              </a>
            </p>
          </Section>

          <Section title="2. Allgemeine Hinweise zur Datenverarbeitung">
            <p>
              Wir verarbeiten personenbezogene Daten unserer Nutzer grundsätzlich
              nur, soweit dies zur Bereitstellung einer funktionsfähigen Website
              sowie unserer Inhalte und Leistungen erforderlich ist. Die
              Verarbeitung erfolgt regelmäßig nur nach Einwilligung des Nutzers
              oder wenn eine gesetzliche Grundlage die Verarbeitung gestattet.
            </p>
          </Section>

          <Section title="3. Hosting & Server-Log-Dateien">
            <p>
              Diese Website wird auf Servern eines externen Dienstleisters
              gehostet. Beim Aufruf der Website werden automatisch Informationen
              an den Server übermittelt und in sogenannten Server-Log-Dateien
              gespeichert:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>anonymisierte IP-Adresse des anfragenden Geräts</li>
              <li>Datum und Uhrzeit des Zugriffs</li>
              <li>aufgerufene URL und HTTP-Statuscode</li>
              <li>übertragene Datenmenge</li>
              <li>Browsertyp und Betriebssystem</li>
              <li>Referrer-URL</li>
            </ul>
            <p>
              Diese Daten werden zur Sicherstellung eines störungsfreien Betriebs,
              zur Optimierung sowie zur Sicherheit der Website verarbeitet.
              Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes
              Interesse). Eine Zusammenführung mit anderen Datenquellen erfolgt
              nicht.
            </p>
          </Section>

          <Section title="4. Kontaktaufnahme & Kontaktformular">
            <p>
              Bei Kontaktaufnahme per E-Mail oder über ein Kontaktformular werden
              die übermittelten Daten (z. B. Name, E-Mail-Adresse, Telefonnummer,
              Unternehmen, Nachricht) zur Bearbeitung der Anfrage und für den Fall
              von Anschlussfragen gespeichert.
            </p>
            <p>
              Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO, sofern die Anfrage
              auf den Abschluss oder die Durchführung eines Vertrags abzielt,
              andernfalls Art. 6 Abs. 1 lit. f DSGVO. Ihre Daten werden gelöscht,
              sobald die Anfrage abschließend bearbeitet wurde und keine
              gesetzlichen Aufbewahrungspflichten entgegenstehen.
            </p>
          </Section>

          <Section title="5. Terminbuchung (geplant)">
            <p>
              Sofern wir künftig ein Online-Tool für Terminbuchungen einbinden,
              werden hierfür ausschließlich die zur Terminvereinbarung notwendigen
              Daten (Name, E-Mail, Wunschtermin, optional Telefonnummer und
              Anliegen) verarbeitet. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b
              DSGVO. Über den konkreten Anbieter und die Datenverarbeitung
              informieren wir, sobald das Tool aktiv eingebunden wird.
            </p>
          </Section>

          <Section title="6. Kommunikation über WhatsApp (optional)">
            <p>
              Eine Kontaktaufnahme über WhatsApp ist derzeit nicht aktiv
              eingebunden. Sollte WhatsApp künftig als Kommunikationskanal
              angeboten werden, beachten Sie bitte, dass es sich um einen Dienst
              der Meta Platforms Ireland Ltd. handelt. Mit dem Versand einer
              Nachricht werden Inhalte, Telefonnummer und ggf. weitere Metadaten
              an WhatsApp übermittelt. Rechtsgrundlage wäre Art. 6 Abs. 1 lit. a
              und lit. b DSGVO.
            </p>
          </Section>

          <Section title="7. Google Fonts">
            <p>
              Diese Website nutzt Schriftarten zur einheitlichen Darstellung.
              Sofern Schriftarten extern (z. B. über Google Fonts) geladen werden,
              baut Ihr Browser eine Verbindung zu den Servern des Anbieters auf.
              Hierdurch wird Ihre IP-Adresse an Google übermittelt. Wo möglich,
              werden Schriftarten lokal eingebunden, um eine Datenübertragung an
              Dritte zu vermeiden. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO.
            </p>
          </Section>

          <Section title="8. Cookies, Analyse & Tracking">
            <p>
              Aktuell setzen wir keine Analyse- oder Tracking-Cookies ein. Sollten
              künftig Webanalyse-Dienste (z. B. zur Reichweitenmessung oder zur
              Optimierung unseres Angebots) eingesetzt werden, erfolgt dies
              ausschließlich auf Grundlage Ihrer ausdrücklichen Einwilligung
              gemäß § 25 Abs. 1 TDDDG i. V. m. Art. 6 Abs. 1 lit. a DSGVO über
              ein Cookie-Banner. Sie können eine erteilte Einwilligung jederzeit
              mit Wirkung für die Zukunft widerrufen.
            </p>
          </Section>

          <Section title="9. Social Media Verlinkungen">
            <p>
              Auf unserer Website finden Sie Verlinkungen zu unseren Profilen auf
              sozialen Netzwerken (z. B. Instagram, LinkedIn). Es handelt sich
              hierbei um reine Hyperlinks. Eine Datenübertragung an die
              jeweiligen Anbieter findet erst statt, wenn Sie aktiv auf einen
              Link klicken und auf die jeweilige Plattform weitergeleitet werden.
              Für die dortige Datenverarbeitung gelten die Datenschutzhinweise
              des jeweiligen Anbieters.
            </p>
          </Section>

          <Section title="10. Auftragsdatenverarbeitung & Dienstleister">
            <p>
              Im Rahmen unserer Tätigkeit als Agentur arbeiten wir mit sorgfältig
              ausgewählten Dienstleistern (z. B. für Hosting, E-Mail-Versand,
              Content-Management-Systeme). Diese verarbeiten Daten ausschließlich
              in unserem Auftrag und auf Grundlage entsprechender
              Auftragsverarbeitungsverträge gemäß Art. 28 DSGVO.
            </p>
          </Section>

          <Section title="11. Speicherdauer">
            <p>
              Personenbezogene Daten werden gelöscht, sobald der Zweck der
              Verarbeitung entfällt und keine gesetzlichen Aufbewahrungspflichten
              (z. B. nach HGB oder AO) entgegenstehen.
            </p>
          </Section>

          <Section title="12. Ihre Rechte">
            <p>Ihnen stehen folgende Rechte zu:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Auskunft (Art. 15 DSGVO)</li>
              <li>Berichtigung (Art. 16 DSGVO)</li>
              <li>Löschung (Art. 17 DSGVO)</li>
              <li>Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
              <li>Datenübertragbarkeit (Art. 20 DSGVO)</li>
              <li>Widerspruch (Art. 21 DSGVO)</li>
              <li>Widerruf einer erteilten Einwilligung (Art. 7 Abs. 3 DSGVO)</li>
            </ul>
            <p>
              Zur Ausübung Ihrer Rechte genügt eine formlose Nachricht an die oben
              genannte E-Mail-Adresse.
            </p>
          </Section>

          <Section title="13. Beschwerderecht">
            <p>
              Sie haben das Recht, sich bei einer Datenschutzaufsichtsbehörde zu
              beschweren. Zuständig ist in der Regel die Behörde Ihres
              gewöhnlichen Aufenthaltsorts oder unseres Geschäftssitzes.
            </p>
          </Section>

          <Section title="14. Datensicherheit & mobile Nutzung">
            <p>
              Die Website wird über eine verschlüsselte HTTPS-Verbindung
              ausgeliefert und ist für die Nutzung auf mobilen Endgeräten
              optimiert. Wir treffen technische und organisatorische Maßnahmen,
              um Ihre Daten gegen zufällige oder vorsätzliche Manipulation,
              Verlust oder unberechtigten Zugriff zu schützen.
            </p>
          </Section>

          <Section title="15. Aktualität dieser Datenschutzerklärung">
            <p>
              Wir behalten uns vor, diese Datenschutzerklärung anzupassen, damit
              sie stets den aktuellen rechtlichen Anforderungen entspricht oder
              um Änderungen unserer Leistungen umzusetzen — etwa bei Einführung
              neuer Services wie Online-Terminbuchung oder Kundenportal.
            </p>
            <p className="text-xs">Stand: 2026</p>
          </Section>
        </div>
      </div>
    </main>
  );
}
