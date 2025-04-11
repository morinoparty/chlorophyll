import { type SemanticTokens, type Tokens, definePreset } from "@pandacss/dev";
import { recipes } from "./theme/recipes";
import { tokens } from "./theme/tokens";

export interface ColorPalette {
    name: string;
    semanticTokens: SemanticTokens["colors"];
}

export interface PresetOptions {
    accentColor: ColorPalette;
    baseColor: ColorPalette;
    radius: "xs" | "sm" | "md" | "lg" | "xl" | "full";
}

export const createPreset = (option: PresetOptions) => {
    const { accentColor, baseColor, radius } = option;

    // セマンティックトークンを定義
    const semanticTokens: SemanticTokens = {
        colors: {
            ...(baseColor.semanticTokens || {}),
            ...(accentColor.semanticTokens || {}),
        },
        radii: {
            default: {
                value: `var(--radii-${radius})`,
            },
        },
    };

    return definePreset({
        name: "@moripa/panda-preset",
        presets: ["@pandacss/preset-base"],
        theme: {
            extend: {
                tokens,
                semanticTokens,
                recipes: {
                    ...recipes,
                },
            },
        },
    });
};
