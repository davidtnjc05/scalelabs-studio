import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/unsubscribe")({
  component: UnsubscribePage,
});

function UnsubscribePage() {
  const [state, setState] = useState<"loading" | "valid" | "already" | "invalid" | "done" | "error">("loading");
  const [submitting, setSubmitting] = useState(false);
  const token = typeof window !== "undefined" ? new URLSearchParams(window.location.search).get("token") : null;

  useEffect(() => {
    if (!token) { setState("invalid"); return; }
    fetch(`/email/unsubscribe?token=${encodeURIComponent(token)}`)
      .then((r) => r.json())
      .then((d) => {
        if (d.valid) setState("valid");
        else if (d.reason === "already_unsubscribed") setState("already");
        else setState("invalid");
      })
      .catch(() => setState("error"));
  }, [token]);

  async function confirm() {
    if (!token) return;
    setSubmitting(true);
    try {
      const res = await fetch("/email/unsubscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token }),
      });
      const d = await res.json();
      if (d.success || d.reason === "already_unsubscribed") setState("done");
      else setState("error");
    } catch {
      setState("error");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <main className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-md w-full rounded-2xl border border-border bg-white p-8 shadow-soft text-center space-y-4">
        <h1 className="font-display text-2xl font-bold">E-Mails abbestellen</h1>
        {state === "loading" && <p className="text-muted-foreground">Lade…</p>}
        {state === "valid" && (
          <>
            <p className="text-muted-foreground">Möchtest du keine weiteren E-Mails von uns erhalten?</p>
            <button
              onClick={confirm}
              disabled={submitting}
              className="rounded-xl bg-gradient-primary px-5 py-3 text-sm font-medium text-primary-foreground shadow-brand disabled:opacity-70"
            >
              {submitting ? "Wird verarbeitet…" : "Abmeldung bestätigen"}
            </button>
          </>
        )}
        {state === "already" && <p className="text-muted-foreground">Du bist bereits abgemeldet.</p>}
        {state === "done" && <p className="text-emerald-600">Du wurdest erfolgreich abgemeldet.</p>}
        {state === "invalid" && <p className="text-destructive">Der Link ist ungültig oder abgelaufen.</p>}
        {state === "error" && <p className="text-destructive">Etwas ist schiefgelaufen. Bitte versuche es später erneut.</p>}
      </div>
    </main>
  );
}