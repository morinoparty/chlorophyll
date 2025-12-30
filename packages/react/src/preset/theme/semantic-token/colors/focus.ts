import { defineSemanticTokens } from "@pandacss/dev";

/**
 * Focus Ring セマンティックトークン
 * フォーカスリング用のカラー
 */
export const focus = defineSemanticTokens.colors({
    focus: {
        ring: {
            // デフォルトフォーカスリング
            DEFAULT: {
                value: "{colors.mori.8}",
            },
            // エラー時のフォーカスリング
            error: {
                value: "{colors.red.8}",
            },
        },
    },
});
