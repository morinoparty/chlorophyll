import { defineTokens } from "@pandacss/dev";

export const blue = defineTokens.colors({
    blue: {
        50: { value: "rgb(239, 246, 255)" },  // 最も明るい青
        100: { value: "rgb(219, 234, 254)" }, // 明るい青
        200: { value: "rgb(191, 219, 254)" }, // やや明るい青
        300: { value: "rgb(147, 197, 253)" }, // 中間の明るさの青
        400: { value: "rgb(96, 165, 250)" },  // やや暗い青
        500: { value: "rgb(59, 130, 246)" },  // 標準の青
        600: { value: "rgb(37, 99, 235)" },   // やや濃い青
        700: { value: "rgb(29, 78, 216)" },   // 濃い青
        800: { value: "rgb(30, 64, 175)" },   // より濃い青
        900: { value: "rgb(30, 58, 138)" },   // 最も濃い青
    },
});
