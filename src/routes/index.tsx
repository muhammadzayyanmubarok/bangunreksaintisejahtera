import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, CTASection } from "@/components/site/PageShell";
import { SERVICES, CLIENTS, SUCCESS_STORIES, INSIGHTS } from "@/data/site";
import { ArrowRight, Sparkles, Target, Workflow, ShieldCheck, ArrowUpRight, Check } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "BARIS — Mitra Strategis Solusi Bisnis B2B" },
      { name: "description", content: "BARIS menghadirkan solusi teknologi dan digital untuk membantu perusahaan meningkatkan efisiensi, memperkuat operasional, dan mempercepat transformasi bisnis." },
      { property: "og:title", content: "BARIS — Mitra Strategis Solusi Bisnis B2B" },
      { property: "og:description", content: "Solusi bisnis B2B yang inovatif, strategis, dan berdampak." },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <PageShell transparentNav>
      <Hero />
      <Clients />
      <ServicesOverview />
      <SuccessStorySection />
      <WhyBaris />
      <Insights />
      <CTASection />
    </PageShell>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-primary text-primary-foreground">
      <div className="absolute inset-0 grain opacity-50" />
      <div className="absolute -top-40 -right-32 h-[600px] w-[600px] rounded-full bg-secondary/25 blur-3xl" />
      <div className="absolute -bottom-40 -left-20 h-[400px] w-[400px] rounded-full bg-accent/15 blur-3xl" />

      <div className="container-page relative grid min-h-[92vh] items-center gap-16 pt-32 pb-20 lg:grid-cols-[1.15fr_1fr]">
        <div className="animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            <Sparkles className="h-3.5 w-3.5" /> Solusi Bisnis B2B Terintegrasi
          </span>
          <h1 className="mt-6 text-balance font-display text-5xl font-bold leading-[1.02] md:text-7xl">
            Membangun bisnis masa depan, <span className="text-accent">bersama BARIS.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-primary-foreground/75">
            BARIS menghadirkan solusi teknologi dan digital yang dirancang untuk membantu perusahaan meningkatkan efisiensi, memperkuat operasional, dan mempercepat transformasi bisnis. Mulai dari artificial intelligence hingga cloud infrastructure, kami membantu organisasi membangun fondasi digital yang aman, modern, dan scalable.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link to="/services" className="group inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-semibold text-accent-foreground shadow-soft transition-transform hover:-translate-y-0.5">
              Jelajahi Layanan <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/30 px-6 py-3.5 text-sm font-semibold hover:bg-primary-foreground/10">
              Hubungi Kami
            </Link>
          </div>
          <div className="mt-12 grid max-w-lg grid-cols-3 gap-6 border-t border-primary-foreground/15 pt-8">
            {[{v:"50+",l:"Klien Korporasi"},{v:"120+",l:"Proyek Strategis"},{v:"10+ thn",l:"Pengalaman Industri"}].map(s=>(
              <div key={s.l}>
                <div className="font-display text-3xl font-bold text-accent">{s.v}</div>
                <div className="mt-1 text-xs text-primary-foreground/60">{s.l}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative hidden lg:block">
          <HeroVisual />
        </div>
      </div>
    </section>
  );
}

function HeroVisual() {
  return (
    <div className="relative aspect-square">
      <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-secondary/30 to-accent/20 blur-2xl" />
      <div className="relative grid h-full grid-cols-2 gap-4">
        <div className="space-y-4">
          <div className="rounded-3xl bg-primary-foreground/10 p-6 backdrop-blur-sm border border-primary-foreground/15">
            <Workflow className="h-8 w-8 text-accent" />
            <p className="mt-4 font-display text-lg font-semibold">Strategi & Eksekusi</p>
            <p className="mt-1 text-xs text-primary-foreground/60">End-to-end delivery</p>
          </div>
          <div className="rounded-3xl bg-accent p-6 text-accent-foreground">
            <div className="font-display text-4xl font-bold">2x</div>
            <p className="mt-2 text-xs font-semibold uppercase tracking-widest">Akselerasi GTM</p>
          </div>
        </div>
        <div className="space-y-4 pt-12">
          <div className="rounded-3xl bg-secondary p-6 text-secondary-foreground">
            <Target className="h-8 w-8" />
            <p className="mt-4 font-display text-lg font-semibold">Outcome-driven</p>
            <p className="mt-1 text-xs opacity-70">Berbasis dampak nyata</p>
          </div>
          <div className="rounded-3xl bg-primary-foreground/10 p-6 backdrop-blur-sm border border-primary-foreground/15">
            <ShieldCheck className="h-8 w-8 text-accent" />
            <p className="mt-4 font-display text-lg font-semibold">Trusted Partner</p>
            <p className="mt-1 text-xs text-primary-foreground/60">50+ klien enterprise</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Clients() {
  return (
    <section className="border-y border-border bg-[var(--color-beige)]">
      <div className="container-page py-12">
        <p className="mb-8 text-center text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
          Dipercaya oleh perusahaan terkemuka
        </p>
        <div className="grid grid-cols-2 items-center gap-x-8 gap-y-6 sm:grid-cols-4 lg:grid-cols-8">
          {CLIENTS.map((c) => (
            <div key={c} className="flex h-12 items-center justify-center">
              <span className={`font-display text-base font-semibold tracking-wide ${c==="Metranet" ? "text-primary" : "text-muted-foreground/70"}`}>
                {c}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServicesOverview() {
  return (
    <section className="container-page py-28">
      <div className="grid gap-10 lg:grid-cols-[1fr_2fr] lg:items-end mb-14">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">Layanan Kami</p>
          <h2 className="mt-3 font-display text-4xl font-bold md:text-5xl">Tiga pilar untuk akselerasi bisnis Anda.</h2>
        </div>
        <p className="text-lg text-muted-foreground max-w-xl lg:justify-self-end">
          Culture Transformation, Talent, dan Solution — dirancang untuk membantu perusahaan bertumbuh, beradaptasi, dan berinovasi.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {SERVICES.map((s) => (
          <article
            key={s.slug}
            className="group relative flex flex-col overflow-hidden rounded-3xl border border-border bg-card p-8 transition-all hover:-translate-y-1 hover:shadow-elegant"
          >
            <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-secondary/20 blur-2xl opacity-0 transition-opacity group-hover:opacity-100" />
            <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
              <s.icon className="h-6 w-6" />
            </div>
            <p className="relative mt-8 text-xs font-semibold uppercase tracking-[0.2em] text-primary">{s.tagline}</p>
            <h3 className="relative mt-2 font-display text-2xl font-bold">{s.title}</h3>
            <p className="relative mt-3 text-muted-foreground">{s.short}</p>
            <ul className="relative mt-6 space-y-2">
              {s.capabilities.slice(0, 4).map((c: string) => (
                <li key={c} className="flex items-start gap-2 text-sm text-foreground/80">
                  <Check className="h-4 w-4 shrink-0 text-primary mt-0.5" />
                  <span>{c}</span>
                </li>
              ))}
              {s.capabilities.length > 4 && (
                <li className="pl-6 text-xs text-muted-foreground">+{s.capabilities.length - 4} lainnya</li>
              )}
            </ul>
            <Link
              to={`/services/${s.slug}` as any}
              className="relative mt-8 inline-flex items-center gap-2 self-start rounded-full border border-primary px-4 py-2 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              Explore More <ArrowUpRight className="h-4 w-4" />
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}

function SuccessStorySection() {
  return (
    <section className="bg-[var(--color-beige)]">
      <div className="container-page py-28">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-14">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">Success Story</p>
            <h2 className="mt-3 max-w-2xl font-display text-4xl font-bold md:text-5xl">Dampak nyata bagi mitra bisnis kami.</h2>
          </div>
          <Link to="/success-story" className="inline-flex items-center gap-2 rounded-full border border-primary px-5 py-3 text-sm font-semibold text-primary hover:bg-primary hover:text-primary-foreground transition-colors">
            Lihat Semua Cerita <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {SUCCESS_STORIES.map((s, i) => (
            <article key={s.slug} className={`group flex flex-col rounded-3xl p-8 transition-all hover:-translate-y-1 ${i===0 ? "bg-primary text-primary-foreground" : "bg-card border border-border hover:shadow-elegant"}`}>
              <p className={`text-xs font-semibold uppercase tracking-[0.2em] ${i===0 ? "text-accent" : "text-primary"}`}>{s.industry}</p>
              <h3 className="mt-2 font-display text-2xl font-bold">{s.client}</h3>
              <p className={`mt-1 text-sm font-medium ${i===0 ? "text-primary-foreground/80" : "text-muted-foreground"}`}>{s.project}</p>
              <p className={`mt-5 text-base ${i===0 ? "text-primary-foreground/90" : "text-foreground"}`}>{s.highlight}</p>
              <Link
                to="/success-story"
                className={`mt-auto pt-8 inline-flex items-center gap-2 text-sm font-semibold ${i===0 ? "text-accent" : "text-primary"}`}
              >
                Selengkapnya <ArrowRight className="h-4 w-4" />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyBaris() {
  const items = [
    { icon: Sparkles, title: "Solusi Inovatif", desc: "Pendekatan kreatif yang menggabungkan teknologi terbaru dengan kebutuhan bisnis nyata." },
    { icon: Target, title: "Strategis & Terukur", desc: "Setiap inisiatif dirancang dengan target yang jelas dan dampak yang dapat diukur." },
    { icon: Workflow, title: "End-to-End Execution", desc: "Dari ideasi, perencanaan, hingga implementasi — kami menyertai setiap tahapnya." },
    { icon: ShieldCheck, title: "Mitra Terpercaya", desc: "Komitmen jangka panjang dengan integritas, transparansi, dan akuntabilitas tinggi." },
  ];
  return (
    <section className="container-page py-28">
      <div className="grid gap-16 lg:grid-cols-[1fr_1.4fr]">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">Kenapa BARIS</p>
          <h2 className="mt-3 font-display text-4xl font-bold md:text-5xl text-balance">Mitra strategis untuk perusahaan yang siap bertumbuh.</h2>
          <p className="mt-6 text-muted-foreground">
            Kami percaya bahwa bisnis yang berdampak lahir dari kombinasi strategi yang tajam, eksekusi yang disiplin, dan kemitraan yang tulus.
          </p>
          <Link to="/about" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all">
            Selengkapnya tentang BARIS <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {items.map((it) => (
            <div key={it.title} className="rounded-2xl border border-border bg-card p-7 transition-colors hover:border-primary/40">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary/40 text-primary">
                <it.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 font-display text-lg font-bold">{it.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Insights() {
  return (
    <section className="bg-[var(--color-beige)]">
      <div className="container-page py-28">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-14">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">Insights</p>
            <h2 className="mt-3 max-w-xl font-display text-4xl font-bold md:text-5xl">Wawasan untuk pemimpin bisnis.</h2>
          </div>
          <Link to="/resources" className="text-sm font-semibold text-primary inline-flex items-center gap-2 hover:gap-3 transition-all">
            Semua Insights <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {INSIGHTS.map((it) => (
            <article key={it.title} className="group flex h-full flex-col overflow-hidden rounded-2xl bg-card border border-border transition-all hover:-translate-y-1 hover:shadow-elegant">
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
      </div>
    </section>
  );
}
