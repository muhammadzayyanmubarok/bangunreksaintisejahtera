"use client";
import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";

export const Route = createFileRoute("/admin")({
  component: AdminPanel,
});

// ── Types ──────────────────────────────────────────────────────────────────
type Service = {
  slug: string;
  title: string;
  tagline: string;
  short: string;
  capabilities: string[];
  opening: string[];
  details: { title: string; desc: string }[];
};

type SuccessStory = {
  slug: string;
  client: string;
  industry: string;
  project: string;
  highlight: string;
  challenge: string;
  solution: string;
  impact: string;
  metrics: { v: string; l: string }[];
};

type Insight = {
  title: string;
  category: string;
  read: string;
  excerpt: string;
};

type SiteContent = {
  services: Service[];
  stories: SuccessStory[];
  insights: Insight[];
  clients: string[];
};

// ── Initial Data ───────────────────────────────────────────────────────────
const DEFAULT_CONTENT: SiteContent = {
  services: [
    {
      slug: "culture-transformation",
      title: "Culture Transformation",
      tagline: "Budaya inovasi & pertumbuhan",
      short:
        "Membangun budaya inovasi yang mendorong organisasi bertumbuh, beradaptasi, dan terus berkembang.",
      capabilities: [
        "Innovation Workshop",
        "In-house Innovation Lab",
        "Training & Certification",
        "Corporate Event & Activation",
      ],
      opening: [
        "Culture Transformation membantu perusahaan membangun budaya kerja yang lebih adaptif, kolaboratif, dan inovatif.",
        "Melalui pendekatan strategis dan implementatif, BARIS mendampingi organisasi dalam menciptakan perubahan budaya secara nyata.",
      ],
      details: [
        {
          title: "Innovation Workshop",
          desc: "Fasilitasi workshop inovasi untuk membantu tim mengidentifikasi tantangan bisnis dan menghasilkan solusi yang actionable.",
        },
        {
          title: "In-house Innovation Lab",
          desc: "Membangun ekosistem inovasi internal sebagai wadah pengembangan ide dan percepatan inovasi.",
        },
        {
          title: "Training & Certification",
          desc: "Program pengembangan kompetensi untuk mendukung transformasi organisasi.",
        },
        {
          title: "Corporate Event & Activation",
          desc: "Perencanaan event korporasi yang memperkuat engagement dan budaya perusahaan.",
        },
      ],
    },
    {
      slug: "talent",
      title: "Talent",
      tagline: "Pengembangan & penyelarasan talenta",
      short:
        "Membantu perusahaan mengembangkan dan menyelaraskan talenta untuk mendukung transformasi bisnis.",
      capabilities: [
        "Talent Scouting & Mapping",
        "End-to-End Talent Solutions",
        "Performance Alignment",
      ],
      opening: [
        "Talent BARIS menghadirkan solusi pengelolaan talenta secara end-to-end.",
        "Mulai dari talent mapping hingga performance alignment, kami membantu memastikan setiap talenta berkembang selaras strategi perusahaan.",
      ],
      details: [
        {
          title: "Talent Scouting & Mapping",
          desc: "Identifikasi dan pemetaan talenta berdasarkan potensi dan kebutuhan strategis perusahaan.",
        },
        {
          title: "End-to-End Talent Solutions",
          desc: "Solusi pengelolaan talenta menyeluruh dari sourcing hingga succession planning.",
        },
        {
          title: "Performance Alignment",
          desc: "Menyelaraskan kontribusi individu dan tim dengan target bisnis perusahaan.",
        },
      ],
    },
    {
      slug: "solution",
      title: "Solution",
      tagline: "Teknologi & digital terintegrasi",
      short:
        "Solusi teknologi dan digital terintegrasi untuk mendukung transformasi bisnis yang scalable.",
      capabilities: [
        "Artificial Intelligence",
        "Software & Digital Products",
        "Data & Analytics",
        "Security & Platform Engineering",
        "Cloud & Infrastructure",
        "Procurement",
      ],
      opening: [
        "BARIS menghadirkan solusi teknologi dan digital untuk membantu perusahaan meningkatkan efisiensi operasional.",
        "Mulai dari AI hingga cloud infrastructure, kami membantu organisasi membangun fondasi digital yang aman dan scalable.",
      ],
      details: [
        {
          title: "Artificial Intelligence",
          desc: "Strategi dan implementasi AI untuk meningkatkan efisiensi dan mendukung pengambilan keputusan.",
        },
        {
          title: "Software & Digital Products",
          desc: "Pengembangan software dan aplikasi digital yang scalable dan modern.",
        },
        {
          title: "Data & Analytics",
          desc: "Mengubah data menjadi insight strategis melalui dashboard dan KPI monitoring.",
        },
        {
          title: "Security & Platform Engineering",
          desc: "Membangun arsitektur sistem yang aman dan scalable.",
        },
        {
          title: "Cloud & Infrastructure",
          desc: "Solusi cloud dan infrastruktur modern yang fleksibel dan reliable.",
        },
        {
          title: "Procurement",
          desc: "Layanan pengadaan strategis untuk mendukung efisiensi operasional.",
        },
      ],
    },
  ],
  stories: [
    {
      slug: "metranet-platform",
      client: "Metranet",
      industry: "Telekomunikasi",
      project: "Platform B2B Cloud-Native",
      highlight: "Efisiensi operasional naik 38% dan rilis produk 2x lebih cepat.",
      challenge:
        "Memerlukan platform digital terintegrasi untuk mempercepat penetrasi layanan B2B di pasar nasional.",
      solution:
        "BARIS membangun platform berbasis cloud-native dengan arsitektur modular dan integrasi sistem internal Metranet.",
      impact:
        "Peningkatan efisiensi operasional 38% dan akselerasi go-to-market produk baru hingga 2x lebih cepat.",
      metrics: [
        { v: "+38%", l: "Efisiensi operasional" },
        { v: "2x", l: "Kecepatan rilis produk" },
        { v: "99.9%", l: "Uptime layanan" },
      ],
    },
    {
      slug: "transformasi-bumn",
      client: "BUMN Energi",
      industry: "Energi & Sumber Daya",
      project: "Transformasi Digital End-to-End",
      highlight: "Waktu proses inti turun 45% dengan dampak efisiensi signifikan.",
      challenge:
        "Transformasi proses bisnis konvensional menjadi digital-first dengan dampak terukur.",
      solution:
        "Pendampingan advisory selama 9 bulan, perancangan blueprint digital, serta implementasi sistem terintegrasi.",
      impact:
        "Pengurangan waktu proses inti hingga 45% dan penghematan biaya operasional signifikan.",
      metrics: [
        { v: "-45%", l: "Waktu proses" },
        { v: "+27%", l: "Produktivitas" },
        { v: "9 bln", l: "Durasi proyek" },
      ],
    },
    {
      slug: "konferensi-nasional",
      client: "Asosiasi Industri",
      industry: "Event & Komunitas",
      project: "Konferensi Nasional Hybrid",
      highlight: "5.000+ peserta hybrid dengan NPS 78 dan liputan media nasional.",
      challenge: "Menyelenggarakan konferensi nasional hybrid skala besar dengan standar premium.",
      solution:
        "End-to-end event management dari konsep, branding, produksi panggung, hingga platform hybrid.",
      impact: "5.000+ peserta hybrid, NPS 78, dan liputan media nasional yang luas.",
      metrics: [
        { v: "5K+", l: "Peserta hybrid" },
        { v: "78", l: "NPS Score" },
        { v: "30+", l: "Liputan media" },
      ],
    },
  ],
  insights: [
    {
      title: "Lima Pilar Transformasi Digital di Era AI",
      category: "Strategi",
      read: "6 menit",
      excerpt: "Bagaimana perusahaan dapat menyusun roadmap transformasi yang adaptif dan terukur.",
    },
    {
      title: "Membangun Tim Produk Berperforma Tinggi",
      category: "Organisasi",
      read: "5 menit",
      excerpt: "Praktik terbaik membangun cross-functional team yang fokus pada outcome.",
    },
    {
      title: "Pengadaan Strategis: Beyond Cost Saving",
      category: "Procurement",
      read: "4 menit",
      excerpt:
        "Mengapa procurement modern adalah pendorong nilai bisnis, bukan sekadar fungsi pendukung.",
    },
  ],
  clients: [
    "Metranet",
    "Telkom Group",
    "BUMN Partner",
    "Astra Mitra",
    "Pertamina Lab",
    "Bank Nusantara",
    "Indosat Hub",
    "Garuda Tech",
  ],
};

