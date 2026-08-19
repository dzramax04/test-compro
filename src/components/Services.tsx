import { useState } from "react";
import { SERVICES } from "../data";
import { IconAuditTick, IconPlus } from "./Icons";
import { Reveal, SectionHead } from "./ui";

export default function Services() {
  const [open, setOpen] = useState(0);

  return (
    <section id="layanan" className="scroll-mt-28 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="grid items-end gap-10 md:grid-cols-[1fr_auto]">
          <SectionHead
            kicker="Ref. 100-Seri · Layanan"
            lines={["Ruang lingkup", "perikatan kami"]}
            desc="Enam lini jasa yang saling melengkapi — dari asurans atas laporan keuangan hingga advisory strategis. Setiap perikatan dijalankan sesuai Standar Profesional Akuntan Publik."
          />
          <Reveal delay={150} className="hidden md:block">
            <div className="rotate-2 border border-ink/15 bg-card p-5 shadow-[6px_6px_0_0_rgba(16,27,20,0.08)]">
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-mute">Memo internal</p>
              <p className="mt-2 font-mono text-xs leading-relaxed text-ink2">
                Daftar tarif &amp; proposal berlaku
                <br />
                untuk tahun anggaran 2026.
              </p>
              <p className="mt-3 inline-block -rotate-3 border-2 border-red px-2 py-0.5 font-display text-[11px] font-extrabold uppercase tracking-[0.25em] text-red">
                Aktif
              </p>
            </div>
          </Reveal>
        </div>

        <div className="mt-14 border-t border-ink/15">
          {SERVICES.map((s, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={s.code} delay={i * 60}>
                <div className="border-b border-ink/15">
                  <button
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    aria-expanded={isOpen}
                    className="group grid w-full grid-cols-[64px_1fr_auto] items-center gap-4 py-6 text-left transition-colors duration-300 hover:bg-card md:grid-cols-[110px_1fr_auto_auto] md:gap-8 md:py-7"
                  >
                    <span
                      className={`font-mono text-sm transition-colors duration-300 md:text-base ${
                        isOpen ? "text-red" : "text-green group-hover:text-red"
                      }`}
                    >
                      AKUN
                      <br />
                      {s.code}
                    </span>
                    <span>
                      <span className="block font-display text-xl font-bold tracking-tight text-ink md:text-3xl">
                        {s.title}
                      </span>
                    </span>
                    <span className="hidden font-mono text-[10px] uppercase tracking-[0.2em] text-ink2 md:inline-block">
                      <span className="border border-ink/20 px-2.5 py-1 transition-colors duration-300 group-hover:border-red group-hover:text-red">
                        {s.tag}
                      </span>
                    </span>
                    <span
                      className={`grid size-10 shrink-0 place-items-center border transition-all duration-300 ${
                        isOpen
                          ? "border-red bg-red text-paper"
                          : "border-ink/20 text-ink group-hover:border-red group-hover:text-red"
                      }`}
                    >
                      <IconPlus className={`size-4 transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`} />
                    </span>
                  </button>

                  <div
                    className={`grid transition-[grid-template-rows] duration-500 ease-out ${
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="grid gap-8 pb-9 md:grid-cols-2 md:pl-[142px]">
                        <p className="max-w-md leading-relaxed text-ink2">{s.desc}</p>
                        <div>
                          <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-mute">Deliverables</p>
                          <ul className="mt-4 space-y-2.5">
                            {s.items.map((it) => (
                              <li key={it} className="flex items-start gap-3 text-sm text-ink">
                                <IconAuditTick className="mt-0.5 size-4 shrink-0 text-red" />
                                {it}
                              </li>
                            ))}
                          </ul>
                          <p className="mt-5 inline-block border border-green/30 bg-green/5 px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.14em] text-green">
                            Standar: {s.standard}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        <p className="mt-8 font-mono text-[11px] uppercase tracking-[0.18em] text-mute">
          * Ruang lingkup, honorarium, dan jadwal dirinci dalam surat perikatan (engagement letter) terpisah.
        </p>
      </div>
    </section>
  );
}
