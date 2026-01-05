import { defineSemanticTokens } from "@pandacss/dev";

/**
 * Overlay セマンティックトークン
 * Modal backdrop用の半透明オーバーレイ
 */
export const overlay = defineSemanticTokens.colors({
    overlay: {
        // 標準オーバーレイ（モーダル背景など）
        DEFAULT: {
            value: {
                _light: "rgba(0, 0, 0, 0.4)",
                _dark: "rgba(0, 0, 0, 0.6)",
            },
        },
        // 微妙なオーバーレイ（軽い背景暗転）
        subtle: {
            value: {
                _light: "rgba(0, 0, 0, 0.2)",
                _dark: "rgba(0, 0, 0, 0.4)",
            },
        },
    },
});
