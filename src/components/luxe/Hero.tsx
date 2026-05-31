import { ArrowUpRight, TrendingUp, ShieldCheck, Trophy } from "lucide-react";
import { Link } from "@tanstack/react-router";
import img1 from "@/assets/luxe-1.jpg";
import img2 from "@/assets/luxe-2.jpg";
import img3 from "@/assets/luxe-3.jpg";
import img4 from "@/assets/luxe-4.jpg";
import img5 from "@/assets/luxe-5.jpg";
import img6 from "@/assets/luxe-6.jpg";

const colA = [img1, img3, img5, img1, img3, img5];
const colB = [img4, img2, img6, img4, img2, img6];
const colC = [img3, img5, img2, img3, img5, img2];

function ScrollColumn({ images, reverse }: { images: string[]; reverse?: boolean }) {
  return (
    <div className="relative h-[560px] overflow-hidden mask-fade-y">
      <div className={`flex flex-col gap-4 ${reverse ? "animate-scroll-y-rev" : "animate-scroll-y"}`}>
        {images.concat(images).map((src, i) => (
          <div key={i} className="relative aspect-[3/4] rounded-2xl overflow-hidden ring-luxe">
            <img src={src} alt="Collection still" loading="lazy" width={400} height={533}
              className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          </div>
        ))}
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden luxe-gradient pt-32 md:pt-40 pb-20">
      <div className="absolute -top-32 -left-32 h-[480px] w-[480px] rounded-full bg-[var(--neon)]/25 blur-[140px]" aria-hidden />
      <div className="absolute -bottom-32 -right-32 h-[480px] w-[480px] rounded-full bg-[var(--gold)]/20 blur-[140px]" aria-hidden />

      <div className="relative mx-auto max-w-7xl px-4 grid lg:grid-cols-[1.05fr_0.95fr] gap-12 lg:gap-20 items-center">
        <div className="animate-fade-up">
          <div className="flex items-center gap-3 mb-8">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-[var(--neon)] opacity-75 animate-ping" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--neon)]" />
            </span>
            <span className="eyebrow">The Operating System for Modern Resellers · BD</span>
          </div>

          <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl leading-[0.95] text-balance">
            Build an online <em className="italic hybrid-text">reselling business</em>, not just another side hustle.
          </h1>

          <p className="mt-8 max-w-xl text-pretty text-base md:text-lg text-muted-foreground">
            Cartory Dropship gives you verified products, profit tools, training, leaderboards and rewards — the full operating system to grow a real business from your phone.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <Link to="/register"
              className="group inline-flex h-12 items-center gap-2 rounded-full pl-6 pr-2 text-xs font-mono uppercase tracking-[0.25em] hybrid-gradient text-[var(--obsidian)] glow-neon">
              Start free in 30s
              <span className="grid h-9 w-9 place-items-center rounded-full bg-[var(--obsidian)] text-[var(--platinum)] transition-transform group-hover:rotate-45">
                <ArrowUpRight className="h-4 w-4" />
              </span>
            </Link>
            <Link to="/login"
              className="inline-flex h-12 items-center rounded-full border border-border px-6 text-xs font-mono uppercase tracking-[0.25em] text-foreground hover:bg-secondary/60 transition-colors">
              Reseller sign in
            </Link>
          </div>

          <div className="mt-14 grid grid-cols-3 gap-6 max-w-lg">
            {[
              { v: "12K+", l: "Active resellers" },
              { v: "৳2Cr", l: "Profit paid out" },
              { v: "24h", l: "Verification" },
            ].map((s, i) => (
              <div key={s.l} className={i > 0 ? "pl-6 border-l border-border" : ""}>
                <div className="font-serif text-4xl md:text-5xl gold-text">{s.v}</div>
                <div className="eyebrow mt-2">{s.l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Film strip */}
        <div className="relative animate-fade-up" style={{ animationDelay: "0.15s" }}>
          <div className="grid grid-cols-3 gap-4">
            <ScrollColumn images={colA} />
            <div className="mt-12"><ScrollColumn images={colB} reverse /></div>
            <ScrollColumn images={colC} />
          </div>

          <div className="absolute top-10 -left-4 md:-left-8 glass-dark rounded-2xl px-4 py-3 animate-float ring-luxe">
            <div className="flex items-center gap-2"><TrendingUp className="h-3.5 w-3.5 text-[var(--neon-soft)]" /><div className="eyebrow text-[var(--neon-soft)]">Today · Live</div></div>
            <div className="font-serif text-2xl mt-1">+৳8,420 profit</div>
          </div>
          <div className="absolute bottom-12 -right-4 md:-right-8 glass-dark rounded-2xl px-4 py-3 animate-float ring-luxe" style={{ animationDelay: "1.5s" }}>
            <div className="flex items-center gap-2"><Trophy className="h-3.5 w-3.5 text-[var(--gold)]" /><div className="eyebrow text-[var(--gold)]">Rank #003</div></div>
            <div className="font-serif text-2xl mt-1">Sadia R.</div>
          </div>
        </div>
      </div>

      {/* trust strip */}
      <div className="relative mx-auto max-w-7xl px-4 mt-20">
        <div className="glass-dark rounded-full px-6 py-4 flex flex-wrap items-center justify-between gap-x-8 gap-y-3 ring-luxe">
          {["Verified suppliers", "Same-day dispatch", "Cash-on-delivery", "1:1 mentorship", "Weekly payouts"].map(t => (
            <span key={t} className="eyebrow">{t}</span>
          ))}
        </div>
      </div>
    </section>
  );
}