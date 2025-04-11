import type { SemanticTokens } from "@pandacss/dev";
import type { ColorPalette } from "../../create-preset";

// baseカラー（主にstone）のセマンティックトークンを定義
const semanticTokens: SemanticTokens["colors"] = {
    bg: {
        canvas: { value: "{colors.white}" },
        default: { value: "{colors.white}" },
        subtle: { value: "{colors.gray.50}" },
        muted: { value: "{colors.gray.100}" },
        emphasized: { value: "{colors.gray.200}" },
        disabled: { value: "{colors.gray.300}" },
    },
    border: {
        default: { value: "{colors.gray.300}" },
        muted: { value: "{colors.gray.200}" },
        subtle: { value: "{colors.gray.100}" },
        disabled: { value: "{colors.gray.400}" },
        outline: { value: "{colors.gray.500}" },
        error: { value: "{colors.red.500}" },
    },
};

// stoneカラーパレットをエクスポート
const stone: ColorPalette = {
    name: "stone",
    semanticTokens,
};

export default stone;
