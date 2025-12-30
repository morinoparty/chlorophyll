import { defineSemanticTokens } from "@pandacss/dev";

/**
 * Surface/Elevation セマンティックトークン
 * Atlassian elevation system inspired
 */
export const surface = defineSemanticTokens.colors({
    surface: {
        // デフォルトサーフェス（ページの基本背景）
        DEFAULT: {
            value: {
                _light: "{colors.white}",
                _dark: "{colors.gray.1}",
            },
        },
        // くぼんだサーフェス（背景の窪み、カンバンボードのカラムなど）
        sunken: {
            value: {
                _light: "{colors.gray.2}",
                _dark: "{colors.gray.1}",
            },
        },
        // 浮き上がったサーフェス（カード、テーブルなど）
        raised: {
            value: {
                _light: "{colors.white}",
                _dark: "{colors.gray.2}",
            },
        },
        // オーバーレイサーフェス（モーダル、ドロップダウンなど）
        overlay: {
            value: {
                _light: "{colors.white}",
                _dark: "{colors.gray.3}",
            },
        },
    },
});
