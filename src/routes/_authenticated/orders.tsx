import { createFileRoute, Link } from "@tanstack/react-router";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useMemo, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/lib/auth-context";
import { Lock, ShoppingBag, Plus } from "lucide-react";

export const Route = createFileRoute("/_authenticated/orders")({
  head: () => ({ meta: [{ title: "Orders — Cartory Dropship" }] }),
  component: Orders,
});

function Orders() {
  const { profile, user } = useAuth();
  const approved = profile?.verification_status === "approved";
  const qc = useQueryClient();

  const { data: products } = useQuery({
    queryKey: ["products-active"],
    queryFn: async () => (await supabase.from("products").select("*").eq("is_active", true)).data ?? [],
  });
  const { data: orders } = useQuery({
    queryKey: ["orders", user?.id],
    queryFn: async () => (await supabase.from("reseller_orders").select("*, products(title, image_url)").order("created_at", { ascending: false })).data ?? [],
    enabled: !!user,
  });

  const [open, setOpen] = useState(false);
  const [productId, setProductId] = useState("");
  const [qty, setQty] = useState(1);
  const [sellPrice, setSellPrice] = useState<number>(0);
  const [cname, setCname] = useState("");
  const [cphone, setCphone] = useState("");
  const [caddr, setCaddr] = useState("");
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const product = useMemo(() => products?.find((p: any) => p.id === productId), [products, productId]);
  const cost = product ? Number(product.cost_price) * qty : 0;
  const profit = sellPrice * qty - cost;

  const submit = async () => {
    if (!product || !user) return;
    if (!cname || !cphone || !caddr) { setError("Customer details required"); return; }
    setSaving(true); setError(null);
    const { error } = await supabase.from("reseller_orders").insert({
      reseller_id: user.id,
      product_id: product.id,
      customer_name: cname,
      customer_phone: cphone,
      customer_address: caddr,
      quantity: qty,
      selling_price: sellPrice,
      cost_price: Number(product.cost_price),
      profit,
    });
    setSaving(false);
    if (error) return setError(error.message);
    setOpen(false); setCname(""); setCphone(""); setCaddr(""); setProductId(""); setQty(1); setSellPrice(0);
    qc.invalidateQueries({ queryKey: ["orders"] });
  };

  if (!approved) {
    return (
      <div className="max-w-xl mx-auto glass-dark ring-luxe rounded-3xl p-10 text-center">
        <div className="h-14 w-14 mx-auto rounded-full bg-[var(--gold)]/15 grid place-items-center"><Lock className="h-7 w-7 text-[var(--gold)]" /></div>
        <h1 className="font-serif text-3xl mt-4">Verification required</h1>
        <p className="text-muted-foreground mt-2 text-sm">Submit your NID once. After approval, the order system unlocks instantly.</p>
        <Link to="/onboarding" className="mt-6 inline-flex h-11 px-6 rounded-full hybrid-gradient text-[var(--obsidian)] font-mono uppercase tracking-[0.22em] text-[11px] items-center">Start verification</Link>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <div className="eyebrow text-[var(--neon-soft)]">Orders</div>
          <h1 className="font-serif text-4xl md:text-5xl mt-2">Customer orders</h1>
        </div>
        <button onClick={() => setOpen(true)} className="inline-flex items-center gap-2 h-11 px-5 rounded-full hybrid-gradient text-[var(--obsidian)] font-mono uppercase tracking-[0.22em] text-[11px] glow-neon">
          <Plus className="h-4 w-4" /> New order
        </button>
      </div>

      <div className="glass-dark ring-luxe rounded-2xl overflow-hidden">
        <table className="w-full text-sm">
          <thead className="text-left eyebrow text-muted-foreground bg-secondary/40">
            <tr><th className="p-4">Customer</th><th className="p-4">Product</th><th className="p-4">Qty</th><th className="p-4">Profit</th><th className="p-4">Status</th></tr>
          </thead>
          <tbody>
            {(orders ?? []).map((o: any) => (
              <tr key={o.id} className="border-t border-border">
                <td className="p-4"><div className="font-medium">{o.customer_name}</div><div className="text-xs text-muted-foreground">{o.customer_phone}</div></td>
                <td className="p-4">{o.products?.title ?? "—"}</td>
                <td className="p-4">{o.quantity}</td>
                <td className="p-4 hybrid-text font-medium">৳{Number(o.profit).toFixed(0)}</td>
                <td className="p-4"><span className="eyebrow px-2 py-1 rounded-full bg-secondary/60">{o.status}</span></td>
              </tr>
            ))}
            {(!orders || orders.length === 0) && (
              <tr><td colSpan={5} className="p-10 text-center text-muted-foreground"><ShoppingBag className="h-6 w-6 mx-auto mb-2 opacity-60" />No orders yet. Submit your first one.</td></tr>
            )}
          </tbody>
        </table>
      </div>

      {open && (
        <div className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm grid place-items-center p-4">
          <div className="glass-dark ring-luxe rounded-3xl p-6 w-full max-w-lg">
            <div className="eyebrow text-[var(--neon-soft)]">New order</div>
            <h2 className="font-serif text-2xl mt-1">Submit customer order</h2>
            <div className="mt-4 space-y-3">
              <select value={productId} onChange={e => { setProductId(e.target.value); const p = products?.find((x: any) => x.id === e.target.value); if (p) setSellPrice(Number(p.suggested_price)); }}
                className="w-full h-11 rounded-full bg-secondary/40 border border-border px-4 text-sm">
                <option value="">Select product…</option>
                {products?.map((p: any) => <option key={p.id} value={p.id}>{p.title} · cost ৳{p.cost_price}</option>)}
              </select>
              <div className="grid grid-cols-2 gap-3">
                <input type="number" min={1} placeholder="Qty" value={qty} onChange={e => setQty(Math.max(1, Number(e.target.value)))} className="h-11 rounded-full bg-secondary/40 border border-border px-4 text-sm" />
                <input type="number" min={0} placeholder="Selling price (৳)" value={sellPrice || ""} onChange={e => setSellPrice(Number(e.target.value))} className="h-11 rounded-full bg-secondary/40 border border-border px-4 text-sm" />
              </div>
              <input placeholder="Customer name *" value={cname} onChange={e => setCname(e.target.value)} className="w-full h-11 rounded-full bg-secondary/40 border border-border px-4 text-sm" />
              <input placeholder="Customer phone *" value={cphone} onChange={e => setCphone(e.target.value)} className="w-full h-11 rounded-full bg-secondary/40 border border-border px-4 text-sm" />
              <textarea placeholder="Delivery address *" value={caddr} onChange={e => setCaddr(e.target.value)} rows={2} className="w-full rounded-2xl bg-secondary/40 border border-border px-4 py-3 text-sm" />

              <div className="grid grid-cols-3 gap-2 text-center pt-2">
                <div><div className="eyebrow">Cost</div><div className="text-sm mt-0.5">৳{cost.toFixed(0)}</div></div>
                <div><div className="eyebrow text-[var(--gold)]">Revenue</div><div className="text-sm mt-0.5">৳{(sellPrice * qty).toFixed(0)}</div></div>
                <div><div className="eyebrow text-[var(--neon-soft)]">Profit</div><div className="text-sm mt-0.5 hybrid-text">৳{profit.toFixed(0)}</div></div>
              </div>

              {error && <p className="text-sm text-destructive">{error}</p>}
              <div className="flex gap-3 pt-2">
                <button onClick={() => setOpen(false)} className="h-11 px-5 rounded-full border border-border text-xs">Cancel</button>
                <button onClick={submit} disabled={saving || !product} className="flex-1 h-11 rounded-full hybrid-gradient text-[var(--obsidian)] font-mono uppercase tracking-[0.25em] text-xs glow-neon disabled:opacity-50">
                  {saving ? "Submitting…" : "Submit order"}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}