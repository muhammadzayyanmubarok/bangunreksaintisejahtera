import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";
import { Linkedin, Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-page py-20">
        <div className="grid gap-12 lg:grid-cols-4">
          <div className="space-y-5">
            <Logo variant="light" />
            <p className="text-sm text-primary-foreground/70 max-w-xs">
              Mitra strategis bagi perusahaan dalam menghadirkan solusi bisnis yang inovatif, terukur, dan berdampak.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.linkedin.com/in/pt-bangun-reksa-inti-sejahtera-brs-18ab363a5/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn BRS"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-primary-foreground/20 hover:bg-accent hover:text-accent-foreground hover:border-transparent transition-colors"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>

          <FooterCol title="Navigasi" links={[
            { to: "/", label: "Beranda" },
            { to: "/about", label: "Tentang BARIS" },
            { to: "/success-story", label: "Success Story" },
            { to: "/resources", label: "Resources" },
            { to: "/contact", label: "Kontak" },
          ]} />

          <FooterCol title="Layanan" links={[
            { to: "/services/software-house", label: "Software House" },
            { to: "/services/advisory", label: "Advisory Services" },
            { to: "/services/event-organizer", label: "Event Organizer" },
            { to: "/services/procurement", label: "Procurement" },
          ]} />

          <div>
            <h4 className="mb-5 font-display text-sm font-semibold uppercase tracking-widest text-accent">Kontak</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/80">
              <li className="flex gap-3"><MapPin className="h-4 w-4 mt-0.5 shrink-0 text-accent" /> Jakarta, Indonesia</li>
              <li className="flex gap-3"><Mail className="h-4 w-4 mt-0.5 shrink-0 text-accent" /><a href="mailto:bangunreksaintisejahtera@gmail.com" className="hover:text-primary-foreground break-all">bangunreksaintisejahtera@gmail.com</a></li>
              <li className="flex gap-3"><Phone className="h-4 w-4 mt-0.5 shrink-0 text-accent" /> +62 21 0000 0000</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-primary-foreground/15 pt-8 text-xs text-primary-foreground/60 sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} BARIS. Seluruh hak cipta dilindungi.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary-foreground">Kebijakan Privasi</a>
            <a href="#" className="hover:text-primary-foreground">Ketentuan Layanan</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: { to: string; label: string }[] }) {
  return (
    <div>
      <h4 className="mb-5 font-display text-sm font-semibold uppercase tracking-widest text-accent">{title}</h4>
      <ul className="space-y-3 text-sm text-primary-foreground/80">
        {links.map((l) => (
          <li key={l.to}><Link to={l.to} className="hover:text-primary-foreground">{l.label}</Link></li>
        ))}
      </ul>
    </div>
  );
}