// ── KV API ─────────────────────────────────────────────────────────────────
async function loadContent(): Promise<SiteContent> {
  try {
    const res = await fetch("/api/content?key=siteContent");
    const data = await res.json();
    return data || DEFAULT_CONTENT;
  } catch {
    return DEFAULT_CONTENT;
  }
}

async function saveContent(content: SiteContent): Promise<boolean> {
  try {
    const res = await fetch("/api/content?key=siteContent", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(content),
    });
    const data = await res.json();
    return data.success;
  } catch {
    return false;
  }
}

// ── Login Screen ───────────────────────────────────────────────────────────
function LoginScreen({ onLogin }: { onLogin: () => void }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = () => {
    if (username === "adminbaris" && password === "adminbaris") {
      onLogin();
    } else {
      setError("Username atau password salah.");
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #0a5950 0%, #0d6b60 50%, #1a7a6e 100%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "'Montserrat', sans-serif",
      }}
    >
      <div
        style={{
          background: "white",
          borderRadius: "24px",
          padding: "48px",
          width: "100%",
          maxWidth: "420px",
          boxShadow: "0 32px 80px rgba(0,0,0,0.2)",
        }}
      >
        <div style={{ textAlign: "center", marginBottom: "32px" }}>
          <div
            style={{
              width: "56px",
              height: "56px",
              background: "linear-gradient(135deg, #0a5950, #1a7a6e)",
              borderRadius: "16px",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "16px",
            }}
          >
            <span style={{ color: "white", fontWeight: "800", fontSize: "20px" }}>B</span>
          </div>
          <h1 style={{ fontSize: "24px", fontWeight: "800", color: "#0a5950", margin: "0 0 4px" }}>
            BARIS Admin
          </h1>
          <p style={{ color: "#6b7280", fontSize: "14px", margin: 0 }}>Content Management System</p>
        </div>

        <div style={{ marginBottom: "16px" }}>
          <label
            style={{
              display: "block",
              fontSize: "13px",
              fontWeight: "600",
              color: "#374151",
              marginBottom: "6px",
            }}
          >
            Username
          </label>
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Masukkan username"
            style={{
              width: "100%",
              padding: "12px 16px",
              borderRadius: "10px",
              border: "1.5px solid #e5e7eb",
              fontSize: "14px",
              outline: "none",
              boxSizing: "border-box",
              fontFamily: "inherit",
            }}
            onFocus={(e) => (e.target.style.borderColor = "#0a5950")}
            onBlur={(e) => (e.target.style.borderColor = "#e5e7eb")}
          />
        </div>

        <div style={{ marginBottom: "24px" }}>
          <label
            style={{
              display: "block",
              fontSize: "13px",
              fontWeight: "600",
              color: "#374151",
              marginBottom: "6px",
            }}
          >
            Password
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Masukkan password"
            onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
            style={{
              width: "100%",
              padding: "12px 16px",
              borderRadius: "10px",
              border: "1.5px solid #e5e7eb",
              fontSize: "14px",
              outline: "none",
              boxSizing: "border-box",
              fontFamily: "inherit",
            }}
            onFocus={(e) => (e.target.style.borderColor = "#0a5950")}
            onBlur={(e) => (e.target.style.borderColor = "#e5e7eb")}
          />
        </div>

        {error && (
          <div
            style={{
              background: "#fef2f2",
              border: "1px solid #fecaca",
              borderRadius: "8px",
              padding: "10px 14px",
              color: "#dc2626",
              fontSize: "13px",
              marginBottom: "16px",
            }}
          >
            {error}
          </div>
        )}

        <button
          onClick={handleSubmit}
          style={{
            width: "100%",
            padding: "14px",
            background: "linear-gradient(135deg, #0a5950, #1a7a6e)",
            color: "white",
            border: "none",
            borderRadius: "10px",
            fontSize: "15px",
            fontWeight: "700",
            cursor: "pointer",
            fontFamily: "inherit",
          }}
        >
          Masuk
        </button>
      </div>
    </div>
  );
}

