import { useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import img5 from "@/assets/luxe-5.jpg";

function useCountdown(targetMs: number) {
  const [now, setNow] = useState(() => Date.now());
  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);
  const diff = Math.max(0, targetMs - now);
  const h = Math.floor(diff / 3_600_000);
  const m = Math.floor((diff % 3_600_000) / 60_000);
  const s = Math.floor((diff % 60_000) / 1000);
  return { h, m, s };
}

function Cell({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <div className="font-serif text-5xl md:text-7xl gold-text tabular-nums">
        {value.toString().padStart(2, "0")}
      </div>
      <div className="eyebrow mt-2">{label}</div>
    </div>
  );
}

export function FlashSale() {
  const target = useState(() => Date.now() + 8 * 3600_000 + 32 * 60_000)[0];
  const { h, m, s } = useCountdown(target);

  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="relative overflow-hidden rounded-[2rem] luxe-gradient ring-luxe p-8 md:p-14">
          <div className="absolute -top-24 -right-24 h-80 w-80 rounded-full bg-[var(--neon)]/20 blur-[120px]" />
          <div className="absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-[var(--gold)]/20 blur-[120px]" />

          <div className="relative grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="h-2 w-2 rounded-full bg-[var(--neon)] animate-pulse-neon" />
                <span className="eyebrow">Live · Members-only window</span>
              </div>
              <h2 className="font-serif text-4xl md:text-6xl leading-[0.95] text-balance">
                The Equinox <em className="italic gold-text">private sale</em>.
              </h2>
              <p className="mt-5 max-w-xl text-muted-foreground text-pretty">
                Six pieces released at midnight. Member pricing for the next window. After that, the archive closes.
              </p>

              <div className="mt-8 grid grid-cols-3 gap-6 max-w-md">
                <Cell value={h} label="Hours" />
                <Cell value={m} label="Minutes" />
                <Cell value={s} label="Seconds" />
              </div>

              <a href="#" className="mt-10 inline-flex h-12 items-center gap-2 rounded-full pl-6 pr-2 text-xs font-mono uppercase tracking-[0.25em] hybrid-gradient text-[var(--obsidian)] glow-neon group">
                Reserve a piece
                <span className="grid h-9 w-9 place-items-center rounded-full bg-[var(--obsidian)] text-[var(--platinum)] transition-transform group-hover:rotate-45">
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </a>
            </div>

            <div className="relative">
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden ring-luxe card-3d">
                <img src={img5} alt="Featured release" loading="lazy" width={600} height={750}
                  className="h-full w-full object-cover" />
                <div className="absolute inset-x-4 bottom-4 glass-dark rounded-xl p-4">
                  <div className="eyebrow text-[var(--gold)]">Featured Release</div>
                  <div className="mt-1 font-serif text-2xl">Obscura Nº 7 · Flacon Noir</div>
                  <div className="mt-2 flex items-baseline gap-3">
                    <span className="font-serif text-3xl">$240</span>
                    <span className="text-sm line-through text-muted-foreground">$320</span>
                    <span className="ml-auto eyebrow text-[var(--neon-soft)]">−25%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}