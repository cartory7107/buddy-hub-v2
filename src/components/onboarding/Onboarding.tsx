import { useEffect, useMemo, useRef, useState } from "react";
import { Globe2, Sparkles, X, ChevronDown, Check, PlayCircle, Languages } from "lucide-react";
import { LANGUAGES, T, type LangCode } from "./translations";

const LANG_KEY = "cartory_lang";
const TOUR_KEY = "cartory_tour_done";

/** Map our internal LangCode to the language tag Google Translate expects. */
const GOOGLE_LANG: Record<string, string> = {
  en: "en", bn: "bn", hi: "hi", ar: "ar", ur: "ur", es: "es",
  it: "it", fr: "fr", pt: "pt", de: "de", zh: "zh-CN", id: "id",
};

/**
 * Set the cookie Google Translate reads to decide which language to render.
 * Setting it on both `domain=.host` and host-only covers subdomains + apex.
 */
function setGoogTransCookie(code: string) {
  const value = code === "en" ? "/en/en" : `/en/${GOOGLE_LANG[code] ?? code}`;
  const host = window.location.hostname;
  const parts = host.split(".");
  const domain = parts.length > 1 ? "." + parts.slice(-2).join(".") : host;
  const exp = new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toUTCString();
  document.cookie = `googtrans=${value}; expires=${exp}; path=/`;
  document.cookie = `googtrans=${value}; expires=${exp}; path=/; domain=${domain}`;
}

export type TourSection = { id: string; label: string };

