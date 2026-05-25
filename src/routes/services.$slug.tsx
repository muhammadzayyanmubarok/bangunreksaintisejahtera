import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { PageShell, PageHero, CTASection } from "@/components/site/PageShell";
import { SERVICES, SUCCESS_STORIES } from "@/data/site";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const service = SERVICES.find((s) => s.slug === params.slug);
    if (!service) throw notFound();
    return { service };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.service.title} — BARIS` },
          { name: "description", content: loaderData.service.short },
          { property: "og:title", content: `${loaderData.service.title} — BARIS` },
          { property: "og:description", content: loaderData.service.short },
        ]
      : [],
  }),
  notFoundComponent: () => (
    <PageShell>
      <PageHero title="Layanan tidak ditemukan." />
    </PageShell>
  ),
  errorComponent: ({ error }) => (
    <PageShell>
      <PageHero title="Terjadi kesalahan" description={error.message} />
    </PageShell>
  ),
  component: ServiceDetail,
});

function ServiceDetail() {
  const { service } = Route.useLoaderData();
  const related = SUCCESS_STORIES.slice(0, 2);

  return (
    <PageShell>
      <PageHero eyebrow={service.tagline} title={service.title} description={service.short} />

      <section className="container-page py-24">
        <div className="grid gap-16 lg:grid-cols-[1.1fr_1fr] lg:gap-24 items-start">
          <div className="space-y-5">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">Tentang Layanan</p>
            {service.opening.map((p: string) => (
              <p key={p} className="text-lg text-muted-foreground leading-relaxed">{p}</p>
            ))}
          </div>
          <div className="rounded-3xl bg-[var(--color-beige)] p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">Capabilities</p>
            <h3 className="mt-3 font-display text-2xl font-bold">Cakupan layanan.</h3>
            <ul className="mt-6 space-y-3">
              {service.capabilities.map((c: string) => (
                <li key={c} className="flex gap-3">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-primary mt-0.5" />
                  <span className="font-medium">{c}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-beige)]">
        <div className="container-page py-24">
          <div className="max-w-2xl mb-12">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">Detail Capability</p>
            <h2 className="mt-3 font-display text-3xl font-bold md:text-4xl">Apa yang kami kerjakan.</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {service.details.map((d: { title: string; desc: string }, i: number) => (
              <div key={d.title} className="rounded-2xl border border-border bg-card p-8 hover:shadow-elegant transition-shadow">
                <div className="font-display text-sm font-bold text-accent">0{i + 1}</div>
                <h3 className="mt-3 font-display text-xl font-bold">{d.title}</h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-page py-24">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-10">
          <h2 className="font-display text-3xl font-bold">Cerita sukses terkait.</h2>
          <Link to="/success-story" className="text-sm font-semibold text-primary inline-flex items-center gap-2">Semua cerita <ArrowRight className="h-4 w-4" /></Link>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {related.map((s) => (
            <article key={s.slug} className="rounded-3xl border border-border bg-card p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">{s.industry}</p>
              <h3 className="mt-2 font-display text-2xl font-bold">{s.client}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{s.project}</p>
              <p className="mt-4 text-muted-foreground">{s.highlight}</p>
            </article>
          ))}
        </div>
      </section>

      <CTASection />
    </PageShell>
  );
}
