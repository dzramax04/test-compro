/* ================= Konten KAP Naraya & Rekan ================= */

export const NAV_LINKS = [
  { label: "Layanan", href: "#layanan" },
  { label: "Metodologi", href: "#metodologi" },
  { label: "Industri", href: "#industri" },
  { label: "Tim", href: "#tim" },
  { label: "Tentang", href: "#tentang" },
  { label: "Insight", href: "#insight" },
];

export const TICKER_ITEMS = [
  "Izin Kemenkeu RI No. KM.145/KM.1/2018",
  "Anggota Institut Akuntan Publik Indonesia (IAPI)",
  "Terdaftar & Diawasi OJK",
  "Standar Audit — SPAP / ISA",
  "IntegraNet Worldwide — 32 Negara",
  "Asurans · Perpajakan · Advisory",
];

export const CLIENTS = [
  "PT Cakrawala Niaga Tbk",
  "Bank Swarna",
  "RS Harapan Medika",
  "PT Delta Karya Energi",
  "Arkana Teknologi",
  "Graha Propertindo",
  "LogistiKita",
  "PT Tani Subur Agro",
  "Edu Prima Institute",
  "PT Sinar Makmur",
  "Kirana Foods",
  "Nusa Mineral",
];

export const STATS = [
  { value: 21, suffix: "", label: "Tahun Berpraktik" },
  { value: 340, suffix: "+", label: "Perikatan Selesai" },
  { value: 120, suffix: "+", label: "Klien Aktif" },
  { value: 58, suffix: "", label: "Auditor & CPA" },
];

export type Service = {
  code: string;
  title: string;
  tag: string;
  desc: string;
  items: string[];
  standard: string;
};

export const SERVICES: Service[] = [
  {
    code: "101",
    title: "Audit Laporan Keuangan",
    tag: "Asurans",
    desc: "Audit umum atas laporan keuangan tahunan sesuai Standar Audit (SA–SPAP) dan kerangka pelaporan yang berlaku — menghasilkan opini auditor independen yang andal bagi pemegang saham, regulator, dan kreditur.",
    items: [
      "Laporan Auditor Independen & Opini",
      "Management Letter & rekomendasi pengendalian",
      "Catatan penyesuaian & reklasifikasi",
      "Komunikasi dengan komite audit",
    ],
    standard: "SA 200–700 · SPAP–IAPI",
  },
  {
    code: "102",
    title: "Audit Khusus & Investigasi",
    tag: "Asurans",
    desc: "Perikatan atestasi dan investigatif: audit kepatuhan, audit tujuan tertentu, investigasi indikasi kecurangan, serta perhitungan kerugian keuangan berbasis bukti yang dapat dipertanggungjawabkan.",
    items: [
      "Laporan audit kepatuhan & tujuan tertentu",
      "Investigasi fraud berbasis bukti digital",
      "Perhitungan kerugian keuangan",
      "Dukungan keterangan ahli (expert witness)",
    ],
    standard: "SA 800/805 · Praktik Forensik",
  },
  {
    code: "201",
    title: "Jasa Perpajakan",
    tag: "Pajak",
    desc: "Kepatuhan dan perencanaan perpajakan yang defensibel — dari review kewajiban, dokumentasi transfer pricing, hingga pendampingan pemeriksaan dan sengketa di seluruh tingkatan.",
    items: [
      "Kepatuhan SPT Masa & Tahunan",
      "Tax review & perencanaan pajak",
      "Dokumentasi transfer pricing (TP Doc)",
      "Pendampingan pemeriksaan, keberatan & banding",
    ],
    standard: "UU KUP · UU HPP · PMK 172/2023",
  },
  {
    code: "301",
    title: "Advisory & Manajemen Risiko",
    tag: "Advisory",
    desc: "Penguatan tata kelola dan pengendalian internal berbasis kerangka COSO — dari asesmen, desain SOP, hingga implementasi manajemen risiko enterprise yang terukur.",
    items: [
      "Asesmen & desain pengendalian internal (COSO)",
      "Penyusunan SOP & kebijakan keuangan",
      "Enterprise risk management",
      "Pendampingan implementasi ERP",
    ],
    standard: "COSO IC–ERM · ISO 31000",
  },
  {
    code: "302",
    title: "Kompilasi & Penyusunan LK",
    tag: "Akuntansi",
    desc: "Penyusunan laporan keuangan sesuai SAK yang berlaku — dari pembukuan rutin dan tutup buku bulanan hingga konversi standar dan konsolidasi grup usaha.",
    items: [
      "Kompilasi LK sesuai SAK EP / SAK EMKM",
      "Konversi PSAK & penyusunan CALK",
      "Konsolidasi laporan keuangan grup",
      "Tutup buku bulanan & rekonsiliasi",
    ],
    standard: "SAK EP · SAK EMKM · PSAK",
  },
  {
    code: "401",
    title: "Penilaian & Due Diligence",
    tag: "Advisory",
    desc: "Valuasi bisnis dan financial due diligence untuk kebutuhan transaksi, restrukturisasi, maupun pelaporan — dengan metodologi yang dapat ditelusuri dan diuji ulang.",
    items: [
      "Valuasi bisnis & aset tidak berwujud",
      "Financial due diligence pra-M&A",
      "Purchase price allocation",
      "Studi kelayakan finansial",
    ],
    standard: "SPI–MAPPI · IFRS 3",
  },
];

