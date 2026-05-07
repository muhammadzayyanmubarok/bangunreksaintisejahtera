import { createFileRoute, Link, Outlet, useLocation } from "@tanstack/react-router";
import { PageShell, PageHero, CTASection } from "@/components/site/PageShell";
import { SERVICES } from "@/data/site";
import { ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Layanan BARIS — Solusi Bisnis Terintegrasi" },
      { name: "description", content: "Software House, Advisory, Event Organizer, dan Procurement untuk perusahaan Indonesia." },
    ],
  }),
  component: ServicesLayout,
});

function ServicesLayout() {
  const { pathname } = useLocation();
  if (pathname === "/services" || pathname === "/services/") return <ServicesIndex />;
  return <Outlet />;
}

function ServicesIndex() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Layanan BARIS"
        title="Solusi terintegrasi untuk akselerasi bisnis Anda."
        description="Empat pilar layanan yang dirancang untuk menjawab tantangan perusahaan modern — dari teknologi, strategi, hingga eksekusi."
      />
      <section className="container-page py-24">
        <div className="grid gap-6 md:grid-cols-2">
          {SERVICES.map((s) => (
            <Link key={s.slug} to={`/services/${s.slug}` as any} className="group rounded-3xl border border-border bg-card p-10 transition-all hover:-translate-y-1 hover:shadow-elegant">
              <div className="flex items-start justify-between">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
                  <s.icon className="h-6 w-6" />
                </div>
                <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-primary" />
              </div>
              <p className="mt-8 text-xs font-semibold uppercase tracking-[0.2em] text-primary">{s.tagline}</p>
              <h2 className="mt-2 font-display text-3xl font-bold">{s.title}</h2>
              <p className="mt-3 text-muted-foreground">{s.short}</p>
            </Link>
          ))}
        </div>
      </section>
      <CTASection />
    </PageShell>
  );
}
