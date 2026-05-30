import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Target } from "lucide-react";

const challenges = [
  { goal: 50, current: 38, reward: "Gift Voucher ৳2,000" },
  { goal: 100, current: 64, reward: "Smart Watch" },
  { goal: 250, current: 92, reward: "Smartphone" },
  { goal: 500, current: 120, reward: "Laptop" },
];

export function Challenges() {
  return (
    <section id="challenges" className="py-20 bg-gradient-subtle">
      <div className="mx-auto max-w-7xl px-4">
        <div className="max-w-2xl mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/20 text-accent-foreground text-xs font-medium mb-4">
            <Target className="h-3.5 w-3.5" /> Active Challenges
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Hit your target, unlock rewards</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-5">
          {challenges.map((c) => {
            const pct = Math.round((c.current / c.goal) * 100);
            return (
              <Card key={c.goal} className="p-6 shadow-card">
                <div className="flex items-center justify-between mb-2">
                  <div className="font-semibold">Complete {c.goal} Orders</div>
                  <div className="text-sm text-primary font-medium">{c.reward}</div>
                </div>
                <Progress value={pct} className="h-2" />
                <div className="mt-2 text-xs text-muted-foreground flex justify-between">
                  <span>{c.current} / {c.goal} orders</span>
                  <span className="tabular-nums">{pct}%</span>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}