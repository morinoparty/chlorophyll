import type { SemanticTokens } from "@pandacss/dev";
import type { ColorPalette } from "../../create-preset";
import { colors } from "../color-palette";

// accentカラー（主にmori）のセマンティックトークンを定義
const semanticTokens: SemanticTokens["colors"] = {
    background: {
        default: { value: "{colors.white}" },
        emphasized: { value: "{colors.green.800}" },
        muted: { value: "{colors.green.100}" },
    },
    fg: {
        default: { value: "{colors.gray.900}" },
        emphasized: { value: "{colors.green.900}" },
        muted: { value: "{colors.green.700}" },
    },
    border: {
        default: { value: "{colors.gray.200}" },
        emphasized: { value: "{colors.green.200}" },
    },
    primary: {
        default: { value: "{colors.green.500}" },
        emphasized: { value: "{colors.green.600}" },
    },
    success: {
        default: { value: "{colors.green.500}" },
        emphasized: { value: "{colors.green.600}" },
    },
    info: {
        default: { value: "{colors.blue.500}" },
        emphasized: { value: "{colors.blue.600}" },
    },
};

// moriカラーパレットをエクスポート
const mori: ColorPalette = {
    name: "mori",
    tokens: colors.green,
    semanticTokens,
};

export default mori;
