import { cva } from "@ss/css";

export type ButtonStylesProps = {
    intent?: "primary" | "secondary" | "danger" | "warning" | "outline" | "plain";
    size?: "md" | "lg" | "sm" | "xl" | "xs";
    shape?: "square" | "circle";
    className?: string;
};

export const buttonStyles = cva({
    base: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "{semanticRadii.button.default}",
        fontWeight: "medium",
        fontFamily: "var(--noto-sans-jp)",
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
                bg: "token(colors.button.primary.bg)",
                color: "token(colors.button.primary.text)",
                _hover: { bg: "token(colors.button.primary.hoverBg)" },
                _active: { bg: "token(colors.button.primary.activeBg)" },
            },
            secondary: {
                bg: "colors.button.secondary.bg",
                color: "token(colors.button.secondary.text)",
                _hover: { bg: "token(colors.button.secondary.hoverBg)" },
                _active: { bg: "token(colors.button.secondary.activeBg)" },
            },
            danger: {
                bg: "token(colors.button.danger.bg)",
                color: "token(colors.button.danger.text)",
                _hover: { bg: "token(colors.button.danger.hoverBg)" },
                _active: { bg: "token(colors.button.danger.activeBg)" },
            },
            warning: {
                bg: "token(colors.button.warning.bg)",
                color: "token(colors.button.warning.text)",
                _hover: { bg: "token(colors.button.warning.hoverBg)" },
                _active: { bg: "token(colors.button.warning.activeBg)" },
            },
            outline: {
                border: "1px solid",
                borderColor: "token(colors.button.outline.borderColor)",
                bg: "transparent",
                _hover: { bg: "token(colors.button.outline.hoverBg)" },
                _active: { bg: "token(colors.button.outline.activeBg)" },
            },
            plain: {
                bg: "transparent",
                _hover: { bg: "token(colors.button.plain.hoverBg)" },
                _active: { bg: "token(colors.button.plain.activeBg)" },
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
            square: { borderRadius: "token(semanticRadii.button.default)" },
            circle: { borderRadius: "token(semanticRadii.button.circle)" },
        },
    },
    defaultVariants: {
        intent: "primary",
        size: "md",
        shape: "square",
    },
});
