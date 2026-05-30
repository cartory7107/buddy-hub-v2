import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TrendingUp, Package } from "lucide-react";

const products = [
  { name: "Wireless Earbuds Pro", base: 850, suggested: 1490, category: "Electronics", hot: true },
  { name: "Smart LED Strip 5m", base: 420, suggested: 890, category: "Home" },
  { name: "Anti-Blue Light Glasses", base: 280, suggested: 690, category: "Lifestyle", hot: true },
  { name: "Mini Portable Fan", base: 350, suggested: 750, category: "Gadgets" },
  { name: "Posture Corrector Belt", base: 320, suggested: 790, category: "Health" },
  { name: "Magnetic Phone Holder", base: 180, suggested: 490, category: "Auto" },
  { name: "Bluetooth Speaker Mini", base: 620, suggested: 1290, category: "Electronics" },
  { name: "Silk Sleep Mask Set", base: 220, suggested: 550, category: "Lifestyle" },
];

const gradients = [
  "from-sky-400 to-blue-600",
  "from-cyan-400 to-sky-600",
  "from-blue-500 to-indigo-600",
  "from-cyan-300 to-blue-500",
];

export function Products() {
  return (
    <section id="products" className="py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex flex-wrap items-end justify-between gap-4 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-medium mb-3">
              <Package className="h-3.5 w-3.5" /> Winning Products
            </div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Sell what's hot today</h2>
            <p className="mt-3 text-muted-foreground max-w-xl">Curated trending products with verified base prices. Set your margin, keep 100% of the profit.</p>
          </div>
          <Button variant="outline">View all products</Button>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {products.map((p, i) => (
            <Card key={p.name} className="overflow-hidden group hover:shadow-glow hover:-translate-y-1 transition-all">
              <div className={`aspect-square bg-gradient-to-br ${gradients[i % gradients.length]} relative`}>
                {p.hot && (
                  <div className="absolute top-3 left-3 inline-flex items-center gap-1 px-2 py-1 rounded-full bg-white/95 text-[10px] font-bold text-rose-600">
                    <TrendingUp className="h-3 w-3" /> HOT
                  </div>
                )}
                <div className="absolute bottom-3 right-3 px-2 py-1 rounded-full bg-white/90 text-[10px] font-medium text-foreground">
                  {p.category}
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold text-sm leading-tight line-clamp-1">{p.name}</h3>
                <div className="mt-3 flex items-baseline justify-between">
                  <div>
                    <div className="text-[10px] text-muted-foreground uppercase tracking-wide">Base</div>
                    <div className="font-bold">৳{p.base}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-[10px] text-muted-foreground uppercase tracking-wide">Suggested</div>
                    <div className="font-bold text-primary">৳{p.suggested}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}