import { createFileRoute } from "@tanstack/react-router";
import { useAuth } from "@/lib/auth-context";
import { Gift, Lock } from "lucide-react";

export const Route = createFileRoute("/_authenticated/rewards")({
  head: () => ({ meta: [{ title: "Rewards — Cartory Dropship" }] }),
  component: Rewards,
});

const tiers = [
  { orders: 50, name: "Bronze", reward: "৳1,500 cash bonus + Bronze badge" },
  { orders: 100, name: "Silver", reward: "৳3,500 bonus + free product samples" },
  { orders: 250, name: "Gold", reward: "৳10,000 bonus + featured story" },
  { orders: 500, name: "Platinum", reward: "৳25,000 bonus + 1:1 mentorship" },
  { orders: 1000, name: "Diamond", reward: "৳75,000 bonus + Hajj/Umrah package" },
];

function Rewards() {
  const { profile } = useAuth();
  const done = profile?.total_orders ?? 0;
  return (
    <div className="space-y-6">
      <div><div className="eyebrow text-[var(--gold)]">Rewards program</div><h1 className="font-serif text-4xl md:text-5xl mt-2">The further you go, <em className="italic hybrid-text">the more we give back</em>.</h1></div>
      <div className="grid md:grid-cols-2 gap-4">
        {tiers.map(t => {
          const pct = Math.min(100, (done / t.orders) * 100);
          const unlocked = done >= t.orders;
          return (
            <div key={t.name} className="glass-dark ring-luxe rounded-2xl p-6 card-3d">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">{unlocked ? <Gift className="h-4 w-4 text-[var(--gold)]" /> : <Lock className="h-4 w-4 text-muted-foreground" />}<div className="eyebrow">{t.name} tier</div></div>
                <div className="font-mono text-xs text-muted-foreground">{t.orders} orders</div>
              </div>
              <div className="font-serif text-2xl mt-3">{t.reward}</div>
              <div className="mt-4 h-2 rounded-full bg-secondary/50 overflow-hidden"><div className={`h-full ${unlocked ? "bg-emerald-400" : "hybrid-gradient"}`} style={{ width: `${pct}%` }} /></div>
              <div className="eyebrow mt-2 text-muted-foreground">{done} / {t.orders}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}