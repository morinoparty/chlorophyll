import { defineTokens } from "@pandacss/dev";

// ピンクのカラーパレットを定義
export const pink = defineTokens.colors({
    pink: {
        50: { value: "rgb(253, 242, 248)" },  // 最も明るいピンク
        100: { value: "rgb(252, 231, 243)" }, // 明るいピンク
        200: { value: "rgb(251, 207, 232)" }, // やや明るいピンク
        300: { value: "rgb(249, 168, 212)" }, // 中間の明るさのピンク
        400: { value: "rgb(244, 114, 182)" }, // やや暗いピンク
        500: { value: "rgb(236, 72, 153)" },  // 標準のピンク
        600: { value: "rgb(219, 39, 119)" },  // やや濃いピンク
        700: { value: "rgb(190, 24, 93)" },   // 濃いピンク
        800: { value: "rgb(157, 23, 77)" },   // より濃いピンク
        900: { value: "rgb(131, 24, 67)" },   // 最も濃いピンク
    },
});
