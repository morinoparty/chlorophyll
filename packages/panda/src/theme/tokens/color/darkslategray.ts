import { defineTokens } from "@pandacss/dev";

export const darkslategray = defineTokens.colors({
    darkslategray: {
        50: { value: "rgb(240, 245, 242)" }, // 最も明るい色
        100: { value: "rgb(220, 235, 225)" }, // 明るい色
        200: { value: "rgb(190, 215, 200)" }, // やや明るい色
        300: { value: "rgb(160, 195, 175)" }, // 中間の明るさ
        400: { value: "rgb(130, 175, 150)" }, // やや暗い色
        500: { value: "rgb(100, 155, 125)" }, // 標準の色
        600: { value: "rgb(80, 135, 105)" }, // やや濃い色
        700: { value: "rgb(60, 115, 85)" }, // 濃い色
        800: { value: "rgb(40, 95, 65)" }, // より濃い色
        900: { value: "rgb(20, 75, 45)" }, // 最も濃い色
    },
});

