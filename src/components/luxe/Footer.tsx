import { Link } from "@tanstack/react-router";

const cols = [
  { title: "Maison", links: ["About", "Atelier", "Sustainability", "Careers", "Press"] },
  { title: "Shop",   links: ["New In", "Collections", "Editions", "Gifts", "Archive"] },
  { title: "Care",   links: ["Concierge", "Shipping", "Returns", "Authenticity", "Repairs"] },
  { title: "Legal",  links: ["Terms", "Privacy", "Cookies", "Imprint", "Disclosures"] },
];

export function Footer() {
  return (
    <footer className="relative border-t border-border luxe-gradient">
      <div className="mx-auto max-w-7xl px-4 py-20">
        <div className="grid lg:grid-cols-[1.2fr_2fr] gap-12">
          <div>
            <Link to="/" className="flex items-center gap-3">
              <div className="relative h-9 w-9 rounded-full hybrid-gradient grid place-items-center">
                <div className="absolute inset-0.5 rounded-full bg-background grid place-items-center">
                  <span className="font-serif italic text-lg hybrid-text leading-none">L</span>
                </div>
              </div>
              <div className="leading-tight">
                <div className="font-serif text-xl">Lumière</div>
                <div className="eyebrow mt-0.5">Maison · 01</div>
              </div>
            </Link>
            <p className="mt-6 max-w-sm text-sm text-muted-foreground text-pretty">
              A members-only archive of slow-made objects, fragrance and atelier work, released six times a year.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {cols.map(c => (
              <div key={c.title}>
                <div className="eyebrow text-foreground">{c.title}</div>
                <ul className="mt-5 space-y-3">
                  {c.links.map(l => (
                    <li key={l}>
                      <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">{l}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="eyebrow text-muted-foreground">© MMXXVI Lumière · All rights reserved</div>
          <div className="flex items-center gap-6 eyebrow text-muted-foreground">
            <span>Carbon-neutral atelier</span>
            <span>·</span>
            <span>EN / USD</span>
          </div>
        </div>
      </div>
    </footer>
  );
}