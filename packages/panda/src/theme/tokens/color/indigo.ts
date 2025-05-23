import { defineTokens } from "@pandacss/dev";

// インディゴのカラーパレットを定義
export const indigo = defineTokens.colors({
    indigo: {
        50: { value: "rgb(238, 242, 255)" }, // 最も明るいインディゴ
        100: { value: "rgb(224, 231, 255)" }, // 明るいインディゴ
        200: { value: "rgb(199, 210, 254)" }, // やや明るいインディゴ
        300: { value: "rgb(165, 180, 252)" }, // 中間の明るさのインディゴ
        400: { value: "rgb(129, 140, 248)" }, // やや暗いインディゴ
        500: { value: "rgb(99, 102, 241)" }, // 標準のインディゴ
        600: { value: "rgb(79, 70, 229)" }, // やや濃いインディゴ
        700: { value: "rgb(67, 56, 202)" }, // 濃いインディゴ
        800: { value: "rgb(55, 48, 163)" }, // より濃いインディゴ
        900: { value: "rgb(49, 46, 129)" }, // 最も濃いインディゴ
    },
});
