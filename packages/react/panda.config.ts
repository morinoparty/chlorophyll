import { defineConfig } from "@pandacss/dev";
import { createPreset } from "./src/preset";
import stone from "./src/preset/colors/base/stone";

export default defineConfig({
    preflight: true,
    prefix: "ma",
    presets: ["@pandacss/preset-base", createPreset({ brandColor: "mori", baseColor: stone, radius: "md" })],
    include: ["./src/**/*.{ts,tsx}"],
    exclude: [],
    jsxFramework: "react",
    outdir: "styled-system",
});
