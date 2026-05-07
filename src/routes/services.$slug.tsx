import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { PageShell, PageHero, CTASection } from "@/components/site/PageShell";
import { SERVICES, SUCCESS_STORIES } from "@/data/site";
import { CheckCircle2, ArrowRight } from "lucide-react";

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

const SERVICE_CONTENT: Record<string, {
  problem: string;
  approach: string[];
  scope: string[];
  process: { step: string; desc: string }[];
}> = {
  "software-house": {
    problem: "Perusahaan menghadapi tekanan untuk berinovasi cepat, namun terkendala sistem legacy, keterbatasan talenta digital, dan kompleksitas integrasi antar platform.",
    approach: [
      "Discovery & technical assessment",
      "Arsitektur cloud-native modular",
      "Agile delivery dengan tim cross-functional",
      "Continuous deployment & quality assurance",
    ],
    scope: ["Web & Mobile Apps", "Platform Enterprise", "Integrasi API & Microservices", "Modernisasi Sistem Legacy", "Data Platform & Analytics"],
    process: [
      { step: "Discovery", desc: "Memahami kebutuhan bisnis dan teknis secara menyeluruh." },
      { step: "Design", desc: "Perancangan arsitektur, UX, dan blueprint solusi." },
      { step: "Build", desc: "Pengembangan iteratif dengan kualitas tinggi." },
      { step: "Launch & Scale", desc: "Peluncuran terkelola dan dukungan jangka panjang." },
    ],
  },
  "advisory": {
    problem: "Eksekutif membutuhkan perspektif eksternal yang objektif dan strategi yang dapat dieksekusi untuk menavigasi transformasi bisnis.",
    approach: [
      "Diagnostik berbasis data & wawancara stakeholder",
      "Penyusunan strategi dan roadmap eksekusi",
      "Pendampingan implementasi dan change management",
      "Pengukuran dampak berkelanjutan",
    ],
    scope: ["Strategi Pertumbuhan", "Transformasi Digital", "Operating Model", "Inovasi Produk", "Organisasi & Talent"],
    process: [
      { step: "Diagnose", desc: "Menggali akar persoalan dan peluang." },
      { step: "Design", desc: "Merancang strategi dan inisiatif prioritas." },
      { step: "Deploy", desc: "Mendampingi eksekusi inisiatif strategis." },
      { step: "Sustain", desc: "Memastikan dampak berkelanjutan dan adopsi." },
    ],
  },
  "event-organizer": {
    problem: "Event korporasi modern menuntut konsep kreatif, eksekusi yang sempurna, dan pengalaman peserta yang berkesan — baik offline, online, maupun hybrid.",
    approach: [
      "Konsep kreatif berbasis tujuan bisnis",
      "Manajemen produksi end-to-end",
      "Integrasi platform digital & hybrid",
      "Pengukuran experience & impact",
    ],
    scope: ["Konferensi & Summit", "Corporate Gathering", "Product Launch", "Brand Activation", "Hybrid & Virtual Events"],
    process: [
      { step: "Concept", desc: "Pengembangan tema dan narasi event." },
      { step: "Plan", desc: "Perencanaan logistik, produksi, dan timeline." },
      { step: "Execute", desc: "Eksekusi penuh di hari-H dengan presisi." },
      { step: "Reflect", desc: "Evaluasi dan rekomendasi perbaikan." },
    ],
  },
  "procurement": {
    problem: "Proses pengadaan tradisional sering kali lambat, tidak transparan, dan gagal menghadirkan nilai strategis di luar penghematan biaya.",
    approach: [
      "Analisis kategori & spend analytics",
      "Strategi sourcing yang kompetitif",
      "Vendor management & SLA monitoring",
      "Compliance & governance",
    ],
    scope: ["Strategic Sourcing", "Vendor Management", "Pengadaan IT & Non-IT", "Tender Management", "Procurement Transformation"],
    process: [
      { step: "Assess", desc: "Memetakan kebutuhan dan baseline pengadaan." },
      { step: "Source", desc: "Sourcing kompetitif dan negosiasi terbaik." },
      { step: "Manage", desc: "Manajemen vendor dan kontrak." },
      { step: "Optimize", desc: "Optimasi berkelanjutan dan inovasi pengadaan." },
    ],
  },
};

function ServiceDetail() {
  const { service } = Route.useLoaderData();
  const content = SERVICE_CONTENT[service.slug];
  const related = SUCCESS_STORIES.slice(0, 2);

  return (
    <PageShell>
      <PageHero eyebrow={service.tagline} title={service.title} description={service.short} />

      <section className="container-page py-24">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">Problem Statement</p>
            <h2 className="mt-3 font-display text-3xl font-bold">Tantangan yang Anda hadapi.</h2>
            <p className="mt-5 text-muted-foreground text-lg">{content.problem}</p>
          </div>
          <div className="rounded-3xl bg-[var(--color-beige)] p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">Pendekatan BARIS</p>
            <h3 className="mt-3 font-display text-2xl font-bold">Cara kami menjawabnya.</h3>
            <ul className="mt-6 space-y-3">
              {content.approach.map((a) => (
                <li key={a} className="flex gap-3"><CheckCircle2 className="h-5 w-5 shrink-0 text-primary mt-0.5" /><span>{a}</span></li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-beige)]">
        <div className="container-page py-24">
          <div className="grid gap-12 lg:grid-cols-[1fr_2fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">Lingkup Layanan</p>
              <h2 className="mt-3 font-display text-3xl font-bold">Apa yang kami kerjakan.</h2>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {content.scope.map((s) => (
                <div key={s} className="rounded-2xl border border-border bg-card px-5 py-4 font-medium">{s}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container-page py-24">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">Proses Kerja</p>
        <h2 className="mt-3 font-display text-3xl font-bold">Cara kami mendampingi Anda.</h2>
        <div className="mt-12 grid gap-6 md:grid-cols-4">
          {content.process.map((p, i) => (
            <div key={p.step} className="rounded-2xl border border-border bg-card p-7">
              <div className="font-display text-3xl font-bold text-accent">0{i+1}</div>
              <h3 className="mt-3 font-display text-lg font-bold">{p.step}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[var(--color-beige)]">
        <div className="container-page py-24">
          <div className="flex items-end justify-between flex-wrap gap-6 mb-10">
            <h2 className="font-display text-3xl font-bold">Cerita sukses terkait.</h2>
            <Link to="/success-story" className="text-sm font-semibold text-primary inline-flex items-center gap-2">Semua cerita <ArrowRight className="h-4 w-4" /></Link>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {related.map((s) => (
              <article key={s.slug} className="rounded-3xl border border-border bg-card p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">{s.industry}</p>
                <h3 className="mt-2 font-display text-2xl font-bold">{s.client}</h3>
                <p className="mt-4 text-muted-foreground">{s.impact}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </PageShell>
  );
}
