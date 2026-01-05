import { defineSemanticTokens } from "@pandacss/dev";

export const fontSizes = defineSemanticTokens.fontSizes({
    heading: {
        "2xl": { value: "{fontSizes.5xl}" },
        xl: { value: "{fontSizes.4xl}" },
        lg: { value: "{fontSizes.3xl}" },
        md: { value: "{fontSizes.2xl}" },
        sm: { value: "{fontSizes.xl}" },
    },
    body: {
        lg: { value: "{fontSizes.lg}" },
        md: { value: "{fontSizes.md}" },
        sm: { value: "{fontSizes.sm}" },
        xs: { value: "{fontSizes.xs}" },
    },
});

export const fontWeights = defineSemanticTokens.fontWeights({
    heading: { value: "{fontWeights.bold}" },
    body: { value: "{fontWeights.normal}" },
    label: { value: "{fontWeights.medium}" },
});

export const lineHeights = defineSemanticTokens.lineHeights({
    heading: { value: "{lineHeights.tight}" },
    body: { value: "{lineHeights.normal}" },
});

export const letterSpacings = defineSemanticTokens.letterSpacings({
    heading: { value: "{letterSpacings.tight}" },
    body: { value: "{letterSpacings.normal}" },
});
