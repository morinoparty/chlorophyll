import { defineConfig } from "@pandacss/dev";
import { createPreset as createParkPreset } from "@park-ui/panda-preset";
import grass from "@park-ui/panda-preset/colors/grass";
import neutral from "@park-ui/panda-preset/colors/neutral";
import mori from "packages/panda/src/colors/accent/mori";
import stone from "packages/panda/src/colors/base/stone";
import { createPreset as createMoriPreset } from "packages/panda/src/create-preset";

export default defineConfig({
    // Whether to use css reset
    preflight: true,

    presets: [
        "@pandacss/preset-base",
        createParkPreset({ accentColor: grass, grayColor: neutral, radius: "md" }),
        createMoriPreset({ accentColor: mori, baseColor: stone, radius: "md" }),
    ],

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

    jsxFramework: "react",
    // The output directory for your css system
    outdir: "styled-system",
});
