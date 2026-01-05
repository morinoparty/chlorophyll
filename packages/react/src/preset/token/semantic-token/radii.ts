import { defineSemanticTokens } from "@pandacss/dev";

export const radii = defineSemanticTokens.radii({
    l1: { value: "{radii.sm}" },
    l2: { value: "{radii.md}" },
    l3: { value: "{radii.lg}" },
});
