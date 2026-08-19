import type { ReactNode } from "react";
import { useInView } from "../hooks";

/** Pembungkus scroll-reveal generik. */
export function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const { ref, inView } = useInView<HTMLDivElement>(0.15);
  return (
    <div
      ref={ref}
      className={`reveal ${inView ? "is-in" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

/** Kepala seksi dengan kicker mono + judul line-mask reveal. */
export function SectionHead({
  kicker,
  lines,
  desc,
  dark = false,
}: {
  kicker: string;
  lines: string[];
  desc?: string;
  dark?: boolean;
}) {
  const { ref, inView } = useInView<HTMLDivElement>(0.3);
  return (
    <div ref={ref} className={`reveal ${inView ? "is-in" : ""}`}>
      <p
        className={`flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.25em] ${
          dark ? "text-paper/60" : "text-green"
        }`}
      >
        <span className="inline-block size-2 bg-red" aria-hidden="true" />
        {kicker}
      </p>
      <h2
        className={`mt-5 font-display text-[clamp(1.9rem,4.4vw,3.3rem)] font-bold leading-[1.03] tracking-tight ${
          dark ? "text-paper" : "text-ink"
        }`}
      >
        {lines.map((l, i) => (
          <span className="mask-line" key={l}>
            <span style={{ transitionDelay: `${i * 100}ms` }}>{l}</span>
          </span>
        ))}
      </h2>
      {desc && (
        <p className={`mt-6 max-w-2xl text-base leading-relaxed md:text-lg ${dark ? "text-paper/70" : "text-ink2"}`}>
          {desc}
        </p>
      )}
    </div>
  );
}
