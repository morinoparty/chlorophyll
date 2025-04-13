import "../components/style.css";
import "@fontsource-variable/noto-sans-jp";
import type { Preview } from "@storybook/react";
import { withScreenshot } from "storycap";

export const decorators = [withScreenshot];
export const parameters = {
    screenshot: {
        provider: {
            name: "storycap",
        },
    },
};
const preview: Preview = {
    parameters: {
        actions: { argTypesRegex: "^on[A-Z].*" },

        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/,
            },
        },

        a11y: {
            // Optional selector to inspect
            test: "todo",
            element: "body",
            config: {
                rules: [
                    {
                        // The autocomplete rule will not run based on the CSS selector provided
                        id: "autocomplete-valid",
                        selector: '*:not([autocomplete="nope"])',
                    },
                    {
                        // Setting the enabled option to false will disable checks for this particular rule on all stories.
                        id: "image-alt",
                        enabled: false,
                    },
                ],
            },
            options: {},
        },
    },
};

export default preview;
