import type { SemanticTokens } from "@pandacss/dev";
import type { ColorPalette } from "../../create-preset";

// baseカラー（主にstone）のセマンティックトークンを定義
const semanticTokens: SemanticTokens["colors"] = {
    bg: {
        canvas: { value: "{colors.white}" },
        default: { value: "{colors.white}" },
        subtle: { value: "{colors.gray.100}" },
        muted: { value: "{colors.gray.200}" },
        emphasized: { value: "{colors.gray.300}" },
        disabled: { value: "{colors.gray.500}" },
    },
    border: {
        default: { value: "{colors.gray.500}" },
        muted: { value: "{colors.gray.300}" },
        subtle: { value: "{colors.gray.200}" },
        disabled: { value: "{colors.gray.600}" },
        outline: { value: "{colors.gray.800}" },
        error: { value: "{colors.red.800}" },
    },
};

// stoneカラーパレットをエクスポート
const stone: ColorPalette = {
    name: "stone",
    semanticTokens,
};

export default stone;
