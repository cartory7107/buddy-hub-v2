import fs from "fs/promises";
import path from "path";
import sharp from "sharp";

async function ensureDir(dir) {
  try {
    await fs.mkdir(dir, { recursive: true });
  } catch (e) {
    // ignore
  }
}

async function main() {
  const root = process.cwd();
  const srcDir = path.join(root, "src", "assets");
  const outDir = path.join(root, "public", "optimized");
  await ensureDir(outDir);

  const sizes = [320, 480, 768, 1024, 1600];
  const formats = ["webp", "avif"];
  const manifest = {};

  const files = await fs.readdir(srcDir);
  for (const file of files) {
    const ext = path.extname(file).toLowerCase();
    if (![".jpg", ".jpeg", ".png"].includes(ext)) continue;
    const name = path.basename(file, ext);
    const input = path.join(srcDir, file);

    // copy original
    const outOriginal = path.join(outDir, `${name}${ext}`);
    await fs.copyFile(input, outOriginal);

    manifest[file] = manifest[file] || {};
    manifest[file].fallback = `/optimized/${name}${ext}`;

    for (const fmt of formats) {
      const entries = [];
      for (const w of sizes) {
        const outName = `${name}-${w}.${fmt}`;
        const outPath = path.join(outDir, outName);
        try {
          await sharp(input).resize({ width: w }).toFormat(fmt).toFile(outPath);
          entries.push(`/optimized/${outName} ${w}w`);
          console.log(`wrote ${outPath}`);
        } catch (err) {
          console.error(`failed to write ${outPath}`, err);
        }
      }
      manifest[file][fmt] = entries.join(", ");
    }
  }

  await fs.writeFile(path.join(outDir, "manifest.json"), JSON.stringify(manifest, null, 2), "utf8");
  console.log("Wrote manifest to public/optimized/manifest.json");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
