import type { SemanticTokens } from "@pandacss/dev";
import type { ColorPalette } from "../../create-preset";
import { colors } from "../../theme/tokens/color";

// accentカラー（主にmori）のセマンティックトークンを定義
const semanticTokens: SemanticTokens["colors"] = {
    palette: {
        default: { value: "{colors.green.500}" },
        emphasized: { value: "{colors.green.600}" },
        foreground: { value: "{colors.green.700}" },
        text: { value: "{colors.green.700}" },
    },
    bg: {
        canvas: { value: "{colors.white}" },
        default: { value: "{colors.white}" },
        subtle: { value: "{colors.gray.200}" },
        muted: { value: "{colors.gray.300}" },
        emphasized: { value: "{colors.green.700}" },
        disabled: { value: "{colors.gray.400}" },
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
    tokens: colors.green,
    semanticTokens,
};

export default mori;
