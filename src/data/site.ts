import { Sparkles, Users, Layers } from "lucide-react";

export const SERVICES = [
  {
    slug: "culture-transformation",
    icon: Sparkles,
    title: "Culture Transformation",
    tagline: "Budaya inovasi & pertumbuhan",
    short: "Membangun budaya inovasi yang mendorong organisasi bertumbuh, beradaptasi, dan terus berkembang.",
    capabilities: [
      "Innovation Workshop",
      "In-house Innovation Lab",
      "Training & Certification",
      "Corporate Event & Activation",
    ],
    opening: [
      "Culture Transformation membantu perusahaan membangun budaya kerja yang lebih adaptif, kolaboratif, dan inovatif untuk mendukung pertumbuhan bisnis yang berkelanjutan.",
      "Melalui pendekatan strategis dan implementatif, BARIS mendampingi organisasi dalam menciptakan perubahan perilaku, mindset, dan ekosistem kerja yang mampu mendorong inovasi secara nyata.",
    ],
    details: [
      {
        title: "Innovation Workshop",
        desc: "Fasilitasi workshop inovasi untuk membantu tim mengidentifikasi tantangan bisnis, menggali ide, dan menghasilkan solusi yang actionable serta siap diimplementasikan.",
      },
      {
        title: "In-house Innovation Lab",
        desc: "Membangun ekosistem inovasi internal sebagai wadah pengembangan ide, eksperimen, dan percepatan inovasi perusahaan secara berkelanjutan.",
      },
      {
        title: "Training & Certification",
        desc: "Program pengembangan kompetensi yang dirancang untuk mendukung transformasi organisasi dan memperkuat budaya inovasi perusahaan.",
      },
      {
        title: "Corporate Event & Activation",
        desc: "Perencanaan dan pelaksanaan event korporasi yang mampu memperkuat engagement, budaya perusahaan, dan pengalaman peserta.",
      },
    ],
  },
  {
    slug: "talent",
    icon: Users,
    title: "Talent",
    tagline: "Pengembangan & penyelarasan talenta",
    short: "Membantu perusahaan mengembangkan dan menyelaraskan talenta untuk mendukung transformasi dan pertumbuhan bisnis.",
    capabilities: [
      "Talent Scouting & Mapping",
      "End-to-End Talent Solutions",
      "Performance Alignment",
    ],
    opening: [
      "Talent BARIS menghadirkan solusi pengelolaan talenta secara end-to-end untuk membantu perusahaan membangun organisasi yang lebih siap menghadapi tantangan bisnis masa depan.",
      "Mulai dari talent mapping hingga performance alignment, kami membantu memastikan setiap talenta berkembang selaras dengan strategi perusahaan.",
    ],
    details: [
      {
        title: "Talent Scouting & Mapping",
        desc: "Identifikasi dan pemetaan talenta berdasarkan potensi, kompetensi, dan kebutuhan strategis perusahaan.",
      },
      {
        title: "End-to-End Talent Solutions",
        desc: "Solusi pengelolaan talenta menyeluruh mulai dari sourcing, pengembangan, hingga succession planning.",
      },
      {
        title: "Performance Alignment",
        desc: "Menyelaraskan kontribusi individu dan tim dengan target bisnis serta arah strategis organisasi.",
      },
    ],
  },
  {
    slug: "solution",
    icon: Layers,
    title: "Solution",
    tagline: "Teknologi & digital terintegrasi",
    short: "Solusi teknologi dan digital terintegrasi untuk mendukung transformasi bisnis yang scalable dan berkelanjutan.",
    capabilities: [
      "Artificial Intelligence",
      "Software & Digital Products",
      "Data & Analytics",
      "Security & Platform Engineering",
      "Cloud & Infrastructure",
      "Procurement",
    ],
    opening: [
      "BARIS menghadirkan solusi teknologi dan digital yang dirancang untuk membantu perusahaan meningkatkan efisiensi, memperkuat operasional, dan mempercepat transformasi bisnis.",
      "Mulai dari artificial intelligence hingga cloud infrastructure, kami membantu organisasi membangun fondasi digital yang aman, modern, dan scalable.",
    ],
    details: [
      {
        title: "Artificial Intelligence",
        desc: "Strategi dan implementasi AI untuk meningkatkan efisiensi operasional dan mendukung pengambilan keputusan berbasis data.",
      },
      {
        title: "Software & Digital Products",
        desc: "Pengembangan software dan aplikasi digital yang scalable, modern, dan sesuai dengan kebutuhan bisnis perusahaan.",
      },
      {
        title: "Data & Analytics",
        desc: "Mengubah data menjadi insight strategis melalui dashboard, KPI monitoring, dan data analytics.",
      },
      {
        title: "Security & Platform Engineering",
        desc: "Membangun arsitektur sistem yang aman, scalable, dan siap mendukung pertumbuhan bisnis jangka panjang.",
      },
      {
        title: "Cloud & Infrastructure",
        desc: "Solusi cloud dan infrastruktur modern yang fleksibel, efisien, dan reliable untuk operasional bisnis.",
      },
      {
        title: "Procurement",
        desc: "Layanan pengadaan strategis untuk mendukung efisiensi operasional dan kebutuhan bisnis perusahaan.",
      },
    ],
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
    project: "Platform B2B Cloud-Native",
    highlight: "Efisiensi operasional naik 38% dan rilis produk 2x lebih cepat.",
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
    project: "Transformasi Digital End-to-End",
    highlight: "Waktu proses inti turun 45% dengan dampak efisiensi signifikan.",
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
    project: "Konferensi Nasional Hybrid",
    highlight: "5.000+ peserta hybrid dengan NPS 78 dan liputan media nasional.",
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
