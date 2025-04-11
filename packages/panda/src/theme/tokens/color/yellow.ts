import { defineTokens } from "@pandacss/dev";

export const yellow = defineTokens.colors({
    yellow: {
        50: { value: "rgb(254, 252, 232)" },  // 最も明るい黄
        100: { value: "rgb(254, 249, 195)" }, // 明るい黄
        200: { value: "rgb(254, 240, 138)" }, // やや明るい黄
        300: { value: "rgb(253, 224, 71)" },  // 中間の明るさの黄
        400: { value: "rgb(250, 204, 21)" },  // やや暗い黄
        500: { value: "rgb(234, 179, 8)" },   // 標準の黄
        600: { value: "rgb(202, 138, 4)" },   // やや濃い黄
        700: { value: "rgb(161, 98, 7)" },    // 濃い黄
        800: { value: "rgb(133, 77, 14)" },   // より濃い黄
        900: { value: "rgb(113, 63, 18)" },   // 最も濃い黄
    },
});
