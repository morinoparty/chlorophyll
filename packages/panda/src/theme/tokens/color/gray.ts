import { defineTokens } from "@pandacss/dev";

export const gray = defineTokens.colors({
    gray: {
        50: { value: "rgb(249, 250, 251)" }, // 最も明るいグレー
        100: { value: "rgb(243, 244, 246)" }, // 明るいグレー
        200: { value: "rgb(229, 231, 235)" }, // やや明るいグレー
        300: { value: "rgb(209, 213, 219)" }, // 中間の明るさのグレー
        400: { value: "rgb(156, 163, 175)" }, // やや暗いグレー
        500: { value: "rgb(107, 114, 128)" }, // 標準のグレー
        600: { value: "rgb(75, 85, 99)" }, // やや濃いグレー
        700: { value: "rgb(55, 65, 81)" }, // 濃いグレー
        800: { value: "rgb(31, 41, 55)" }, // より濃いグレー
        900: { value: "rgb(17, 24, 39)" }, // 最も濃いグレー
    },
});
