import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

const items = [
  { name: "Tahmid R.", role: "Top Reseller, Dhaka", quote: "Cartory changed my life. From 0 to ৳3 lakh/month in 6 months with zero inventory." },
  { name: "Nusrat J.", role: "Reseller, Chattogram", quote: "The 3% bonus commission and daily payouts are unmatched. Best platform in BD." },
  { name: "Rifat H.", role: "Dropshipper, Sylhet", quote: "Courses taught me Facebook ads. Now I run 100+ orders a day." },
];

export function Testimonials() {
  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Loved by resellers across Bangladesh</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {items.map((t) => (
            <Card key={t.name} className="p-6 shadow-card">
              <div className="flex gap-0.5 text-yellow-500 mb-3">
                {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
              </div>
              <p className="text-foreground/90 leading-relaxed">"{t.quote}"</p>
              <div className="mt-5 flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-gradient-primary grid place-items-center text-primary-foreground font-semibold">
                  {t.name.split(" ").map(p => p[0]).join("")}
                </div>
                <div>
                  <div className="font-medium text-sm">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}