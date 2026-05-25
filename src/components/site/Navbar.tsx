import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Logo } from "./Logo";
import { ChevronDown, Menu, X } from "lucide-react";

const services = [
  { to: "/services/culture-transformation", label: "Culture Transformation" },
  { to: "/services/talent", label: "Talent" },
  { to: "/services/solution", label: "Solution" },
] as const;

const navItems = [
  { to: "/", label: "Beranda" },
  { to: "/success-story", label: "Success Story" },
  { to: "/resources", label: "Resources" },
  { to: "/about", label: "Tentang" },
  { to: "/contact", label: "Kontak" },
] as const;

export function Navbar({ transparentOnTop = false }: { transparentOnTop?: boolean }) {
  const [scrolled, setScrolled] = useState(!transparentOnTop);
  const [open, setOpen] = useState(false);
  const [svcOpen, setSvcOpen] = useState(false);

  useEffect(() => {
    if (!transparentOnTop) return;
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [transparentOnTop]);

  const solid = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        solid ? "bg-background/85 backdrop-blur-xl border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="container-page flex h-20 items-center justify-between">
        <Link to="/" className="flex items-center">
          <Logo variant={solid ? "dark" : transparentOnTop ? "light" : "dark"} />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          <NavLink to="/" solid={solid} transparent={transparentOnTop}>Beranda</NavLink>
          <div
            className="relative"
            onMouseEnter={() => setSvcOpen(true)}
            onMouseLeave={() => setSvcOpen(false)}
          >
            <Link
              to="/services"
              className={`flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                solid ? "text-foreground hover:bg-muted" : "text-primary-foreground/90 hover:text-primary-foreground"
              }`}
            >
              Services <ChevronDown className="h-4 w-4" />
            </Link>
            {svcOpen && (
              <div className="absolute left-0 top-full w-72 pt-2">
                <div className="rounded-2xl border border-border bg-popover p-2 shadow-elegant animate-fade-up">
                  {services.map((s) => (
                    <Link
                      key={s.to}
                      to={s.to}
                      className="block rounded-xl px-4 py-3 text-sm hover:bg-muted"
                    >
                      <span className="font-display font-semibold text-foreground">{s.label}</span>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
          {navItems.slice(1).map((n) => (
            <NavLink key={n.to} to={n.to} solid={solid} transparent={transparentOnTop}>{n.label}</NavLink>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link
            to="/contact"
            className="inline-flex items-center rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground shadow-soft transition-transform hover:-translate-y-0.5"
          >
            Hubungi Kami
          </Link>
        </div>

        <button
          className={`lg:hidden ${solid ? "text-foreground" : transparentOnTop ? "text-primary-foreground" : "text-foreground"}`}
          onClick={() => setOpen((v) => !v)}
          aria-label="Menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-background">
          <div className="container-page space-y-1 py-4">
            {navItems.map((n) => (
              <Link key={n.to} to={n.to} onClick={() => setOpen(false)} className="block rounded-lg px-3 py-3 text-sm font-medium hover:bg-muted">{n.label}</Link>
            ))}
            <div className="pt-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground px-3">Services</div>
            {services.map((s) => (
              <Link key={s.to} to={s.to} onClick={() => setOpen(false)} className="block rounded-lg px-3 py-2 text-sm hover:bg-muted">{s.label}</Link>
            ))}
            <Link to="/contact" onClick={() => setOpen(false)} className="mt-3 block rounded-full bg-accent px-5 py-3 text-center text-sm font-semibold text-accent-foreground">Hubungi Kami</Link>
          </div>
        </div>
      )}
    </header>
  );
}

function NavLink({ to, solid, transparent, children }: { to: string; solid: boolean; transparent: boolean; children: React.ReactNode }) {
  return (
    <Link
      to={to}
      activeOptions={{ exact: true }}
      className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
        solid ? "text-foreground hover:bg-muted" : transparent ? "text-primary-foreground/90 hover:text-primary-foreground" : "text-foreground hover:bg-muted"
      }`}
      activeProps={{ className: "bg-muted" }}
    >
      {children}
    </Link>
  );
}
