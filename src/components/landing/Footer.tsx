import { ShoppingBag } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 py-12 grid md:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center gap-2 font-bold text-lg mb-3">
            <div className="h-9 w-9 rounded-xl bg-gradient-primary grid place-items-center">
              <ShoppingBag className="h-5 w-5 text-primary-foreground" />
            </div>
            Cartory <span className="text-primary">Hub</span>
          </div>
          <p className="text-sm text-muted-foreground">Bangladesh's premium reseller & dropshipping platform.</p>
        </div>
        {[
          { title: "Platform", links: ["Products", "Courses", "Leaderboard", "Rewards"] },
          { title: "Resellers", links: ["Become a Reseller", "Login", "Dashboard", "Challenges"] },
          { title: "Support", links: ["Help Center", "News", "Contact", "WhatsApp"] },
        ].map((col) => (
          <div key={col.title}>
            <div className="font-semibold mb-3 text-sm">{col.title}</div>
            <ul className="space-y-2">
              {col.links.map((l) => (
                <li key={l}>
                  <a href="#" className="text-sm text-muted-foreground hover:text-foreground">{l}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t py-5 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Cartory Reseller Hub · Built for Bangladesh 🇧🇩
      </div>
    </footer>
  );
}