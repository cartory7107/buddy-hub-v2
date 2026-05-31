import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Search, ShoppingBag, User } from "lucide-react";

const links = [
  { href: "#collections", label: "Collections" },
  { href: "#new", label: "New In" },
  { href: "#bento", label: "Editorial" },
  { href: "#trending", label: "Trending" },
  { href: "#brands", label: "Houses" },
  { href: "#journal", label: "Journal" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      {/* utility strip */}
      <div className="hidden md:block border-b border-border/40 bg-background/40 backdrop-blur">
        <div className="mx-auto max-w-7xl px-4 h-8 flex items-center justify-between text-[10px] font-mono uppercase tracking-[0.28em] text-muted-foreground">
          <span className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--gold)] animate-pulse-gold" />
            Worldwide Express · Carbon-neutral
          </span>
          <span className="flex items-center gap-6">
            <span>EN / USD</span>
            <span>Concierge · 24/7</span>
          </span>
        </div>
      </div>

      <div className={`transition-all duration-500 ${scrolled ? "glass-dark border-b border-border/60" : "bg-transparent"}`}>
        <div className="mx-auto max-w-7xl px-4 h-16 md:h-20 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <div className="relative h-9 w-9 rounded-full hybrid-gradient grid place-items-center">
              <div className="absolute inset-0.5 rounded-full bg-background grid place-items-center">
                <span className="font-serif italic text-lg leading-none hybrid-text">L</span>
              </div>
            </div>
            <div className="leading-tight">
              <div className="font-serif text-lg tracking-tight">Lumière</div>
              <div className="eyebrow mt-0.5">Maison · 01</div>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {links.map((l) => (
              <a key={l.href} href={l.href}
                className="px-3 py-2 text-[11px] font-mono uppercase tracking-[0.22em] text-muted-foreground hover:text-foreground transition-colors">
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-1">
            <button aria-label="Search" className="h-10 w-10 grid place-items-center rounded-full hover:bg-secondary/60 transition-colors">
              <Search className="h-4 w-4" />
            </button>
            <Link to="/login" aria-label="Account" className="h-10 w-10 hidden md:grid place-items-center rounded-full hover:bg-secondary/60 transition-colors">
              <User className="h-4 w-4" />
            </Link>
            <button aria-label="Bag" className="h-10 w-10 grid place-items-center rounded-full hover:bg-secondary/60 transition-colors relative">
              <ShoppingBag className="h-4 w-4" />
              <span className="absolute top-1.5 right-1.5 h-1.5 w-1.5 rounded-full bg-[var(--gold)]" />
            </button>
            <Link to="/login"
              className="hidden md:inline-flex ml-3 h-10 items-center rounded-full px-5 text-[11px] font-mono uppercase tracking-[0.25em] hybrid-gradient text-[var(--obsidian)] glow-neon">
              Reserve
            </Link>
            <button onClick={() => setOpen(v => !v)} aria-label="Menu"
              className="lg:hidden h-10 w-10 grid place-items-center rounded-full hover:bg-secondary/60">
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {open && (
          <div className="lg:hidden glass-dark border-t border-border animate-fade-up">
            <nav className="mx-auto max-w-7xl px-4 py-6 grid gap-1">
              {links.map(l => (
                <a key={l.href} href={l.href} onClick={() => setOpen(false)}
                  className="px-3 py-3 font-serif text-2xl border-b border-border/40">
                  {l.label}
                </a>
              ))}
              <Link to="/login" onClick={() => setOpen(false)}
                className="mt-4 inline-flex h-12 items-center justify-center rounded-full hybrid-gradient text-[var(--obsidian)] font-mono uppercase tracking-[0.25em] text-xs">
                Reserve Access
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}