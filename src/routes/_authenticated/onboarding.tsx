import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/lib/auth-context";
import { ShieldCheck, Upload, CheckCircle2, Clock, XCircle } from "lucide-react";

export const Route = createFileRoute("/_authenticated/onboarding")({
  head: () => ({ meta: [{ title: "Verify your account — Cartory Dropship" }] }),
  component: Onboarding,
});

function Onboarding() {
  const { profile, user, refresh } = useAuth();
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [fullName, setFullName] = useState(profile?.full_name ?? "");
  const [mobile, setMobile] = useState(profile?.mobile ?? "");
  const [address, setAddress] = useState(profile?.address ?? "");
  const [whatsapp, setWhatsapp] = useState(profile?.whatsapp ?? "");
  const [telegram, setTelegram] = useState(profile?.telegram ?? "");
  const [nidFile, setNidFile] = useState<File | null>(null);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  if (profile?.verification_status === "approved") {
    return (
      <div className="max-w-2xl mx-auto glass-dark ring-luxe rounded-3xl p-10 text-center">
        <div className="h-14 w-14 mx-auto rounded-full bg-emerald-500/15 grid place-items-center"><CheckCircle2 className="h-7 w-7 text-emerald-400" /></div>
        <h1 className="font-serif text-4xl mt-4">You're verified.</h1>
        <p className="text-muted-foreground mt-2">Order submission is unlocked. Welcome to the inner circle.</p>
        <button onClick={() => navigate({ to: "/dashboard" })} className="mt-6 h-11 px-6 rounded-full hybrid-gradient text-[var(--obsidian)] font-mono uppercase tracking-[0.22em] text-[11px]">Go to dashboard</button>
      </div>
    );
  }

  if (profile?.verification_status === "pending") {
    return (
      <div className="max-w-2xl mx-auto glass-dark ring-luxe rounded-3xl p-10 text-center">
        <div className="h-14 w-14 mx-auto rounded-full bg-[var(--gold)]/15 grid place-items-center"><Clock className="h-7 w-7 text-[var(--gold)]" /></div>
        <div className="eyebrow text-[var(--gold)] mt-4">Pending review</div>
        <h1 className="font-serif text-4xl mt-2">We're reviewing your submission.</h1>
        <p className="text-muted-foreground mt-2">Usually under 24 hours. You'll get a notification the moment you're approved.</p>
      </div>
    );
  }

  const submit = async () => {
    if (!user) return;
    if (!fullName.trim() || !mobile.trim() || !address.trim() || !nidFile) {
      setError("Please complete all required fields and upload your NID.");
      return;
    }
    setSaving(true); setError(null);
    try {
      const ext = nidFile.name.split(".").pop() || "jpg";
      const path = `${user.id}/nid-${Date.now()}.${ext}`;
      const up = await supabase.storage.from("nid").upload(path, nidFile, { upsert: true });
      if (up.error) throw up.error;

      const { error } = await supabase.from("profiles").update({
        full_name: fullName.trim(),
        mobile: mobile.trim(),
        address: address.trim(),
        whatsapp: whatsapp.trim() || null,
        telegram: telegram.trim() || null,
        nid_image_path: path,
        verification_status: "pending",
        verification_submitted_at: new Date().toISOString(),
      }).eq("user_id", user.id);
      if (error) throw error;
      await refresh();
    } catch (e: any) {
      setError(e.message ?? "Submission failed");
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="eyebrow text-[var(--neon-soft)]">Onboarding</div>
      <h1 className="font-serif text-4xl md:text-5xl mt-2">Become a verified reseller.</h1>
      <p className="text-muted-foreground mt-2 text-sm">Two short steps. ~60 seconds. Then you can submit customer orders.</p>

      {profile?.verification_status === "rejected" && (
        <div className="mt-6 glass-dark ring-luxe rounded-2xl p-5 border border-destructive/30 flex items-start gap-3">
          <XCircle className="h-5 w-5 text-destructive shrink-0 mt-0.5" />
          <div>
            <div className="eyebrow text-destructive">Previous submission rejected</div>
            <p className="text-sm mt-1">{profile?.verification_note || "Please re-submit with clearer details."}</p>
          </div>
        </div>
      )}

      <div className="mt-8 flex items-center gap-3">
        {[1, 2].map(i => (
          <div key={i} className={`flex-1 h-1.5 rounded-full ${step >= i ? "hybrid-gradient" : "bg-secondary/50"}`} />
        ))}
      </div>

      <div className="mt-8 glass-dark ring-luxe rounded-3xl p-6 md:p-8 space-y-4">
        {step === 1 ? (
          <>
            <div className="eyebrow">Step 1 · Your details</div>
            <h2 className="font-serif text-2xl">Who are you?</h2>
            <input placeholder="Full name (as on NID) *" value={fullName} onChange={e => setFullName(e.target.value)}
              className="w-full h-12 rounded-full bg-secondary/40 border border-border px-5 text-sm outline-none focus:border-[var(--neon)]" />
            <input placeholder="Active mobile number *" value={mobile} onChange={e => setMobile(e.target.value)}
              className="w-full h-12 rounded-full bg-secondary/40 border border-border px-5 text-sm outline-none focus:border-[var(--neon)]" />
            <textarea placeholder="Full address *" value={address} onChange={e => setAddress(e.target.value)} rows={3}
              className="w-full rounded-2xl bg-secondary/40 border border-border px-5 py-3 text-sm outline-none focus:border-[var(--neon)]" />
            <div className="grid sm:grid-cols-2 gap-3">
              <input placeholder="WhatsApp (optional)" value={whatsapp} onChange={e => setWhatsapp(e.target.value)}
                className="h-12 rounded-full bg-secondary/40 border border-border px-5 text-sm outline-none focus:border-[var(--neon)]" />
              <input placeholder="Telegram username (optional)" value={telegram} onChange={e => setTelegram(e.target.value)}
                className="h-12 rounded-full bg-secondary/40 border border-border px-5 text-sm outline-none focus:border-[var(--neon)]" />
            </div>
            <button onClick={() => setStep(2)} disabled={!fullName.trim() || !mobile.trim() || !address.trim()}
              className="mt-4 w-full h-12 rounded-full hybrid-gradient text-[var(--obsidian)] font-mono uppercase tracking-[0.25em] text-xs glow-neon disabled:opacity-50">
              Continue →
            </button>
          </>
        ) : (
          <>
            <div className="eyebrow">Step 2 · Identity</div>
            <h2 className="font-serif text-2xl">Upload NID front side</h2>
            <p className="text-sm text-muted-foreground">A clear photo of the front of your National ID. Kept private and used only for verification.</p>
            <label className="block">
              <div className="rounded-2xl border-2 border-dashed border-border hover:border-[var(--neon)] transition cursor-pointer p-8 text-center">
                <Upload className="h-6 w-6 mx-auto text-muted-foreground" />
                <div className="mt-3 text-sm">{nidFile ? nidFile.name : "Click to upload NID front"}</div>
                <div className="eyebrow mt-1 text-muted-foreground">JPG / PNG · up to 5MB</div>
                <input type="file" accept="image/*" className="hidden" onChange={e => setNidFile(e.target.files?.[0] ?? null)} />
              </div>
            </label>
            <div className="flex gap-3">
              <button onClick={() => setStep(1)} className="h-12 px-6 rounded-full border border-border text-xs font-mono uppercase tracking-[0.22em]">Back</button>
              <button onClick={submit} disabled={saving || !nidFile}
                className="flex-1 h-12 rounded-full hybrid-gradient text-[var(--obsidian)] font-mono uppercase tracking-[0.25em] text-xs glow-neon disabled:opacity-50 inline-flex items-center justify-center gap-2">
                <ShieldCheck className="h-4 w-4" />{saving ? "Submitting…" : "Submit for verification"}
              </button>
            </div>
            {error && <p className="text-sm text-destructive">{error}</p>}
          </>
        )}
      </div>
    </div>
  );
}