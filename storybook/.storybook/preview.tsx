import '../src/index.css'
import type { Preview } from "@storybook/react";
import { css } from "styled-system/css";

const preview: Preview = {
    decorators: [
        (Story) => (
            <div className={css({ textStyle: "body", colorPalette: "mori" })}>
                <Story />
            </div>
        ),
    ],

    parameters: {
        actions: { argTypesRegex: "^on[A-Z].*" },

        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/,
            },
        },

        screenshot: {
            fullPage: true,
            delay: 0,
            viewports: {
                desktop: {
                    width: 1920,
                    height: 1080,
                },
                mobile: {
                    width: 375,
                    height: 667,
                    isMobile: true,
                    hasTouch: true,
                },
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
