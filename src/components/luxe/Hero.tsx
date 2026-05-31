import { ArrowUpRight, TrendingUp, ShieldCheck, Trophy, CheckCircle2, Users, Zap, Sparkles } from "lucide-react";
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
    <section id="home" className="relative overflow-hidden luxe-gradient pt-32 md:pt-40 pb-16">
      <div className="absolute -top-32 -left-32 h-[480px] w-[480px] rounded-full bg-[var(--neon)]/25 blur-[140px]" aria-hidden />
      <div className="absolute -bottom-32 -right-32 h-[480px] w-[480px] rounded-full bg-[var(--gold)]/20 blur-[140px]" aria-hidden />

      <div className="relative mx-auto max-w-7xl px-4 grid lg:grid-cols-[1.05fr_0.95fr] gap-12 lg:gap-20 items-center">
        <div className="animate-fade-up">
          <div className="inline-flex items-center gap-3 mb-8 rounded-full glass-dark ring-luxe px-4 py-2">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-[var(--neon)] opacity-75 animate-ping" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--neon)]" />
            </span>
            <span className="text-xs font-semibold tracking-wide text-foreground/90">
              Bangladesh's #1 Reseller Operating System
            </span>
          </div>

          <h1 className="font-display font-extrabold text-white text-[42px] sm:text-[56px] lg:text-[72px] leading-[1.02] tracking-tight text-balance">
            Build Your Business <br className="hidden sm:block" />
            With <span className="hybrid-text">Cartory</span>
          </h1>

          <p className="mt-6 max-w-xl text-pretty text-lg md:text-xl text-[#E5E7EB] font-medium leading-relaxed">
            Verified products, profit tools, training and weekly payouts — everything you need to grow a real reselling business from your phone.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <Link to="/register"
              className="group inline-flex h-14 items-center gap-3 rounded-full pl-7 pr-2 text-base font-bold font-display hybrid-gradient text-[var(--obsidian)] glow-neon hover:scale-[1.02] active:scale-[0.99] transition-transform">
              Start Your Journey
              <span className="grid h-10 w-10 place-items-center rounded-full bg-[var(--obsidian)] text-white transition-transform group-hover:rotate-45">
                <ArrowUpRight className="h-5 w-5" />
              </span>
            </Link>
            <Link to="/login"
              className="inline-flex h-14 items-center rounded-full border border-white/20 bg-white/5 backdrop-blur px-7 text-base font-semibold font-display text-white hover:bg-white/10 transition-colors">
              Sign In
            </Link>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-6 max-w-lg">
            {[
              { v: "12K+", l: "Active resellers" },
              { v: "৳2Cr", l: "Profit paid out" },
              { v: "24h", l: "Verification" },
            ].map((s, i) => (
              <div key={s.l} className={i > 0 ? "pl-6 border-l border-border" : ""}>
                <div className="font-display font-black text-3xl md:text-4xl gold-text">{s.v}</div>
                <div className="mt-2 text-xs font-semibold uppercase tracking-wider text-[#C7CBD1]">{s.l}</div>
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
            <div className="flex items-center gap-2"><TrendingUp className="h-3.5 w-3.5 text-[var(--neon-soft)]" /><div className="text-[10px] font-bold uppercase tracking-wider text-[var(--neon-soft)]">Today · Live</div></div>
            <div className="font-display font-extrabold text-2xl mt-1 text-white">+৳8,420 profit</div>
          </div>
          <div className="absolute bottom-12 -right-4 md:-right-8 glass-dark rounded-2xl px-4 py-3 animate-float ring-luxe" style={{ animationDelay: "1.5s" }}>
            <div className="flex items-center gap-2"><Trophy className="h-3.5 w-3.5 text-[var(--gold)]" /><div className="text-[10px] font-bold uppercase tracking-wider text-[var(--gold)]">Rank #003</div></div>
            <div className="font-display font-extrabold text-2xl mt-1 text-white">Sadia R.</div>
          </div>
        </div>
      </div>

      {/* Trust bar */}
      <div className="relative mx-auto max-w-7xl px-4 mt-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
          {[
            { icon: ShieldCheck, t: "Secure Platform" },
            { icon: CheckCircle2, t: "Verified Products" },
            { icon: Zap, t: "Fast Support" },
            { icon: Users, t: "Growing Community" },
            { icon: Sparkles, t: "Real Opportunity" },
          ].map(({ icon: Icon, t }) => (
            <div key={t} className="glass-dark ring-luxe rounded-2xl px-4 py-4 flex items-center gap-3">
              <div className="h-9 w-9 rounded-full bg-[var(--neon)]/15 grid place-items-center shrink-0">
                <Icon className="h-4 w-4 text-[var(--neon-soft)]" />
              </div>
              <span className="font-display font-semibold text-sm text-white leading-tight">{t}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}