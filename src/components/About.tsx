import { INDUSTRIES, MILESTONES, OFFICE_IMG } from "../data";
import { useInView } from "../hooks";
import { Reveal, SectionHead } from "./ui";

function Bar({ pct, delay }: { pct: number; delay: number }) {
  const { ref, inView } = useInView<HTMLDivElement>(0.3);
  return (
    <div ref={ref} className="h-[3px] w-full bg-ink/10">
      <div
        className="bar-fill h-full bg-green"
        style={{ width: inView ? `${pct}%` : "0%", transitionDelay: `${delay}ms` }}
      />
    </div>
  );
}

export function IndustriesSection() {
  const max = Math.max(...INDUSTRIES.map((i) => i.count));
  return (
    <section id="industri" className="scroll-mt-28 border-y border-line bg-paper2 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="grid items-end gap-8 md:grid-cols-[1fr_auto]">
          <SectionHead
            kicker="Sektor · Portofolio"
            lines={["Industri yang", "kami layani"]}
            desc="Komposisi portofolio yang beragam menjaga independensi kami — tidak ada satu klien pun yang dominan, tidak ada sektor yang kami abaikan."
          />
          <Reveal delay={150}>
            <div className="border-l-4 border-red pl-5">
              <p className="tnum font-display text-5xl font-bold text-ink md:text-6xl">227</p>
              <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.22em] text-mute">
                Perikatan aktif lintas sektor
              </p>
            </div>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-x-14 gap-y-7 md:grid-cols-2">
          {INDUSTRIES.map((ind, i) => (
            <Reveal key={ind.name} delay={(i % 2) * 90}>
              <div className="group">
                <div className="flex items-baseline justify-between gap-4 border-b border-ink/20 pb-2.5">
                  <p className="font-display text-lg font-bold tracking-tight text-ink transition-colors group-hover:text-green">
                    <span className="mr-3 font-mono text-[10px] font-normal text-mute">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {ind.name}
                  </p>
                  <p className="tnum font-mono text-sm text-red">{ind.count}</p>
                </div>
                <div className="pt-2">
                  <Bar pct={(ind.count / max) * 100} delay={i * 50} />
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <p className="mt-10 font-mono text-[11px] uppercase tracking-[0.18em] text-mute">
          * Dihitung dari perikatan berjalan per 31 Desember 2025 — angka klien tidak dipublikasikan sesuai kode etik.
        </p>
      </div>
    </section>
  );
}

export function AboutSection() {
  return (
    <section id="tentang" className="scroll-mt-28 border-t border-line py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">
          {/* Kiri: narasi + foto */}
          <div>
            <SectionHead
              kicker="Sejak 2004 · Tentang Kami"
              lines={["Dua dekade", "menjaga integritas", "laporan keuangan"]}
              desc="Kami percaya opini audit bukan produk — ia adalah janji. Janji bahwa setiap angka yang kami tandatangani dapat ditelusuri kembali ke bukti, kapan pun ditanya."
            />
            <Reveal delay={120}>
              <p className="mt-5 max-w-xl leading-relaxed text-ink2">
                Dari kantor pertama di Sudirman hingga cabang Surabaya dan jejaring 32 negara, prinsip kami tidak
                berubah: independensi di atas segalanya, dokumentasi yang rapi, dan keberanian mengatakan apa adanya —
                termasuk ketika jawabannya tidak populer.
              </p>
            </Reveal>

            <Reveal delay={200} className="mt-10">
              <figure className="relative max-w-xl">
                <div className="absolute -bottom-3 -right-3 h-full w-full border-2 border-red" aria-hidden="true" />
                <div className="relative overflow-hidden border border-ink/15">
                  <img
                    src={OFFICE_IMG}
                    alt="Ruang rapat partner KAP Naraya & Rekan di Wisma Naraya, Jakarta"
                    className="block aspect-[4/3] w-full object-cover transition-transform duration-700 hover:scale-[1.03]"
                    loading="lazy"
                  />
                </div>
                <figcaption className="mt-5 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.2em] text-mute">
                  <span className="inline-block size-2 bg-red" aria-hidden="true" />
                  Ruang rapat partner — Wisma Naraya, Jakarta
                </figcaption>
              </figure>
            </Reveal>
          </div>

          {/* Kanan: linimasa */}
          <div>
            <div className="border-l-2 border-ink/15 pl-8 md:pl-10">
              {MILESTONES.map((m, i) => (
                <Reveal key={m.year} delay={i * 70} className={i < MILESTONES.length - 1 ? "pb-11" : ""}>
                  <div className="relative">
                    <span
                      className={`absolute -left-[41px] top-1.5 size-3 border-2 border-paper md:-left-[49px] ${
                        i === 0 ? "pulse-dot bg-red" : "bg-red"
                      }`}
                      aria-hidden="true"
                    />
                    <p className="tnum font-mono text-sm font-semibold tracking-[0.15em] text-red">{m.year}</p>
                    <h3 className="mt-1.5 font-display text-xl font-bold tracking-tight text-ink">{m.title}</h3>
                    <p className="mt-2 max-w-md text-sm leading-relaxed text-ink2">{m.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
