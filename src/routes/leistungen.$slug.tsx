import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, CheckCircle2, Sparkles } from "lucide-react";
import { Nav } from "@/components/scalelabs/Nav";
import { Footer } from "@/components/scalelabs/Footer";
import { CTA } from "@/components/scalelabs/CTA";
import { getService, services, type ServiceItem } from "@/components/scalelabs/servicesData";

export const Route = createFileRoute("/leistungen/$slug")({
  loader: ({ params }) => {
    const item = getService(params.slug);
    if (!item) throw notFound();
    return { slug: item.slug };
  },
  head: ({ loaderData }) => {
    const item = loaderData?.slug ? getService(loaderData.slug) : undefined;
    const title = item ? `${item.title} — ScaleLabs Studio` : "Leistung — ScaleLabs Studio";
    const description = item?.desc ?? "Leistung von ScaleLabs Studio.";
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
        <h1 className="font-display text-3xl font-bold">Leistung nicht gefunden</h1>
        <Link to="/" className="mt-4 inline-block text-brand-blue">Zurück zur Startseite</Link>
      </div>
    </div>
  ),
  component: ServicePage,
});

function ServicePage() {
  const { slug } = Route.useLoaderData();
  const item = getService(slug) as ServiceItem;
  const Icon = item.icon;

  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <Nav />
      <main className="pt-28 pb-12">
        <section className="relative">
          <div className="absolute inset-0 dot-bg opacity-30" />
          <div className="relative mx-auto max-w-5xl px-4 md:px-6">
            <Link
              to="/"
              hash="systems"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
            >
              <ArrowLeft className="h-4 w-4" /> Zurück zu unseren Leistungen
            </Link>

            <div className="inline-flex items-center gap-2 rounded-full surface px-4 py-1.5 text-xs font-medium shadow-soft mb-6">
              <Icon className="h-3.5 w-3.5 text-brand-blue" />
              {item.tag}
            </div>

            <h1 className="font-display text-4xl md:text-6xl font-bold tracking-tight">
              {item.title}
            </h1>
            <p className="mt-5 text-lg text-muted-foreground max-w-2xl leading-relaxed">
              {item.intro}
            </p>
            {item.highlight && (
              <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-brand-blue/20 bg-brand-soft/40 px-4 py-1.5 text-xs font-medium text-brand-blue backdrop-blur">
                <Sparkles className="h-3.5 w-3.5" />
                {item.highlight}
              </div>
            )}
          </div>
        </section>

        <section className="mt-16">
          <div className="mx-auto max-w-5xl px-4 md:px-6 grid md:grid-cols-2 gap-6">
            <div className="rounded-3xl surface p-7">
              <div className="text-[11px] font-mono uppercase tracking-wider text-muted-foreground">Highlights</div>
              <h2 className="font-display text-2xl font-bold mt-1">Was enthalten ist</h2>
              <ul className="mt-4 space-y-2.5">
                {item.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-2 text-sm text-foreground">
                    <CheckCircle2 className="h-4 w-4 text-brand-blue mt-0.5 shrink-0" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl bg-gradient-soft border border-border p-7">
              <div className="text-[11px] font-mono uppercase tracking-wider text-muted-foreground">Ablauf</div>
              <h2 className="font-display text-2xl font-bold mt-1">So arbeiten wir</h2>
              <div className="mt-4 space-y-4">
                {item.process.map((step, i) => (
                  <div key={step.title} className="flex gap-3">
                    <div className="h-7 w-7 rounded-lg bg-white border border-border flex items-center justify-center text-xs font-mono text-brand-blue shrink-0">
                      0{i + 1}
                    </div>
                    <div>
                      <div className="font-display font-semibold">{step.title}</div>
                      <p className="text-sm text-muted-foreground mt-0.5">{step.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mt-16">
          <div className="mx-auto max-w-5xl px-4 md:px-6">
            <div className="text-[11px] font-mono uppercase tracking-wider text-muted-foreground mb-4">Weitere Leistungen</div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {services.filter((s) => s.slug !== item.slug).slice(0, 3).map((s) => {
                const SIcon = s.icon;
                return (
                  <Link
                    key={s.slug}
                    to="/leistungen/$slug"
                    params={{ slug: s.slug }}
                    className="group rounded-2xl surface p-5 flex items-center justify-between lift-on-hover"
                  >
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-xl bg-brand-soft/60 border border-brand-blue/15 flex items-center justify-center">
                        <SIcon className="h-4 w-4 text-brand-blue" />
                      </div>
                      <div className="font-display font-bold">{s.title}</div>
                    </div>
                    <span className="text-xs font-semibold text-brand-blue group-hover:translate-x-0.5 transition-transform">
                      Mehr →
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      </main>

      <CTA />
      <Footer />
    </div>
  );
}