// ── Sidebar ────────────────────────────────────────────────────────────────
const NAV = [
  { id: "services", label: "Services", icon: "⚡" },
  { id: "stories", label: "Success Stories", icon: "🏆" },
  { id: "insights", label: "Insights", icon: "💡" },
  { id: "clients", label: "Clients", icon: "🤝" },
];

function Sidebar({
  active,
  onNav,
  onLogout,
}: {
  active: string;
  onNav: (id: string) => void;
  onLogout: () => void;
}) {
  return (
    <div
      style={{
        width: "240px",
        minHeight: "100vh",
        background: "linear-gradient(180deg, #0a5950 0%, #0d6b60 100%)",
        display: "flex",
        flexDirection: "column",
        position: "fixed",
        left: 0,
        top: 0,
        bottom: 0,
        fontFamily: "'Montserrat', sans-serif",
      }}
    >
      <div style={{ padding: "24px 20px 20px", borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <div
            style={{
              width: "36px",
              height: "36px",
              background: "rgba(255,255,255,0.15)",
              borderRadius: "10px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <span style={{ color: "white", fontWeight: "800", fontSize: "16px" }}>B</span>
          </div>
          <div>
            <div style={{ color: "white", fontWeight: "800", fontSize: "16px", lineHeight: 1 }}>
              BARIS
            </div>
            <div style={{ color: "rgba(255,255,255,0.6)", fontSize: "11px", marginTop: "2px" }}>
              Admin Panel
            </div>
          </div>
        </div>
      </div>

      <div style={{ flex: 1, padding: "16px 12px" }}>
        {NAV.map((n) => (
          <button
            key={n.id}
            onClick={() => onNav(n.id)}
            style={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              gap: "10px",
              padding: "10px 12px",
              borderRadius: "10px",
              background: active === n.id ? "rgba(255,255,255,0.15)" : "transparent",
              border: "none",
              cursor: "pointer",
              marginBottom: "4px",
              color: active === n.id ? "white" : "rgba(255,255,255,0.65)",
              fontSize: "14px",
              fontWeight: active === n.id ? "700" : "500",
              textAlign: "left",
              fontFamily: "inherit",
            }}
            onMouseEnter={(e) => {
              if (active !== n.id)
                (e.currentTarget as HTMLButtonElement).style.background = "rgba(255,255,255,0.08)";
            }}
            onMouseLeave={(e) => {
              if (active !== n.id)
                (e.currentTarget as HTMLButtonElement).style.background = "transparent";
            }}
          >
            <span style={{ fontSize: "16px" }}>{n.icon}</span>
            {n.label}
          </button>
        ))}
      </div>

      <div style={{ padding: "16px 12px", borderTop: "1px solid rgba(255,255,255,0.1)" }}>
        <button
          onClick={onLogout}
          style={{
            width: "100%",
            padding: "10px 12px",
            borderRadius: "10px",
            background: "rgba(255,255,255,0.08)",
            border: "none",
            cursor: "pointer",
            color: "rgba(255,255,255,0.7)",
            fontSize: "14px",
            fontWeight: "500",
            fontFamily: "inherit",
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <span>🚪</span> Keluar
        </button>
      </div>
    </div>
  );
}

// ── Shared Components ──────────────────────────────────────────────────────
function Card({
  children,
  style = {},
}: {
  children: React.ReactNode;
  style?: React.CSSProperties;
}) {
  return (
    <div
      style={{
        background: "white",
        borderRadius: "16px",
        border: "1px solid #e5e7eb",
        padding: "24px",
        marginBottom: "16px",
        ...style,
      }}
    >
      {children}
    </div>
  );
}

function Input({
  label,
  value,
  onChange,
  multiline = false,
  rows = 3,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  multiline?: boolean;
  rows?: number;
}) {
  const base: React.CSSProperties = {
    width: "100%",
    padding: "10px 14px",
    borderRadius: "8px",
    border: "1.5px solid #e5e7eb",
    fontSize: "14px",
    outline: "none",
    boxSizing: "border-box",
    fontFamily: "inherit",
    resize: multiline ? "vertical" : undefined,
  };
  return (
    <div style={{ marginBottom: "14px" }}>
      <label
        style={{
          display: "block",
          fontSize: "12px",
          fontWeight: "600",
          color: "#6b7280",
          marginBottom: "5px",
          textTransform: "uppercase",
          letterSpacing: "0.05em",
        }}
      >
        {label}
      </label>
      {multiline ? (
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          rows={rows}
          style={base}
          onFocus={(e) => (e.target.style.borderColor = "#0a5950")}
          onBlur={(e) => (e.target.style.borderColor = "#e5e7eb")}
        />
      ) : (
        <input
          value={value}
          onChange={(e) => onChange(e.target.value)}
          style={base}
          onFocus={(e) => (e.target.style.borderColor = "#0a5950")}
          onBlur={(e) => (e.target.style.borderColor = "#e5e7eb")}
        />
      )}
    </div>
  );
}

function Btn({
  children,
  onClick,
  variant = "primary",
  small = false,
  loading = false,
}: {
  children: React.ReactNode;
  onClick: () => void;
  variant?: "primary" | "danger" | "ghost";
  small?: boolean;
  loading?: boolean;
}) {
  const styles: Record<string, React.CSSProperties> = {
    primary: {
      background: "linear-gradient(135deg, #0a5950, #1a7a6e)",
      color: "white",
      border: "none",
    },
    danger: { background: "#fef2f2", color: "#dc2626", border: "1px solid #fecaca" },
    ghost: { background: "#f3f4f6", color: "#374151", border: "1px solid #e5e7eb" },
  };
  return (
    <button
      onClick={onClick}
      disabled={loading}
      style={{
        ...styles[variant],
        padding: small ? "6px 12px" : "10px 20px",
        borderRadius: "8px",
        cursor: loading ? "not-allowed" : "pointer",
        fontSize: small ? "12px" : "14px",
        fontWeight: "600",
        fontFamily: "inherit",
        opacity: loading ? 0.7 : 1,
      }}
    >
      {loading ? "Menyimpan..." : children}
    </button>
  );
}

function SectionHeader({
  title,
  subtitle,
  onAdd,
  addLabel,
}: {
  title: string;
  subtitle: string;
  onAdd?: () => void;
  addLabel?: string;
}) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "space-between",
        marginBottom: "24px",
      }}
    >
      <div>
        <h2 style={{ fontSize: "22px", fontWeight: "800", color: "#0a5950", margin: "0 0 4px" }}>
          {title}
        </h2>
        <p style={{ color: "#6b7280", fontSize: "14px", margin: 0 }}>{subtitle}</p>
      </div>
      {onAdd && <Btn onClick={onAdd}>{addLabel || "+ Tambah"}</Btn>}
    </div>
  );
}

// ── Save Bar ───────────────────────────────────────────────────────────────
function SaveBar({
  onSave,
  loading,
  saved,
}: {
  onSave: () => void;
  loading: boolean;
  saved: boolean;
}) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "flex-end",
        gap: "12px",
        marginTop: "8px",
        alignItems: "center",
      }}
    >
      {saved && (
        <span style={{ color: "#0a5950", fontSize: "14px", fontWeight: "600" }}>
          ✓ Tersimpan ke database!
        </span>
      )}
      <Btn onClick={onSave} loading={loading}>
        Simpan Perubahan
      </Btn>
    </div>
  );
}

