import { type SemanticTokens, type Tokens, definePreset } from "@pandacss/dev";
import { colors } from "./colors/color-palette";

export interface ColorPalette {
    name: string;
    tokens: Tokens["colors"];
    semanticTokens: SemanticTokens["colors"];
}

export interface PresetOptions {
    accentColor: ColorPalette;
    baseColor: ColorPalette;
    radius: string; // 'sm' | 'md' | 'lg' | 'full' など
}

export const createPreset = (option: PresetOptions) => {
    const { accentColor, baseColor, radius } = option;

    // セマンティックトークンを定義
    const semanticTokens: SemanticTokens = {
        colors: {
            ...colors,
            ...(accentColor.semanticTokens || {}),
            ...(baseColor.semanticTokens || {}),
            // ボタン用のセマンティックトークン
            button: {
                primary: {
                    bg: { value: `{colors.${accentColor.name}.500}` },
                    hoverBg: { value: `{colors.${accentColor.name}.600}` },
                    activeBg: { value: `{colors.${accentColor.name}.700}` },
                    text: { value: "{colors.white}" },
                },
                secondary: {
                    bg: { value: `{colors.${baseColor.name}.200}` },
                    hoverBg: { value: `{colors.${baseColor.name}.300}` },
                    activeBg: { value: `{colors.${baseColor.name}.400}` },
                    text: { value: `{colors.${baseColor.name}.800}` },
                },
                danger: {
                    bg: { value: "{colors.red.500}" },
                    hoverBg: { value: "{colors.red.600}" },
                    activeBg: { value: "{colors.red.700}" },
                    text: { value: "{colors.white}" },
                },
                warning: {
                    bg: { value: "{colors.yellow.500}" },
                    hoverBg: { value: "{colors.yellow.600}" },
                    activeBg: { value: "{colors.yellow.700}" },
                    text: { value: "{colors.white}" },
                },
                outline: {
                    borderColor: { value: `{colors.${baseColor.name}.300}` },
                    hoverBg: { value: `{colors.${baseColor.name}.100}` },
                    activeBg: { value: `{colors.${baseColor.name}.200}` },
                },
                plain: {
                    hoverBg: { value: `{colors.${baseColor.name}.100}` },
                    activeBg: { value: `{colors.${baseColor.name}.200}` },
                },
            },
        },
        radii: {
            button: {
                default: { value: `{radii.${radius}}` },
                circle: { value: "{radii.full}" },
            },
        },
    };

    return definePreset({
        name: "@moripa/panda-preset",
        presets: ["@pandacss/preset-base"],
        theme: {
            extend: {
                tokens: {
                    colors: {
                        [accentColor.name]: accentColor.tokens || {},
                        [baseColor.name]: baseColor.tokens || {},
                    },
                },
                semanticTokens,
            },
        },
    });
};
