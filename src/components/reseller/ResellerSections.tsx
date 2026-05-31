import { Link } from "@tanstack/react-router";
import {
  ShieldCheck, TrendingUp, Wallet, Trophy, Target, Gift,
  GraduationCap, Megaphone, ArrowUpRight, ChevronDown, CheckCircle2,
} from "lucide-react";
import { useState } from "react";

const benefits = [
  { icon: ShieldCheck, title: "Verified suppliers", body: "Every product is source-verified. No fake stock, no surprises." },
  { icon: Wallet, title: "Transparent profit", body: "Cost, suggested price, and your profit shown on every product card." },
  { icon: TrendingUp, title: "Real business tools", body: "Order pipeline, profit tracking, customer management — not just a catalog." },
  { icon: GraduationCap, title: "Cartory Academy", body: "Free training on product research, FB ads, closing scripts and more." },
  { icon: Trophy, title: "Leaderboard + Rewards", body: "Top resellers earn cash bonuses, badges and exclusive product drops." },
  { icon: Megaphone, title: "24/7 community", body: "Active Telegram + WhatsApp groups with mentors and senior resellers." },
];

const leaderboard = [
  { rank: 1, name: "Sadia R.", profit: "৳184,200", orders: 412 },
  { rank: 2, name: "Imran H.", profit: "৳162,750", orders: 388 },
  { rank: 3, name: "Nusrat A.", profit: "৳148,910", orders: 351 },
  { rank: 4, name: "Rakib M.", profit: "৳121,300", orders: 297 },
  { rank: 5, name: "Tanvir S.", profit: "৳104,800", orders: 264 },
];

const tiers = [
  { o: 50, n: "Bronze", r: "৳1,500 bonus" },
  { o: 100, n: "Silver", r: "৳3,500 bonus" },
  { o: 250, n: "Gold", r: "৳10,000 bonus" },
  { o: 500, n: "Platinum", r: "৳25,000 bonus" },
  { o: 1000, n: "Diamond", r: "৳75,000 + Umrah" },
];

const courses = [
  { l: "Beginner", t: "Reseller Foundations", d: "Zero to first order in 7 days." },
  { l: "Intermediate", t: "Product Research", d: "Find winners before competitors do." },
  { l: "Intermediate", t: "Facebook Marketing", d: "Profitable ads on tiny budgets." },
  { l: "Advanced", t: "Customer Closing", d: "Convert cold leads into buyers." },
];

const stories = [
  { name: "Mahin K.", role: "Full-time reseller, Chattogram", quote: "I quit my retail job after 4 months on Cartory. Now I do ৳60k profit a month from my phone." },
  { name: "Farah L.", role: "University student, Dhaka", quote: "Cartory's training is what changed everything. Real tactics, not motivation fluff." },
  { name: "Zarif A.", role: "Side income, Sylhet", quote: "The leaderboard turned this into a sport. I'm chasing rank #1 every month." },
];

const faqs = [
  { q: "Is Cartory Dropship really free to join?", a: "Yes. You only pay product cost when a customer orders. No subscription, no signup fee." },
  { q: "Do I need to stock products?", a: "Never. We hold inventory and ship directly to your customer with your branding." },
  { q: "How fast is verification?", a: "Most resellers are approved within 24 hours of submitting their NID." },
  { q: "When do I get paid?", a: "Weekly payouts to your bKash, Nagad or bank account on every confirmed delivery." },
  { q: "Can I do this part-time?", a: "Absolutely. Most resellers start with 1–2 hours a day alongside their job or studies." },
];