// ── Services Tab ───────────────────────────────────────────────────────────
function ServicesTab({
  content,
  setContent,
  onSave,
  saving,
  saved,
}: {
  content: SiteContent;
  setContent: (c: SiteContent) => void;
  onSave: () => void;
  saving: boolean;
  saved: boolean;
}) {
  const [editing, setEditing] = useState<number | null>(null);
  const services = content.services;

  const update = (i: number, field: keyof Service, value: unknown) => {
    const updated = services.map((svc, idx) => (idx === i ? { ...svc, [field]: value } : svc));
    setContent({ ...content, services: updated });
  };

  return (
    <div>
      <SectionHeader title="Services" subtitle={`${services.length} layanan aktif`} />
      {services.map((svc, i) => (
        <Card key={svc.slug}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: editing === i ? "20px" : 0,
            }}
          >
            <div>
              <div style={{ fontWeight: "700", fontSize: "16px", color: "#111827" }}>
                {svc.title}
              </div>
              <div style={{ color: "#6b7280", fontSize: "13px" }}>{svc.tagline}</div>
            </div>
            <Btn small onClick={() => setEditing(editing === i ? null : i)} variant="ghost">
              {editing === i ? "Tutup" : "Edit"}
            </Btn>
          </div>

          {editing === i && (
            <div style={{ borderTop: "1px solid #f3f4f6", paddingTop: "20px" }}>
              <Input label="Judul" value={svc.title} onChange={(v) => update(i, "title", v)} />
              <Input
                label="Tagline"
                value={svc.tagline}
                onChange={(v) => update(i, "tagline", v)}
              />
              <Input
                label="Deskripsi Singkat"
                value={svc.short}
                onChange={(v) => update(i, "short", v)}
                multiline
                rows={2}
              />
              <Input
                label="Paragraf 1"
                value={svc.opening[0]}
                onChange={(v) => update(i, "opening", [v, svc.opening[1]])}
                multiline
                rows={2}
              />
              <Input
                label="Paragraf 2"
                value={svc.opening[1]}
                onChange={(v) => update(i, "opening", [svc.opening[0], v])}
                multiline
                rows={2}
              />

              <div style={{ marginBottom: "14px" }}>
                <label
                  style={{
                    display: "block",
                    fontSize: "12px",
                    fontWeight: "600",
                    color: "#6b7280",
                    marginBottom: "8px",
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                  }}
                >
                  Capabilities
                </label>
                {svc.capabilities.map((cap, ci) => (
                  <div key={ci} style={{ display: "flex", gap: "8px", marginBottom: "6px" }}>
                    <input
                      value={cap}
                      onChange={(e) => {
                        const caps = [...svc.capabilities];
                        caps[ci] = e.target.value;
                        update(i, "capabilities", caps);
                      }}
                      style={{
                        flex: 1,
                        padding: "8px 12px",
                        borderRadius: "6px",
                        border: "1.5px solid #e5e7eb",
                        fontSize: "13px",
                        outline: "none",
                        fontFamily: "inherit",
                      }}
                    />
                    <Btn
                      small
                      variant="danger"
                      onClick={() =>
                        update(
                          i,
                          "capabilities",
                          svc.capabilities.filter((_, j) => j !== ci),
                        )
                      }
                    >
                      ×
                    </Btn>
                  </div>
                ))}
                <Btn
                  small
                  variant="ghost"
                  onClick={() => update(i, "capabilities", [...svc.capabilities, ""])}
                >
                  + Capability
                </Btn>
              </div>

              <div>
                <label
                  style={{
                    display: "block",
                    fontSize: "12px",
                    fontWeight: "600",
                    color: "#6b7280",
                    marginBottom: "8px",
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                  }}
                >
                  Detail Layanan
                </label>
                {svc.details.map((d, di) => (
                  <div
                    key={di}
                    style={{
                      background: "#f9fafb",
                      borderRadius: "10px",
                      padding: "14px",
                      marginBottom: "8px",
                    }}
                  >
                    <Input
                      label="Judul Detail"
                      value={d.title}
                      onChange={(v) => {
                        const dets = [...svc.details];
                        dets[di] = { ...d, title: v };
                        update(i, "details", dets);
                      }}
                    />
                    <Input
                      label="Deskripsi"
                      value={d.desc}
                      onChange={(v) => {
                        const dets = [...svc.details];
                        dets[di] = { ...d, desc: v };
                        update(i, "details", dets);
                      }}
                      multiline
                      rows={2}
                    />
                    <Btn
                      small
                      variant="danger"
                      onClick={() =>
                        update(
                          i,
                          "details",
                          svc.details.filter((_, j) => j !== di),
                        )
                      }
                    >
                      Hapus Detail
                    </Btn>
                  </div>
                ))}
                <Btn
                  small
                  variant="ghost"
                  onClick={() => update(i, "details", [...svc.details, { title: "", desc: "" }])}
                >
                  + Detail
                </Btn>
              </div>
            </div>
          )}
        </Card>
      ))}
      <SaveBar onSave={onSave} loading={saving} saved={saved} />
    </div>
  );
}

