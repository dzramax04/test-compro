import { ARTICLES, TESTIMONIALS } from "../data";
import { IconArrowUpRight, IconCompass, IconDoc, IconShield, IconStampSeal } from "./Icons";
import { Reveal, SectionHead } from "./ui";

const CAT_ICONS: Record<string, typeof IconDoc> = {
  PSAK: IconDoc,
  Perpajakan: IconStampSeal,
  Asurans: IconShield,
  Advisory: IconCompass,
};

export default function Insights() {
  return (
    <section id="insight" className="scroll-mt-28 border-t border-line py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="grid items-end gap-8 md:grid-cols-[1fr_auto]">
          <SectionHead
            kicker="Publikasi · Pemikiran"
            lines={["Insight &", "regulasi terkini"]}
            desc="Catatan teknis dari meja praktik kami — ditulis auditor, bukan mesin pemasaran. Terbit tiap ada regulasi yang benar-benar mengubah angka Anda."
          />
          <Reveal delay={150}>
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-mute">
              Buletin bulanan <span className="text-red">GRATIS</span> via email
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-7 md:grid-cols-2 lg:grid-cols-4">
          {ARTICLES.map((a, i) => {
            const Icon = CAT_ICONS[a.cat] ?? IconDoc;
            return (
              <Reveal key={a.title} delay={i * 90}>
                <article className="group cursor-default">
                  <div
                    className={`ledger-rules${a.dark ? "-dark" : ""} relative aspect-[4/3] overflow-hidden border border-ink/15 ${
                      a.dark ? "bg-greendeep" : "bg-card"
                    }`}
                  >
                    <span
                      className={`absolute -bottom-5 -right-2 select-none font-display text-[5.5rem] font-extrabold leading-none ${
                        a.dark ? "text-paper/10" : "text-ink/8"
                      }`}
                      aria-hidden="true"
                    >
                      0{i + 1}
                    </span>
                    <span
                      className={`absolute left-4 top-4 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.2em] ${
                        a.dark ? "bg-paper text-greendeep" : "bg-ink text-paper"
                      }`}
                    >
                      {a.cat}
                    </span>
                    <Icon
                      className={`absolute left-1/2 top-1/2 size-10 -translate-x-1/2 -translate-y-1/2 text-red transition-transform duration-500 group-hover:scale-125 group-hover:-rotate-6`}
                    />
                  </div>
                  <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.16em] text-mute">
                    {a.date} · {a.read} baca
                  </p>
                  <h3 className="mt-2 font-display text-lg font-bold leading-snug tracking-tight text-ink transition-colors duration-300 group-hover:text-red">
                    {a.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink2">{a.excerpt}</p>
                  <p className="mt-3.5 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-green">
                    Baca artikel
                    <IconArrowUpRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>

        {/* Testimoni */}
        <div className="mt-24 grid gap-8 lg:grid-cols-2">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.name} delay={i * 120}>
              <blockquote className="relative h-full border border-ink/15 bg-card p-8 shadow-[8px_8px_0_0_rgba(28,81,61,0.08)] md:p-10">
                <span
                  className="absolute -top-7 left-6 select-none font-display text-7xl font-extrabold text-red"
                  aria-hidden="true"
                >
                  &ldquo;
                </span>
                <p className="font-display text-xl font-medium leading-snug tracking-tight text-ink md:text-[1.45rem]">
                  {t.quote}
                </p>
                <footer className="mt-7 flex flex-wrap items-end justify-between gap-4 border-t border-dashed border-ink/20 pt-5">
                  <div>
                    <p className="font-bold text-ink">{t.name}</p>
                    <p className="mt-0.5 font-mono text-[11px] uppercase tracking-[0.16em] text-mute">{t.role}</p>
                  </div>
                  <span className="border border-ink/20 px-2.5 py-1.5 font-mono text-[10px] uppercase tracking-[0.14em] text-ink2">
                    {t.company}
                  </span>
                </footer>
              </blockquote>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
