import { defineTokens } from "@pandacss/dev";

export const red = defineTokens.colors({
    red: {
        50: { value: "rgb(254, 242, 242)" }, // 最も明るい赤
        100: { value: "rgb(254, 226, 226)" }, // 明るい赤
        200: { value: "rgb(254, 202, 202)" }, // やや明るい赤
        300: { value: "rgb(252, 165, 165)" }, // 中間の明るさの赤
        400: { value: "rgb(248, 113, 113)" }, // やや暗い赤
        500: { value: "rgb(239, 68, 68)" }, // 標準の赤
        600: { value: "rgb(220, 38, 38)" }, // やや濃い赤
        700: { value: "rgb(185, 28, 28)" }, // 濃い赤
        800: { value: "rgb(153, 27, 27)" }, // より濃い赤
        900: { value: "rgb(127, 29, 29)" }, // 最も濃い赤
    },
});
