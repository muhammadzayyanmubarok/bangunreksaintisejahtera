import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHero, CTASection } from "@/components/site/PageShell";
import { SUCCESS_STORIES } from "@/data/site";

export const Route = createFileRoute("/success-story")({
  head: () => ({
    meta: [
      { title: "Success Story — BARIS" },
      { name: "description", content: "Studi kasus dan kisah sukses klien BARIS dari berbagai industri." },
    ],
  }),
  component: SuccessStoryPage,
});

function SuccessStoryPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Success Story"
        title="Dampak nyata, dari ide hingga eksekusi."
        description="Setiap cerita di bawah ini lahir dari kolaborasi BARIS bersama mitra bisnis untuk menjawab tantangan strategis mereka."
      />
      <section className="container-page py-24">
        <div className="grid gap-8">
          {SUCCESS_STORIES.map((s, i) => (
            <article key={s.slug} className="grid gap-8 rounded-3xl border border-border bg-card p-10 lg:grid-cols-[1fr_2fr] lg:p-14 hover:shadow-elegant transition-shadow">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">{s.industry}</p>
                <h2 className="mt-2 font-display text-3xl font-bold">{s.client}</h2>
                <div className="mt-8 space-y-4">
                  {s.metrics.map((m) => (
                    <div key={m.l} className="border-l-2 border-accent pl-4">
                      <div className="font-display text-3xl font-bold text-primary">{m.v}</div>
                      <div className="text-xs text-muted-foreground">{m.l}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="space-y-6">
                <Block title="Tantangan" content={s.challenge} />
                <Block title="Solusi BARIS" content={s.solution} />
                <Block title="Dampak" content={s.impact} />
              </div>
            </article>
          ))}
        </div>
      </section>
      <CTASection />
    </PageShell>
  );
}

function Block({ title, content }: { title: string; content: string }) {
  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">{title}</p>
      <p className="mt-2 text-foreground">{content}</p>
    </div>
  );
}
