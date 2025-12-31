import { definePreset, type SemanticTokens } from "@pandacss/dev";
import { recipes } from "./theme/recipes";
import { globalFontFace, textStyles, tokens } from "./theme/reference-tokens";
import { semanticTokens as defaultSemanticToken } from "./theme/semantic-token";
import { radii } from "./theme/semantic-token/radii";

export interface ColorPalette {
    name: string;
    semanticTokens: SemanticTokens["colors"];
}

export interface PresetOptions {
    brandColor: "mori" | "umi";
    grayColor: ColorPalette;
    radius: "xs" | "sm" | "md" | "lg" | "xl" | "full";
}

export const createPreset = (option: PresetOptions) => {
    const { radius } = option;

    // // セマンティックトークンを定義
    const semanticTokens: SemanticTokens = {
        ...defaultSemanticToken,
        radii: {
            ...radii,
            default: {
                value: `{radii.${radius}}`,
            },
        },
    };

    return definePreset({
        name: "@moripa/panda-preset",
        presets: ["@pandacss/preset-base"],
        globalFontface: globalFontFace,
        globalCss: {
            // デフォルト + moriテーマ
            ":root, [data-color-theme='mori']": {
                colorPalette: "mori",
            },
            // umiテーマ
            "[data-color-theme='umi']": {
                colorPalette: "umi",
            },
        },
        conditions: {
            light: "[data-mode=light] &",
            dark: "[data-mode=dark] &",
        },
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
