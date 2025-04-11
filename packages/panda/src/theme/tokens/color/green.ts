import { defineTokens } from "@pandacss/dev";

export const green = defineTokens.colors({
    green: {
        50: { value: "rgb(240, 253, 244)" },  // 最も明るい緑
        100: { value: "rgb(220, 252, 231)" }, // 明るい緑
        200: { value: "rgb(187, 247, 208)" }, // やや明るい緑
        300: { value: "rgb(134, 239, 172)" }, // 中間の明るさの緑
        400: { value: "rgb(74, 222, 128)" },  // やや暗い緑
        500: { value: "rgb(34, 197, 94)" },   // 標準の緑
        600: { value: "rgb(22, 163, 74)" },   // やや濃い緑
        700: { value: "rgb(21, 128, 61)" },   // 濃い緑
        800: { value: "rgb(22, 101, 52)" },   // より濃い緑
        900: { value: "rgb(20, 83, 45)" },    // 最も濃い緑
    },
});
