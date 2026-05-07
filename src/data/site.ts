import { Code2, Lightbulb, CalendarDays, ShoppingBag } from "lucide-react";

export const SERVICES = [
  {
    slug: "software-house",
    icon: Code2,
    title: "Software House",
    tagline: "Solusi digital end-to-end",
    short: "Pengembangan platform digital, aplikasi enterprise, dan modernisasi sistem berbasis teknologi terbaru.",
  },
  {
    slug: "advisory",
    icon: Lightbulb,
    title: "Advisory Services",
    tagline: "Strategi & transformasi bisnis",
    short: "Pendampingan strategis berbasis data untuk pertumbuhan, transformasi, dan inovasi organisasi.",
  },
  {
    slug: "event-organizer",
    icon: CalendarDays,
    title: "Event Organizer",
    tagline: "Pengalaman korporasi premium",
    short: "Perencanaan dan eksekusi event korporasi, konferensi, dan aktivasi brand yang berdampak.",
  },
  {
    slug: "procurement",
    icon: ShoppingBag,
    title: "Procurement / Pengadaan",
    tagline: "Pengadaan strategis & efisien",
    short: "Manajemen pengadaan barang dan jasa dengan pendekatan strategis, transparan, dan akuntabel.",
  },
] as const;

export const CLIENTS = [
  "Metranet", "Telkom Group", "BUMN Partner", "Astra Mitra", "Pertamina Lab", "Bank Nusantara", "Indosat Hub", "Garuda Tech",
];

export const SUCCESS_STORIES = [
  {
    slug: "metranet-platform",
    client: "Metranet",
    industry: "Telekomunikasi",
    challenge: "Memerlukan platform digital terintegrasi untuk mempercepat penetrasi layanan B2B di pasar nasional.",
    solution: "BARIS membangun platform berbasis cloud-native dengan arsitektur modular dan integrasi sistem internal Metranet.",
    impact: "Peningkatan efisiensi operasional 38% dan akselerasi go-to-market produk baru hingga 2x lebih cepat.",
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
    challenge: "Transformasi proses bisnis konvensional menjadi digital-first dengan dampak terukur.",
    solution: "Pendampingan advisory selama 9 bulan, perancangan blueprint digital, serta implementasi sistem terintegrasi.",
    impact: "Pengurangan waktu proses inti hingga 45% dan penghematan biaya operasional signifikan.",
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
    challenge: "Menyelenggarakan konferensi nasional hybrid skala besar dengan standar premium.",
    solution: "End-to-end event management — dari konsep, branding, produksi panggung, hingga platform hybrid.",
    impact: "5.000+ peserta hybrid, NPS 78, dan liputan media nasional yang luas.",
    metrics: [
      { v: "5K+", l: "Peserta hybrid" },
      { v: "78", l: "NPS Score" },
      { v: "30+", l: "Liputan media" },
    ],
  },
] as const;

export const INSIGHTS = [
  { title: "Lima Pilar Transformasi Digital di Era AI", category: "Strategi", read: "6 menit", excerpt: "Bagaimana perusahaan dapat menyusun roadmap transformasi yang adaptif dan terukur." },
  { title: "Membangun Tim Produk Berperforma Tinggi", category: "Organisasi", read: "5 menit", excerpt: "Praktik terbaik membangun cross-functional team yang fokus pada outcome." },
  { title: "Pengadaan Strategis: Beyond Cost Saving", category: "Procurement", read: "4 menit", excerpt: "Mengapa procurement modern adalah pendorong nilai bisnis, bukan sekadar fungsi pendukung." },
];
