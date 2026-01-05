import { definePreset, type SemanticTokens } from "@pandacss/dev";
import { breakpoints } from "./breakpoints";
import { recipes } from "./token/recipes";
import { globalFontFace, textStyles, tokens } from "./token/reference-tokens";
import { semanticTokens as defaultSemanticToken } from "./token/semantic-token";
import { radii } from "./token/semantic-token/radii";

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
            ":root, [data-color-palette='mori']": {
                colorPalette: "mori",
            },
            // umiテーマ
            "[data-color-palette='umi']": {
                colorPalette: "umi",
            },
        },
        conditions: {
            light: ":root &, .light &",
        },
        theme: {
            extend: {
                tokens,
                semanticTokens,
                breakpoints,
                textStyles,
                recipes: {
                    ...recipes,
                },
            },
        },
    });
};
