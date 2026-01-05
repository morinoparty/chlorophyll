import semanticTokensSpec from "styled-system/specs/semantic-tokens.json";

// Token interface for parsed semantic token data
export interface SemanticToken {
    name: string;
    value: string;
    cssVar: string;
}

// Supported semantic token types from the design system
export type SemanticTokenType = "durations" | "easings" | "radii" | "borders" | "colors" | "shadows" | "spacing";

// Generic function to parse semantic tokens by their type
export function parseSemanticTokensByType(type: SemanticTokenType): SemanticToken[] {
    const data = semanticTokensSpec.data.find((d) => d.type === type);
    if (!data) return [];
    return data.values.map((t) => {
        const baseValue = t.values.find((v) => v.condition === "base")?.value ?? "";
        return { name: t.name, value: baseValue, cssVar: t.cssVar };
    });
}