export function ResellerSections() {
  return (
    <>
      {/* Why Cartory */}
      <section id="why" className="relative py-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="max-w-3xl">
            <div className="eyebrow text-[var(--neon-soft)]">Why Cartory</div>
            <h2 className="font-serif text-4xl md:text-6xl mt-3">More than a catalog. <em className="italic hybrid-text">A business in a box.</em></h2>
            <p className="text-muted-foreground mt-6 max-w-2xl">Most "dropshipping" platforms are just product lists. Cartory gives you everything you need to actually grow.</p>
          </div>
          <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {benefits.map(({ icon: Icon, title, body }) => (
              <div key={title} className="glass-dark ring-luxe rounded-2xl p-6 card-3d">
                <div className="h-11 w-11 rounded-full bg-[var(--neon)]/15 grid place-items-center"><Icon className="h-5 w-5 text-[var(--neon-soft)]" /></div>
                <h3 className="font-serif text-xl mt-4">{title}</h3>
                <p className="text-sm text-muted-foreground mt-2">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leaderboard preview */}
      <section id="leaderboard" className="relative py-24 border-y border-border bg-secondary/10">
        <div className="mx-auto max-w-7xl px-4 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="eyebrow text-[var(--gold)]">Leaderboard</div>
            <h2 className="font-serif text-4xl md:text-5xl mt-3">Real resellers. <em className="italic hybrid-text">Real numbers.</em></h2>
            <p className="text-muted-foreground mt-6">Updated live. Top 3 each month earn cash bonuses, badges and a feature on our hero.</p>
            <Link to="/register" className="mt-8 inline-flex h-12 items-center gap-2 rounded-full px-6 hybrid-gradient text-[var(--obsidian)] font-mono uppercase tracking-[0.22em] text-[11px] glow-neon">
              Claim your rank <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="glass-dark ring-luxe rounded-3xl overflow-hidden">
            {leaderboard.map((r, i) => (
              <div key={r.rank} className={`flex items-center gap-4 p-4 ${i > 0 ? "border-t border-border" : ""}`}>
                <div className={`h-10 w-10 grid place-items-center rounded-full font-serif text-lg ${r.rank <= 3 ? "hybrid-gradient text-[var(--obsidian)]" : "bg-secondary/60"}`}>{r.rank}</div>
                <div className="flex-1"><div className="font-medium">{r.name}</div><div className="eyebrow text-muted-foreground">{r.orders} orders</div></div>
                <div className="font-serif text-xl gold-text">{r.profit}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Challenges + Rewards */}
      <section id="rewards" className="relative py-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid lg:grid-cols-2 gap-6">
            <div className="glass-dark ring-luxe rounded-3xl p-8">
              <div className="flex items-center gap-2"><Target className="h-4 w-4 text-[var(--neon-soft)]" /><div className="eyebrow text-[var(--neon-soft)]">Monthly challenges</div></div>
              <h3 className="font-serif text-3xl mt-3">Gamified growth.</h3>
              <p className="text-muted-foreground mt-3">30 orders in 30 days. Weekend sprints. Profit kings. Every month a new way to win — and we pay out in cash.</p>
              <div className="mt-6 space-y-3">
                {["30 in 30 · ৳3,000 cash", "Weekend Sprint · Exclusive drop", "Profit King · Hero feature"].map(c => (
                  <div key={c} className="flex items-center gap-3 text-sm"><CheckCircle2 className="h-4 w-4 text-[var(--neon-soft)]" />{c}</div>
                ))}
              </div>
            </div>
            <div className="glass-dark ring-luxe rounded-3xl p-8">
              <div className="flex items-center gap-2"><Gift className="h-4 w-4 text-[var(--gold)]" /><div className="eyebrow text-[var(--gold)]">Reward tiers</div></div>
              <h3 className="font-serif text-3xl mt-3">The further you go, the more we give back.</h3>
              <div className="mt-6 space-y-3">
                {tiers.map(t => (
                  <div key={t.n} className="flex items-center justify-between gap-3 py-2 border-b border-border last:border-0">
                    <div className="flex items-center gap-3"><span className="eyebrow text-muted-foreground w-12">{t.o}</span><span className="font-serif text-lg">{t.n}</span></div>
                    <span className="text-sm gold-text">{t.r}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Academy */}
      <section id="academy" className="relative py-24 border-y border-border bg-secondary/10">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex items-end justify-between flex-wrap gap-4">
            <div className="max-w-2xl">
              <div className="eyebrow text-[var(--neon-soft)]">Cartory Academy</div>
              <h2 className="font-serif text-4xl md:text-5xl mt-3">Learn the craft. <em className="italic hybrid-text">Then dominate.</em></h2>
            </div>
            <Link to="/register" className="eyebrow text-muted-foreground hover:text-foreground">All courses →</Link>
          </div>
          <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {courses.map(c => (
              <div key={c.t} className="glass-dark ring-luxe rounded-2xl p-6 card-3d">
                <div className="eyebrow text-[var(--gold)]">{c.l}</div>
                <h3 className="font-serif text-xl mt-2">{c.t}</h3>
                <p className="text-sm text-muted-foreground mt-2">{c.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success stories */}
      <section id="stories" className="relative py-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="max-w-2xl">
            <div className="eyebrow text-[var(--gold)]">Success stories</div>
            <h2 className="font-serif text-4xl md:text-5xl mt-3">From the <em className="italic hybrid-text">first 12,000</em>.</h2>
          </div>
          <div className="mt-10 grid md:grid-cols-3 gap-4">
            {stories.map(s => (
              <figure key={s.name} className="glass-dark ring-luxe rounded-2xl p-6 card-3d">
                <blockquote className="font-serif text-xl leading-snug">"{s.quote}"</blockquote>
                <figcaption className="mt-5 flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full hybrid-gradient" />
                  <div><div className="font-medium text-sm">{s.name}</div><div className="eyebrow text-muted-foreground">{s.role}</div></div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="relative py-24 border-y border-border bg-secondary/10">
        <div className="mx-auto max-w-3xl px-4">
          <div className="eyebrow text-[var(--neon-soft)] text-center">Questions</div>
          <h2 className="font-serif text-4xl md:text-5xl mt-3 text-center">Everything <em className="italic hybrid-text">you might ask</em>.</h2>
          <div className="mt-10 space-y-3">
            {faqs.map((f, i) => <FAQItem key={i} q={f.q} a={f.a} />)}
          </div>
        </div>
      </section>

      {/* Join CTA */}
      <section id="join" className="relative py-28">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <div className="eyebrow text-[var(--gold)]">Ready?</div>
          <h2 className="font-serif text-5xl md:text-7xl mt-3 leading-[0.95]">Your reseller business <em className="italic hybrid-text">starts today</em>.</h2>
          <p className="text-muted-foreground mt-6 max-w-xl mx-auto">Free to join. No NID needed to start browsing. Verify only when you're ready to take customer orders.</p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Link to="/register" className="inline-flex h-13 items-center gap-2 rounded-full px-7 py-3 hybrid-gradient text-[var(--obsidian)] font-mono uppercase tracking-[0.22em] text-xs glow-neon">
              Create free account <ArrowUpRight className="h-4 w-4" />
            </Link>
            <Link to="/login" className="inline-flex h-13 items-center rounded-full border border-border px-7 py-3 font-mono uppercase tracking-[0.22em] text-xs hover:bg-secondary/60">
              I already have an account
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="glass-dark ring-luxe rounded-2xl overflow-hidden">
      <button onClick={() => setOpen(v => !v)} className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left">
        <span className="font-serif text-lg">{q}</span>
        <ChevronDown className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && <div className="px-6 pb-5 text-sm text-muted-foreground">{a}</div>}
    </div>
  );
}