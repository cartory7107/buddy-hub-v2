import { Link, useRouterState } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import {
  LayoutDashboard, Package, ShoppingBag, Trophy, Gift, Target,
  GraduationCap, Megaphone, LogOut, Menu, X, ShieldCheck
} from "lucide-react";
import { useAuth } from "@/lib/auth-context";
import { Logo } from "@/components/brand/Logo";

const nav = [
  { to: "/dashboard", label: "Command Center", icon: LayoutDashboard },
  { to: "/products", label: "Product Center", icon: Package },
  { to: "/orders", label: "Orders", icon: ShoppingBag },
  { to: "/leaderboard", label: "Leaderboard", icon: Trophy },
  { to: "/rewards", label: "Rewards", icon: Gift },
  { to: "/challenges", label: "Challenges", icon: Target },
  { to: "/courses", label: "Academy", icon: GraduationCap },
  { to: "/news", label: "News & Campaigns", icon: Megaphone },
] as const;

function StatusPill({ status }: { status: string }) {
  const map: Record<string, { c: string; t: string }> = {
    unsubmitted: { c: "bg-muted text-muted-foreground", t: "Not verified" },
    pending: { c: "bg-[var(--gold)]/15 text-[var(--gold)]", t: "Pending review" },
    approved: { c: "bg-emerald-500/15 text-emerald-400", t: "Approved" },
    rejected: { c: "bg-destructive/15 text-destructive", t: "Rejected" },
  };
  const m = map[status] ?? map.unsubmitted;
  return <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-mono uppercase tracking-[0.2em] ${m.c}`}><ShieldCheck className="h-3 w-3" />{m.t}</span>;
}

export function DashboardShell({ children }: { children: ReactNode }) {
  const { profile, user, signOut } = useAuth();
  const path = useRouterState({ select: s => s.location.pathname });
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen luxe-gradient text-foreground">
      <div className="lg:grid lg:grid-cols-[260px_1fr]">
        <aside className={`fixed inset-y-0 left-0 z-40 w-[260px] glass-dark border-r border-border transition-transform lg:static lg:translate-x-0 ${open ? "translate-x-0" : "-translate-x-full"}`}>
          <div className="p-6 flex items-center justify-between">
            <Logo size={36} />
            <button className="lg:hidden h-8 w-8 grid place-items-center" onClick={() => setOpen(false)}><X className="h-4 w-4" /></button>
          </div>

          <nav className="px-3 space-y-0.5">
            {nav.map(({ to, label, icon: Icon }) => {
              const active = path === to;
              return (
                <Link key={to} to={to} onClick={() => setOpen(false)}
                  className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm transition-all ${active ? "bg-secondary/60 text-foreground ring-luxe" : "text-muted-foreground hover:text-foreground hover:bg-secondary/30"}`}>
                  <Icon className="h-4 w-4" />{label}
                </Link>
              );
            })}
          </nav>

          <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-border">
            <div className="px-3 py-3 rounded-2xl bg-secondary/40">
              <div className="text-xs text-muted-foreground truncate">{user?.email}</div>
              <div className="font-serif text-base mt-0.5 truncate">{profile?.full_name || "Reseller"}</div>
              <div className="mt-2"><StatusPill status={profile?.verification_status ?? "unsubmitted"} /></div>
              <button onClick={signOut} className="mt-3 w-full inline-flex items-center justify-center gap-2 h-9 rounded-full border border-border text-xs text-muted-foreground hover:text-foreground hover:bg-secondary/60">
                <LogOut className="h-3.5 w-3.5" />Sign out
              </button>
            </div>
          </div>
        </aside>

        <div className="min-w-0">
          <header className="lg:hidden sticky top-0 z-30 glass-dark border-b border-border px-4 h-16 flex items-center justify-between">
            <button onClick={() => setOpen(true)} className="h-10 w-10 grid place-items-center rounded-full hover:bg-secondary/60"><Menu className="h-5 w-5" /></button>
            <Logo size={32} showWordmark={false} href={null} />
            <div className="w-10" />
          </header>
          <main className="p-4 md:p-8 max-w-7xl mx-auto">
            {children}
          </main>
        </div>
      </div>
    </div>
  );
}