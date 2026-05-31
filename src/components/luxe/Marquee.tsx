const items = [
  "Free worldwide shipping",
  "Edition of 060",
  "Hand-finished in Milano",
  "Lifetime warranty",
  "Members-only access",
  "Carbon-neutral atelier",
  "Daily archive drops",
  "Authenticated by Lumière",
];

export function Marquee() {
  return (
    <section aria-label="Announcements" className="relative border-y border-border bg-secondary/40 overflow-hidden">
      <div className="mask-fade-x py-4">
        <div className="flex gap-12 animate-marquee whitespace-nowrap">
          {[...items, ...items].map((t, i) => (
            <span key={i} className="flex items-center gap-12 eyebrow">
              <span className="text-foreground/80">{t}</span>
              <span className="text-[var(--gold)]">✦</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}