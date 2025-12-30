import type { SemanticTokens } from "@pandacss/dev";
import type { ColorPalette } from "../../create-preset";

// accentカラー（mori）のセマンティックトークンを定義
const semanticTokens: SemanticTokens["colors"] = {
    palette: {
        default: { value: "{colors.mori.9}" },
        emphasized: { value: "{colors.mori.10}" },
        fg: { value: "{colors.white}" },
        text: { value: "{colors.mori.11}" },
        error: { value: "{colors.red.9}" },
        warning: { value: "{colors.yellow.9}" },
    },
    fg: {
        default: { value: "{colors.mori.fg.DEFAULT}" },
        muted: { value: "{colors.mori.fg.muted}" },
        subtle: { value: "{colors.mori.fg.subtle}" },
        disabled: { value: "{colors.gray.5}" },
        error: { value: "{colors.red.fg.DEFAULT}" },
    },
};

// moriカラーパレットをエクスポート
const mori: ColorPalette = {
    name: "mori",
    semanticTokens,
};

export default mori;
