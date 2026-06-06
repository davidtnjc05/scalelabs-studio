import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, CheckCircle2, Target, Sparkles } from "lucide-react";
import { Nav } from "@/components/scalelabs/Nav";
import { Footer } from "@/components/scalelabs/Footer";
import { CTA } from "@/components/scalelabs/CTA";
import { getShowcase, showcases, type ShowcaseItem } from "@/components/scalelabs/showcaseData";

export const Route = createFileRoute("/showcase/$slug")({
  loader: ({ params }) => {
    const item = getShowcase(params.slug);
    if (!item) throw notFound();
    return { slug: item.slug };
  },
  head: ({ loaderData }) => {
    const item = loaderData?.slug ? getShowcase(loaderData.slug) : undefined;
    const title = item ? `${item.name} — Showcase | ScaleLabs Studio` : "Showcase | ScaleLabs Studio";
    const description = item?.summary ?? "Showcase eines lokalen Projekts von ScaleLabs Studio.";
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
      ],
    };
  },
  notFoundComponent: () => (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center">
        <h1 className="font-display text-3xl font-bold">Showcase nicht gefunden</h1>
        <Link to="/" className="mt-4 inline-block text-brand-blue">Zurück zur Startseite</Link>
      </div>
    </div>
  ),
  component: ShowcasePage,
});

function ShowcasePage() {
  const { slug } = Route.useLoaderData();
  const item = getShowcase(slug) as ShowcaseItem;
  const { Icon } = item;

  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <Nav />
      <main className="pt-28 pb-12">
        {/* Header */}
        <section className="relative">
          <div className="absolute inset-0 dot-bg opacity-30" />
          <div className="relative mx-auto max-w-5xl px-4 md:px-6">
            <Link
              to="/"
              hash="cases"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
            >
              <ArrowLeft className="h-4 w-4" /> Zurück zu Projekte & Showcase
            </Link>

            <div className="inline-flex items-center gap-2 rounded-full surface px-4 py-1.5 text-xs font-medium shadow-soft mb-6">
              <Icon className="h-3.5 w-3.5 text-brand-blue" />
              {item.branch} · {item.city}
            </div>

            <h1 className="font-display text-4xl md:text-6xl font-bold tracking-tight">
              {item.name}
            </h1>
            <p className="mt-5 text-lg text-muted-foreground max-w-2xl leading-relaxed">
              {item.summary}
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {item.tags.map((t) => (
                <span
                  key={t}
                  className="rounded-md bg-brand-soft/60 px-3 py-1.5 text-xs font-medium text-brand-blue border border-brand-blue/15"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Visual hero card */}
        <section className="mt-12">
          <div className="mx-auto max-w-5xl px-4 md:px-6">
            <div className={`relative rounded-3xl overflow-hidden border ${item.accentBorder} bg-gradient-to-br ${item.accent} aspect-[16/7]`}>
              <div className="absolute inset-0 dot-bg opacity-60" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="rounded-2xl bg-white/90 backdrop-blur border border-border px-6 py-5 shadow-soft text-center">
                  <Icon className="h-8 w-8 text-brand-blue mx-auto" />
                  <div className="mt-2 font-display font-bold text-lg">{item.name}</div>
                  <div className="text-xs text-muted-foreground">{item.branch}</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Content grid */}
        <section className="mt-16">
          <div className="mx-auto max-w-5xl px-4 md:px-6 grid md:grid-cols-2 gap-6">
            <div className="rounded-3xl surface p-7">
              <div className="text-[11px] font-mono uppercase tracking-wider text-muted-foreground">Ausgangslage</div>
              <h2 className="font-display text-2xl font-bold mt-1">Die Herausforderung</h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">{item.challenge}</p>
            </div>

            <div className="rounded-3xl surface p-7">
              <div className="flex items-center gap-2 text-[11px] font-mono uppercase tracking-wider text-muted-foreground">
                <Target className="h-3.5 w-3.5 text-brand-blue" /> Ziele
              </div>
              <h2 className="font-display text-2xl font-bold mt-1">Was wir erreichen wollten</h2>
              <ul className="mt-4 space-y-2.5">
                {item.goals.map((g) => (
                  <li key={g} className="flex items-start gap-2 text-sm text-foreground">
                    <CheckCircle2 className="h-4 w-4 text-brand-blue mt-0.5 shrink-0" />
                    <span>{g}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="mt-8">
          <div className="mx-auto max-w-5xl px-4 md:px-6">
            <div className="rounded-3xl surface p-7 md:p-10">
              <div className="text-[11px] font-mono uppercase tracking-wider text-muted-foreground">Zusammenarbeit</div>
              <h2 className="font-display text-2xl md:text-3xl font-bold mt-1">So lief der Ablauf</h2>

              <div className="mt-8 grid md:grid-cols-3 gap-5">
                {item.process.map((step, i) => (
                  <div key={step.title} className="rounded-2xl bg-secondary/50 border border-border p-5">
                    <div className="text-xs font-mono text-brand-blue">0{i + 1}</div>
                    <div className="mt-1 font-display text-lg font-bold">{step.title}</div>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{step.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Delivered + Outcome */}
        <section className="mt-8">
          <div className="mx-auto max-w-5xl px-4 md:px-6 grid md:grid-cols-5 gap-6">
            <div className="md:col-span-2 rounded-3xl surface p-7">
              <div className="text-[11px] font-mono uppercase tracking-wider text-muted-foreground">Umsetzung</div>
              <h2 className="font-display text-2xl font-bold mt-1">Was geliefert wurde</h2>
              <ul className="mt-4 space-y-2.5">
                {item.delivered.map((d) => (
                  <li key={d} className="flex items-start gap-2 text-sm text-foreground">
                    <CheckCircle2 className="h-4 w-4 text-brand-blue mt-0.5 shrink-0" />
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="md:col-span-3 rounded-3xl bg-gradient-soft border border-border p-7">
              <div className="flex items-center gap-2 text-[11px] font-mono uppercase tracking-wider text-muted-foreground">
                <Sparkles className="h-3.5 w-3.5 text-brand-blue" /> Ergebnis
              </div>
              <h2 className="font-display text-2xl font-bold mt-1">Wirkung für das Unternehmen</h2>
              <p className="mt-4 text-foreground leading-relaxed">{item.outcome}</p>
            </div>
          </div>
        </section>

        {/* Other showcases */}
        <section className="mt-16">
          <div className="mx-auto max-w-5xl px-4 md:px-6">
            <div className="text-[11px] font-mono uppercase tracking-wider text-muted-foreground mb-4">Weitere Showcases</div>
            <div className="grid md:grid-cols-2 gap-4">
              {showcases.filter((s) => s.slug !== item.slug).map((s) => (
                <Link
                  key={s.slug}
                  to="/showcase/$slug"
                  params={{ slug: s.slug }}
                  className="group rounded-2xl surface p-5 flex items-center justify-between lift-on-hover"
                >
                  <div className="flex items-center gap-3">
                    <div className={`h-10 w-10 rounded-xl bg-gradient-to-br ${s.accent} border ${s.accentBorder} flex items-center justify-center`}>
                      <s.Icon className="h-4 w-4 text-brand-blue" />
                    </div>
                    <div>
                      <div className="font-display font-bold">{s.name}</div>
                      <div className="text-xs text-muted-foreground">{s.branch}</div>
                    </div>
                  </div>
                  <span className="text-xs font-semibold text-brand-blue group-hover:translate-x-0.5 transition-transform">
                    Showcase →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <CTA />
      <Footer />
    </div>
  );
}