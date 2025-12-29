import { defineTextStyles } from "@pandacss/dev";

export const textStyles = defineTextStyles({
    body: {
        description: "The body text style - used in paragraphs",
        value: {
            fontFamily:
                "'Satoshi-Variable', 'GenJyuuGothicLP', BlinkMacSystemFont, 'Noto Sans JP', -apple-system, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif",
            fontVariationSettings: "'wght' 500",
            color: "var(--chakra-colors-color-palette-fg)",
            textDecoration: {
                color: "var(--chakra-colors-text)",
            },
            lineHeight: "1.8",
            fontWeight: "500",
        },
    },
    "2xs": {
        value: {
            fontSize: "2xs",
            lineHeight: "0.75rem",
        },
    },
    xs: {
        value: {
            fontSize: "xs",
            lineHeight: "1rem",
        },
    },
    sm: {
        value: {
            fontSize: "sm",
            lineHeight: "1.25rem",
        },
    },
    md: {
        value: {
            fontSize: "md",
            lineHeight: "1.5rem",
        },
    },
    lg: {
        value: {
            fontSize: "lg",
            lineHeight: "1.75rem",
        },
    },
    xl: {
        value: {
            fontSize: "xl",
            lineHeight: "1.875rem",
        },
    },
    "2xl": {
        value: {
            fontSize: "2xl",
            lineHeight: "2rem",
        },
    },
    "3xl": {
        value: {
            fontSize: "3xl",
            lineHeight: "2.375rem",
        },
    },
    "4xl": {
        value: {
            fontSize: "4xl",
            lineHeight: "2.75rem",
            letterSpacing: "-0.025em",
        },
    },
    "5xl": {
        value: {
            fontSize: "5xl",
            lineHeight: "3.75rem",
            letterSpacing: "-0.025em",
        },
    },
    none: {
        value: {},
    },
    label: {
        value: {
            fontSize: "sm",
            lineHeight: "1.25rem",
            fontWeight: "medium",
        },
    },
});