// ── Success Stories Tab ────────────────────────────────────────────────────
function StoriesTab({
  content,
  setContent,
  onSave,
  saving,
  saved,
}: {
  content: SiteContent;
  setContent: (c: SiteContent) => void;
  onSave: () => void;
  saving: boolean;
  saved: boolean;
}) {
  const [editing, setEditing] = useState<number | null>(null);
  const stories = content.stories;

  const update = (i: number, field: keyof SuccessStory, value: unknown) => {
    const updated = stories.map((st, idx) => (idx === i ? { ...st, [field]: value } : st));
    setContent({ ...content, stories: updated });
  };

  const addStory = () => {
    setContent({
      ...content,
      stories: [
        ...stories,
        {
          slug: `story-${Date.now()}`,
          client: "Nama Klien",
          industry: "Industri",
          project: "Nama Proyek",
          highlight: "Highlight utama proyek.",
          challenge: "Deskripsi tantangan.",
          solution: "Deskripsi solusi.",
          impact: "Deskripsi dampak.",
          metrics: [{ v: "0%", l: "Label" }],
        },
      ],
    });
    setEditing(stories.length);
  };

  return (
    <div>
      <SectionHeader
        title="Success Stories"
        subtitle={`${stories.length} case study`}
        onAdd={addStory}
        addLabel="+ Tambah Story"
      />
      {stories.map((st, i) => (
        <Card key={st.slug}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: editing === i ? "20px" : 0,
            }}
          >
            <div>
              <div style={{ fontWeight: "700", fontSize: "16px", color: "#111827" }}>
                {st.client} — {st.project}
              </div>
              <div style={{ color: "#6b7280", fontSize: "13px" }}>{st.industry}</div>
            </div>
            <div style={{ display: "flex", gap: "8px" }}>
              <Btn small onClick={() => setEditing(editing === i ? null : i)} variant="ghost">
                {editing === i ? "Tutup" : "Edit"}
              </Btn>
              <Btn
                small
                variant="danger"
                onClick={() =>
                  setContent({ ...content, stories: stories.filter((_, j) => j !== i) })
                }
              >
                Hapus
              </Btn>
            </div>
          </div>

          {editing === i && (
            <div style={{ borderTop: "1px solid #f3f4f6", paddingTop: "20px" }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0 16px" }}>
                <Input label="Klien" value={st.client} onChange={(v) => update(i, "client", v)} />
                <Input
                  label="Industri"
                  value={st.industry}
                  onChange={(v) => update(i, "industry", v)}
                />
              </div>
              <Input
                label="Nama Proyek"
                value={st.project}
                onChange={(v) => update(i, "project", v)}
              />
              <Input
                label="Highlight"
                value={st.highlight}
                onChange={(v) => update(i, "highlight", v)}
                multiline
                rows={2}
              />
              <Input
                label="Challenge"
                value={st.challenge}
                onChange={(v) => update(i, "challenge", v)}
                multiline
                rows={2}
              />
              <Input
                label="Solution"
                value={st.solution}
                onChange={(v) => update(i, "solution", v)}
                multiline
                rows={2}
              />
              <Input
                label="Impact"
                value={st.impact}
                onChange={(v) => update(i, "impact", v)}
                multiline
                rows={2}
              />

              <div>
                <label
                  style={{
                    display: "block",
                    fontSize: "12px",
                    fontWeight: "600",
                    color: "#6b7280",
                    marginBottom: "8px",
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                  }}
                >
                  Metrics
                </label>
                {st.metrics.map((m, mi) => (
                  <div
                    key={mi}
                    style={{
                      display: "flex",
                      gap: "8px",
                      marginBottom: "6px",
                      alignItems: "center",
                    }}
                  >
                    <input
                      placeholder="Nilai (misal: +38%)"
                      value={m.v}
                      onChange={(e) => {
                        const mets = [...st.metrics];
                        mets[mi] = { ...m, v: e.target.value };
                        update(i, "metrics", mets);
                      }}
                      style={{
                        flex: 1,
                        padding: "8px 12px",
                        borderRadius: "6px",
                        border: "1.5px solid #e5e7eb",
                        fontSize: "13px",
                        outline: "none",
                        fontFamily: "inherit",
                      }}
                    />
                    <input
                      placeholder="Label"
                      value={m.l}
                      onChange={(e) => {
                        const mets = [...st.metrics];
                        mets[mi] = { ...m, l: e.target.value };
                        update(i, "metrics", mets);
                      }}
                      style={{
                        flex: 1,
                        padding: "8px 12px",
                        borderRadius: "6px",
                        border: "1.5px solid #e5e7eb",
                        fontSize: "13px",
                        outline: "none",
                        fontFamily: "inherit",
                      }}
                    />
                    <Btn
                      small
                      variant="danger"
                      onClick={() =>
                        update(
                          i,
                          "metrics",
                          st.metrics.filter((_, j) => j !== mi),
                        )
                      }
                    >
                      ×
                    </Btn>
                  </div>
                ))}
                <Btn
                  small
                  variant="ghost"
                  onClick={() => update(i, "metrics", [...st.metrics, { v: "", l: "" }])}
                >
                  + Metric
                </Btn>
              </div>
            </div>
          )}
        </Card>
      ))}
      <SaveBar onSave={onSave} loading={saving} saved={saved} />
    </div>
  );
}

