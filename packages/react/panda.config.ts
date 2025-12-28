import { defineConfig } from "@pandacss/dev";
import mori from "./src/preset/colors/accent/mori";
import stone from "./src/preset/colors/base/stone";
import { createPreset } from "./src/preset/create-preset";

export default defineConfig({
    preflight: true,
    prefix: "ma",
    presets: ["@pandacss/preset-base", createPreset({ accentColor: mori, baseColor: stone, radius: "md" })],
    include: ["./src/**/*.{ts,tsx}"],
    exclude: [],
    jsxFramework: "react",
    outdir: "styled-system",
});
