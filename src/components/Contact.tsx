import { useState } from "react";
import type { FormEvent } from "react";
import { NAV_LINKS, OFFICES, SERVICES } from "../data";
import { IconArrowUpRight, IconClock, IconMail, IconPhone, IconPin } from "./Icons";
import { Reveal, SectionHead } from "./ui";

const inputCls =
  "w-full border border-ink/25 bg-paper px-3.5 py-2.5 text-sm text-ink outline-none transition placeholder:text-mute/70 focus:border-red focus:ring-2 focus:ring-red/20";

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [refNo] = useState(() => `NRY-2026-${String(Math.floor(100 + Math.random() * 900))}`);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="kontak" className="ledger-rules relative scroll-mt-28 border-t border-line py-24 md:py-32">
      <div className="pointer-events-none absolute bottom-0 left-3 top-0 w-px bg-red/40 md:left-8" aria-hidden="true" />
      <div className="mx-auto max-w-7xl px-6 md:px-14 lg:px-20">
        <div className="grid gap-14 lg:grid-cols-[1fr_1.05fr] lg:gap-20">
          {/* Kiri — info */}
          <div>
            <SectionHead
              kicker="Hubungi Kami · Form P-01"
              lines={["Mulai perikatan", "Anda hari ini"]}
              desc="Ceritakan kebutuhan Anda — tim kami merespons dalam 1×24 jam kerja dengan usulan ruang lingkup dan jadwal diskusi awal, tanpa biaya."
            />

            <div className="mt-10 space-y-6">
              {[
                { icon: IconPhone, label: "Telepon", value: "+62 21 5150 2004", sub: "Senin–Jumat, 08.30–17.30 WIB" },
                { icon: IconMail, label: "Email", value: "kantor@narayarekan.co.id", sub: "Respons maksimal 1 hari kerja" },
                { icon: IconClock, label: "Jam Operasional", value: "08.30 – 17.30 WIB", sub: "Tutup pada hari libur nasional" },
              ].map((c) => (
                <Reveal key={c.label} delay={60}>
                  <div className="flex items-start gap-4">
                    <span className="grid size-11 shrink-0 place-items-center border border-ink/20 text-green">
                      <c.icon className="size-5" />
                    </span>
                    <div>
                      <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-mute">{c.label}</p>
                      <p className="mt-1 font-semibold text-ink">{c.value}</p>
                      <p className="text-sm text-ink2">{c.sub}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            <div className="mt-11 space-y-6">
              {OFFICES.map((o, i) => (
                <Reveal key={o.city} delay={i * 100}>
                  <div className="border-l-4 border-red pl-5">
                    <p className="flex items-center gap-2 font-display text-lg font-bold tracking-tight text-ink">
                      <IconPin className="size-4 text-red" />
                      {o.city}
                    </p>
                    <p className="mt-1.5 max-w-sm text-sm leading-relaxed text-ink2">{o.addr}</p>
                    <p className="mt-1 font-mono text-xs text-mute">{o.phone}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Kanan — form */}
          <Reveal delay={150}>
            <div className="relative border border-ink/15 bg-card p-7 shadow-[12px_12px_0_0_rgba(28,81,61,0.10)] md:p-9">
              <span className="absolute -top-4 right-6 rotate-2 bg-ink px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.22em] text-paper">
                Form P-01 · Perikatan
              </span>

              {sent ? (
                <div className="flex min-h-[430px] flex-col items-center justify-center text-center">
                  <div className="stamp-anim grid size-36 place-items-center rounded-full border-[3px] border-green text-green">
                    <div className="grid size-32 place-items-center rounded-full border border-green/60">
                      <div>
                        <p className="font-mono text-[9px] uppercase tracking-[0.22em]">Permohonan</p>
                        <p className="font-display text-2xl font-extrabold tracking-widest">DITERIMA</p>
                        <p className="mt-0.5 font-mono text-[9px] uppercase tracking-[0.18em]">Ref. {refNo}</p>
                      </div>
                    </div>
                  </div>
                  <h3 className="mt-8 font-display text-2xl font-bold tracking-tight text-ink">
                    Terima kasih — permohonan tercatat.
                  </h3>
                  <p className="mt-3 max-w-sm text-sm leading-relaxed text-ink2">
                    Simpan nomor referensi <span className="font-mono font-semibold text-red">{refNo}</span>. Tim kami
                    akan menghubungi Anda dalam 1×24 jam kerja untuk diskusi pendahuluan.
                  </p>
                  <button
                    onClick={() => setSent(false)}
                    className="btn-press mt-8 rounded-[4px] border border-ink bg-paper px-6 py-3 font-display text-sm font-bold text-ink"
                  >
                    Kirim permohonan lain
                  </button>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="f-nama" className="mb-1.5 block font-mono text-[10px] uppercase tracking-[0.2em] text-ink2">
                        Nama Lengkap *
                      </label>
                      <input id="f-nama" name="nama" required placeholder="cth. Andi Prasetyo" className={inputCls} />
                    </div>
                    <div>
                      <label htmlFor="f-email" className="mb-1.5 block font-mono text-[10px] uppercase tracking-[0.2em] text-ink2">
                        Email *
                      </label>
                      <input id="f-email" name="email" type="email" required placeholder="nama@perusahaan.co.id" className={inputCls} />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="f-perusahaan" className="mb-1.5 block font-mono text-[10px] uppercase tracking-[0.2em] text-ink2">
                      Perusahaan / Entitas *
                    </label>
                    <input id="f-perusahaan" name="perusahaan" required placeholder="PT / CV / Yayasan…" className={inputCls} />
                  </div>
                  <div>
                    <label htmlFor="f-layanan" className="mb-1.5 block font-mono text-[10px] uppercase tracking-[0.2em] text-ink2">
                      Layanan yang dibutuhkan *
                    </label>
                    <select id="f-layanan" name="layanan" required defaultValue="" className={inputCls}>
                      <option value="" disabled>
                        — Pilih layanan —
                      </option>
                      {SERVICES.map((s) => (
                        <option key={s.code} value={s.code}>
                          {s.code} · {s.title}
                        </option>
                      ))}
                      <option value="999">Lainnya / belum yakin</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="f-pesan" className="mb-1.5 block font-mono text-[10px] uppercase tracking-[0.2em] text-ink2">
                      Ringkasan kebutuhan *
                    </label>
                    <textarea
                      id="f-pesan"
                      name="pesan"
                      required
                      rows={4}
                      placeholder="cth. Audit LK TA 2025 untuk PT manufaktur, target laporan terbit akhir Maret…"
                      className={inputCls}
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn-press flex w-full items-center justify-center gap-2.5 rounded-[4px] bg-red py-4 font-display text-sm font-bold uppercase tracking-[0.12em] text-paper"
                  >
                    Kirim Permohonan
                    <IconArrowUpRight className="size-4" />
                  </button>
                  <p className="font-mono text-[10px] leading-relaxed tracking-[0.06em] text-mute">
                    Data Anda dilindungi kerahasiaan sesuai Kode Etik Profesi Akuntan Publik — tidak dibagikan ke pihak
                    ketiga.
                  </p>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="overflow-hidden bg-inkblack pb-8 pt-16 text-paper">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <p
          className="select-none font-display text-[clamp(3rem,11vw,9.5rem)] font-extrabold uppercase leading-[0.88] tracking-tight"
          style={{ color: "transparent", WebkitTextStroke: "1.5px rgba(242,243,236,0.3)" }}
          aria-hidden="true"
        >
          Naraya
          <br />
          &amp; Rekan
        </p>

        <div className="mt-14 grid gap-10 border-t border-paper/15 pt-10 md:grid-cols-[1.3fr_1fr_1fr_1.2fr]">
          <div>
            <div className="flex items-center gap-3">
              <span className="grid size-9 place-items-center rounded-[4px] bg-red text-paper">
                <svg width="17" height="17" viewBox="0 0 32 32" aria-hidden="true">
                  <path
                    d="M10 23V9l12 14V9"
                    stroke="currentColor"
                    strokeWidth="3.6"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <span className="font-display text-lg font-bold tracking-tight">
                NARAYA <span className="text-red">&amp;</span> REKAN
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-paper/60">
              Kantor Akuntan Publik independen — audit, perpajakan, dan advisory. Menjaga integritas angka sejak 2004.
            </p>
            <p className="mt-5 font-mono text-[11px] leading-relaxed text-paper/50">
              Wisma Naraya Lt. 9, Jl. Jend. Sudirman
              <br />
              Kav. 52-53, Jakarta Selatan 12190
            </p>
          </div>

          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-paper/45">Layanan</p>
            <ul className="mt-4 space-y-2.5">
              {SERVICES.slice(0, 5).map((s) => (
                <li key={s.code}>
                  <a href="#layanan" className="text-sm text-paper/75 transition-colors hover:text-red">
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-paper/45">Kantor</p>
            <ul className="mt-4 space-y-2.5">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-sm text-paper/75 transition-colors hover:text-red">
                    {l.label}
                  </a>
                </li>
              ))}
              <li>
                <a href="#kontak" className="text-sm text-paper/75 transition-colors hover:text-red">
                  Karier — Bergabung
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-paper/45">Regulasi &amp; Etik</p>
            <ul className="mt-4 space-y-2.5 font-mono text-[11px] leading-relaxed text-paper/55">
              <li>Izin Kemenkeu RI No. KM.145/KM.1/2018</li>
              <li>Anggota IAPI — No. 0921</li>
              <li>Terdaftar &amp; diawasi OJK</li>
              <li>Wajib PPL &amp; reviu mutu berkala</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-between gap-3 border-t border-paper/15 pt-6">
          <p className="font-mono text-[11px] text-paper/45">
            © 2026 KAP Naraya &amp; Rekan. Seluruh perikatan dilaksanakan sesuai SPAP.
          </p>
          <p className="font-mono text-[11px] text-paper/45">
            Independen · Integritas · Objektivitas · Kompetensi
          </p>
        </div>
      </div>
    </footer>
  );
}
