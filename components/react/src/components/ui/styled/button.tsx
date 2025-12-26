"use client";
import { ark, type HTMLArkProps } from "@ark-ui/react/factory";
import { button } from "styled-system/recipes";

interface ButtonProps extends HTMLArkProps<"button"> {
    intent?: "primary" | "secondary" | "danger" | "warning" | "outline" | "plain";
    size?: "md" | "lg" | "sm" | "xl" | "xs";
    shape?: "square" | "circle";
}

const Button = ({ className, intent, size, shape, ...props }: ButtonProps) => {
    return <ark.button {...props} className={button({ intent, size, shape }).concat(" ", className || "")} />;
};

export { Button };
export type { ButtonProps };
