import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHero, CTASection } from "@/components/site/PageShell";
import { INSIGHTS } from "@/data/site";

export const Route = createFileRoute("/resources")({
  head: () => ({
    meta: [
      { title: "Resources & Insights — BARIS" },
      { name: "description", content: "Wawasan, artikel, dan pemikiran terkini seputar bisnis, strategi, dan inovasi dari BARIS." },
    ],
  }),
  component: ResourcesPage,
});

function ResourcesPage() {
  const all = [...INSIGHTS, ...INSIGHTS, ...INSIGHTS];
  return (
    <PageShell>
      <PageHero
        eyebrow="Resources"
        title="Wawasan untuk pemimpin bisnis modern."
        description="Pemikiran, riset, dan praktik terbaik dari tim BARIS untuk membantu Anda mengambil keputusan yang lebih baik."
      />
      <section className="container-page py-24">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {all.map((it, i) => (
            <article key={i} className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all hover:-translate-y-1 hover:shadow-elegant">
              <div className="aspect-[16/10] bg-gradient-to-br from-primary via-primary-glow to-secondary relative">
                <div className="absolute inset-0 grain opacity-30" />
                <span className="absolute left-4 top-4 rounded-full bg-background/90 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-primary">{it.category}</span>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-display text-lg font-bold leading-snug group-hover:text-primary">{it.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{it.excerpt}</p>
                <p className="mt-auto pt-4 text-xs text-muted-foreground">{it.read} baca</p>
              </div>
            </article>
          ))}
        </div>
      </section>
      <CTASection />
    </PageShell>
  );
}