export const PHASES = [
  {
    no: "01",
    title: "Penerimaan Perikatan & Perencanaan",
    std: "SA 300 / SA 315",
    dur: "Minggu 1–2",
    desc: "Memahami entitas dan lingkungannya, mengidentifikasi risiko salah saji material, serta merancang respons audit yang proporsional.",
    tasks: [
      "Analisis materialitas & risiko inheren",
      "Pemahaman pengendalian internal",
      "Penyusunan program audit",
      "Konfirmasi independensi tim perikatan",
    ],
  },
  {
    no: "02",
    title: "Pengujian Pengendalian & Substantif",
    std: "SA 330 / SA 500",
    dur: "Minggu 3–6",
    desc: "Melaksanakan prosedur audit untuk memperoleh bukti yang cukup dan tepat — melalui pengujian, prosedur analitis, dan inspeksi fisik.",
    tasks: [
      "Uji petik & pengujian substantif",
      "Prosedur analitis berbantuan CAAT",
      "Konfirmasi eksternal & observasi persediaan",
      "Dokumentasi bukti audit elektronik",
    ],
  },
  {
    no: "03",
    title: "Evaluasi Temuan & Pengendalian Mutu",
    std: "SA 560 / SPM 1",
    dur: "Minggu 7–8",
    desc: "Mengevaluasi kecukupan bukti dan peristiwa kemudian, melalui review berjenjang hingga penelaahan pengendali mutu perikatan (EQCR).",
    tasks: [
      "Ringkasan temuan & usulan penyesuaian",
      "Review berjenjang manajer–partner",
      "Penelaahan EQCR independen",
      "Pembahasan temuan dengan manajemen",
    ],
  },
  {
    no: "04",
    title: "Pelaporan & Opini",
    std: "SA 700",
    dur: "Minggu 9",
    desc: "Merumuskan opini dan menerbitkan laporan auditor independen beserta management letter kepada pihak yang berwenang.",
    tasks: [
      "Laporan auditor independen & opini",
      "Management letter & rekomendasi",
      "Penyajian ke komite audit / RUPS",
      "Arsip KKA & pemantauan tindak lanjut",
    ],
  },
];

export const INDUSTRIES = [
  { name: "Manufaktur", count: 62 },
  { name: "Ritel & Distribusi", count: 31 },
  { name: "Properti & Konstruksi", count: 24 },
  { name: "Jasa Keuangan", count: 18 },
  { name: "Teknologi & Digital", count: 16 },
  { name: "F&B & Hospitality", count: 15 },
  { name: "Nirlaba & Yayasan", count: 14 },
  { name: "Energi & Pertambangan", count: 12 },
  { name: "Logistik & Transportasi", count: 11 },
  { name: "Kesehatan", count: 9 },
  { name: "Agribisnis", count: 8 },
  { name: "Pendidikan", count: 7 },
];

export const TEAM = [
  {
    name: "Drs. Baskoro Naraya, M.Ak.",
    role: "Managing Partner",
    certs: "CPA · CA",
    img: "https://image.qwenlm.ai/generated-images/cf28dcf9-b5e0-4489-90a9-333dd9630ae3/_result.png",
    bio: "30+ tahun pengalaman audit emiten dan BUMN; mantan anggota komite teknis IAPI.",
    tags: ["Audit Emiten", "BUMN", "IFRS"],
  },
  {
    name: "Sari Dewanti, S.E., M.Ak.",
    role: "Partner — Audit & Asurans",
    certs: "CPA · ASEAN CPA",
    img: "https://image.qwenlm.ai/generated-images/064e2c77-0277-4134-8cd8-44726378e74e/_result.png",
    bio: "Memimpin praktik audit sektor jasa keuangan dan teknologi; spesialis konsolidasi grup multinasional.",
    tags: ["Jasa Keuangan", "Teknologi"],
  },
  {
    name: "Rendra Wiratama, S.E., Ak., M.Tax.",
    role: "Partner — Perpajakan",
    certs: "CPA · BKP",
    img: "https://image.qwenlm.ai/generated-images/b92d012b-17fa-4fb3-b871-8e7284a40f90/_result.png",
    bio: "20 tahun praktik sengketa pajak; pendampingan pemeriksaan hingga tingkat banding di Pengadilan Pajak.",
    tags: ["Sengketa Pajak", "Transfer Pricing"],
  },
  {
    name: "Almira Kusuma, S.E., M.M.",
    role: "Partner — Advisory",
    certs: "CPA · CFE",
    img: "https://image.qwenlm.ai/generated-images/cc47a8b5-444c-45d5-a0fd-8399a6b96aa1/_result.png",
    bio: "Fokus pada pengendalian internal, investigasi kecurangan, dan due diligence transaksi.",
    tags: ["Forensik", "GRC", "M&A"],
  },
];

