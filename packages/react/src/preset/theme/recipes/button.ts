import { defineRecipe } from "@pandacss/dev";

export const button = defineRecipe({
    className: "button",
    jsx: ["Button"],
    description: "The button component",
    base: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "{radii.default}",
        fontWeight: "medium",
        isolation: "isolate",
        position: "relative",
        transitionDuration: "normal",
        transitionProperty: "colors",
        transitionTimingFunction: "default",
        whiteSpace: "nowrap",
        userSelect: "none",
        verticalAlign: "middle",
        cursor: "pointer",
        "& :where(svg)": {
            fontSize: "1.1em",
            width: "1.1em",
            height: "1.1em",
        },
        _disabled: {
            opacity: 0.5,
            cursor: "not-allowed",
        },
    },
    variants: {
        intent: {
            primary: {
                bg: "colorPalette.solid",
                color: "white",
                _hover: { bg: "colorPalette.bg.emphasized" },
            },
            secondary: {
                bg: "bg.subtle",
                color: "gray.800",
                _hover: { bg: "colorPalette.emphasized" },
            },
            danger: {
                bg: "palette.error",
                _hover: { bg: "palette.error/80" },
                _active: { bg: "palette.error/80" },
            },
            warning: {
                bg: "palette.warning",
                color: "black",
                _hover: { bg: "palette.warning/80" },
                _active: { bg: "palette.warning/80" },
            },
            outline: {
                border: "1px solid",
                borderColor: "border.default",
                color: "fg.default",
                bg: "transparent",
                _hover: { bg: "gray.100" },
                _active: { bg: "gray.200" },
            },
            plain: {
                bg: "transparent",
                color: "fg.default",
                _hover: { bg: "gray.100" },
                _active: { bg: "gray.200" },
            },
        },
        size: {
            xs: { px: 2, py: 1, fontSize: "xs" },
            sm: { px: 3, py: 1.5, fontSize: "sm" },
            md: { px: 4, py: 2, fontSize: "md" },
            lg: { px: 5, py: 2.5, fontSize: "lg" },
            xl: { px: 6, py: 3, fontSize: "xl" },
        },
        shape: {
            square: { borderRadius: "default" },
            circle: { borderRadius: "full" },
        },
    },
    defaultVariants: {
        intent: "primary",
        size: "md",
        shape: "square",
    },
});