export function Onboarding({ sections }: { sections: TourSection[] }) {
  const [lang, setLang] = useState<LangCode | null>(null);
  const [stage, setStage] = useState<"lang" | "tour" | "running" | "done">("lang");
  const [activeIdx, setActiveIdx] = useState(0);
  const stopRef = useRef(false);

  // Bootstrap from localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem(LANG_KEY) as LangCode | null;
      const tourDone = localStorage.getItem(TOUR_KEY) === "1";
      if (saved && tourDone) {
        setLang(saved);
        setStage("done");
      } else if (saved) {
        setLang(saved);
        setStage("tour");
      }
      // Re-assert the Google Translate cookie on every visit so the choice persists.
      if (saved) setGoogTransCookie(saved);
    } catch {}
  }, []);

  const t = useMemo(() => T[lang ?? "en"], [lang]);

  const pickLang = (code: LangCode) => {
    try { localStorage.setItem(LANG_KEY, code); } catch {}
    setGoogTransCookie(code);
    // Reload so Google Translate picks up the new cookie and translates the entire DOM.
    // The tour stage will resume after reload because localStorage has the lang but not TOUR_KEY.
    if (code !== (lang ?? "")) {
      window.location.reload();
      return;
    }
    setLang(code);
    setStage("tour");
  };

  const declineTour = () => {
    try { localStorage.setItem(TOUR_KEY, "1"); } catch {}
    setStage("done");
  };

  const runTour = async () => {
    setStage("running");
    stopRef.current = false;
    // Quick rhythmic highlight: scroll → pulse ~1s → move on.
    const SCROLL_SETTLE_MS = 450; // let smooth-scroll settle
    const PULSE_MS = 1000;        // single ~1s glow pulse
    for (let i = 0; i < sections.length; i++) {
      if (stopRef.current) break;
      setActiveIdx(i);
      const el = document.getElementById(sections[i].id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "center" });
        await wait(SCROLL_SETTLE_MS);
        if (stopRef.current) break;
        el.classList.add("tour-active");
        await wait(PULSE_MS);
        el.classList.remove("tour-active");
      } else {
        await wait(300);
      }
    }
    // cleanup
    sections.forEach((s) => document.getElementById(s.id)?.classList.remove("tour-active"));
    try { localStorage.setItem(TOUR_KEY, "1"); } catch {}
    setStage("done");
  };

  const skipTour = () => {
    stopRef.current = true;
    sections.forEach((s) => document.getElementById(s.id)?.classList.remove("tour-active"));
    try { localStorage.setItem(TOUR_KEY, "1"); } catch {}
    setStage("done");
  };

  return (
    <>
      {/* LANGUAGE MODAL */}
      {stage === "lang" && (
        <Modal>
          <div className="text-center" translate="no">
            <div className="mx-auto h-14 w-14 rounded-2xl hybrid-gradient grid place-items-center text-[var(--obsidian)] shadow-lg">
              <Globe2 className="h-7 w-7" strokeWidth={2.4} />
            </div>
            <div className="eyebrow mt-5">Cartory · Welcome</div>
            <h2 className="mt-3 font-display font-extrabold text-white text-3xl md:text-4xl tracking-tight">
              Choose your language
            </h2>
            <p className="mt-2 text-sm text-[#C7CBD1]">
              Pick the language you're most comfortable with.
            </p>
          </div>
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-3" translate="no">
            {LANGUAGES.map((l) => (
              <button
                key={l.code}
                onClick={() => pickLang(l.code)}
                dir={l.rtl ? "rtl" : "ltr"}
                className="group relative rounded-2xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.08] hover:border-[var(--neon)]/50 px-4 py-4 text-left transition-all hover:-translate-y-0.5"
              >
                <div className="font-display font-bold text-white text-lg leading-tight">
                  {l.name}
                </div>
                <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.25em] text-[#9CA3AF]">
                  {l.code}
                </div>
                <span className="absolute right-3 top-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Check className="h-4 w-4 text-[var(--neon-soft)]" />
                </span>
              </button>
            ))}
          </div>
        </Modal>
      )}

      {/* TOUR PROMPT */}
      {stage === "tour" && lang && (
        <Modal>
          <div className="text-center">
            <div className="mx-auto h-14 w-14 rounded-2xl hybrid-gradient grid place-items-center text-[var(--obsidian)] shadow-lg">
              <Sparkles className="h-7 w-7" strokeWidth={2.4} />
            </div>
            <h2 className="mt-5 font-display font-extrabold text-white text-3xl md:text-4xl tracking-tight">
              {t.tourTitle}
            </h2>
            <p className="mt-3 text-sm text-[#C7CBD1] max-w-md mx-auto">{t.tourSub}</p>
          </div>
          <div className="mt-8 grid sm:grid-cols-2 gap-3">
            <button
              onClick={runTour}
              className="rounded-2xl hybrid-gradient text-[var(--obsidian)] font-display font-bold h-14 px-6 glow-neon hover:scale-[1.02] transition-transform"
            >
              {t.yes}
            </button>
            <button
              onClick={declineTour}
              className="rounded-2xl border border-white/15 bg-white/[0.04] text-white font-display font-semibold h-14 px-6 hover:bg-white/[0.08] transition-colors"
            >
              {t.no}
            </button>
          </div>
        </Modal>
      )}

      {/* TOUR HUD */}
      {stage === "running" && lang && (
        <div className="fixed inset-x-0 bottom-6 z-[80] flex justify-center px-4 pointer-events-none">
          <div className="pointer-events-auto glass-dark ring-luxe rounded-2xl px-5 py-3 flex items-center gap-4 max-w-[640px] w-full">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full rounded-full bg-[var(--neon)] opacity-75 animate-ping" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[var(--neon)]" />
            </span>
            <div className="flex-1 min-w-0">
              <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-[var(--neon-soft)]">
                {t.touring} · {t.step} {activeIdx + 1}/{sections.length}
              </div>
              <div className="font-display font-bold text-white text-sm truncate">
                {sections[activeIdx]?.label}
              </div>
              <div className="mt-2 h-1 rounded-full bg-white/10 overflow-hidden">
                <div
                  className="h-full hybrid-gradient transition-all duration-500"
                  style={{ width: `${((activeIdx + 1) / sections.length) * 100}%` }}
                />
              </div>
            </div>
            <button
              onClick={skipTour}
              className="shrink-0 inline-flex items-center gap-1 rounded-full border border-white/15 px-3 h-9 text-xs font-display font-semibold text-white hover:bg-white/10"
            >
              <X className="h-3.5 w-3.5" /> {t.skip}
            </button>
          </div>
        </div>
      )}

      {/* SCROLL INDICATOR — always visible after language picked */}
      {stage !== "lang" && (
        <ScrollIndicator sections={sections} hint={t.scrollHint} />
      )}

      {/* REPLAY PILL — visible after tour is dismissed/finished */}
      {stage === "done" && lang && (
        <div className="fixed top-20 right-4 md:right-6 z-[70] flex items-center gap-2 animate-fade-up">
          <button
            onClick={runTour}
            className="group inline-flex items-center gap-2 rounded-full glass-dark ring-luxe pl-3 pr-4 h-10 text-xs font-display font-semibold text-white hover:bg-white/10 transition-colors"
            aria-label="Replay tour"
          >
            <span className="grid place-items-center h-6 w-6 rounded-full hybrid-gradient text-[var(--obsidian)]">
              <PlayCircle className="h-3.5 w-3.5" strokeWidth={2.6} />
            </span>
            {t.replay}
          </button>
          <button
            onClick={() => setStage("lang")}
            className="inline-flex items-center justify-center rounded-full glass-dark ring-luxe h-10 w-10 text-white hover:bg-white/10 transition-colors"
            aria-label="Change language"
            title={t.chooseLang}
          >
            <Languages className="h-4 w-4" />
          </button>
        </div>
      )}
    </>
  );
}

