import type { SemanticTokens } from "@pandacss/dev";
import type { ColorPalette } from "../../create-preset";

// accentカラー（主にmori）のセマンティックトークンを定義
const semanticTokens: SemanticTokens["colors"] = {
    palette: {
        default: { value: "{colors.darkslategray.700}" },
        emphasized: { value: "{colors.darkslategray.700/80}" },
        fg: { value: "{colors.white}" },
        text: { value: "{colors.darkslategray.700}" },
        error: { value: "{colors.red.600}" },
        warning: { value: "{colors.yellow.500}" },
    },
    fg: {
        default: { value: "{colors.gray.900}" },
        muted: { value: "{colors.gray.600}" },
        subtle: { value: "{colors.gray.400}" },
        disabled: { value: "{colors.gray.400}" },
        error: { value: "{colors.red.500}" },
    },
};

// moriカラーパレットをエクスポート
const mori: ColorPalette = {
    name: "mori",
    semanticTokens,
};

export default mori;
