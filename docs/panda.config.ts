import { createPreset, stone } from "@chlorophyll/react/preset";
import { defineConfig } from "@pandacss/dev";

export default defineConfig({
    preflight: true,
    prefix: "ma",
    presets: ["@pandacss/preset-base", createPreset({ brandColor: "mori", grayColor: stone, radius: "md" })],
    include: ["./app/**/*.{ts,tsx,js,jsx}"],
    exclude: [],
    jsxFramework: "react",
    outdir: "styled-system",
});
