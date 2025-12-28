import { definePreset, type SemanticTokens } from "@pandacss/dev";
import { recipes } from "./theme/recipes";
import { globalFontFace, textStyles, tokens } from "./theme/reference-tokens";

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
                value: `{radii.${radius}}`,
            },
        },
    };

    return definePreset({
        name: "@moripa/panda-preset",
        presets: ["@pandacss/preset-base"],
        globalFontface: globalFontFace,
        theme: {
            extend: {
                tokens,
                semanticTokens,
                textStyles,
                recipes: {
                    ...recipes,
                },
            },
        },
    });
};
