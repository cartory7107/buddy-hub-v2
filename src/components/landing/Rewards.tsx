import { Card } from "@/components/ui/card";
import { Gift, Watch, Smartphone, Laptop, Plane } from "lucide-react";

const rewards = [
  { orders: 50, prize: "Gift Voucher", Icon: Gift },
  { orders: 100, prize: "Smart Watch", Icon: Watch },
  { orders: 250, prize: "Smartphone", Icon: Smartphone },
  { orders: 500, prize: "Laptop", Icon: Laptop },
  { orders: 1000, prize: "International Trip", Icon: Plane },
];

export function Rewards() {
  return (
    <section id="rewards" className="py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Winning rewards</h2>
          <p className="mt-4 text-muted-foreground">Every milestone you hit, we send something amazing your way.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {rewards.map((r) => (
            <Card key={r.orders} className="p-6 text-center hover:shadow-glow hover:-translate-y-1 transition-all">
              <div className="h-14 w-14 mx-auto rounded-2xl bg-gradient-primary grid place-items-center shadow-glow">
                <r.Icon className="h-7 w-7 text-primary-foreground" />
              </div>
              <div className="mt-4 text-2xl font-bold text-gradient">{r.orders}</div>
              <div className="text-xs text-muted-foreground">orders</div>
              <div className="mt-3 font-semibold">{r.prize}</div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}