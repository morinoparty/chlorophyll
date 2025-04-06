import { defineConfig } from "@pandacss/dev";
import mori from "packages/panda/src/colors/accent/mori";
import stone from "packages/panda/src/colors/base/stone";
import { createPreset } from "packages/panda/src/create-preset";

export default defineConfig({
    // Whether to use css reset
    preflight: true,

    presets: [createPreset({ accentColor: mori, baseColor: stone, radius: "sm" })],

    // Where to look for your css declarations
    include: ["./components/**/*.{js,jsx,ts,tsx,mdx}", "./packages/panda/src/**/*.{js,jsx,ts,tsx}"],

    // Files to exclude
    exclude: [],

    globalCss: {
        extend: {
            tokens: {
                fontFamily: {
                    body: { value: "Noto Sans, sans-serif" },
                },
            },
        },
    },

    // The output directory for your css system
    outdir: "styled-system",
});
