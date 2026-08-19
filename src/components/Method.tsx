import { useEffect, useRef, useState } from "react";
import { PHASES } from "../data";
import { IconAuditTick } from "./Icons";
import { SectionHead } from "./ui";

export default function Method() {
  const [active, setActive] = useState(0);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const idx = Number((e.target as HTMLElement).dataset.idx ?? "0");
            setActive(idx);
          }
        });
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 },
    );
    cardRefs.current.forEach((el) => {
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  return (
    <section id="metodologi" className="ledger-rules-dark scroll-mt-28 bg-greendeep py-24 text-paper md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="grid gap-14 lg:grid-cols-[1fr_1.15fr] lg:gap-20">
          {/* Kolom kiri — sticky */}
          <div className="lg:sticky lg:top-32 lg:self-start">
            <SectionHead
              dark
              kicker="Metodologi · Berbasis Risiko"
              lines={["Audit berbasis", "risiko — bukan", "asumsi."]}
              desc="Setiap perikatan mengikuti alur yang sama disiplinnya: risiko dinilai dulu, bukti dikumpulkan kemudian, dan opini hanya terbit setelah penelaahan mutu berlapis."
            />

            <div className="mt-10 flex items-end gap-6">
              <p
                className="select-none font-display text-[6.5rem] font-extrabold leading-[0.8] tracking-tight md:text-[8.5rem]"
                style={{ color: "transparent", WebkitTextStroke: "1.5px rgba(242,243,236,0.4)" }}
                aria-hidden="true"
              >
                {PHASES[active].no}
              </p>
              <div className="pb-2">
                <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-paper/50">
                  Fase {PHASES[active].no} / 04
                </p>
                <p className="mt-1 font-display text-lg font-bold text-red">{PHASES[active].std}</p>
              </div>
            </div>

            <div className="mt-6 h-1 w-full max-w-sm bg-paper/15">
              <div
                className="h-full bg-red transition-all duration-500 ease-out"
                style={{ width: `${((active + 1) / PHASES.length) * 100}%` }}
              />
            </div>

            <p className="mt-8 max-w-sm font-mono text-[11px] leading-relaxed tracking-[0.08em] text-paper/50">
              DILAKSANAKAN SESUAI STANDAR AUDIT (SA) — IAPI / IFAC,
              <br />
              DENGAN PENGENDALIAN MUTU SPM 1.
            </p>
          </div>

          {/* Kolom kanan — fase */}
          <div className="space-y-6">
            {PHASES.map((p, i) => (
              <div
                key={p.no}
                data-idx={i}
                ref={(el) => {
                  cardRefs.current[i] = el;
                }}
                className={`border p-7 transition-all duration-500 md:p-9 ${
                  active === i
                    ? "border-paper/25 border-l-4 border-l-red bg-paper/[0.045]"
                    : "border-paper/12 bg-transparent opacity-70"
                }`}
              >
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <p className="font-mono text-sm text-red">FASE {p.no}</p>
                  <p className="border border-paper/25 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-paper/70">
                    {p.dur}
                  </p>
                </div>
                <h3 className="mt-4 font-display text-2xl font-bold tracking-tight text-paper md:text-[1.7rem]">
                  {p.title}
                </h3>
                <p className="mt-3 leading-relaxed text-paper/70">{p.desc}</p>
                <ul className="mt-5 grid gap-2.5 sm:grid-cols-2">
                  {p.tasks.map((t) => (
                    <li key={t} className="flex items-start gap-2.5 font-mono text-xs leading-relaxed text-paper/75">
                      <IconAuditTick className="mt-0.5 size-3.5 shrink-0 text-red" />
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
