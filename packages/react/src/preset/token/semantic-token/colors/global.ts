import { defineSemanticTokens } from "@pandacss/dev";

/**
 * グローバルセマンティックカラートークン
 * Brand colorに依存しない、アプリケーション全体で使用する共通トークン
 * grayベースで中立的な背景を提供
 */
export const global = defineSemanticTokens.colors({
    // Background tokens
    bg: {
        DEFAULT: {
            value: "{colors.gray.1}",
        },
        subtle: {
            value: "{colors.gray.2}",
        },
        muted: {
            value: "{colors.gray.3}",
        },
        emphasized: {
            value: "{colors.gray.4}",
        },
        inverted: {
            value: {
                _light: "{colors.gray.dark.1}",
                _dark: "{colors.gray.light.1}",
            },
        },
        panel: {
            value: {
                _light: "{colors.white}",
                _dark: "{colors.gray.2}",
            },
        },
    },
});
