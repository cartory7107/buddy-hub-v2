import { ArrowRight } from "lucide-react";

export function Newsletter() {
  return (
    <section id="journal" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="relative overflow-hidden rounded-[2rem] luxe-gradient ring-luxe p-10 md:p-20 text-center">
          <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-[420px] w-[420px] rounded-full bg-[var(--neon)]/25 blur-[140px]" />
          <div className="relative">
            <div className="eyebrow">§ 06 · Dispatch</div>
            <h2 className="mt-4 font-serif text-4xl md:text-6xl leading-[0.95] text-balance max-w-3xl mx-auto">
              Be first to the <em className="italic hybrid-text">next archive</em>.
            </h2>
            <p className="mt-5 max-w-xl mx-auto text-muted-foreground text-pretty">
              One letter, every other Sunday. No noise. Early access to drops, atelier notes, and members-only releases.
            </p>

            <form className="mt-10 max-w-md mx-auto relative" onSubmit={e => e.preventDefault()}>
              <input
                type="email"
                required
                placeholder="your@address.com"
                aria-label="Email address"
                className="w-full h-14 rounded-full bg-background/60 border border-border pl-6 pr-16 font-mono text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-[var(--ring)] focus:border-transparent"
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="absolute right-1.5 top-1.5 h-11 w-11 rounded-full hybrid-gradient grid place-items-center text-[var(--obsidian)] glow-neon transition-transform hover:rotate-45"
              >
                <ArrowRight className="h-4 w-4" />
              </button>
            </form>
            <p className="mt-4 eyebrow text-muted-foreground">Unsubscribe at any time</p>
          </div>
        </div>
      </div>
    </section>
  );
}