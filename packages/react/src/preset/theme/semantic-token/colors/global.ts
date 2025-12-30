import { defineSemanticTokens } from "@pandacss/dev";

/**
 * グローバルセマンティックカラートークン
 * Brand colorに依存しない、アプリケーション全体で使用する共通トークン
 */
export const global = defineSemanticTokens.colors({
    // Background tokens
    bg: {
        DEFAULT: {
            value: "{colors.mori.bg.DEFAULT}",
        },
        subtle: {
            value: "{colors.mori.bg.subtle}",
        },
        muted: {
            value: "{colors.mori.bg.muted}",
        },
        emphasized: {
            value: "{colors.mori.bg.emphasized}",
        },
        inverted: {
            value: "{colors.mori.bg.inverted}",
        },
        panel: {
            value: "{colors.mori.bg.panel}",
        },
    },
    // Foreground/text tokens
    fg: {
        DEFAULT: {
            value: "{colors.mori.fg.DEFAULT}",
        },
        muted: {
            value: "{colors.mori.fg.muted}",
        },
        subtle: {
            value: "{colors.mori.fg.subtle}",
        },
        inverted: {
            value: "{colors.mori.fg.inverted}",
        },
    },
});
