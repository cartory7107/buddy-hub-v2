import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/brand/Logo";

const links = [
  { href: "#why", label: "Why Cartory" },
  { href: "#leaderboard", label: "Leaderboard" },
  { href: "#rewards", label: "Rewards" },
  { href: "#academy", label: "Academy" },
  { href: "#stories", label: "Stories" },
  { href: "#faq", label: "FAQ" },
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
      <div className={`transition-all duration-500 ${scrolled ? "glass-dark border-b border-border/60" : "bg-transparent"}`}>
        <div className="mx-auto max-w-7xl px-4 h-16 md:h-20 flex items-center justify-between">
          <Logo size={40} />

          <nav className="hidden lg:flex items-center gap-1">
            {links.map((l) => (
              <a key={l.href} href={l.href}
                className="px-4 py-2 text-sm font-display font-semibold text-[#E5E7EB] hover:text-white transition-colors">
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Link to="/login"
              className="hidden md:inline-flex h-11 items-center rounded-full border border-white/20 bg-white/5 px-5 text-sm font-display font-semibold text-white hover:bg-white/10 transition-colors">
              Login
            </Link>
            <Link to="/register"
              className="hidden md:inline-flex h-11 items-center rounded-full px-6 text-sm font-display font-bold hybrid-gradient text-[var(--obsidian)] glow-neon hover:scale-[1.02] transition-transform">
              Register
            </Link>
            <button onClick={() => setOpen(v => !v)} aria-label="Menu"
              className="lg:hidden h-11 w-11 grid place-items-center rounded-full bg-white/5 border border-white/15">
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {open && (
          <div className="lg:hidden glass-dark border-t border-border animate-fade-up">
            <nav className="mx-auto max-w-7xl px-4 py-6 grid gap-1">
              {links.map(l => (
                <a key={l.href} href={l.href} onClick={() => setOpen(false)}
                  className="px-3 py-3 font-display font-bold text-2xl text-white border-b border-border/40">
                  {l.label}
                </a>
              ))}
              <Link to="/login" onClick={() => setOpen(false)}
                className="mt-4 inline-flex h-12 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white font-display font-semibold text-base">
                Login
              </Link>
              <Link to="/register" onClick={() => setOpen(false)}
                className="mt-2 inline-flex h-12 items-center justify-center rounded-full hybrid-gradient text-[var(--obsidian)] font-display font-bold text-base">
                Register Now
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}