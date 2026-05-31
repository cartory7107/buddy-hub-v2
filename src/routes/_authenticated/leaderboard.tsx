import { createFileRoute } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Trophy, Medal } from "lucide-react";

export const Route = createFileRoute("/_authenticated/leaderboard")({
  head: () => ({ meta: [{ title: "Leaderboard — Cartory Dropship" }] }),
  component: Leaderboard,
});

function Leaderboard() {
  const { data } = useQuery({
    queryKey: ["leaderboard"],
    queryFn: async () => (await supabase.from("profiles").select("full_name, total_orders, total_profit").order("total_profit", { ascending: false }).limit(50)).data ?? [],
  });
  return (
    <div className="space-y-6">
      <div><div className="eyebrow text-[var(--gold)]">Leaderboard</div><h1 className="font-serif text-4xl md:text-5xl mt-2">Top resellers <em className="italic hybrid-text">this month</em>.</h1></div>
      <div className="glass-dark ring-luxe rounded-2xl overflow-hidden">
        {(data ?? []).map((r: any, i: number) => (
          <div key={i} className="flex items-center gap-4 p-4 border-b border-border last:border-0">
            <div className={`h-10 w-10 grid place-items-center rounded-full font-serif text-lg ${i < 3 ? "hybrid-gradient text-[var(--obsidian)]" : "bg-secondary/60"}`}>{i + 1}</div>
            <div className="flex-1"><div className="font-medium">{r.full_name || "Anonymous reseller"}</div><div className="eyebrow text-muted-foreground">{r.total_orders} orders</div></div>
            <div className="font-serif text-xl gold-text">৳{Number(r.total_profit).toFixed(0)}</div>
            {i < 3 && <Medal className="h-4 w-4 text-[var(--gold)]" />}
          </div>
        ))}
        {(!data || data.length === 0) && <div className="p-10 text-center text-muted-foreground"><Trophy className="h-6 w-6 mx-auto mb-2 opacity-60" />The board is empty. Be first.</div>}
      </div>
    </div>
  );
}