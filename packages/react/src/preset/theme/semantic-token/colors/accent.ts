import { defineSemanticTokens } from "@pandacss/dev";

/**
 * Accent セマンティックトークン
 * Radix style - brand colorへのエイリアス
 * コンポーネントでcolorPaletteとして使用可能
 */
export const accent = defineSemanticTokens.colors({
    accent: {
        // Scale values (1-12)
        1: { value: "{colors.mori.1}" },
        2: { value: "{colors.mori.2}" },
        3: { value: "{colors.mori.3}" },
        4: { value: "{colors.mori.4}" },
        5: { value: "{colors.mori.5}" },
        6: { value: "{colors.mori.6}" },
        7: { value: "{colors.mori.7}" },
        8: { value: "{colors.mori.8}" },
        9: { value: "{colors.mori.9}" },
        10: { value: "{colors.mori.10}" },
        11: { value: "{colors.mori.11}" },
        12: { value: "{colors.mori.12}" },
        // Alpha variants (a1-a12)
        a1: { value: "{colors.mori.a1}" },
        a2: { value: "{colors.mori.a2}" },
        a3: { value: "{colors.mori.a3}" },
        a4: { value: "{colors.mori.a4}" },
        a5: { value: "{colors.mori.a5}" },
        a6: { value: "{colors.mori.a6}" },
        a7: { value: "{colors.mori.a7}" },
        a8: { value: "{colors.mori.a8}" },
        a9: { value: "{colors.mori.a9}" },
        a10: { value: "{colors.mori.a10}" },
        a11: { value: "{colors.mori.a11}" },
        a12: { value: "{colors.mori.a12}" },
        // Semantic aliases
        default: {
            value: "{colors.mori.9}",
        },
        emphasized: {
            value: "{colors.mori.10}",
        },
        fg: {
            value: "{colors.mori.fg.DEFAULT}",
        },
        // Contrast - text on solid accent background
        contrast: {
            value: "{colors.white}",
        },
        // Surface - subtle accent background
        surface: {
            value: "{colors.mori.3}",
        },
        // Indicator - radio/checkbox indicator color
        indicator: {
            value: "{colors.mori.9}",
        },
        // Track - slider/switch track color
        track: {
            value: "{colors.mori.5}",
        },
    },
});
