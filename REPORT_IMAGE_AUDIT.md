# Image Loading & Asset Delivery Audit — Cartory

This document summarizes the image/asset audit, changes made, and remaining recommendations.

## Summary of changes applied
- Introduced `OptimizedImage` component with skeleton + fade-in and `priority` support.
- Replaced major visual images (Hero film-strip, product grids, Bento, FlashSale, logo, dashboard/product center) to use `OptimizedImage`.
- Added `decoding="async"` and `loading` controls to dynamic images.
- Added mobile CSS reductions to pause heavy animations and reduce blur/shadow on small screens.
- Preloaded critical images (logo and primary hero watch image) in the root head.
- Added `scripts/optimize-images.js` to generate responsive AVIF/WebP variants and a manifest in `public/optimized/manifest.json`. Use `npm run images:build` to generate.

## Remaining tasks (recommended / automated)
1. Run `npm run images:build` to generate optimized images into `public/optimized/` and produce `manifest.json` consumed by `OptimizedImage`.
2. Configure production caching headers (CDN or server) for `/optimized/*` with long TTL and immutable.
3. Optionally integrate image generation into CI/build pipeline.
4. Run Lighthouse (mobile) against a running dev server or deployed URL to measure LCP/CLS and iterate.

## How to generate optimized images
1. Install dev deps: `npm install` (this will fetch `sharp`).
2. Run:

```bash
npm run images:build
```

This writes files to `public/optimized/` and a `manifest.json` mapping originals to `avif`/`webp` `srcset` strings.

## Notes on strategy
- Serving AVIF then WebP then fallback provides best compression across browsers.
- Preloading the logo and the primary hero image reduces LCP.
- The `OptimizedImage` component will read `public/optimized/manifest.json` at runtime and use `<picture>` sources when available; if the manifest is missing it gracefully falls back to the original `src`.

## Files to compress first (priority)
- `src/assets/cartory-logo.png`
- `src/assets/cat-watch.jpg`
- `src/assets/luxe-1.jpg`, `luxe-3.jpg`, `luxe-4.jpg`, `luxe-5.jpg`, `luxe-6.jpg`
- All `cat-*.jpg` product/category images

## Cache header recommendations
- For `public/optimized/*`: `Cache-Control: public, max-age=31536000, immutable`
- For HTML: `Cache-Control: no-cache, must-revalidate` (or short TTL)

## Next steps I can take
- Run the image build and commit generated assets (avoid committing large binaries to repo; prefer storing built assets in CDN or separate storage).
- Run Lighthouse against a running dev server or deployed preview and produce a metrics-backed report (requires dev server to run or URL).
- Wire CI to run `npm run images:build` and upload artifacts to CDN.

---

If you want me to fully run the image build now and/or run Lighthouse, tell me whether I should attempt to start the dev server (`npm run dev`) and run Lighthouse locally, or if you prefer I run the `images:build` script first to generate the optimized assets.
