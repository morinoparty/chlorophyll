import type { SemanticTokens } from "@pandacss/dev";
import type { ColorPalette } from "../../create-preset";
import { colors } from "../../theme/tokens/color";

// baseカラー（主にstone）のセマンティックトークンを定義
const semanticTokens: SemanticTokens["colors"] = {
    border: {
        default: { value: "{colors.gray.200}" },
        emphasized: { value: "{colors.gray.300}" },
    },
    neutral: {
        default: { value: "{colors.gray.500}" },
        emphasized: { value: "{colors.gray.600}" },
    },
    card: {
        default: { value: "{colors.white}" },
        emphasized: { value: "{colors.gray.50}" },
    },
    shadow: {
        default: { value: "rgba(0, 0, 0, 0.1)" },
        emphasized: { value: "rgba(0, 0, 0, 0.2)" },
    },
};

// stoneカラーパレットをエクスポート
const stone: ColorPalette = {
    name: "stone",
    tokens: colors.gray,
    semanticTokens,
};

export default stone;
