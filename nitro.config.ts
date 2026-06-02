import { defineNitroConfig } from "nitro/config";

const preset = process.env.NITRO_PRESET || "vercel";

export default defineNitroConfig({
  preset,
});
