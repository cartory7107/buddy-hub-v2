# AI Handoff — Current Production Baseline

_Last audited: 2026-06-02 (UTC)_

This handoff is for future AI agents working on this repository. The user stated that the website is fully working in production and requested documentation/stabilization only. Preserve the current production state.

## Prime Directive

Do not refactor, clean up, remove files, change UI, change routes, change deployment config, change authentication, or change Supabase integration unless the user explicitly requests that exact change and you can validate it safely.

Treat the current GitHub `main` production state as source of truth. In this local checkout, there is no configured Git remote, and the checked-out branch is `work` at commit `6d8169f`, a GitHub merge commit for the deployment fix PR. If you have network/repository access in a future environment, verify `origin/main` before editing.

## Current Stack

- React 19
- TanStack Start / TanStack Router
- Vite 7
- Nitro `3.0.260429-beta`
- Vercel deployment via Nitro `vercel` preset
- Tailwind CSS 4 via `@tailwindcss/vite`
- Supabase auth/database integration
- shadcn/Radix-style UI component structure
- Bun-oriented install guard via `bunfig.toml`

## Deployment Baseline

The working deployment setup is centered on these files:

- `vite.config.ts`
  - Explicitly uses `tanstackStart({ server: { entry: "server" } })`.
  - Explicitly uses Nitro with `process.env.NITRO_PRESET ?? "vercel"`.
  - Includes React, Tailwind, and TypeScript path plugins.
- `nitro.config.ts`
  - Defaults Nitro preset to `vercel`.
- `src/server.ts`
  - Server entry for TanStack Start.
  - Normalizes certain catastrophic SSR JSON 500 responses into an HTML error page.
- `src/start.ts`
  - Request middleware catches non-status errors and returns the shared HTML error page.
- `package.json`
  - `build` is `vite build`.
  - `start` is `node .output/server/index.mjs`.

Do not switch frameworks, presets, output directories, or server entries without a deployment review.

## Routing Baseline

Routes are file-based under `src/routes/`:

- `/` from `src/routes/index.tsx`
- `/login` from `src/routes/login.tsx`
- `/register` from `src/routes/register.tsx`
- Authenticated layout from `src/routes/_authenticated.tsx`
- Authenticated children:
  - `/dashboard`
  - `/products`
  - `/orders`
  - `/courses`
  - `/challenges`
  - `/leaderboard`
  - `/news`
  - `/onboarding`
  - `/rewards`

Important routing notes:

- `src/routes/__root.tsx` is the root shell and must render `<Outlet />`.
- `src/routeTree.gen.ts` is generated and should not be manually edited.
- Do not create Next.js/Remix-style route folders such as `src/pages/` or `app/layout.tsx`.

## Supabase/Auth Baseline

Important files:

- `src/integrations/supabase/client.ts` — browser/client Supabase client.
- `src/integrations/supabase/client.server.ts` — server/admin Supabase client using service role key.
- `src/integrations/supabase/auth-middleware.ts` — server-function auth middleware that validates bearer tokens.
- `src/integrations/supabase/auth-attacher.ts` — client middleware that attaches Supabase access token to server-function requests.
- `src/lib/auth-context.tsx` — React auth/session/profile context.
- `src/integrations/supabase/types.ts` — generated database types.
- `supabase/config.toml` and `supabase/migrations/` — Supabase project/db baseline.

Do not expose `SUPABASE_SERVICE_ROLE_KEY` to client code. Keep server-only code in server-only paths/modules.

## Environment Variables

Expected public/client variables:

- `VITE_SUPABASE_URL`
- `VITE_SUPABASE_PUBLISHABLE_KEY`

Expected server variables:

- `SUPABASE_URL`
- `SUPABASE_PUBLISHABLE_KEY`
- `SUPABASE_SERVICE_ROLE_KEY` when server/admin Supabase operations are used

Optional/deployment variables:

- `NITRO_PRESET`, defaulting to `vercel`
- `NODE_ENV`
- `VITE_SUPABASE_PROJECT_ID`, present in the local `.env` key list but not referenced by current source files found in this audit

Never print or commit secret values. If auditing `.env`, list keys only.

## Historical Deployment Fix Files

Git history identifies the production deployment fix as ending at merge commit `6d8169f` and including commits `fa0cb3f` and `d5db224`.

Added during deployment fix:

- `nitro.config.ts`

Modified during deployment fix:

- `bunfig.toml`
- `package.json`
- `src/integrations/supabase/auth-middleware.ts`
- `src/integrations/supabase/client.server.ts`
- `src/integrations/supabase/client.ts`
- `src/routes/__root.tsx`
- `src/routes/login.tsx`
- `src/routes/register.tsx`
- `vite.config.ts`

Removed during the historical deployment-fix commit:

- `.lovable/plan.md`
- `.lovable/project.json`
- `bun.lock`
- `package-lock.json`
- `src/integrations/lovable/index.ts`
- `src/lib/lovable-error-reporting.ts`

Do not treat those historical removals as a general cleanup mandate. The current user explicitly said not to remove Lovable, Supabase, Nitro, TanStack, or deployment-related files unless provably unused with evidence.

## Current Risks / Watch Items

- There is no lockfile in this checkout. Dependency resolution may vary unless the deployment platform pins installs another way.
- `package.json` still contains `images:build`, but `scripts/optimize-images.js` is absent in this checkout. Do not remove or change it speculatively; investigate only if image build is requested or failing.
- No `vercel.json` is present. Vercel settings may be configured outside the repository.
- The local checkout has no Git remote configured. Future agents should verify GitHub `main` directly if possible.
- Google Website Translator and Google Fonts are external runtime dependencies for current behavior.

## Safe Workflow for Future Agents

1. Read `PROJECT_STATE.md` and this file before editing.
2. Check `git status --short --branch`.
3. Verify the live `main` branch if a remote is available.
4. Make only the smallest requested change.
5. Avoid speculative cleanup.
6. Preserve route file names and root `<Outlet />`.
7. Preserve Vite/Nitro/TanStack Start deployment configuration unless the task is specifically about deployment.
8. Preserve Supabase environment variable names and server/client separation.
9. Run `npm run build` or the platform-equivalent build before shipping production-affecting changes.
10. Document any unavoidable changes clearly.
