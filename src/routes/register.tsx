import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/lib/auth-context";
import { Logo } from "@/components/brand/Logo";

export const Route = createFileRoute("/register")({
  head: () => ({ meta: [{ title: "Join Cartory Dropship — Build your reseller business" }] }),
  component: RegisterPage,
});

function RegisterPage() {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [info, setInfo] = useState<string | null>(null);

  useEffect(() => { if (user) navigate({ to: "/dashboard", replace: true }); }, [user, navigate]);

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim()) return setError("Full name is required");
    setLoading(true); setError(null); setInfo(null);
    const { data, error } = await supabase.auth.signUp({
      email, password,
      options: {
        emailRedirectTo: window.location.origin + "/dashboard",
        data: { full_name: fullName.trim(), phone: phone || null },
      },
    });
    setLoading(false);
    if (error) return setError(error.message);
    if (!data.session) {
      setInfo("Check your email to confirm your account, then sign in.");
      return;
    }
    navigate({ to: "/dashboard", replace: true });
  };

  const handleGoogle = async () => {
    setLoading(true); setError(null);
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: window.location.origin + "/dashboard",
      },
    });
    if (error) { setError(error.message ?? "Sign in failed"); setLoading(false); }
  };

  return (
    <div className="min-h-screen luxe-gradient flex items-center justify-center px-4 py-16">
      <div className="w-full max-w-md">
        <div className="flex items-center justify-between">
          <Logo size={44} />
          <Link to="/" className="text-xs font-semibold uppercase tracking-wider text-muted-foreground hover:text-foreground">← Home</Link>
        </div>
        <div className="mt-8 glass-dark rounded-3xl p-8 ring-luxe">
          <div className="text-xs font-bold uppercase tracking-wider text-[var(--neon-soft)]">Start in 30 seconds</div>
          <h1 className="font-display font-extrabold text-white text-4xl mt-3 tracking-tight">Create your <span className="hybrid-text">reseller</span> account.</h1>
          <p className="mt-2 text-base text-[#E5E7EB]">No NID needed yet. Just your name to get inside.</p>

          <button onClick={handleGoogle} disabled={loading}
            className="mt-8 w-full h-12 rounded-full bg-white text-black font-medium inline-flex items-center justify-center gap-3 hover:bg-white/90 transition">
            <svg className="size-5" viewBox="0 0 24 24"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.99.66-2.26 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.1A6.97 6.97 0 0 1 5.47 12c0-.73.13-1.44.36-2.1V7.07H2.18A10.99 10.99 0 0 0 1 12c0 1.77.42 3.45 1.18 4.93l3.66-2.83z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.83C6.71 7.31 9.14 5.38 12 5.38z"/></svg>
            Continue with Google
          </button>

          <div className="my-6 flex items-center gap-3 eyebrow text-muted-foreground">
            <span className="h-px flex-1 bg-border" />or<span className="h-px flex-1 bg-border" />
          </div>

          <form onSubmit={handleSignup} className="space-y-3">
            <input required placeholder="Full name *" value={fullName} onChange={e => setFullName(e.target.value)}
              className="w-full h-12 rounded-full bg-secondary/40 border border-border px-5 text-sm outline-none focus:border-[var(--neon)]" />
            <input type="email" required placeholder="Email" value={email} onChange={e => setEmail(e.target.value)}
              className="w-full h-12 rounded-full bg-secondary/40 border border-border px-5 text-sm outline-none focus:border-[var(--neon)]" />
            <input placeholder="Phone (optional)" value={phone} onChange={e => setPhone(e.target.value)}
              className="w-full h-12 rounded-full bg-secondary/40 border border-border px-5 text-sm outline-none focus:border-[var(--neon)]" />
            <input type="password" required minLength={6} placeholder="Password (min 6)" value={password} onChange={e => setPassword(e.target.value)}
              className="w-full h-12 rounded-full bg-secondary/40 border border-border px-5 text-sm outline-none focus:border-[var(--neon)]" />
            <button disabled={loading} className="w-full h-12 rounded-full hybrid-gradient text-[var(--obsidian)] font-mono uppercase tracking-[0.25em] text-xs glow-neon">
              {loading ? "Creating…" : "Create account"}
            </button>
          </form>

          {error && <p className="mt-4 text-sm text-destructive text-center">{error}</p>}
          {info && <p className="mt-4 text-sm text-[var(--gold)] text-center">{info}</p>}

          <p className="mt-6 text-center text-sm text-muted-foreground">
            Already have an account? <Link to="/login" className="text-foreground hover:text-[var(--neon-soft)] underline underline-offset-4">Sign in</Link>
          </p>
        </div>
      </div>
    </div>
  );
}