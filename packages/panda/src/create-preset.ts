import { type SemanticTokens, type Tokens, definePreset } from "@pandacss/dev";
import { tokens } from "./theme/tokens";
import { recipes } from "./theme/recipes";

export interface ColorPalette {
    name: string;
    tokens: Tokens["colors"];
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
            ...(accentColor.semanticTokens || {}),
            ...(baseColor.semanticTokens || {}),
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
                tokens: {
                    ...tokens,
                    colors: {
                        ...tokens.colors,
                    },
                },
                semanticTokens,
                recipes: {
                    ...recipes,
                },
            },
        },
    });
};
