const stats = [
  { v: "12K+", l: "Members worldwide" },
  { v: "060", l: "Pieces per drop" },
  { v: "97%", l: "Repeat collectors" },
  { v: "24h", l: "Concierge response" },
];

export function Stats() {
  return (
    <section className="relative py-20 border-y border-border bg-secondary/20">
      <div className="mx-auto max-w-7xl px-4 grid grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-6">
        {stats.map((s, i) => (
          <div key={s.l} className={`text-center ${i > 0 ? "md:border-l md:border-border" : ""}`}>
            <div className="font-serif text-5xl md:text-6xl hybrid-text">{s.v}</div>
            <div className="eyebrow mt-3">{s.l}</div>
          </div>
        ))}
      </div>
    </section>
  );
}