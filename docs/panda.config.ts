import { defineConfig } from "@pandacss/dev";
import { mori, stone } from "../packages/panda/src";
import { createPreset as createMoriPreset } from "../packages/panda/src/create-preset";

export default defineConfig({
    // Whether to use css reset
    preflight: true,

    presets: ["@pandacss/preset-base", createMoriPreset({ accentColor: mori, baseColor: stone, radius: "md" })],

    // Where to look for your css declarations
    include: ["./app/**/*.{ts,tsx,js,jsx}"],
    // Files to exclude
    exclude: [],

    jsxFramework: "react",
    // The output directory for your css system
    outdir: "styled-system",
});
