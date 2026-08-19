import { useEffect, useState } from "react";
import { NAV_LINKS, TICKER_ITEMS } from "../data";
import { IconMenu, IconX } from "./Icons";

function Ticker() {
  const items = [...TICKER_ITEMS, ...TICKER_ITEMS];
  return (
    <div className="overflow-hidden border-b border-paper/10 bg-greendeep text-paper">
      <div className="anim-marquee-fast flex w-max items-center gap-8 py-2 pl-4">
        {items.map((t, i) => (
          <span
            key={`${t}-${i}`}
            className="flex items-center gap-8 whitespace-nowrap font-mono text-[10px] uppercase tracking-[0.22em] text-paper/80"
          >
            {t}
            <span className="text-red" aria-hidden="true">
              ✳
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50">
      <Ticker />
      <div
        className={`border-b transition-colors duration-300 ${
          scrolled
            ? "border-line bg-paper/95 shadow-[0_2px_0_0_rgba(16,27,20,0.04)] backdrop-blur-sm"
            : "border-transparent bg-paper"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3.5 md:px-12">
          <a href="#top" className="flex items-center gap-3" aria-label="Naraya & Rekan — beranda">
            <span className="grid size-9 shrink-0 place-items-center rounded-[4px] bg-red text-paper">
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
            <span className="leading-none">
              <span className="block font-display text-lg font-bold tracking-tight text-ink">
                NARAYA <span className="text-red">&amp;</span> REKAN
              </span>
              <span className="mt-1 block font-mono text-[9px] tracking-[0.28em] text-mute">
                AKUNTAN PUBLIK — EST. 2004
              </span>
            </span>
          </a>

          <nav className="hidden items-center gap-7 lg:flex" aria-label="Navigasi utama">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="group relative text-[13.5px] font-medium text-ink2 transition-colors hover:text-ink"
              >
                {l.label}
                <span className="absolute -bottom-1.5 left-0 h-[2px] w-full origin-left scale-x-0 bg-red transition-transform duration-300 group-hover:scale-x-100" />
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#kontak"
              className="btn-press hidden rounded-[4px] bg-red px-5 py-2.5 font-display text-sm font-bold tracking-wide text-paper sm:block"
            >
              Konsultasi
            </a>
            <button
              onClick={() => setOpen((v) => !v)}
              className="grid size-10 place-items-center border border-ink/20 text-ink transition-colors hover:border-red hover:text-red lg:hidden"
              aria-expanded={open}
              aria-label="Buka menu"
            >
              {open ? <IconX className="size-5" /> : <IconMenu className="size-5" />}
            </button>
          </div>
        </div>

        {/* Menu mobile */}
        <div
          className={`grid overflow-hidden border-line bg-paper transition-[grid-template-rows,border] duration-400 lg:hidden ${
            open ? "grid-rows-[1fr] border-t" : "grid-rows-[0fr]"
          }`}
        >
          <div className="overflow-hidden">
            <nav className="flex flex-col px-5 py-4" aria-label="Navigasi mobile">
              {NAV_LINKS.map((l, i) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between border-b border-line py-3.5 font-display text-lg font-bold text-ink last:border-b-0"
                >
                  <span>{l.label}</span>
                  <span className="font-mono text-[10px] text-mute">0{i + 1}</span>
                </a>
              ))}
              <a
                href="#kontak"
                onClick={() => setOpen(false)}
                className="btn-press mt-4 rounded-[4px] bg-red px-5 py-3 text-center font-display text-sm font-bold text-paper"
              >
                Jadwalkan Konsultasi
              </a>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
