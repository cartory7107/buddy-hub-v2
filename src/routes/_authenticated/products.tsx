import { createFileRoute, Link } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/lib/auth-context";
import { Search, Lock } from "lucide-react";

export const Route = createFileRoute("/_authenticated/products")({
  head: () => ({ meta: [{ title: "Product Center — Cartory Dropship" }] }),
  component: ProductCenter,
});

function ProductCenter() {
  const { profile } = useAuth();
  const approved = profile?.verification_status === "approved";
  const [q, setQ] = useState("");

  const { data: products } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const { data } = await supabase.from("products").select("*").eq("is_active", true).order("created_at", { ascending: false });
      return data ?? [];
    },
  });

  const filtered = (products ?? []).filter((p: any) =>
    !q || p.title?.toLowerCase().includes(q.toLowerCase()) || p.category?.toLowerCase().includes(q.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <div className="eyebrow text-[var(--neon-soft)]">Product Center</div>
          <h1 className="font-serif text-4xl md:text-5xl mt-2">Profit <em className="italic hybrid-text">opportunities</em>.</h1>
          <p className="text-sm text-muted-foreground mt-2">Source-verified products. Reseller-first pricing.</p>
        </div>
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <input value={q} onChange={e => setQ(e.target.value)} placeholder="Search products…"
            className="h-11 w-72 rounded-full bg-secondary/40 border border-border pl-10 pr-4 text-sm outline-none focus:border-[var(--neon)]" />
        </div>
      </div>

      {!approved && (
        <div className="glass-dark ring-luxe rounded-2xl p-4 border border-[var(--gold)]/30 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-sm"><Lock className="h-4 w-4 text-[var(--gold)]" /> You can browse freely. Verification unlocks order submission.</div>
          <Link to="/onboarding" className="eyebrow text-[var(--gold)] hover:underline">Verify →</Link>
        </div>
      )}

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {filtered.map((p: any) => {
          const margin = Number(p.suggested_price) - Number(p.cost_price);
          return (
            <div key={p.id} className="glass-dark ring-luxe rounded-2xl p-4 card-3d">
              <div className="aspect-[4/3] rounded-xl overflow-hidden bg-secondary/40 mb-3 relative">
                {p.image_url && <img src={p.image_url} alt={p.title} className="h-full w-full object-cover" />}
                <span className="absolute top-2 left-2 px-2 py-0.5 rounded-full bg-background/60 backdrop-blur eyebrow">{p.category ?? "Item"}</span>
              </div>
              <div className="font-serif text-lg line-clamp-1">{p.title}</div>
              {p.description && <div className="text-xs text-muted-foreground line-clamp-2 mt-1">{p.description}</div>}
              <div className="mt-3 grid grid-cols-3 gap-2 text-center">
                <div><div className="eyebrow">Cost</div><div className="text-sm mt-0.5">৳{p.cost_price}</div></div>
                <div><div className="eyebrow text-[var(--gold)]">Sell</div><div className="text-sm mt-0.5">৳{p.suggested_price}</div></div>
                <div><div className="eyebrow text-[var(--neon-soft)]">Profit</div><div className="text-sm mt-0.5 hybrid-text">৳{margin.toFixed(0)}</div></div>
              </div>
              <div className="mt-3 flex items-center justify-between">
                <span className="eyebrow text-muted-foreground">Stock · {p.stock}</span>
                {approved ? (
                  <Link to="/orders" search={{ productId: p.id } as any} className="eyebrow text-[var(--neon-soft)] hover:underline">Order →</Link>
                ) : (
                  <Link to="/onboarding" className="eyebrow text-[var(--gold)] hover:underline">Verify to order</Link>
                )}
              </div>
            </div>
          );
        })}
        {filtered.length === 0 && (
          <div className="col-span-full glass-dark ring-luxe rounded-2xl p-10 text-center text-muted-foreground">No products match your search.</div>
        )}
      </div>
    </div>
  );
}