import { Heart, Shield, Star } from "lucide-react";
import img1 from "@/assets/luxe-1.jpg";
import img2 from "@/assets/luxe-2.jpg";
import img3 from "@/assets/luxe-3.jpg";
import img4 from "@/assets/luxe-4.jpg";
import img5 from "@/assets/luxe-5.jpg";
import img6 from "@/assets/luxe-6.jpg";

const products = [
  { img: img1, cat: "Fragrance", name: "Obscura Nº 7 Eau de Parfum", price: 240, old: 320, rating: 4.9, count: 218, badge: "Limited" },
  { img: img2, cat: "Objects",   name: "Aurum Vessel — Polished Brass",  price: 480, rating: 4.8, count: 142, badge: "New" },
  { img: img3, cat: "Atelier",   name: "Marble & Gilt Pedestal Object",  price: 1280, rating: 5.0, count: 64,  badge: "Edition" },
  { img: img4, cat: "Textiles",  name: "Chromatic Silk Throw — 220cm",   price: 360, old: 420, rating: 4.7, count: 311, discount: 14 },
  { img: img5, cat: "Fragrance", name: "Noir Velour Reserve Flacon",     price: 320, rating: 4.9, count: 96,  badge: "Bestseller" },
  { img: img6, cat: "Objects",   name: "Auric Foil Sculpture Nº 02",     price: 890, rating: 4.8, count: 41 },
  { img: img1, cat: "Optics",    name: "Onyx Acetate Frames",             price: 410, rating: 4.6, count: 187 },
  { img: img2, cat: "Jewellery", name: "Solid Gold Signet — Polished",   price: 1640, old: 1820, rating: 5.0, count: 28, discount: 10 },
];

export function Products() {
  return (
    <section id="new" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex items-end justify-between mb-12">
          <div>
            <div className="eyebrow">§ 02 · New In</div>
            <h2 className="mt-3 font-serif text-4xl md:text-5xl text-balance">
              Featured <em className="italic hybrid-text">pieces</em> this week
            </h2>
          </div>
          <a href="#" className="hidden md:inline-flex eyebrow text-muted-foreground hover:text-foreground">All 060 →</a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-12">
          {products.map((p, i) => (
            <article key={i} className="group">
              <div className="relative aspect-square rounded-2xl overflow-hidden ring-luxe card-3d bg-card">
                <img src={p.img} alt={p.name} loading="lazy" width={500} height={500}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--obsidian)]/80 via-[var(--obsidian)]/10 to-transparent transition-opacity duration-500 group-hover:from-[var(--obsidian)]/95" />

                {/* wishlist */}
                <button aria-label="Save" className="absolute top-3 right-3 h-9 w-9 grid place-items-center rounded-full glass-dark opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Heart className="h-4 w-4" />
                </button>

                {/* badge */}
                {p.badge && (
                  <span className="absolute top-3 left-3 px-3 py-1 rounded-full hybrid-gradient text-[var(--obsidian)] text-[10px] font-mono uppercase tracking-[0.25em]">
                    {p.badge}
                  </span>
                )}
                {p.discount && (
                  <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[var(--neon)] text-[var(--obsidian)] text-[10px] font-mono uppercase tracking-[0.25em] glow-neon">
                    −{p.discount}%
                  </span>
                )}

                {/* add to cart bar */}
                <div className="absolute inset-x-3 bottom-3 translate-y-[120%] group-hover:translate-y-0 transition-transform duration-500 ease-out">
                  <button className="w-full h-11 rounded-full hybrid-gradient text-[var(--obsidian)] text-[11px] font-mono uppercase tracking-[0.25em]">
                    Add to Bag
                  </button>
                </div>
              </div>

              <div className="mt-4 px-1">
                <div className="eyebrow">{p.cat}</div>
                <h3 className="mt-2 font-serif text-lg leading-snug line-clamp-2">{p.name}</h3>
                <div className="mt-2 flex items-center gap-2 text-xs text-muted-foreground">
                  <Star className="h-3.5 w-3.5 fill-[var(--gold)] text-[var(--gold)]" />
                  <span className="text-foreground">{p.rating}</span>
                  <span>· {p.count} reviews</span>
                </div>
                <div className="mt-2 flex items-baseline gap-3">
                  <span className="font-serif text-2xl">${p.price}</span>
                  {p.old && <span className="text-sm text-muted-foreground line-through">${p.old}</span>}
                </div>
                <div className="mt-2 flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-[0.22em] text-muted-foreground">
                  <Shield className="h-3 w-3 text-[var(--gold)]" />
                  Authenticated · Shipped by Atelier
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}