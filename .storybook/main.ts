import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
    stories: ["../components/**/*.mdx", "../components/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
    addons: [
        "@storybook/addon-essentials",
        "@storybook/addon-onboarding",
        "@chromatic-com/storybook",
        "@storybook/experimental-addon-test",
        "@storybook/addon-a11y",
        "storycap",
        // "storybook-design-token",
    ],
    framework: {
        name: "@storybook/react-vite",
        options: {},
    },
};
export default config;
