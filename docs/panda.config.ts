import { createPreset, mori, stone } from "@chlorophyll/react/preset";
import { defineConfig } from "@pandacss/dev";

export default defineConfig({
    preflight: true,
    prefix: "ma",
    presets: ["@pandacss/preset-base", createPreset({ accentColor: mori, baseColor: stone, radius: "md" })],
    include: ["./app/**/*.{ts,tsx,js,jsx}"],
    exclude: [],
    jsxFramework: "react",
    outdir: "styled-system",
});
