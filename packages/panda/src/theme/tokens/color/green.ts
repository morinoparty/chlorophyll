import { defineTokens } from "@pandacss/dev";

export const green = defineTokens.colors({
    green: {
        50: { value: "#EFFFEF" }, // 明るい緑
        100: { value: "#DEFFDD" }, // 薄い緑
        200: { value: "#BAFCBA" }, // 明るい緑
        300: { value: "#94F894" }, // 中間の緑
        400: { value: "#6EF16E" }, // 鮮やかな緑
        500: { value: "#46E346" }, // 標準の緑
        600: { value: "#29B829" }, // 濃い緑
        700: { value: "#539676" }, // 基準の緑
        800: { value: "#41765d" }, // 基準より少し濃い緑
        900: { value: "#133913" }, // 最も濃い緑
    },
});
