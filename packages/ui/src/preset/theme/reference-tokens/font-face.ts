import { defineGlobalFontface } from "@pandacss/dev";

export const globalFontFace = defineGlobalFontface({
    "Satoshi-Variable": [
        {
            src: 'url("/assets/fonts/Satoshi-Variable.woff2") format("woff2"), url("/assets/fonts/Satoshi-Variable.woff") format("woff"), url("/assets/fonts/Satoshi-Variable.ttf") format("truetype")',
            fontWeight: "400",
            fontDisplay: "swap",
            fontStyle: "normal",
        },
        {
            src: 'url("/assets/fonts/Satoshi-Variable.woff2") format("woff2"), url("/assets/fonts/Satoshi-Variable.woff") format("woff"), url("/assets/fonts/Satoshi-Variable.ttf") format("truetype")',
            fontWeight: "600",
            fontDisplay: "swap",
            fontStyle: "normal",
        },
        {
            src: 'url("/assets/fonts/Satoshi-Variable.woff2") format("woff2"), url("/assets/fonts/Satoshi-Variable.woff") format("woff"), url("/assets/fonts/Satoshi-Variable.ttf") format("truetype")',
            fontWeight: "800",
            fontDisplay: "swap",
            fontStyle: "normal",
        },
    ],
});
