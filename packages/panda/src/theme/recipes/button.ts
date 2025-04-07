import { defineRecipe } from "@pandacss/dev";

export const button = defineRecipe({
    className: "button",
    jsx: ["Button"],
    description: "The button component",
    base: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "default",
        fontWeight: "medium",
        transition: "all 0.2s",
        cursor: "pointer",
        _disabled: {
            opacity: 0.5,
            cursor: "not-allowed",
        },
    },
    variants: {
        intent: {
            primary: {
                bg: "bg.emphasized",
                color: "white",
                _hover: { bg: "rgba(83, 150, 118, 0.9)" },
            },
            secondary: {
                bg: "bg.subtle",
                color: "gray.800",
                _hover: { bg: "gray.300" },
                _active: { bg: "gray.400" },
            },
            danger: {
                bg: "red.500",
                color: "white",
                _hover: { bg: "red.600" },
                _active: { bg: "red.700" },
            },
            warning: {
                bg: "yellow.500",
                color: "white",
                _hover: { bg: "yellow.600" },
                _active: { bg: "yellow.700" },
            },
            outline: {
                border: "1px solid",
                borderColor: "gray.300",
                bg: "transparent",
                _hover: { bg: "gray.100" },
                _active: { bg: "gray.200" },
            },
            plain: {
                bg: "transparent",
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
