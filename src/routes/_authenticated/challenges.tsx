import { createFileRoute } from "@tanstack/react-router";
import { useAuth } from "@/lib/auth-context";
import { Target, Flame } from "lucide-react";

export const Route = createFileRoute("/_authenticated/challenges")({
  head: () => ({ meta: [{ title: "Challenges — Cartory Dropship" }] }),
  component: Challenges,
});

const list = [
  { name: "30 in 30", desc: "30 orders in 30 days", goal: 30, reward: "৳3,000 cash" },
  { name: "Weekend Sprint", desc: "10 orders in a weekend", goal: 10, reward: "Exclusive product drop" },
  { name: "Profit King", desc: "Earn ৳20,000 profit this month", goal: 20000, reward: "Featured on leaderboard hero" },
];

function Challenges() {
  const { profile } = useAuth();
  const done = profile?.total_orders ?? 0;
  return (
    <div className="space-y-6">
      <div><div className="eyebrow text-[var(--neon-soft)]">Challenges</div><h1 className="font-serif text-4xl md:text-5xl mt-2">Stack wins. <em className="italic hybrid-text">Earn rewards</em>.</h1></div>
      <div className="grid md:grid-cols-3 gap-4">
        {list.map(c => (
          <div key={c.name} className="glass-dark ring-luxe rounded-2xl p-6 card-3d">
            <div className="flex items-center gap-2"><Flame className="h-4 w-4 text-[var(--neon-soft)]" /><div className="eyebrow">Active</div></div>
            <h3 className="font-serif text-2xl mt-2">{c.name}</h3>
            <p className="text-sm text-muted-foreground mt-1">{c.desc}</p>
            <div className="mt-4 h-2 rounded-full bg-secondary/50 overflow-hidden"><div className="h-full hybrid-gradient" style={{ width: `${Math.min(100, (done / c.goal) * 100)}%` }} /></div>
            <div className="mt-3 flex items-center justify-between eyebrow"><span>{done} / {c.goal}</span><span className="text-[var(--gold)]">{c.reward}</span></div>
          </div>
        ))}
      </div>
    </div>
  );
}