// ── Insights Tab ───────────────────────────────────────────────────────────
function InsightsTab({
  content,
  setContent,
  onSave,
  saving,
  saved,
}: {
  content: SiteContent;
  setContent: (c: SiteContent) => void;
  onSave: () => void;
  saving: boolean;
  saved: boolean;
}) {
  const [editing, setEditing] = useState<number | null>(null);
  const insights = content.insights;

  const update = (i: number, field: keyof Insight, value: string) => {
    const updated = insights.map((ins, idx) => (idx === i ? { ...ins, [field]: value } : ins));
    setContent({ ...content, insights: updated });
  };

  const addInsight = () => {
    setContent({
      ...content,
      insights: [
        ...insights,
        {
          title: "Judul Artikel",
          category: "Kategori",
          read: "5 menit",
          excerpt: "Deskripsi singkat artikel.",
        },
      ],
    });
    setEditing(insights.length);
  };

  return (
    <div>
      <SectionHeader
        title="Insights"
        subtitle={`${insights.length} artikel`}
        onAdd={addInsight}
        addLabel="+ Tambah Artikel"
      />
      {insights.map((ins, i) => (
        <Card key={i}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: editing === i ? "20px" : 0,
            }}
          >
            <div>
              <div style={{ fontWeight: "700", fontSize: "16px", color: "#111827" }}>
                {ins.title}
              </div>
              <div style={{ display: "flex", gap: "8px", marginTop: "4px" }}>
                <span
                  style={{
                    background: "#f0fdf4",
                    color: "#0a5950",
                    fontSize: "11px",
                    fontWeight: "600",
                    padding: "2px 8px",
                    borderRadius: "20px",
                  }}
                >
                  {ins.category}
                </span>
                <span style={{ color: "#6b7280", fontSize: "12px" }}>{ins.read}</span>
              </div>
            </div>
            <div style={{ display: "flex", gap: "8px" }}>
              <Btn small onClick={() => setEditing(editing === i ? null : i)} variant="ghost">
                {editing === i ? "Tutup" : "Edit"}
              </Btn>
              <Btn
                small
                variant="danger"
                onClick={() =>
                  setContent({ ...content, insights: insights.filter((_, j) => j !== i) })
                }
              >
                Hapus
              </Btn>
            </div>
          </div>

          {editing === i && (
            <div style={{ borderTop: "1px solid #f3f4f6", paddingTop: "20px" }}>
              <Input
                label="Judul Artikel"
                value={ins.title}
                onChange={(v) => update(i, "title", v)}
              />
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0 16px" }}>
                <Input
                  label="Kategori"
                  value={ins.category}
                  onChange={(v) => update(i, "category", v)}
                />
                <Input label="Waktu Baca" value={ins.read} onChange={(v) => update(i, "read", v)} />
              </div>
              <Input
                label="Excerpt"
                value={ins.excerpt}
                onChange={(v) => update(i, "excerpt", v)}
                multiline
                rows={3}
              />
            </div>
          )}
        </Card>
      ))}
      <SaveBar onSave={onSave} loading={saving} saved={saved} />
    </div>
  );
}

