import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

export function PageShell({ children, transparentNav = false }: { children: React.ReactNode; transparentNav?: boolean }) {
  return (
    <div className="min-h-screen bg-background">
      <Navbar transparentOnTop={transparentNav} />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

export function PageHero({ eyebrow, title, description }: { eyebrow?: string; title: string; description?: string }) {
  return (
    <section className="relative overflow-hidden bg-primary pt-40 pb-24 text-primary-foreground">
      <div className="absolute inset-0 grain opacity-40" />
      <div className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-secondary/20 blur-3xl" />
      <div className="container-page relative">
        {eyebrow && (
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            {eyebrow}
          </p>
        )}
        <h1 className="max-w-3xl text-balance font-display text-5xl font-bold leading-[1.05] md:text-6xl">{title}</h1>
        {description && <p className="mt-6 max-w-2xl text-lg text-primary-foreground/75">{description}</p>}
      </div>
    </section>
  );
}

export function CTASection() {
  return (
    <section className="container-page py-24">
      <div className="relative overflow-hidden rounded-3xl bg-primary p-10 md:p-16 text-primary-foreground shadow-elegant">
        <div className="absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-accent/30 blur-3xl" />
        <div className="relative grid gap-8 md:grid-cols-[1.5fr_1fr] md:items-end">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-accent">Mulai Kolaborasi</p>
            <h2 className="font-display text-4xl font-bold md:text-5xl">Siap mengakselerasi pertumbuhan bisnis Anda?</h2>
            <p className="mt-4 max-w-xl text-primary-foreground/75">
              Diskusikan tantangan dan peluang bisnis bersama tim BARIS. Kami hadir sebagai mitra strategis Anda.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 md:justify-end">
            <a href="/contact" className="inline-flex items-center rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground shadow-soft transition-transform hover:-translate-y-0.5">Hubungi Tim</a>
            <a href="/services" className="inline-flex items-center rounded-full border border-primary-foreground/30 px-6 py-3 text-sm font-semibold hover:bg-primary-foreground/10">Lihat Layanan</a>
          </div>
        </div>
      </div>
    </section>
  );
}
