import { UserPlus, FileCheck2, ShieldCheck, PackageSearch, ShoppingBag, Wallet, ArrowDown, Sparkles } from "lucide-react";
import { Link } from "@tanstack/react-router";

const steps = [
  { n: "01", title: "Register", desc: "Create your free Cartory account in 60 seconds.", icon: UserPlus },
  { n: "02", title: "Complete Profile", desc: "Add your details and upload your NID for verification.", icon: FileCheck2 },
  { n: "03", title: "Get Approved", desc: "Our team verifies your profile within 24 hours.", icon: ShieldCheck },
  { n: "04", title: "Choose Products", desc: "Browse 1,000+ verified products with set profit margins.", icon: PackageSearch },
  { n: "05", title: "Receive Orders", desc: "Share products with customers and collect orders.", icon: ShoppingBag },
  { n: "06", title: "Earn Profit", desc: "We ship and you get paid every week. Simple.", icon: Wallet },
];

const timeline = ["Visitor", "Member", "Verified Reseller", "Active Seller", "Top Performer", "Reward Winner"];

export function Journey() {
  return (
    <section id="how-it-works" className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 luxe-gradient opacity-60" aria-hidden />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 h-[500px] w-[500px] rounded-full bg-[var(--neon)]/15 blur-[160px]" aria-hidden />

      <div className="relative mx-auto max-w-7xl px-4">
        <div className="text-center mb-16">
          <div className="eyebrow mb-4">The Cartory Journey</div>
          <h2 className="font-display font-extrabold text-white text-4xl md:text-6xl tracking-tight">
            From Sign‑up to <span className="hybrid-text">First Profit</span>
          </h2>
          <p className="mt-5 max-w-2xl mx-auto text-[#C7CBD1] text-lg">
            Six guided steps. No inventory. No upfront cost. Just follow the roadmap.
          </p>
        </div>

        {/* 6-step roadmap */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map(({ n, title, desc, icon: Icon }, i) => (
            <div key={n} className="group relative">
              <div className="card-3d relative h-full rounded-3xl glass-dark ring-luxe p-6 overflow-hidden">
                <div className="absolute -top-10 -right-10 h-32 w-32 rounded-full bg-[var(--neon)]/10 blur-2xl group-hover:bg-[var(--neon)]/25 transition-colors" />
                <div className="flex items-start justify-between">
                  <span className="font-mono text-xs tracking-[0.3em] text-[var(--gold)]">STEP {n}</span>
                  <div className="h-11 w-11 rounded-2xl hybrid-gradient grid place-items-center text-[var(--obsidian)] shadow-lg">
                    <Icon className="h-5 w-5" strokeWidth={2.4} />
                  </div>
                </div>
                <h3 className="mt-6 font-display font-extrabold text-2xl text-white">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#C7CBD1]">{desc}</p>
                <div className="mt-6 h-px w-full bg-gradient-to-r from-transparent via-white/15 to-transparent" />
                <div className="mt-3 flex items-center justify-between text-[10px] font-mono uppercase tracking-[0.25em] text-[#9CA3AF]">
                  <span>Progress</span>
                  <span className="text-[var(--neon-soft)]">{Math.round(((i + 1) / 6) * 100)}%</span>
                </div>
              </div>

              {/* connector arrow */}
              {i < steps.length - 1 && (
                <div className="hidden lg:flex absolute -right-3 top-1/2 -translate-y-1/2 z-10 items-center justify-center" aria-hidden>
                  <span className="h-9 w-9 rounded-full glass-dark ring-luxe grid place-items-center animate-pulse-neon">
                    <ArrowDown className="h-4 w-4 -rotate-90 text-[var(--neon-soft)]" />
                  </span>
                </div>
              )}
              {i < steps.length - 1 && (
                <div className="lg:hidden flex justify-center my-2" aria-hidden>
                  <ArrowDown className="h-5 w-5 text-[var(--neon-soft)] animate-bounce" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Timeline: Visitor → Reward Winner */}
        <div className="mt-24">
          <div className="text-center mb-10">
            <div className="eyebrow mb-3">Your Reseller Evolution</div>
            <h3 className="font-display font-extrabold text-white text-3xl md:text-4xl">
              From <span className="neon-text">Visitor</span> to <span className="gold-text">Reward Winner</span>
            </h3>
          </div>

          <div className="relative">
            {/* line */}
            <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-[2px] bg-gradient-to-r from-transparent via-white/15 to-transparent" />
            <div className="absolute left-[6%] right-[6%] top-1/2 -translate-y-1/2 h-[2px] hybrid-gradient opacity-70 blur-[1px]" />

            <div className="relative grid grid-cols-3 md:grid-cols-6 gap-4">
              {timeline.map((label, i) => (
                <div key={label} className="flex flex-col items-center text-center">
                  <div className={`relative h-12 w-12 rounded-full grid place-items-center glass-dark ring-luxe ${i === timeline.length - 1 ? "animate-pulse-gold" : "animate-pulse-neon"}`}>
                    <span className="font-mono text-xs font-bold text-white">{String(i + 1).padStart(2, "0")}</span>
                  </div>
                  <div className="mt-3 font-display font-bold text-xs md:text-sm text-white leading-tight">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-20 relative rounded-3xl overflow-hidden glass-dark ring-luxe p-8 md:p-12 text-center">
          <div className="absolute -top-20 -left-20 h-64 w-64 rounded-full bg-[var(--neon)]/25 blur-3xl" aria-hidden />
          <div className="absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-[var(--gold)]/20 blur-3xl" aria-hidden />
          <div className="relative">
            <Sparkles className="h-6 w-6 mx-auto text-[var(--gold)]" />
            <h3 className="mt-4 font-display font-extrabold text-white text-3xl md:text-5xl">
              Ready to walk the journey?
            </h3>
            <p className="mt-4 max-w-xl mx-auto text-[#C7CBD1]">
              Join 12,000+ Cartory resellers building a real business — no inventory, no risk.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link to="/register" className="inline-flex h-14 items-center gap-3 rounded-full px-8 text-base font-bold font-display hybrid-gradient text-[var(--obsidian)] glow-neon hover:scale-[1.03] transition-transform">
                Register & Start Earning
              </Link>
              <Link to="/login" className="inline-flex h-14 items-center rounded-full border border-white/20 bg-white/5 backdrop-blur px-8 text-base font-semibold font-display text-white hover:bg-white/10 transition-colors">
                Explore Products
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}