// ── Clients Tab ────────────────────────────────────────────────────────────
function ClientsTab({
  content,
  setContent,
  onSave,
  saving,
  saved,
}: {
  content: SiteContent;
  setContent: (c: SiteContent) => void;
  onSave: () => void;
  saving: boolean;
  saved: boolean;
}) {
  const [newClient, setNewClient] = useState("");
  const clients = content.clients;

  return (
    <div>
      <SectionHeader title="Clients" subtitle={`${clients.length} klien terdaftar`} />
      <Card>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "20px" }}>
          {clients.map((c, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "6px",
                background: "#f0fdf4",
                border: "1px solid #bbf7d0",
                borderRadius: "8px",
                padding: "6px 12px",
              }}
            >
              <span style={{ color: "#0a5950", fontWeight: "600", fontSize: "14px" }}>{c}</span>
              <button
                onClick={() =>
                  setContent({ ...content, clients: clients.filter((_, j) => j !== i) })
                }
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  color: "#dc2626",
                  fontSize: "16px",
                  lineHeight: 1,
                  padding: 0,
                }}
              >
                ×
              </button>
            </div>
          ))}
        </div>
        <div style={{ display: "flex", gap: "10px" }}>
          <input
            value={newClient}
            onChange={(e) => setNewClient(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && newClient.trim()) {
                setContent({ ...content, clients: [...clients, newClient.trim()] });
                setNewClient("");
              }
            }}
            placeholder="Tambah nama klien baru..."
            style={{
              flex: 1,
              padding: "10px 14px",
              borderRadius: "8px",
              border: "1.5px solid #e5e7eb",
              fontSize: "14px",
              outline: "none",
              fontFamily: "inherit",
            }}
          />
          <Btn
            onClick={() => {
              if (newClient.trim()) {
                setContent({ ...content, clients: [...clients, newClient.trim()] });
                setNewClient("");
              }
            }}
          >
            Tambah
          </Btn>
        </div>
      </Card>
      <SaveBar onSave={onSave} loading={saving} saved={saved} />
    </div>
  );
}

