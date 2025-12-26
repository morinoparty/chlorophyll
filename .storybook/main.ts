import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
    stories: ["../components/**/*.mdx", "../components/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
    addons: [
        "@storybook/addon-essentials",
        "@storybook/addon-onboarding",
        "@storybook/experimental-addon-test",
        "@storybook/addon-a11y",
        // "storybook-design-token",
    ],
    framework: {
        name: "@storybook/react-vite",
        options: {},
    },
    staticDirs: [{ from: "../docs/public/assets", to: "/assets" }],
};
export default config;
