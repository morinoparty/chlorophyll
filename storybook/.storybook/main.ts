import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
    stories: ["../stories/**/*.mdx", "../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
    addons: [
        "@storybook/addon-onboarding",
        "@storybook/addon-a11y",
    ],
    framework: {
        name: "@storybook/react-vite",
        options: {},
    },
    staticDirs: [{ from: "../../docs/public/assets", to: "/assets" }],
};
export default config;
