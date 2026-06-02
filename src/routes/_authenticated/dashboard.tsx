import { createFileRoute, Link } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/lib/auth-context";
import { Package, TrendingUp, Wallet, Trophy, Target, ShieldCheck, ArrowUpRight } from "lucide-react";
import OptimizedImage from "@/components/ui/OptimizedImage";

export const Route = createFileRoute("/_authenticated/dashboard")({
  head: () => ({ meta: [{ title: "Command Center — Cartory Dropship" }] }),
  component: Dashboard,
});

function StatCard({ icon: Icon, label, value, hint, accent }: { icon: any; label: string; value: any; hint?: string; accent?: string }) {
  return (
    <div className="glass-dark ring-luxe rounded-2xl p-5 card-3d">
      <div className="flex items-center justify-between">
        <div className={`h-9 w-9 rounded-full grid place-items-center ${accent ?? "bg-secondary/60"}`}><Icon className="h-4 w-4" /></div>
        <span className="eyebrow text-muted-foreground">{hint}</span>
      </div>
      <div className="mt-5 font-serif text-3xl">{value}</div>
      <div className="eyebrow mt-1">{label}</div>
    </div>
  );
}

function Dashboard() {
  const { profile, user } = useAuth();
  const approved = profile?.verification_status === "approved";

  const { data: orders } = useQuery({
    queryKey: ["orders", user?.id],
    queryFn: async () => {
      const { data } = await supabase.from("reseller_orders").select("*").order("created_at", { ascending: false }).limit(50);
      return data ?? [];
    },
    enabled: !!user,
  });

  const { data: products } = useQuery({
    queryKey: ["products-preview"],
    queryFn: async () => {
      const { data } = await supabase.from("products").select("*").eq("is_active", true).limit(6);
      return data ?? [];
    },
  });

  const totalOrders = orders?.length ?? 0;
  const profit = orders?.reduce((s, o: any) => s + Number(o.profit ?? 0), 0) ?? 0;
  const pending = orders?.filter((o: any) => o.status === "pending").reduce((s, o: any) => s + Number(o.profit ?? 0), 0) ?? 0;

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <div className="text-xs font-bold uppercase tracking-wider text-[var(--neon-soft)]">Command Center</div>
          <h1 className="font-display font-extrabold text-white text-4xl md:text-5xl mt-2 tracking-tight">
            Welcome back, <span className="hybrid-text">{profile?.full_name?.split(" ")[0] || "Reseller"}</span>.
          </h1>
          <p className="text-[#E5E7EB] mt-3 text-base">Your reseller business at a glance.</p>
        </div>
      </div>

      {!approved && (
        <div className="glass-dark ring-luxe rounded-3xl p-6 md:p-8 border border-[var(--gold)]/30">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex items-start gap-4">
              <div className="h-12 w-12 rounded-full bg-[var(--gold)]/15 grid place-items-center"><ShieldCheck className="h-5 w-5 text-[var(--gold)]" /></div>
              <div>
                <div className="eyebrow text-[var(--gold)]">
                  {profile?.verification_status === "pending" ? "Under review" : profile?.verification_status === "rejected" ? "Action needed" : "One step away"}
                </div>
                <h3 className="font-serif text-2xl mt-1">Complete your verification to start placing orders</h3>
                <p className="text-sm text-muted-foreground mt-1">Browse and learn freely. To submit customer orders, finish a 60-second verification.</p>
              </div>
            </div>
            <Link to="/onboarding" className="shrink-0 inline-flex h-11 items-center gap-2 rounded-full px-5 hybrid-gradient text-[var(--obsidian)] font-mono uppercase tracking-[0.22em] text-[11px] glow-neon">
              {profile?.verification_status === "pending" ? "View status" : "Verify now"} <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      )}

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard icon={Package} label="Total orders" value={totalOrders} hint="lifetime" />
        <StatCard icon={Wallet} label="Profit earned" value={`৳${profit.toFixed(0)}`} hint="lifetime" accent="bg-[var(--gold)]/15" />
        <StatCard icon={TrendingUp} label="Pending earnings" value={`৳${pending.toFixed(0)}`} hint="in flight" />
        <StatCard icon={Trophy} label="Leaderboard" value={approved ? "#—" : "Locked"} hint="this month" accent="bg-[var(--neon)]/15" />
      </div>

      <div className="grid lg:grid-cols-3 gap-4">
        <div className="glass-dark ring-luxe rounded-2xl p-6 lg:col-span-2">
          <div className="flex items-center justify-between mb-4">
            <div>
              <div className="eyebrow">Active challenge</div>
              <h3 className="font-serif text-2xl mt-1">December · 30 orders in 30 days</h3>
            </div>
            <Target className="h-5 w-5 text-[var(--neon-soft)]" />
          </div>
          <div className="h-2 rounded-full bg-secondary/50 overflow-hidden">
            <div className="h-full hybrid-gradient" style={{ width: `${Math.min(100, (totalOrders / 30) * 100)}%` }} />
          </div>
          <div className="mt-3 flex items-center justify-between text-xs text-muted-foreground">
            <span>{totalOrders} / 30 orders</span>
            <span>Reward: ৳3,000 cash bonus</span>
          </div>
        </div>
        <div className="glass-dark ring-luxe rounded-2xl p-6">
          <div className="eyebrow">Next reward tier</div>
          <div className="font-serif text-2xl mt-1">50 orders · Bronze badge</div>
          <div className="mt-4 h-2 rounded-full bg-secondary/50 overflow-hidden">
            <div className="h-full bg-[var(--gold)]" style={{ width: `${Math.min(100, (totalOrders / 50) * 100)}%` }} />
          </div>
          <Link to="/rewards" className="mt-4 inline-flex eyebrow text-[var(--gold)] hover:underline">View all rewards →</Link>
        </div>
      </div>

      <div>
        <div className="flex items-end justify-between mb-4">
          <div>
            <div className="eyebrow text-[var(--neon-soft)]">Product Center</div>
            <h2 className="font-serif text-3xl mt-1">Top profit opportunities</h2>
          </div>
          <Link to="/products" className="eyebrow text-muted-foreground hover:text-foreground">Open Product Center →</Link>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {products?.map((p: any) => {
            const margin = Number(p.suggested_price) - Number(p.cost_price);
            return (
              <div key={p.id} className="glass-dark ring-luxe rounded-2xl p-4 card-3d">
                <div className="aspect-[4/3] rounded-xl overflow-hidden bg-secondary/40 mb-3">
                  {p.image_url && <OptimizedImage src={p.image_url} alt={p.title} width={400} height={300} className="h-full w-full object-cover" />}
                </div>
                <div className="eyebrow text-muted-foreground">{p.category ?? "General"}</div>
                <div className="font-serif text-lg mt-1 line-clamp-1">{p.title}</div>
                <div className="mt-3 grid grid-cols-3 gap-2 text-center">
                  <div><div className="eyebrow">Cost</div><div className="text-sm mt-0.5">৳{p.cost_price}</div></div>
                  <div><div className="eyebrow text-[var(--gold)]">Sell</div><div className="text-sm mt-0.5">৳{p.suggested_price}</div></div>
                  <div><div className="eyebrow text-[var(--neon-soft)]">Profit</div><div className="text-sm mt-0.5 hybrid-text">৳{margin.toFixed(0)}</div></div>
                </div>
                <div className="mt-3 flex items-center justify-between text-xs">
                  <span className="text-muted-foreground">Stock · {p.stock}</span>
                  <Link to="/orders" className="text-[var(--neon-soft)] hover:underline">Submit order →</Link>
                </div>
              </div>
            );
          })}
          {(!products || products.length === 0) && (
            <div className="lg:col-span-3 glass-dark ring-luxe rounded-2xl p-8 text-center text-muted-foreground">
              No products yet. An admin will publish products soon.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}