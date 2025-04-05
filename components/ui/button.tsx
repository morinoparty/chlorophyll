"use client";
import { Button as ButtonPrimitive, ButtonProps as ButtonPrimitiveProps, composeRenderProps } from "react-aria-components";
import { cva } from "../../styled-system/css";

interface ButtonProps extends ButtonPrimitiveProps {
    intent?: "primary" | "secondary" | "danger" | "warning" | "outline" | "plain"
    size?: "md" | "lg" | "sm" | "xl" | "xs"
    shape?: "square" | "circle"
    ref?: React.Ref<HTMLButtonElement>
    className?: string
  }


export const buttonStyles = cva({
    base: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "md",
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
                bg: "blue.500",
                color: "white",
                _hover: { bg: "blue.600" },
                _active: { bg: "blue.700" },
            },
            secondary: {
                bg: "gray.200",
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
            square: { borderRadius: "md" },
            circle: { borderRadius: "full"},
        },
    },
    defaultVariants: {
        intent: "primary",
        size: "md",
        shape: "square",
    },
});

const Button = ({ className, intent, size, shape, ref, ...props }: ButtonProps) => {
    return (
        <ButtonPrimitive
            ref={ref}
            {...props}
            className={composeRenderProps(className, (className, renderProps) =>
                buttonStyles({
                    ...renderProps,
                    intent,
                    size,
                    shape,
                    className,
                }),
            )}
        >
            {(values) => <>{typeof props.children === "function" ? props.children(values) : props.children}</>}
        </ButtonPrimitive>
    );
};

export { Button };
export type { ButtonProps };
