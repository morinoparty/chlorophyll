import { createPreset, stone } from "@chlorophyll/react/preset";
import { defineConfig } from "@pandacss/dev";

export default defineConfig({
    preflight: true,
    prefix: "mpc",
    presets: ["@pandacss/preset-base", createPreset({ brandColor: "mori", grayColor: stone, radius: "md" })],
    include: ["./stories/**/*.{ts,tsx}", "./.storybook/**/*.{ts,tsx}", "../packages/ui/src/**/*.{ts,tsx}"],
    exclude: [],
    jsxFramework: "react",
    outdir: "styled-system",
});
