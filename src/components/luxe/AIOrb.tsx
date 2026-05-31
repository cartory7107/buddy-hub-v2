import { Sparkles, X, Send } from "lucide-react";
import { useState } from "react";

export function AIOrb() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {open && (
        <div className="fixed bottom-24 right-6 z-50 w-[340px] glass-dark ring-luxe rounded-2xl overflow-hidden animate-fade-up">
          <div className="flex items-center justify-between p-4 border-b border-border">
            <div>
              <div className="eyebrow text-[var(--gold)]">Concierge</div>
              <div className="font-serif text-lg mt-1">How can we help?</div>
            </div>
            <button onClick={() => setOpen(false)} aria-label="Close" className="h-8 w-8 grid place-items-center rounded-full hover:bg-secondary/60">
              <X className="h-4 w-4" />
            </button>
          </div>
          <div className="p-4 space-y-3 text-sm">
            <div className="glass-dark rounded-xl p-3 text-muted-foreground">
              Welcome. Ask about pieces, authenticity, or arrange a private viewing.
            </div>
            <div className="flex flex-wrap gap-2">
              {["Next drop?", "Sizing", "Repairs"].map(s => (
                <button key={s} className="eyebrow px-3 py-1.5 rounded-full border border-border hover:bg-secondary/60">{s}</button>
              ))}
            </div>
          </div>
          <form className="relative p-3 border-t border-border" onSubmit={e => e.preventDefault()}>
            <input placeholder="Type a message…" aria-label="Message"
              className="w-full h-11 rounded-full bg-background/60 border border-border pl-4 pr-12 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--ring)]" />
            <button aria-label="Send" className="absolute right-4 top-1/2 -translate-y-1/2 h-8 w-8 rounded-full hybrid-gradient grid place-items-center text-[var(--obsidian)]">
              <Send className="h-3.5 w-3.5" />
            </button>
          </form>
        </div>
      )}

      <button
        onClick={() => setOpen(v => !v)}
        aria-label="Open concierge"
        className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full grid place-items-center group"
      >
        <span className="absolute inset-0 rounded-full border border-[var(--neon)]/40 animate-spin-slow" style={{ borderStyle: "dashed" }} />
        <span className="relative h-14 w-14 rounded-full hybrid-gradient grid place-items-center glow-neon transition-transform group-hover:scale-105">
          <Sparkles className="h-6 w-6 text-[var(--obsidian)]" />
        </span>
      </button>
    </>
  );
}