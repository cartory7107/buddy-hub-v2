import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";

const links = [
  { href: "#home", label: "Home" },
  { href: "#products", label: "Products" },
  { href: "#courses", label: "Courses" },
  { href: "#news", label: "News" },
  { href: "#challenges", label: "Challenges" },
  { href: "#leaderboard", label: "Leaderboard" },
  { href: "#rewards", label: "Rewards" },
  { href: "#help", label: "Help" },
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
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4">
        <div
          className={`flex items-center justify-between rounded-2xl px-4 md:px-6 h-14 md:h-16 transition-all ${
            scrolled ? "glass shadow-soft" : "bg-transparent"
          }`}
        >
          <Link to="/" className="flex items-center gap-2 font-bold text-lg">
            <div className="h-9 w-9 rounded-xl bg-gradient-primary grid place-items-center shadow-glow">
              <ShoppingBag className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="tracking-tight">
              Cartory<span className="text-primary"> Hub</span>
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-muted/60"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-2">
            <Button variant="ghost" size="sm" asChild>
              <a href="#login">Login</a>
            </Button>
            <Button
              size="sm"
              asChild
              className="bg-gradient-primary hover:opacity-95 text-primary-foreground shadow-glow"
            >
              <a href="#register">Become a Reseller</a>
            </Button>
          </div>

          <button
            className="lg:hidden p-2 rounded-lg hover:bg-muted/60"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {open && (
          <div className="lg:hidden mt-2 glass rounded-2xl p-3 shadow-soft animate-fade-up">
            <nav className="flex flex-col">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="px-3 py-2.5 text-sm font-medium rounded-lg hover:bg-muted/60"
                >
                  {l.label}
                </a>
              ))}
              <div className="flex gap-2 mt-2 pt-2 border-t">
                <Button variant="outline" size="sm" className="flex-1" asChild>
                  <a href="#login">Login</a>
                </Button>
                <Button
                  size="sm"
                  className="flex-1 bg-gradient-primary text-primary-foreground"
                  asChild
                >
                  <a href="#register">Join</a>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}