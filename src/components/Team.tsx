import { CREDENTIALS, TEAM } from "../data";
import { IconShield } from "./Icons";
import { Reveal, SectionHead } from "./ui";

export default function Team() {
  return (
    <section id="tim" className="scroll-mt-28 border-t border-line py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="grid items-end gap-8 md:grid-cols-[1fr_auto]">
          <SectionHead
            kicker="Partner · Pimpinan Praktik"
            lines={["Dipimpin auditor", "yang turun tangan"]}
            desc="Empat partner dengan gabungan 90+ tahun pengalaman — setiap partner menandatangani opini hanya untuk perikatan yang ia awasi langsung."
          />
          <Reveal delay={150}>
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-mute">
              Retensi klien <span className="text-red">92%</span> — rata-rata 6 tahun
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {TEAM.map((t, i) => (
            <Reveal key={t.name} delay={i * 90}>
              <article className="group">
                <div className="relative aspect-[4/5] overflow-hidden border border-ink/15 bg-paper2">
                  <img
                    src={t.img}
                    alt={`Potret ${t.name}, ${t.role}`}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                    loading="lazy"
                  />
                  <span className="absolute left-3 top-3 -rotate-3 bg-red px-2 py-1 font-mono text-[10px] tracking-[0.18em] text-paper">
                    {t.certs}
                  </span>
                  <span
                    className="absolute bottom-0 left-0 h-1 w-full origin-left scale-x-0 bg-red transition-transform duration-500 group-hover:scale-x-100"
                    aria-hidden="true"
                  />
                </div>
                <h3 className="mt-5 font-display text-lg font-bold leading-tight tracking-tight text-ink">
                  {t.name}
                </h3>
                <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.2em] text-red">{t.role}</p>
                <p className="mt-2.5 text-sm leading-relaxed text-ink2">{t.bio}</p>
                <div className="mt-3.5 flex flex-wrap gap-1.5">
                  {t.tags.map((tag) => (
                    <span
                      key={tag}
                      className="border border-ink/20 px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.12em] text-ink2 transition-colors group-hover:border-green/40"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {/* Kredensial & izin */}
        <Reveal delay={100}>
          <div className="mt-20 border-y border-line">
            <p className="border-b border-line py-3 font-mono text-[10px] uppercase tracking-[0.25em] text-mute">
              Izin, registrasi &amp; afiliasi
            </p>
            <ul className="grid sm:grid-cols-2 lg:grid-cols-3">
              {CREDENTIALS.map((c, i) => (
                <li
                  key={c}
                  className={`flex items-center gap-3.5 py-4 pr-6 font-mono text-xs text-ink2 ${
                    i < CREDENTIALS.length - 1 ? "border-b border-line lg:border-b-0" : ""
                  } ${i % 3 !== 2 ? "lg:border-r lg:border-line" : ""} ${i % 2 === 0 ? "sm:border-r sm:border-line lg:border-r" : ""}`}
                >
                  <IconShield className="size-5 shrink-0 text-green" />
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
