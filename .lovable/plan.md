## Goal

When a visitor chooses a language in the onboarding modal, the **whole website** must instantly switch to that language — every navbar item, hero headline, button, card, footer link, login/register form, dashboard label, AI orb tooltip, etc. — without leaving a single English word behind, for all 12 supported languages (English, বাংলা, हिन्दी, العربية, اُردُو, Español, Italiano, Français, Português, Deutsch, 中文, Bahasa Indonesia).

## Why a manual dictionary is the wrong approach

The codebase has 40+ component files (Navbar, Hero, Marquee, Journey, ResellerSections with many sub-cards, Reviews, Stats, Footer, AIOrb, login, register, dashboard, products, orders, courses, leaderboard, news, rewards, challenges, onboarding form, etc.) containing **hundreds of distinct strings**. Hand-translating each one into 12 languages would:

- Take a huge amount of work and is impossible to keep "no word skipped" guaranteed.
- Break the moment any new text is added anywhere.
- Miss dynamically rendered content (DB rows, server messages, error toasts).

## Recommended solution: Google Translate Website Widget (hidden)

Inject Google's official Website Translator script in hidden mode. Then, when the user picks a language in the onboarding modal, we programmatically trigger it to translate the entire DOM into the chosen language. Google handles every word — visible text, alt text, placeholders, even text added later by React re-renders.

### How it works

1. Add a small `<div id="google_translate_element">` (visually hidden) plus the Google Translate script to the root layout (`src/routes/__root.tsx`).
2. Initialize it with the full list of our 12 target languages.
3. On language pick in `Onboarding.tsx`, set the `googtrans` cookie to `/en/<code>` and reload — Google then auto-translates the page, including all subsequent navigation, on every visit until changed.
4. Persist the choice in `localStorage` (already done) so it survives across sessions and applies before the user even sees the modal again.
5. Hide the default Google Translate banner/toolbar via CSS so the UI stays clean.
6. Replace the existing in-modal "Change language" button so it re-opens the same flow and re-applies the cookie.

### Coverage guarantee

- Static JSX text ✅
- Dynamic text from state/props/DB ✅
- Form placeholders, button labels, aria-labels ✅
- Future pages added later — **automatic**, no extra work needed.

### Trade-offs to call out

- Google Translate is a free third-party service; translation quality is good but not native-perfect (especially for marketing copy).
- Adds ~50 KB of third-party script on first load.
- A brief flash of English may appear before translation kicks in on first paint (mitigated by hiding body until translation completes for non-English users).

If you'd prefer hand-curated translations only for a smaller set of "marketing" strings (Hero, Navbar, CTA buttons) and leave the rest in English, say the word and I'll do that instead — but it will **not** satisfy "do not skip a single word."

## Files to change

- `src/routes/__root.tsx` — inject Google Translate script + hidden container, add CSS to hide the Google banner.
- `src/components/onboarding/Onboarding.tsx` — on `pickLang`, set `googtrans` cookie and reload; same for the "Change language" button.
- `src/styles.css` — small block to hide `.goog-te-banner-frame`, `.skiptranslate`, and reset `body` top offset Google adds.
- `src/components/onboarding/translations.ts` — keep as-is (still used for the onboarding modal itself, which renders before Google has translated anything).

## Confirm before I build

Shall I proceed with the Google Translate approach so every word is covered automatically across the whole site?