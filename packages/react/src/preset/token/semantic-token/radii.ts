import { defineSemanticTokens } from "@pandacss/dev";

export const radii = (size: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl") => {
    const sizeMap = {
        xs: { l1: "{radii.2xs}", l2: "{radii.xs}", l3: "{radii.sm}" },
        sm: { l1: "{radii.xs}", l2: "{radii.sm}", l3: "{radii.md}" },
        md: { l1: "{radii.sm}", l2: "{radii.md}", l3: "{radii.lg}" },
        lg: { l1: "{radii.md}", l2: "{radii.lg}", l3: "{radii.xl}" },
        xl: { l1: "{radii.lg}", l2: "{radii.xl}", l3: "{radii.2xl}" },
        "2xl": { l1: "{radii.xl}", l2: "{radii.2xl}", l3: "{radii.3xl}" },
        "3xl": { l1: "{radii.2xl}", l2: "{radii.3xl}", l3: "{radii.4xl}" },
    };

    const config = sizeMap[size];

    return defineSemanticTokens.radii({
        default: {
            value: `{radii.${size}}`,
        },
        l1: {
            value: config.l1,
        },
        l2: {
            value: config.l2,
        },
        l3: {
            value: config.l3,
        },
    });
};
