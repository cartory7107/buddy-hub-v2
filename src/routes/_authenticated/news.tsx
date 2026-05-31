import { createFileRoute } from "@tanstack/react-router";
import { Megaphone } from "lucide-react";

export const Route = createFileRoute("/_authenticated/news")({
  head: () => ({ meta: [{ title: "News & Campaigns — Cartory Dropship" }] }),
  component: News,
});

const items = [
  { tag: "Campaign", title: "Eid mega push · 2x profit on selected items", body: "Limited 7-day campaign with double commission on flagged products." },
  { tag: "Launch", title: "12 new winter products dropped", body: "Fresh stock in apparel and home. First-mover advantage for verified resellers." },
  { tag: "Announcement", title: "Same-day Dhaka dispatch", body: "All orders placed before 2 PM now dispatch same-day in Dhaka." },
];

function News() {
  return (
    <div className="space-y-6">
      <div><div className="eyebrow text-[var(--gold)]">News & campaigns</div><h1 className="font-serif text-4xl md:text-5xl mt-2">What's <em className="italic hybrid-text">moving</em>.</h1></div>
      <div className="space-y-3">
        {items.map((i, idx) => (
          <div key={idx} className="glass-dark ring-luxe rounded-2xl p-6 flex items-start gap-4">
            <div className="h-10 w-10 rounded-full bg-[var(--gold)]/15 grid place-items-center"><Megaphone className="h-4 w-4 text-[var(--gold)]" /></div>
            <div className="flex-1"><div className="eyebrow text-[var(--gold)]">{i.tag}</div><h3 className="font-serif text-xl mt-1">{i.title}</h3><p className="text-sm text-muted-foreground mt-1">{i.body}</p></div>
          </div>
        ))}
      </div>
    </div>
  );
}