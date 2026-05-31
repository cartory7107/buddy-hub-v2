import { Gem, Watch, Sparkles, Shirt, Wine, Camera, Armchair, Flower2 } from "lucide-react";

const cats = [
  { icon: Gem, label: "Jewellery" },
  { icon: Watch, label: "Timepieces" },
  { icon: Sparkles, label: "Fragrance" },
  { icon: Shirt, label: "Atelier" },
  { icon: Wine, label: "Cellar" },
  { icon: Camera, label: "Optics" },
  { icon: Armchair, label: "Objects" },
  { icon: Flower2, label: "Florals" },
];

export function Categories() {
  return (
    <section id="collections" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex items-end justify-between mb-12">
          <div>
            <div className="eyebrow">§ 01 · Categories</div>
            <h2 className="mt-3 font-serif text-4xl md:text-5xl text-balance">Explore the <em className="italic hybrid-text">archive</em></h2>
          </div>
          <a href="#" className="hidden md:inline-flex eyebrow text-muted-foreground hover:text-foreground">View all →</a>
        </div>

        <div className="grid grid-cols-4 md:grid-cols-8 gap-4 md:gap-6">
          {cats.map(({ icon: Icon, label }) => (
            <button key={label} className="group flex flex-col items-center gap-3">
              <div className="relative h-16 w-16 md:h-20 md:w-20 rounded-full glass-dark ring-luxe grid place-items-center transition-all duration-500 group-hover:glow-neon group-hover:-translate-y-1">
                <div className="absolute inset-0 rounded-full hybrid-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <Icon className="relative h-6 w-6 md:h-7 md:w-7 text-foreground group-hover:text-[var(--obsidian)] transition-colors" />
              </div>
              <span className="eyebrow">{label}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}