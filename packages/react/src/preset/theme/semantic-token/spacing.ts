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
    // Icon sizes
    icon: {
        xs: { value: "{spacing.3}" },   // 12px
        sm: { value: "{spacing.4}" },   // 16px
        md: { value: "{spacing.5}" },   // 20px
        lg: { value: "{spacing.6}" },   // 24px
        xl: { value: "{spacing.8}" },   // 32px
    },
    // Avatar sizes
    avatar: {
        xs: { value: "{sizes.6}" },     // 24px
        sm: { value: "{sizes.8}" },     // 32px
        md: { value: "{sizes.10}" },    // 40px
        lg: { value: "{sizes.12}" },    // 48px
        xl: { value: "{sizes.16}" },    // 64px
    },
    // Minimum touch target (44px for accessibility)
    touchTarget: { value: "{sizes.11}" },
});
