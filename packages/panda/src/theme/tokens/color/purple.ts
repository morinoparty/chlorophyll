import { defineTokens } from "@pandacss/dev";

// 紫のカラーパレットを定義
export const purple = defineTokens.colors({
    purple: {
        50: { value: "rgb(250, 245, 255)" },  // 最も明るい紫
        100: { value: "rgb(243, 232, 255)" }, // 明るい紫
        200: { value: "rgb(233, 213, 255)" }, // やや明るい紫
        300: { value: "rgb(216, 180, 254)" }, // 中間の明るさの紫
        400: { value: "rgb(192, 132, 252)" }, // やや暗い紫
        500: { value: "rgb(168, 85, 247)" },  // 標準の紫
        600: { value: "rgb(147, 51, 234)" },  // やや濃い紫
        700: { value: "rgb(126, 34, 206)" },  // 濃い紫
        800: { value: "rgb(107, 33, 168)" },  // より濃い紫
        900: { value: "rgb(88, 28, 135)" },   // 最も濃い紫
    },
});
