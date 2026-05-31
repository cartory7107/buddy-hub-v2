const houses = ["MAISON", "ATELIER", "STUDIO", "OBSCURA", "AURUM", "LIBRA", "NOIR & CO", "FOLIO"];

export function Brands() {
  return (
    <section id="brands" className="relative py-20 border-y border-border">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center mb-12">
          <div className="eyebrow">§ 04 · Houses</div>
          <h2 className="mt-3 font-serif text-3xl md:text-4xl">Trusted by <em className="italic hybrid-text">independent</em> houses</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
          {houses.map(h => (
            <div key={h} className="group h-20 rounded-xl border border-border bg-secondary/30 grid place-items-center transition-all duration-500 hover:-translate-y-1 hover:glow-gold">
              <span className="font-serif text-lg tracking-[0.15em] text-muted-foreground group-hover:text-foreground transition-colors">{h}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}