function Modal({ children }: { children: React.ReactNode }) {
  return (
    <div className="fixed inset-0 z-[90] grid place-items-center p-4">
      <div className="absolute inset-0 bg-black/70 backdrop-blur-md" />
      <div className="relative w-full max-w-2xl rounded-3xl glass-dark ring-luxe p-6 md:p-10 animate-fade-up">
        <div className="absolute -top-24 -left-24 h-64 w-64 rounded-full bg-[var(--neon)]/25 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -right-24 h-64 w-64 rounded-full bg-[var(--gold)]/20 blur-3xl pointer-events-none" />
        <div className="relative">{children}</div>
      </div>
    </div>
  );
}

function ScrollIndicator({ sections, hint }: { sections: TourSection[]; hint: string }) {
  const [activeId, setActiveId] = useState<string>(sections[0]?.id ?? "");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      setProgress(max > 0 ? Math.min(1, window.scrollY / max) : 0);
      // determine active section
      const mid = window.scrollY + window.innerHeight / 2;
      let current = sections[0]?.id ?? "";
      for (const s of sections) {
        const el = document.getElementById(s.id);
        if (el && el.offsetTop <= mid) current = s.id;
      }
      setActiveId(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [sections]);

  const jump = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="hidden md:flex fixed right-5 top-1/2 -translate-y-1/2 z-[70] flex-col items-center gap-3 pointer-events-none">
      <div className="pointer-events-auto glass-dark ring-luxe rounded-full px-2 py-3 flex flex-col items-center gap-2">
        {sections.map((s, i) => {
          const active = s.id === activeId;
          return (
            <button
              key={s.id}
              onClick={() => jump(s.id)}
              aria-label={s.label}
              className="group relative h-7 w-7 grid place-items-center"
            >
              <span
                className={`block rounded-full transition-all ${
                  active
                    ? "h-3 w-3 bg-[var(--neon)] shadow-[0_0_14px_var(--neon)]"
                    : "h-2 w-2 bg-white/30 group-hover:bg-white/60"
                }`}
              />
              <span className="pointer-events-none absolute right-full mr-3 px-2 py-1 rounded-md glass-dark ring-luxe text-[10px] font-display font-bold text-white opacity-0 group-hover:opacity-100 whitespace-nowrap transition-opacity">
                {String(i + 1).padStart(2, "0")} · {s.label}
              </span>
            </button>
          );
        })}
      </div>
      {/* Animated arrow that travels with scroll */}
      <div className="pointer-events-none h-40 w-8 relative">
        <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/15 to-transparent" />
        <div
          className="absolute left-1/2 -translate-x-1/2 h-8 w-8 rounded-full hybrid-gradient grid place-items-center text-[var(--obsidian)] shadow-[0_0_20px_var(--neon)] transition-[top] duration-200"
          style={{ top: `calc(${progress * 100}% - 16px)` }}
        >
          <ChevronDown className="h-4 w-4" strokeWidth={3} />
        </div>
      </div>
      <div className="font-mono text-[9px] uppercase tracking-[0.3em] text-[#9CA3AF] writing-mode-vertical">
        {hint}
      </div>
    </div>
  );
}

function wait(ms: number) {
  return new Promise<void>((r) => setTimeout(r, ms));
}