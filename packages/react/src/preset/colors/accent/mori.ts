import type { SemanticTokens } from "@pandacss/dev";
import type { ColorPalette } from "../../create-preset";

// accentカラー（主にmori）のセマンティックトークンを定義
const semanticTokens: SemanticTokens["colors"] = {
    palette: {
        default: { value: "{colors.darkslategray.700}" },
        emphasized: { value: "{colors.darkslategray.700/80}" },
        fg: { value: "{colors.white}" },
        text: { value: "{colors.darkslategray.700}" },
        error: { value: "{colors.red.7}" },
        warning: { value: "{colors.yellow.6}" },
    },
    fg: {
        default: { value: "{colors.gray.10}" },
        muted: { value: "{colors.gray.7}" },
        subtle: { value: "{colors.gray.5}" },
        disabled: { value: "{colors.gray.5}" },
        error: { value: "{colors.red.6}" },
    },
};

// moriカラーパレットをエクスポート
const mori: ColorPalette = {
    name: "mori",
    semanticTokens,
};

export default mori;
