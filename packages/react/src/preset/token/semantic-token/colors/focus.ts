import { defineSemanticTokens } from "@pandacss/dev";

/**
 * Focus Ring セマンティックトークン
 * フォーカスリング用のカラー
 * CSS変数を直接参照し、テーマに応じて動的に変化
 */
export const focus = defineSemanticTokens.colors({
    focus: {
        ring: {
            // デフォルトフォーカスリング
            DEFAULT: {
                value: "colorPalette.8",
            },
            // エラー時のフォーカスリング
            error: {
                value: "{colors.red.8}",
            },
        },
    },
});
