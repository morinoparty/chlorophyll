import tokensSpec from "styled-system/specs/tokens.json";

export interface Token {
    name: string;
    value: string | number;
    cssVar: string;
}

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

export function parseTokensByType(type: TokenType): Token[] {
    const data = tokensSpec.data.find((d) => d.type === type);
    if (!data) return [];
    return data.values.map((t) => ({ name: t.name, value: t.value, cssVar: t.cssVar }));
}
