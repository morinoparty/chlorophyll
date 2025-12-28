import { defineSemanticTokens } from "@pandacss/dev";

export const mori = defineSemanticTokens.colors({
    mori: {
        bg: {
            DEFAULT: {
                value: {
                    _light: "white",
                    _dark: "{colors.mori.1500}",
                },
            },
            subtle: {
                value: {
                    _light: "{colors.mori.100}",
                    _dark: "{colors.gray.1400}",
                },
            },
            muted: {
                value: {
                    _light: "{colors.gray.200}",
                    _dark: "{colors.gray.1400}",
                },
            },
            emphasized: {
                value: {
                    _light: "{colors.gray.300}",
                    _dark: "{colors.gray.1300}",
                },
            },
            inverted: {
                value: {
                    _light: "{colors.mori.1500}",
                    _dark: "{colors.white}",
                },
            },
            panel: {
                value: {
                    _light: "{colors.white}",
                    _dark: "{colors.gray.1500}",
                },
            },
            error: {
                value: {
                    _light: "{colors.red.100}",
                    _dark: "{colors.red.1500}",
                },
            },
            warning: {
                value: {
                    _light: "{colors.orange.100}",
                    _dark: "{colors.orange.1500}",
                },
            },
            success: {
                value: {
                    _light: "{colors.green.100}",
                    _dark: "{colors.green.1500}",
                },
            },
            info: {
                value: {
                    _light: "{colors.blue.100}",
                    _dark: "{colors.blue.1500}",
                },
            },
        },
        fg: {
            DEFAULT: {
                value: {
                    _light: "{colors.mori.1100}",
                    _dark: "{colors.gray.100}",
                },
            },
            muted: {
                value: {
                    _light: "{colors.gray.1000}",
                    _dark: "{colors.gray.600}",
                },
            },
            subtle: {
                value: {
                    _light: "{colors.mori.600}",
                    _dark: "{colors.mori.600}",
                },
            },
            inverted: {
                value: {
                    _light: "{colors.gray.100}",
                    _dark: "{colors.mori.1100}",
                },
            },
            error: {
                value: {
                    _light: "{colors.red.800}",
                    _dark: "{colors.red.600}",
                },
            },
            warning: {
                value: {
                    _light: "{colors.orange.1000}",
                    _dark: "{colors.orange.500}",
                },
            },
            success: {
                value: {
                    _light: "{colors.green.1000}",
                    _dark: "{colors.green.500}",
                },
            },
            info: {
                value: {
                    _light: "{colors.blue.1000}",
                    _dark: "{colors.blue.500}",
                },
            },
        },
        solid: {
            value: {
                _light: "{colors.mori.1000}",
                _dark: "{colors.mori.300}",
            },
        },
        contrast: {
            value: {
                _light: "white",
                _dark: "black",
            },
        },
    },
});
