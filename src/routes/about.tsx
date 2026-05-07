import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHero, CTASection } from "@/components/site/PageShell";
import { Sparkles, Target, Workflow, ShieldCheck } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Tentang BARIS — Mitra Strategis Bisnis Anda" },
      { name: "description", content: "BARIS adalah perusahaan solusi bisnis B2B yang menghadirkan inovasi, strategi, dan eksekusi untuk perusahaan modern." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  const values = [
    { icon: Sparkles, title: "Innovation", desc: "Kami terus mencari pendekatan baru untuk menghasilkan dampak yang lebih besar." },
    { icon: Target, title: "Outcome", desc: "Berorientasi pada hasil, bukan sekadar deliverable." },
    { icon: Workflow, title: "Excellence", desc: "Standar tinggi dalam setiap detail eksekusi." },
    { icon: ShieldCheck, title: "Integrity", desc: "Transparan, jujur, dan akuntabel dalam setiap kemitraan." },
  ];
  return (
    <PageShell>
      <PageHero
        eyebrow="Tentang BARIS"
        title="Mitra strategis untuk perusahaan yang siap bertumbuh."
        description="Kami menggabungkan teknologi, strategi, dan eksekusi untuk membantu perusahaan menghadirkan dampak yang nyata dan berkelanjutan."
      />

      <section className="container-page py-24">
        <div className="grid gap-16 lg:grid-cols-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">Misi Kami</p>
            <h2 className="mt-3 font-display text-4xl font-bold">Membangun bisnis yang berdampak.</h2>
            <p className="mt-6 text-muted-foreground text-lg">
              BARIS hadir sebagai mitra strategis bagi perusahaan dalam menavigasi transformasi, inovasi, dan pertumbuhan.
              Dengan tim multidisiplin yang berpengalaman, kami siap menjadi perpanjangan tangan tim Anda — dari ruang strategi
              hingga eksekusi di lapangan.
            </p>
          </div>
          <div className="rounded-3xl bg-primary p-10 text-primary-foreground">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">Visi</p>
            <h3 className="mt-3 font-display text-3xl font-bold leading-tight">
              Menjadi mitra terpercaya dalam mendorong inovasi bisnis Indonesia ke standar global.
            </h3>
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-beige)]">
        <div className="container-page py-24">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">Nilai Kami</p>
          <h2 className="mt-3 font-display text-4xl font-bold">Prinsip yang memandu kami.</h2>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <div key={v.title} className="rounded-2xl bg-card border border-border p-7">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary/40 text-primary">
                  <v.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 font-display text-lg font-bold">{v.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </PageShell>
  );
}
