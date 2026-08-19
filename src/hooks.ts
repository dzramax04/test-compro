import { useEffect, useRef, useState } from "react";

/** True jika pengguna memilih prefers-reduced-motion. */
export function usePrefersReducedMotion(): boolean {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const onChange = (e: MediaQueryListEvent) => setReduced(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);
  return reduced;
}

/** Memantau apakah elemen masuk viewport. */
export function useInView<T extends HTMLElement>(threshold = 0.2, once = true) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setInView(true);
            if (once) obs.unobserve(e.target);
          } else if (!once) {
            setInView(false);
          }
        });
      },
      { threshold },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold, once]);
  return { ref, inView };
}

/** Angka berjalan naik saat aktif. */
export function useCountUp(target: number, active: boolean, duration = 1700): number {
  const reduced = usePrefersReducedMotion();
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!active) return;
    if (reduced) {
      setValue(target);
      return;
    }
    let raf = 0;
    const start = performance.now();
    const step = (t: number) => {
      const p = Math.min(1, (t - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setValue(Math.round(target * eased));
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [active, target, duration, reduced]);
  return value;
}

/** Efek decode/scramble pada teks mono. */
export function useScramble(text: string, active: boolean): string {
  const reduced = usePrefersReducedMotion();
  const [out, setOut] = useState(text);
  useEffect(() => {
    if (!active) return;
    if (reduced) {
      setOut(text);
      return;
    }
    const glyphs = "▮#/%&$01△·";
    let frame = 0;
    const id = window.setInterval(() => {
      frame += 1;
      const settled = Math.floor(frame * 1.35);
      let s = "";
      for (let i = 0; i < text.length; i += 1) {
        const c = text[i];
        if (c === " " || c === "·" || i < settled) s += c;
        else s += glyphs[Math.floor(Math.random() * glyphs.length)];
      }
      setOut(s);
      if (settled >= text.length) {
        setOut(text);
        window.clearInterval(id);
      }
    }, 26);
    return () => window.clearInterval(id);
  }, [active, text, reduced]);
  return out;
}

/** Format angka gaya Indonesia: 73.523.412 */
export function fmtId(n: number): string {
  return n.toLocaleString("id-ID");
}
