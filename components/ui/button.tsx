"use client";
import {
    Button as ButtonPrimitive,
    type ButtonProps as ButtonPrimitiveProps,
    composeRenderProps,
} from "react-aria-components";
import { type ButtonStylesProps, buttonStyles } from "./styles/button.styles";

interface ButtonProps extends ButtonPrimitiveProps {
    intent?: "primary" | "secondary" | "danger" | "warning" | "outline" | "plain";
    size?: "md" | "lg" | "sm" | "xl" | "xs";
    shape?: "square" | "circle";
    ref?: React.Ref<HTMLButtonElement>;
    className?: string;
}

const Button = ({ className, intent, size, shape, ref, ...props }: ButtonProps) => {
    return (
        <ButtonPrimitive
            ref={ref}
            {...props}
            className={composeRenderProps(className, (className) =>
                buttonStyles({
                    intent,
                    size,
                    shape,
                    className,
                } as ButtonStylesProps),
            )}
        >
            {(values) => <>{typeof props.children === "function" ? props.children(values) : props.children}</>}
        </ButtonPrimitive>
    );
};

export { Button };
export type { ButtonProps };
