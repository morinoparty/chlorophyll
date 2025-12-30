import { defineSemanticTokens } from "@pandacss/dev";

export const shadows = defineSemanticTokens.shadows({
    xs: {
        value: {
            _light: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
            _dark: "0 1px 2px 0 rgb(0 0 0 / 0.4)",
        },
    },
    sm: {
        value: {
            _light: "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
            _dark: "0 1px 3px 0 rgb(0 0 0 / 0.4), 0 1px 2px -1px rgb(0 0 0 / 0.4)",
        },
    },
    md: {
        value: {
            _light: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
            _dark: "0 4px 6px -1px rgb(0 0 0 / 0.4), 0 2px 4px -2px rgb(0 0 0 / 0.4)",
        },
    },
    lg: {
        value: {
            _light: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
            _dark: "0 10px 15px -3px rgb(0 0 0 / 0.4), 0 4px 6px -4px rgb(0 0 0 / 0.4)",
        },
    },
    xl: {
        value: {
            _light: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
            _dark: "0 20px 25px -5px rgb(0 0 0 / 0.4), 0 8px 10px -6px rgb(0 0 0 / 0.4)",
        },
    },
    "2xl": {
        value: {
            _light: "0 25px 50px -12px rgb(0 0 0 / 0.25)",
            _dark: "0 25px 50px -12px rgb(0 0 0 / 0.6)",
        },
    },
    inner: {
        value: "inset 0 2px 4px 0 rgb(0 0 0 / 0.05)",
    },
    // Elevation-based aliases (Atlassian style)
    raised: {
        value: {
            _light: "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
            _dark: "0 1px 3px 0 rgb(0 0 0 / 0.4), 0 1px 2px -1px rgb(0 0 0 / 0.4)",
        },
    },
    overlay: {
        value: {
            _light: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
            _dark: "0 10px 15px -3px rgb(0 0 0 / 0.4), 0 4px 6px -4px rgb(0 0 0 / 0.4)",
        },
    },
    floating: {
        value: {
            _light: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
            _dark: "0 20px 25px -5px rgb(0 0 0 / 0.4), 0 8px 10px -6px rgb(0 0 0 / 0.4)",
        },
    },
});
