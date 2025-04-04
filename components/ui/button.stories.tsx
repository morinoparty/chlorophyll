import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./button"; // Buttonが正しくエクスポートされていることを確認してください

const meta = {
    title: "COMPONENTS/Button",
    component: Button,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {
        intent: {
            control: "select",
            options: ["primary", "secondary", "danger", "warning", "outline", "plain"],
        },
        size: {
            control: "select",
            options: ["xs", "sm", "md", "lg", "xl"],
        },
        shape: {
            control: "select",
            options: ["square", "circle"],
        },
    },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        children: "Button",
    },
};

export const Primary: Story = {
    args: {
        intent: "primary",
        children: "Primary Button",
    },
};

export const Secondary: Story = {
    args: {
        intent: "secondary",
        children: "Secondary Button",
    },
};

export const Danger: Story = {
    args: {
        intent: "danger",
        children: "Danger Button",
    },
};

export const Warning: Story = {
    args: {
        intent: "warning",
        children: "Warning Button",
    },
};

export const Outline: Story = {
    args: {
        intent: "outline",
        children: "Outline Button",
    },
};

export const Plain: Story = {
    args: {
        intent: "plain",
        children: "Plain Button",
    },
};

export const Circle: Story = {
    args: {
        shape: "circle",
        children: "C",
    },
};

export const Small: Story = {
    args: {
        size: "sm",
        children: "Small Button",
    },
};

export const Large: Story = {
    args: {
        size: "lg",
        children: "Large Button",
    },
};
