import { ArrowUpRight, ArrowRight, ShieldCheck, TrendingUp, Trophy, Sparkles, LogIn, UserPlus } from "lucide-react";
import { Link } from "@tanstack/react-router";
import watch from "@/assets/cat-watch.jpg";
import earbuds from "@/assets/cat-earbuds.jpg";
import speaker from "@/assets/cat-speaker.jpg";
import gadget from "@/assets/cat-gadget.jpg";
import phone from "@/assets/cat-phone.jpg";
import lifestyle from "@/assets/cat-lifestyle.jpg";
import trending from "@/assets/cat-trending.jpg";
import tech from "@/assets/cat-tech.jpg";

type Cat = { src: string; label: string };
const colA: Cat[] = [
  { src: watch, label: "Smart Watches" },
  { src: earbuds, label: "Earbuds" },
  { src: speaker, label: "Speakers" },
  { src: watch, label: "Smart Watches" },
  { src: earbuds, label: "Earbuds" },
  { src: speaker, label: "Speakers" },
];
const colB: Cat[] = [
  { src: gadget, label: "Gadgets" },
  { src: phone, label: "Phone Accessories" },
  { src: tech, label: "Tech Accessories" },
  { src: gadget, label: "Gadgets" },
  { src: phone, label: "Phone Accessories" },
  { src: tech, label: "Tech Accessories" },
];
const colC: Cat[] = [
  { src: trending, label: "Trending Now" },
  { src: lifestyle, label: "Lifestyle" },
  { src: earbuds, label: "Earbuds" },
  { src: trending, label: "Trending Now" },
  { src: lifestyle, label: "Lifestyle" },
  { src: earbuds, label: "Earbuds" },
];

function ScrollColumn({ items, reverse }: { items: Cat[]; reverse?: boolean }) {
  return (
    <div className="relative h-[560px] overflow-hidden mask-fade-y">
      <div className={`flex flex-col gap-4 ${reverse ? "animate-scroll-y-rev" : "animate-scroll-y"}`}>
        {items.concat(items).map((it, i) => (
          <div key={i} className="group relative aspect-[3/4] rounded-2xl overflow-hidden ring-luxe">
            <img
              src={it.src}
              alt={it.label}
              loading="lazy"
              width={400}
              height={533}
              className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute inset-0 ring-1 ring-inset ring-white/5" />
            <div className="absolute left-3 bottom-3 right-3 flex items-center justify-between">
              <span className="font-display text-[11px] font-bold uppercase tracking-[0.2em] text-white drop-shadow">
                {it.label}
              </span>
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--neon)] shadow-[0_0_12px_var(--neon)]" />
            </div>
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
            Sell Trending Products. <br className="hidden sm:block" />
            <span className="hybrid-text">Keep The Profit.</span>
          </h1>

          <p className="mt-6 max-w-xl text-pretty text-lg md:text-xl text-[#E5E7EB] font-medium leading-relaxed">
            Cartory gives you verified suppliers, ready-to-sell gadgets and weekly payouts — run a real online business from your phone in 6 simple steps.
          </p>

          {/* Dual paths */}
          <div className="mt-10 grid sm:grid-cols-2 gap-4 max-w-2xl">
            <Link
              to="/register"
              className="group relative overflow-hidden rounded-2xl p-[1.5px] hybrid-gradient glow-neon hover:scale-[1.02] transition-transform"
            >
              <div className="rounded-2xl bg-[var(--obsidian)]/95 p-5 h-full flex flex-col gap-3">
                <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.25em] text-[var(--neon-soft)]">
                  <UserPlus className="h-3.5 w-3.5" /> Path A · New User
                </div>
                <div className="font-display font-extrabold text-xl text-white leading-tight">
                  Register & Start Earning
                </div>
                <div className="text-xs text-[#C7CBD1]">Setup in 3 minutes. Free to join.</div>
                <div className="mt-2 inline-flex items-center gap-2 text-sm font-bold font-display gold-text">
                  Start journey
                  <ArrowUpRight className="h-4 w-4 text-[var(--gold)] transition-transform group-hover:rotate-45" />
                </div>
                <span className="pointer-events-none absolute -inset-1 bg-gradient-to-br from-[var(--neon)]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </Link>
            <Link
              to="/login"
              className="group relative rounded-2xl border border-white/15 bg-white/[0.04] backdrop-blur p-5 flex flex-col gap-3 hover:bg-white/[0.07] hover:border-white/25 transition-colors"
            >
              <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.25em] text-[var(--gold-soft)]">
                <LogIn className="h-3.5 w-3.5" /> Path B · Existing User
              </div>
              <div className="font-display font-extrabold text-xl text-white leading-tight">
                Sign In To Dashboard
              </div>
              <div className="text-xs text-[#C7CBD1]">Continue managing your orders.</div>
              <div className="mt-2 inline-flex items-center gap-2 text-sm font-bold font-display text-white">
                Open dashboard
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          </div>

          <div className="mt-5 flex items-center gap-2 text-xs text-[#9CA3AF]">
            <Sparkles className="h-3.5 w-3.5 text-[var(--gold)]" />
            <span className="font-mono uppercase tracking-[0.2em]">
              Scroll to see how it works ↓
            </span>
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
            <ScrollColumn items={colA} />
            <div className="mt-12"><ScrollColumn items={colB} reverse /></div>
            <ScrollColumn items={colC} />
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

      {/* Trust strip */}
      <div className="relative mx-auto max-w-7xl px-4 mt-16">
        <div className="glass-dark ring-luxe rounded-2xl px-6 py-4 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs font-display font-semibold text-white">
            <ShieldCheck className="h-4 w-4 text-[var(--neon-soft)]" /> Verified Cartory Suppliers
          </div>
          <div className="flex items-center gap-2 text-xs font-display font-semibold text-white">
            <TrendingUp className="h-4 w-4 text-[var(--gold)]" /> Weekly Profit Payouts
          </div>
          <div className="flex items-center gap-2 text-xs font-display font-semibold text-white">
            <Trophy className="h-4 w-4 text-[var(--gold)]" /> Leaderboard & Rewards
          </div>
          <div className="flex items-center gap-2 text-xs font-display font-semibold text-white">
            <Sparkles className="h-4 w-4 text-[var(--neon-soft)]" /> 24h NID Approval
          </div>
        </div>
      </div>
    </section>
  );
}