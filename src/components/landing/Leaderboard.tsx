import { Trophy, Medal, Award } from "lucide-react";
import { Card } from "@/components/ui/card";

const top = [
  { rank: 1, name: "Tahmid R.", orders: 1284, revenue: "৳18,40,200", badge: "gold" },
  { rank: 2, name: "Nusrat J.", orders: 1102, revenue: "৳15,90,500", badge: "silver" },
  { rank: 3, name: "Rifat H.", orders: 987, revenue: "৳13,22,400", badge: "bronze" },
  { rank: 4, name: "Sadia A.", orders: 812, revenue: "৳11,08,000" },
  { rank: 5, name: "Imran K.", orders: 754, revenue: "৳10,42,100" },
  { rank: 6, name: "Mahin S.", orders: 698, revenue: "৳9,75,800" },
  { rank: 7, name: "Lamia F.", orders: 612, revenue: "৳8,80,000" },
  { rank: 8, name: "Arif M.", orders: 580, revenue: "৳8,12,600" },
];

function BadgeIcon({ b }: { b?: string }) {
  if (b === "gold") return <Trophy className="h-4 w-4 text-yellow-500" />;
  if (b === "silver") return <Medal className="h-4 w-4 text-slate-400" />;
  if (b === "bronze") return <Award className="h-4 w-4 text-amber-700" />;
  return null;
}

export function Leaderboard() {
  return (
    <section id="leaderboard" className="py-20 bg-gradient-subtle">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-medium mb-4">
            <Trophy className="h-3.5 w-3.5" /> Live Leaderboard
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Top resellers this month</h2>
          <p className="mt-4 text-muted-foreground">Earn badges, climb the ranks, win exclusive rewards.</p>
        </div>
        <Card className="overflow-hidden shadow-card">
          <div className="grid grid-cols-12 px-6 py-3 text-xs font-semibold text-muted-foreground border-b bg-muted/40">
            <div className="col-span-2">Rank</div>
            <div className="col-span-5">Reseller</div>
            <div className="col-span-2 text-right">Orders</div>
            <div className="col-span-3 text-right">Revenue</div>
          </div>
          {top.map((r) => (
            <div key={r.rank} className="grid grid-cols-12 px-6 py-4 items-center border-b last:border-0 hover:bg-muted/30 transition-colors">
              <div className="col-span-2 flex items-center gap-2">
                <span className="font-bold text-lg w-6">{r.rank}</span>
                <BadgeIcon b={r.badge} />
              </div>
              <div className="col-span-5 flex items-center gap-3">
                <div className="h-9 w-9 rounded-full bg-gradient-primary grid place-items-center text-primary-foreground text-sm font-semibold">
                  {r.name.split(" ").map((p) => p[0]).join("")}
                </div>
                <div className="font-medium">{r.name}</div>
              </div>
              <div className="col-span-2 text-right tabular-nums">{r.orders}</div>
              <div className="col-span-3 text-right font-semibold tabular-nums">{r.revenue}</div>
            </div>
          ))}
        </Card>
      </div>
    </section>
  );
}