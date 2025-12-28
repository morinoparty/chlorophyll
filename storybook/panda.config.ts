import { createPreset, mori, stone } from "@chlorophyll/react/preset";
import { defineConfig } from "@pandacss/dev";

export default defineConfig({
    preflight: true,
    prefix: "ma",
    presets: ["@pandacss/preset-base", createPreset({ accentColor: mori, baseColor: stone, radius: "md" })],
    include: ["./stories/**/*.{ts,tsx}", "./.storybook/**/*.{ts,tsx}", "../packages/ui/src/**/*.{ts,tsx}"],
    exclude: [],
    jsxFramework: "react",
    outdir: "styled-system",
});
