import { defineTokens } from "@pandacss/dev";

// オレンジのカラーパレットを定義
export const orange = defineTokens.colors({
    orange: {
        50: { value: "rgb(255, 247, 237)" }, // 最も明るいオレンジ
        100: { value: "rgb(255, 237, 213)" }, // 明るいオレンジ
        200: { value: "rgb(254, 215, 170)" }, // やや明るいオレンジ
        300: { value: "rgb(253, 186, 116)" }, // 中間の明るさのオレンジ
        400: { value: "rgb(251, 146, 60)" }, // やや暗いオレンジ
        500: { value: "rgb(249, 115, 22)" }, // 標準のオレンジ
        600: { value: "rgb(234, 88, 12)" }, // やや濃いオレンジ
        700: { value: "rgb(194, 65, 12)" }, // 濃いオレンジ
        800: { value: "rgb(154, 52, 18)" }, // より濃いオレンジ
        900: { value: "rgb(124, 45, 18)" }, // 最も濃いオレンジ
    },
});
