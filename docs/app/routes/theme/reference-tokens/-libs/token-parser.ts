import tokensSpec from "styled-system/specs/tokens.json";

// Token interface for parsed token data
export interface Token {
    name: string;
    value: string | number;
    cssVar: string;
}

// Supported token types from the design system
export type TokenType =
    | "aspectRatios"
    | "borderWidths"
    | "durations"
    | "easings"
    | "fontWeights"
    | "letterSpacings"
    | "lineHeights"
    | "opacity"
    | "radii";

// Generic function to parse tokens by their type
export function parseTokensByType(type: TokenType): Token[] {
    const data = tokensSpec.data.find((d) => d.type === type);
    if (!data) return [];
    return data.values.map((t) => ({ name: t.name, value: t.value, cssVar: t.cssVar }));
}
