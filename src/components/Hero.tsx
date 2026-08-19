import { CLIENTS, STATS } from "../data";
import { fmtId, useCountUp, useInView, useScramble } from "../hooks";
import { IconArrowDown, IconArrowUpRight } from "./Icons";

function DecodeLabel({ text }: { text: string }) {
  const { ref, inView } = useInView<HTMLParagraphElement>(0.5);
  const out = useScramble(text, inView);
  return (
    <p
      ref={ref}
      className="font-mono text-[11px] uppercase tracking-[0.24em] text-green md:text-xs"
      aria-label={text}
    >
      {out}
      <span className="caret-blink ml-1 text-red" aria-hidden="true">
        ▌
      </span>
    </p>
  );
}

function Tick({ go, delay }: { go: boolean; delay: number }) {
  return (
    <span className={`inline-flex text-green ${go ? "tick-go" : ""}`}>
      <svg viewBox="0 0 24 24" fill="none" className="size-4" aria-hidden="true">
        <path
          className="tick-path"
          style={{ animationDelay: `${delay}s` }}
          d="M4 12.6c2.3.9 3.5 2.7 4.4 5.6C10.6 12.2 13.6 7.4 20 4"
          stroke="currentColor"
          strokeWidth="2.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

function BalanceCard() {
  const { ref, inView } = useInView<HTMLDivElement>(0.35);
  const totalAset = useCountUp(73523412, inView, 1800);

  const rowsA = [
    { label: "Aset Lancar", val: "42.318.900", d: 0.15 },
    { label: "Aset Tetap — Neto", val: "31.204.512", d: 0.35 },
  ];
  const rowsB = [
    { label: "Kewajiban", val: "28.114.207", d: 0.65 },
    { label: "Ekuitas", val: "45.409.205", d: 0.8 },
  ];

  return (
    <div ref={ref} className="relative">
      {/* kartu kertas kerja */}
      <div className="relative border border-ink/15 bg-card shadow-[10px_10px_0_0_rgba(28,81,61,0.12)]">
        <div className="flex items-center justify-between border-b border-ink/15 px-5 py-3.5">
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink">Kertas Kerja — Neraca Saldo</p>
          <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-mute">Ref. A-100 · 31 Des 2025</p>
        </div>

        <div className="px-5 py-5 font-mono text-[13px]">
          {rowsA.map((r) => (
            <div key={r.label} className="flex items-center justify-between gap-3 py-2">
              <span className="flex items-center gap-2.5 text-ink2">
                <Tick go={inView} delay={r.d} />
                {r.label}
              </span>
              <span className="tnum text-ink">{r.val}</span>
            </div>
          ))}
          <div className="my-1.5 border-t border-dashed border-ink/25" />
          <div className="flex items-center justify-between gap-3 py-2">
            <span className="flex items-center gap-2.5 font-semibold text-ink">
              <Tick go={inView} delay={0.5} />
              TOTAL ASET
            </span>
            <span className="tnum text-base font-semibold text-ink">{fmtId(totalAset)}</span>
          </div>

          <div className="mt-4 border-t-2 border-ink/70 pt-4" />
          {rowsB.map((r) => (
            <div key={r.label} className="flex items-center justify-between gap-3 py-2">
              <span className="flex items-center gap-2.5 text-ink2">
                <Tick go={inView} delay={r.d} />
                {r.label}
              </span>
              <span className="tnum text-ink">{r.val}</span>
            </div>
          ))}
          <div className="my-1.5 border-t border-dashed border-ink/25" />
          <div className="flex items-center justify-between gap-3 py-2">
            <span className="flex items-center gap-2.5 font-semibold text-ink">
              <Tick go={inView} delay={0.95} />
              TOTAL KEWAJIBAN &amp; EKUITAS
            </span>
            <span className="tnum text-base font-semibold text-ink">{fmtId(totalAset)}</span>
          </div>

          <div className="mt-4 flex items-center justify-between border-t border-ink/15 bg-paper2/70 px-3 py-2.5">
            <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-mute">Selisih — Rp 0</span>
            <span className="flex items-center gap-2 font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-green">
              <span className="pulse-dot inline-block size-1.5 rounded-full bg-green" />
              Seimbang
            </span>
          </div>
        </div>
      </div>

      {/* stempel SEIMBANG */}
      <div
        className={`absolute -right-3 -top-6 select-none border-[3px] border-red bg-paper/70 px-3.5 py-1 font-display text-sm font-extrabold uppercase tracking-[0.25em] text-red mix-blend-multiply md:-right-6 ${
          inView ? "stamp-anim" : "opacity-0"
        }`}
        style={{ animationDelay: "1.25s" }}
        aria-hidden="true"
      >
        Seimbang ✓
      </div>

      {/* stempel bundar opini WTP */}
      <div
        className={`absolute -bottom-8 -left-4 grid size-28 place-items-center rounded-full border-2 border-red text-red mix-blend-multiply md:-left-8 ${
          inView ? "stamp-anim" : "opacity-0"
        }`}
        style={{ animationDelay: "1.7s" }}
        aria-hidden="true"
      >
        <div className="grid size-[100px] place-items-center rounded-full border border-red/70 text-center">
          <div>
            <p className="font-mono text-[8px] uppercase tracking-[0.2em]">Opini</p>
            <p className="font-display text-xl font-extrabold leading-none">WTP</p>
            <p className="mt-0.5 font-mono text-[8px] uppercase tracking-[0.2em]">SA 700</p>
          </div>
        </div>
      </div>

      <p className="mt-12 font-mono text-[10px] uppercase tracking-[0.18em] leading-relaxed text-mute">
        * Ilustrasi kertas kerja audit (KKA) — setiap saldo tertelusuri ke bukti pendukung.
      </p>
    </div>
  );
}

function StatItem({ value, suffix, label, delay }: { value: number; suffix: string; label: string; delay: number }) {
  const { ref, inView } = useInView<HTMLDivElement>(0.4);
  const n = useCountUp(value, inView, 1500 + delay);
  return (
    <div ref={ref} className="px-6 py-8 md:py-10">
      <p className="tnum font-display text-4xl font-bold tracking-tight text-ink md:text-5xl">
        {fmtId(n)}
        <span className="text-red">{suffix}</span>
      </p>
      <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.22em] text-mute">{label}</p>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="ledger-rules relative overflow-hidden">
      {/* garis margin merah khas buku kas */}
      <div className="pointer-events-none absolute bottom-0 left-3 top-0 w-px bg-red/40 md:left-8" aria-hidden="true" />
      {/* teks vertikal dekoratif */}
      <p
        className="absolute right-2 top-1/2 hidden -translate-y-1/2 rotate-90 whitespace-nowrap font-mono text-[10px] uppercase tracking-[0.35em] text-mute/60 xl:block"
        aria-hidden="true"
      >
        Audit · Asurans · Pajak · Advisory — Sejak 2004
      </p>

      <div className="mx-auto max-w-7xl px-6 md:px-14 lg:px-20">
        <div className="grid items-center gap-16 pb-20 pt-14 md:pt-20 lg:grid-cols-12 lg:gap-10">
          {/* Kiri */}
          <div className="lg:col-span-7">
            <DecodeLabel text="REF. KKA A-100 · PERIKATAN AUDIT · TA 2025" />

            <RevealH1 />

            <p className="mt-7 max-w-xl text-base leading-relaxed text-ink2 md:text-lg">
              <strong className="font-semibold text-ink">Naraya &amp; Rekan</strong> adalah Kantor Akuntan Publik
              independen yang membantu perusahaan, lembaga keuangan, dan entitas publik menyajikan laporan keuangan
              yang andal — melalui audit, perpajakan, dan advisory berbasis standar profesi.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-5">
              <a
                href="#kontak"
                className="btn-press inline-flex items-center gap-2.5 rounded-[4px] bg-red px-6 py-3.5 font-display text-sm font-bold tracking-wide text-paper"
              >
                Jadwalkan Konsultasi
                <IconArrowUpRight className="size-4" />
              </a>
              <a
                href="#layanan"
                className="group inline-flex items-center gap-2.5 text-sm font-semibold text-ink"
              >
                <span className="relative">
                  Jelajahi Layanan
                  <span className="absolute -bottom-1 left-0 h-[2px] w-full origin-left scale-x-100 bg-ink transition-transform duration-300 group-hover:scale-x-0" />
                  <span className="absolute -bottom-1 left-0 h-[2px] w-full origin-right scale-x-0 bg-red transition-transform duration-300 group-hover:scale-x-100" />
                </span>
                <IconArrowDown className="size-4 text-red transition-transform duration-300 group-hover:translate-y-1" />
              </a>
            </div>

            <ul className="mt-11 flex flex-wrap gap-x-7 gap-y-3">
              {["Izin Kemenkeu KM.145/2018", "Anggota IAPI", "Terdaftar di OJK"].map((t) => (
                <li key={t} className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.16em] text-ink2">
                  <svg viewBox="0 0 24 24" fill="none" className="size-3.5 text-red" aria-hidden="true">
                    <path
                      d="M4 12.6c2.3.9 3.5 2.7 4.4 5.6C10.6 12.2 13.6 7.4 20 4"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  {t}
                </li>
              ))}
            </ul>
          </div>

          {/* Kanan */}
          <div className="lg:col-span-5">
            <BalanceCard />
          </div>
        </div>

        {/* Statistik */}
        <div className="grid grid-cols-2 divide-x divide-line border-y border-line bg-paper/60 md:grid-cols-4">
          {STATS.map((s, i) => (
            <StatItem key={s.label} value={s.value} suffix={s.suffix} label={s.label} delay={i * 120} />
          ))}
        </div>

        {/* Klien marquee */}
        <div className="marquee-hover overflow-hidden border-b border-line py-4">
          <div className="anim-marquee flex w-max items-center gap-10">
            {[...CLIENTS, ...CLIENTS].map((c, i) => (
              <span
                key={`${c}-${i}`}
                className="flex items-center gap-10 whitespace-nowrap font-mono text-[11px] uppercase tracking-[0.2em] text-mute"
              >
                {c}
                <span className="text-red/70" aria-hidden="true">
                  ✳
                </span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function RevealH1() {
  const { ref, inView } = useInView<HTMLDivElement>(0.3);
  return (
    <div ref={ref} className={inView ? "is-in" : ""}>
      <h1 className="mt-5 font-display text-[clamp(2.7rem,7.2vw,5.4rem)] font-bold leading-[0.97] tracking-tight text-ink">
        <span className="mask-line">
          <span>Setiap angka</span>
        </span>
        <span className="mask-line">
          <span style={{ transitionDelay: "120ms" }}>
            punya bukti<span className="text-red">.</span>
          </span>
        </span>
      </h1>
    </div>
  );
}
