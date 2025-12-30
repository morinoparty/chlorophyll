import { defineSemanticTokens } from "@pandacss/dev";

export const spacing = defineSemanticTokens.spacing({
    component: {
        padding: {
            xs: { value: "{spacing.1}" },
            sm: { value: "{spacing.2}" },
            md: { value: "{spacing.3}" },
            lg: { value: "{spacing.4}" },
            xl: { value: "{spacing.6}" },
        },
        gap: {
            xs: { value: "{spacing.1}" },
            sm: { value: "{spacing.2}" },
            md: { value: "{spacing.3}" },
            lg: { value: "{spacing.4}" },
            xl: { value: "{spacing.6}" },
        },
    },
    layout: {
        gutter: { value: "{spacing.4}" },
        section: { value: "{spacing.16}" },
    },
});
