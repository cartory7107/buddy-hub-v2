import { Star } from "lucide-react";

const reviews = [
  { quote: "An object you don't just own — you live with. The finish alone justifies the wait.", name: "A. Beaumont", role: "Collector · Paris" },
  { quote: "Worth every cent. The atelier sweats the millimetres so you don't have to.", name: "Y. Tanaka", role: "Architect · Kyoto" },
  { quote: "Quietly the best purchase I've made this year. It changes how a room feels.", name: "M. Okafor", role: "Curator · Lagos" },
];

export function Reviews() {
  return (
    <section id="trending" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center mb-14">
          <div className="eyebrow">§ 05 · The Word</div>
          <h2 className="mt-3 font-serif text-4xl md:text-5xl text-balance">
            What the <em className="italic hybrid-text">collectors</em> say.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <article key={i} className="relative glass-dark ring-luxe rounded-3xl p-8 card-3d">
              <div className="absolute -top-6 left-6 font-serif text-7xl gold-text leading-none">"</div>
              <div className="flex gap-1 mb-5">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-[var(--gold)] text-[var(--gold)]" />
                ))}
              </div>
              <p className="font-serif text-xl leading-snug text-balance">{r.quote}</p>
              <div className="mt-6 pt-6 border-t border-border">
                <div className="font-serif text-lg">{r.name}</div>
                <div className="eyebrow mt-1">{r.role}</div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}