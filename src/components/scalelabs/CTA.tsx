import { useState, type FormEvent } from "react";
import { useServerFn } from "@tanstack/react-start";
import { Calendar, Send, CheckCircle2, Loader2, User, Mail, Building2, MessageSquare, AlertCircle } from "lucide-react";
import { submitContact } from "@/lib/contact.functions";

const promises = [
  "Kostenfreies Erstgespräch · 30 Minuten",
  "Klare Empfehlung — ohne Verkaufsdruck",
  "Persönlicher Ansprechpartner",
];

export function CTA() {
  const submit = useServerFn(submitContact);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState<string>("");
  const [form, setForm] = useState({
    name: "",
    email: "",
    business: "",
    message: "",
    preferDate: "",
    wantsAppointment: true,
  });

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (status === "sending") return;
    setStatus("sending");
    setErrorMsg("");

    try {
      const result = await submit({
        data: {
          name: form.name,
          email: form.email,
          business: form.business,
          message: form.message,
          preferDate: form.preferDate,
          wantsAppointment: form.wantsAppointment,
        },
      });

      if (result.ok) {
        setStatus("sent");
      } else {
        setStatus("error");
        setErrorMsg(result.error);
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
      setErrorMsg("Etwas ist schiefgelaufen. Bitte versuche es erneut.");
    }
  }

  return (
    <section id="cta" className="relative py-24 md:py-28">
      <div className="relative mx-auto max-w-6xl px-4 md:px-6">
        <div className="relative rounded-3xl overflow-hidden surface shadow-soft-lg p-8 md:p-12">
          <div className="absolute inset-0 bg-gradient-to-br from-brand-soft/30 via-white to-brand-blue/10" />
          <div className="absolute inset-0 dot-bg opacity-40" />

          <div className="relative grid md:grid-cols-2 gap-10 items-start">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full surface px-4 py-1.5 text-xs font-medium shadow-soft">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-blue" />
                Kostenfrei · unverbindlich
              </div>
              <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight leading-[1.1]">
                Lass uns dein Unternehmen{" "}
                <span className="text-gradient">sichtbar machen.</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Schreib uns kurz — wir melden uns innerhalb von 24 Stunden. Auf
                Wunsch direkt mit einem Termin-Vorschlag.
              </p>
              <ul className="space-y-2.5">
                {promises.map((p) => (
                  <li key={p} className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                    <span className="text-foreground/80">{p}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Form */}
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl surface p-6 md:p-7 shadow-soft space-y-4"
            >
              <div className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
                Anfrage senden
              </div>

              {status === "sent" ? (
                <div className="py-10 text-center space-y-3">
                  <div className="mx-auto h-12 w-12 rounded-full bg-emerald-100 flex items-center justify-center">
                    <CheckCircle2 className="h-6 w-6 text-emerald-600" />
                  </div>
                  <div className="font-display text-xl font-bold">Danke, deine Anfrage ist unterwegs!</div>
                  <p className="text-sm text-muted-foreground">
                    Ich melde mich in Kürze persönlich bei dir per E-Mail.
                  </p>
                </div>
              ) : (
                <>
                  {status === "error" && errorMsg && (
                    <div className="flex items-start gap-2 rounded-lg border border-destructive/30 bg-destructive/5 p-3 text-sm text-destructive">
                      <AlertCircle className="h-4 w-4 mt-0.5 shrink-0" />
                      <span>{errorMsg}</span>
                    </div>
                  )}
                  <div className="grid sm:grid-cols-2 gap-3">
                    <label className="block">
                      <span className="sr-only">Name</span>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <input
                          required
                          type="text"
                          placeholder="Dein Name"
                          maxLength={100}
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          className="w-full rounded-lg border border-border bg-white pl-9 pr-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue"
                        />
                      </div>
                    </label>
                    <label className="block">
                      <span className="sr-only">E-Mail</span>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <input
                          required
                          type="email"
                          placeholder="E-Mail"
                          maxLength={200}
                          value={form.email}
                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                          className="w-full rounded-lg border border-border bg-white pl-9 pr-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue"
                        />
                      </div>
                    </label>
                  </div>

                  <label className="block">
                    <span className="sr-only">Unternehmen</span>
                    <div className="relative">
                      <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <input
                        type="text"
                        placeholder="Unternehmen (optional)"
                        maxLength={150}
                        value={form.business}
                        onChange={(e) => setForm({ ...form, business: e.target.value })}
                        className="w-full rounded-lg border border-border bg-white pl-9 pr-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue"
                      />
                    </div>
                  </label>

                  <label className="block">
                    <span className="sr-only">Nachricht</span>
                    <div className="relative">
                      <MessageSquare className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <textarea
                        required
                        rows={4}
                        placeholder="Wie können wir dir helfen?"
                        maxLength={2000}
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        className="w-full rounded-lg border border-border bg-white pl-9 pr-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue resize-none"
                      />
                    </div>
                  </label>

                  <div className="rounded-lg bg-secondary/60 border border-border p-3 space-y-3">
                    <label className="flex items-center gap-2 text-sm cursor-pointer select-none">
                      <input
                        type="checkbox"
                        checked={form.wantsAppointment}
                        onChange={(e) => setForm({ ...form, wantsAppointment: e.target.checked })}
                        className="h-4 w-4 rounded border-border accent-[color:var(--brand-blue)]"
                      />
                      <Calendar className="h-4 w-4 text-brand-blue" />
                      <span>Ich möchte direkt einen Termin vereinbaren</span>
                    </label>
                    {form.wantsAppointment && (
                      <input
                        type="text"
                        placeholder="Wunsch-Zeitraum (z. B. nächste Woche vormittags)"
                        maxLength={150}
                        value={form.preferDate}
                        onChange={(e) => setForm({ ...form, preferDate: e.target.value })}
                        className="w-full rounded-md border border-border bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue"
                      />
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="group w-full flex items-center justify-center gap-2 rounded-xl bg-gradient-primary px-5 py-3.5 text-sm font-medium text-primary-foreground shadow-brand hover:shadow-soft-lg hover:translate-y-[-1px] transition-all disabled:opacity-70"
                  >
                    {status === "sending" ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" /> Sende…
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4" />
                        {form.wantsAppointment ? "Anfrage & Termin senden" : "Anfrage senden"}
                      </>
                    )}
                  </button>

                  <p className="text-[11px] text-muted-foreground text-center">
                    Wir melden uns per E-Mail an{" "}
                    <span className="text-foreground/80">david.tunjic@scalelabsstudio.com</span>.
                  </p>
                </>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