export const MILESTONES = [
  {
    year: "2004",
    title: "Kantor Didirikan",
    desc: "Baskoro Naraya mendirikan praktik audit independen di Jakarta bersama tiga auditor pertama.",
  },
  {
    year: "2009",
    title: "Terdaftar di OJK",
    desc: "Memperoleh Surat Tanda Terdaftar untuk audit emiten dan lembaga jasa keuangan.",
  },
  {
    year: "2012",
    title: "Bergabung dengan Aliansi Global",
    desc: "Menjadi anggota IntegraNet Worldwide — jaringan firma independen di 32 negara.",
  },
  {
    year: "2016",
    title: "Kantor Cabang Surabaya",
    desc: "Ekspansi ke Jawa Timur untuk melayani sektor manufaktur dan agribisnis kawasan timur.",
  },
  {
    year: "2019",
    title: "Platform Audit Digital",
    desc: "Meluncurkan kertas kerja elektronik dan analitik data pada seluruh perikatan audit.",
  },
  {
    year: "2023",
    title: "Perikatan ke-300",
    desc: "Menyelesaikan perikatan audit ke-300 sejak berdiri, dengan tingkat retensi klien 92%.",
  },
  {
    year: "2025",
    title: "Asurans Keberlanjutan",
    desc: "Membuka lini jasa asurans laporan keberlanjutan berbasis standar ISSB.",
  },
];

export const ARTICLES = [
  {
    cat: "PSAK",
    date: "12 Jan 2026",
    title: "Amandemen PSAK 2025: Dampaknya pada Pengakuan Pendapatan",
    excerpt: "Poin-poin perubahan yang perlu disiapkan tim keuangan sebelum periode pelaporan berikutnya.",
    read: "8 mnt",
    dark: false,
  },
  {
    cat: "Perpajakan",
    date: "28 Des 2025",
    title: "Insentif Pajak 2026: Siapa Berhak dan Bagaimana Mengajukannya",
    excerpt: "Peta fasilitas fiskal terbaru beserta dokumen pendukung yang kerap menjadi temuan pemeriksaan.",
    read: "6 mnt",
    dark: true,
  },
  {
    cat: "Asurans",
    date: "09 Des 2025",
    title: "Menyiapkan Laporan Keberlanjutan yang Siap Diasurans",
    excerpt: "Kerangka data ESG yang dapat diverifikasi, dari emisi Scope 1–3 hingga tata kelola.",
    read: "10 mnt",
    dark: false,
  },
  {
    cat: "Advisory",
    date: "20 Nov 2025",
    title: "Pengendalian Internal UMKM Naik Kelas: Kerangka COSO Ringkas",
    excerpt: "Lima komponen COSO yang dipangkas menjadi checklist praktis untuk bisnis bertumbuh.",
    read: "7 mnt",
    dark: true,
  },
];

export const TESTIMONIALS = [
  {
    quote:
      "Proses audit Naraya sangat tertib — setiap temuan datang bersama bukti dan rekomendasi yang bisa langsung kami eksekusi. Tutup buku tahunan yang biasanya dua bulan selesai dalam lima minggu.",
    name: "Dian Paramita",
    role: "Direktur Keuangan",
    company: "PT Cakrawala Niaga Tbk",
  },
  {
    quote:
      "Pendampingan pemeriksaan pajak mereka mengubah posisi sengketa kami. Dokumentasinya rapi, argumennya defensibel, dan komunikasinya selalu proaktif sejak hari pertama.",
    name: "Hendra Wijaya",
    role: "CFO",
    company: "PT Delta Karya Energi",
  },
];

export const CREDENTIALS = [
  "Izin KAP Kemenkeu — KM.145/KM.1/2018",
  "Anggota IAPI — No. 0921",
  "Terdaftar OJK — STTD.A-027/KAP",
  "Registrasi Auditor BPK",
  "Anggota IAI & MAPPI",
  "IntegraNet Worldwide — 32 Negara",
];

export const OFFICES = [
  {
    city: "Jakarta — Kantor Pusat",
    addr: "Wisma Naraya Lt. 9, Jl. Jend. Sudirman Kav. 52-53, Jakarta Selatan 12190",
    phone: "+62 21 5150 2004",
  },
  {
    city: "Surabaya — Kantor Cabang",
    addr: "Gedung Aruna Lt. 5, Jl. Basuki Rahmat No. 115, Surabaya 60271",
    phone: "+62 31 5460 2016",
  },
];

export const OFFICE_IMG =
  "https://image.qwenlm.ai/generated-images/51d55160-b3bd-4b24-bf0a-8fbd58ab9acb/_result.png";
