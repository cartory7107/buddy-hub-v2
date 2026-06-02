import { ArrowUpRight } from "lucide-react";
import img1 from "@/assets/luxe-1.jpg";
import img3 from "@/assets/luxe-3.jpg";
import img4 from "@/assets/luxe-4.jpg";
import img6 from "@/assets/luxe-6.jpg";
import OptimizedImage from "@/components/ui/OptimizedImage";

const tiles = [
  { img: img3, eyebrow: "Editorial · 01", title: "Marble dreams in liquid gold", accent: "var(--gold)", big: true },
  { img: img4, eyebrow: "Atelier · 02", title: "Chromatic silk, woven slow",   accent: "var(--neon)" },
  { img: img1, eyebrow: "Story · 03",   title: "An obsession with shadow",     accent: "var(--gold)" },
  { img: img6, eyebrow: "Object · 04",  title: "Auric foil, suspended",        accent: "var(--neon)" },
];

export function Bento() {
  return (
    <section id="bento" className="relative py-24 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex items-end justify-between mb-12">
          <div>
            <div className="eyebrow">§ 03 · Editorial</div>
            <h2 className="mt-3 font-serif text-4xl md:text-5xl text-balance">
              The <em className="italic hybrid-text">lifestyle</em>, in moments.
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-4 md:h-[640px]">
          {tiles.map((t, i) => (
            <a key={i} href="#"
              className={`relative group overflow-hidden rounded-3xl ring-luxe ${t.big ? "md:col-span-2 md:row-span-2" : ""}`}>
              <OptimizedImage src={t.img} alt={t.title} width={1200} height={800}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--obsidian)] via-[var(--obsidian)]/40 to-transparent" />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                style={{ background: `radial-gradient(circle at 70% 30%, color-mix(in oklab, ${t.accent} 30%, transparent), transparent 60%)` }} />

              <div className="relative h-full p-6 md:p-8 flex flex-col justify-end min-h-[280px]">
                <div className="eyebrow" style={{ color: t.accent }}>{t.eyebrow}</div>
                <div className="mt-3 flex items-end justify-between gap-6">
                  <h3 className={`font-serif text-balance ${t.big ? "text-3xl md:text-5xl" : "text-2xl md:text-3xl"}`}>{t.title}</h3>
                  <span className="shrink-0 h-12 w-12 rounded-full glass-dark grid place-items-center transition-transform duration-500 group-hover:rotate-45">
                    <ArrowUpRight className="h-5 w-5" />
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}