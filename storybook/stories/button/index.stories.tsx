import type { Meta, StoryObj } from "@storybook/react";
import { ArrowRightIcon } from "lucide-react";
import { Button } from "../../../packages/react";

const meta: Meta<typeof Button> = {
    title: "COMPONENTS/Button",
    component: Button,
    parameters: {
        layout: "centered",
        design: {
            type: "figma",
            url: "https://www.figma.com/design/QkBegnGghvCy2WYD1Mz8NP/Design-System?node-id=14-45&m=dev",
        },
    },
    tags: ["autodocs"],
    argTypes: {
        intent: {
            control: "select",
            options: ["primary", "secondary"],
        },
        size: {
            control: "select",
            options: ["sm", "md", "lg"],
        },
    },
};

export default meta;

const input = "Button";

export const Primary: StoryObj<typeof Button> = {
    render: () => <Button intent="primary">{input}</Button>,
};

export const Secondary: StoryObj<typeof Button> = {
    render: () => <Button intent="secondary">{input}</Button>,
};

export const WithIcon: StoryObj<typeof Button> = {
    render: () => (
        <Button>
            {input}
            <ArrowRightIcon />
        </Button>
    ),
};
