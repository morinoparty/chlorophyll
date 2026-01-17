import { defineRecipe } from "@pandacss/dev";

export const button = defineRecipe({
    className: "button",
    jsx: ["Button"],
    description: "The button component",
    base: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "l2",
        fontWeight: "semibold",
        letterSpacing: "0.03em",
        isolation: "isolate",
        position: "relative",
        overflow: "hidden",
        transitionDuration: "normal",
        transitionProperty: "background, box-shadow, border-color",
        transitionTimingFunction: "default",
        whiteSpace: "nowrap",
        userSelect: "none",
        verticalAlign: "middle",
        cursor: "pointer",
        "& :where(svg)": {
            strokeWidth: "2.4px",
            fontSize: "1.4em",
            width: "0.9em",
            height: "0.9em",
            marginLeft: "0.3em",
        },
        _disabled: {
            cursor: "not-allowed",
        },
    },
    variants: {
        intent: {
            primary: {
                bg: "colorPalette.solid",
                border: "1px solid",
                borderColor: "colorPalette.solid.emphasized",
                color: "colorPalette.contrast",
                boxShadow:
                    "0px 1px 1px 0px rgba(14,30,23,0.1), 0px 1px 5.4px 0px rgba(22,54,39,0.1), 0px 3px 7.5px 0px rgba(22,54,39,0.1)",
                _after: {
                    content: '""',
                    position: "absolute",
                    inset: 0,
                    borderRadius: "inherit",
                    pointerEvents: "none",
                    boxShadow: "inset 0px -2px 3px 0px rgba(0,0,0,0.06)",
                    zIndex: 2,
                },
                _hover: {
                    bg: "colorPalette.solid.emphasized",
                    boxShadow: "0px 4px 3px 0px rgba(0,0,0,0.06)",
                },
                _focusVisible: {
                    outline: "none",
                    boxShadow:
                        "0 0 0 3px {colors.colorPalette.a4}, 0px 1px 1px 0px rgba(14,30,23,0.1), 0px 1px 5.4px 0px rgba(22,54,39,0.1), 0px 3px 7.5px 0px rgba(22,54,39,0.1)",
                },
                _disabled: {
                    bg: "gray.6",
                    borderColor: "gray.5",
                    color: "white",
                    boxShadow: "0px 1px 5.4px 0px rgba(22,54,39,0.1), 0px 3px 7.5px 0px rgba(22,54,39,0.1)",
                },
            },
            secondary: {
                bg: "bg.panel",
                border: "1px solid",
                borderColor: "gray.3",
                color: "colorPalette.solid",
                boxShadow:
                    "0px 1px 1px 0px rgba(14,30,23,0.05), 0px 1px 5.4px 0px rgba(22,54,39,0.05), 0px 3px 7.5px 0px rgba(22,54,39,0.03)",
                _after: {
                    content: '""',
                    position: "absolute",
                    inset: 0,
                    borderRadius: "inherit",
                    pointerEvents: "none",
                    boxShadow: "inset 0px -2px 3px 0px rgba(0,0,0,0.04)",
                    zIndex: 2,
                },
                _hover: {
                    bg: "colorPalette.bg.subtle",
                },
                _focusVisible: {
                    outline: "none",
                    boxShadow:
                        "0 0 0 3px {colors.colorPalette.a4}, 0px 1px 1px 0px rgba(14,30,23,0.05), 0px 1px 5.4px 0px rgba(22,54,39,0.05), 0px 3px 7.5px 0px rgba(22,54,39,0.03)",
                },
                _disabled: {
                    bg: "bg.panel",
                    borderColor: "gray.3",
                    color: "gray.a4",
                    boxShadow: "0px 2px 3px 0px rgba(0,0,0,0.06)",
                },
            },
        },
        size: {
            sm: { height: "{sizes.8}", px: "{spacing.4}", fontSize: "xs" },
            md: { height: "{sizes.20}", px: "{spacing.5}", fontSize: "xs" },
            lg: { height: "{sizes.12}", px: "{spacing.6}", fontSize: "md" },
        },
    },
    defaultVariants: {
        intent: "primary",
        size: "lg",
    },
});