// ── Main App ───────────────────────────────────────────────────────────────
function AdminPanel() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [tab, setTab] = useState("services");
  const [content, setContent] = useState<SiteContent>(DEFAULT_CONTENT);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (loggedIn) {
      setLoading(true);
      loadContent().then((data) => {
        setContent(data);
        setLoading(false);
      });
    }
  }, [loggedIn]);

  const handleSave = async () => {
    setSaving(true);
    const ok = await saveContent(content);
    setSaving(false);
    if (ok) {
      setSaved(true);
      setTimeout(() => setSaved(false), 3000);
    } else {
      alert("Gagal menyimpan. Coba lagi.");
    }
  };

  if (!loggedIn) return <LoginScreen onLogin={() => setLoggedIn(true)} />;

  if (loading)
    return (
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "'Montserrat', sans-serif",
        }}
      >
        <div style={{ textAlign: "center" }}>
          <div style={{ fontSize: "32px", marginBottom: "16px" }}>⏳</div>
          <p style={{ color: "#6b7280" }}>Memuat konten...</p>
        </div>
      </div>
    );

  const tabProps = { content, setContent, onSave: handleSave, saving, saved };

  return (
    <div
      style={{
        display: "flex",
        minHeight: "100vh",
        background: "#f8fafc",
        fontFamily: "'Montserrat', sans-serif",
      }}
    >
      <Sidebar active={tab} onNav={setTab} onLogout={() => setLoggedIn(false)} />
      <div style={{ marginLeft: "240px", flex: 1, padding: "32px", maxWidth: "900px" }}>
        {tab === "services" && <ServicesTab {...tabProps} />}
        {tab === "stories" && <StoriesTab {...tabProps} />}
        {tab === "insights" && <InsightsTab {...tabProps} />}
        {tab === "clients" && <ClientsTab {...tabProps} />}
      </div>
    </div>
  );
}
