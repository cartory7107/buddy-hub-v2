import { ShieldCheck, Truck, Headphones, Banknote, Star } from "lucide-react";

const items = [
  { icon: ShieldCheck, label: "Verified Resellers" },
  { icon: Truck, label: "Nationwide COD" },
  { icon: Banknote, label: "Daily Payouts" },
  { icon: Headphones, label: "24/7 BD Support" },
  { icon: Star, label: "4.9★ Rated" },
];

export function TrustBar() {
  return (
    <div className="border-y bg-muted/40 backdrop-blur">
      <div className="mx-auto max-w-7xl px-4 py-4 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
        {items.map((i) => (
          <div key={i.label} className="flex items-center gap-2 text-sm text-muted-foreground">
            <i.icon className="h-4 w-4 text-primary" />
            <span className="font-medium">{i.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}