import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/site/PageShell";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Kontak — BARIS" },
      { name: "description", content: "Diskusikan kebutuhan bisnis Anda bersama tim BARIS." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  return (
    <PageShell>
      <PageHero
        eyebrow="Hubungi Kami"
        title="Mari diskusikan langkah berikutnya."
        description="Sampaikan tantangan atau peluang bisnis Anda. Tim BARIS akan menghubungi Anda untuk eksplorasi awal tanpa biaya."
      />
      <section className="container-page py-24">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <div className="space-y-6">
            <ContactItem icon={Mail} title="Email" value="hello@baris.co.id" />
            <ContactItem icon={Phone} title="Telepon" value="+62 21 0000 0000" />
            <ContactItem icon={MapPin} title="Kantor" value="Jakarta, Indonesia" />
            <div className="rounded-3xl bg-[var(--color-beige)] p-8">
              <h3 className="font-display text-xl font-bold">Jam Operasional</h3>
              <p className="mt-2 text-muted-foreground">Senin – Jumat, 09.00 – 18.00 WIB</p>
            </div>
          </div>

          <form
            onSubmit={(e) => { e.preventDefault(); setSent(true); }}
            className="rounded-3xl border border-border bg-card p-8 md:p-10 shadow-soft"
          >
            <div className="grid gap-5">
              <Field label="Nama Lengkap" name="name" />
              <Field label="Email Bisnis" name="email" type="email" />
              <Field label="Perusahaan" name="company" />
              <Field label="Layanan yang Diminati" name="service" />
              <div>
                <label className="block text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-2">Pesan</label>
                <textarea rows={5} required className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20" />
              </div>
              <button type="submit" className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-semibold text-accent-foreground hover:-translate-y-0.5 transition-transform">
                <Send className="h-4 w-4" /> Kirim Pesan
              </button>
              {sent && <p className="text-sm text-primary">Terima kasih! Tim kami akan segera menghubungi Anda.</p>}
            </div>
          </form>
        </div>
      </section>
    </PageShell>
  );
}

function ContactItem({ icon: Icon, title, value }: { icon: any; title: string; value: string }) {
  return (
    <div className="flex gap-4">
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground">
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">{title}</p>
        <p className="mt-1 font-display text-lg font-semibold">{value}</p>
      </div>
    </div>
  );
}

function Field({ label, name, type = "text" }: { label: string; name: string; type?: string }) {
  return (
    <div>
      <label className="block text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-2">{label}</label>
      <input name={name} type={type} required className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20" />
    </div>
  );
}
