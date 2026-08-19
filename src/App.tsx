import { useEffect, useState } from "react";
import { AboutSection, IndustriesSection } from "./components/About";
import Contact, { Footer } from "./components/Contact";
import Header from "./components/Header";
import Hero from "./components/Hero";
import { IconArrowUpRight } from "./components/Icons";
import Insights from "./components/Insights";
import Method from "./components/Method";
import Services from "./components/Services";
import Team from "./components/Team";

const NOISE_BG = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='160' height='160' filter='url(%23n)'/%3E%3C/svg%3E")`;

function BackToTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 700);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <button
      aria-label="Kembali ke atas"
      onClick={() => {
        const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        window.scrollTo({ top: 0, behavior: reduced ? "auto" : "smooth" });
      }}
      className={`btn-press fixed bottom-6 right-6 z-40 grid size-12 place-items-center rounded-[4px] border border-ink bg-paper text-ink hover:bg-red hover:text-paper ${
        show ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
      } transition-all duration-300`}
    >
      <IconArrowUpRight className="size-5 -rotate-45" />
    </button>
  );
}

export default function App() {
  return (
    <div id="top" className="min-h-screen overflow-x-clip">
      <Header />
      <main>
        <Hero />
        <Services />
        <Method />
        <IndustriesSection />
        <Team />
        <AboutSection />
        <Insights />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-[70] opacity-[0.05] mix-blend-multiply"
        style={{ backgroundImage: NOISE_BG }}
      />
    </div>
  );
}
