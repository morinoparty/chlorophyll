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
