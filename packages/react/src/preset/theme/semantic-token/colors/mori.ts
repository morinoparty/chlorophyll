import { defineSemanticTokens } from "@pandacss/dev";

export const mori = defineSemanticTokens.colors({
    mori: {
        // 50-950 マッピング
        50: {
            value: {
                _light: "{colors.mori.light.1}",
                _dark: "{colors.mori.dark.1}",
            },
        },
        100: {
            value: {
                _light: "{colors.mori.light.2}",
                _dark: "{colors.mori.dark.2}",
            },
        },
        200: {
            value: {
                _light: "{colors.mori.light.3}",
                _dark: "{colors.mori.dark.3}",
            },
        },
        300: {
            value: {
                _light: "{colors.mori.light.4}",
                _dark: "{colors.mori.dark.4}",
            },
        },
        400: {
            value: {
                _light: "{colors.mori.light.5}",
                _dark: "{colors.mori.dark.5}",
            },
        },
        500: {
            value: {
                _light: "{colors.mori.light.6}",
                _dark: "{colors.mori.dark.6}",
            },
        },
        600: {
            value: {
                _light: "{colors.mori.light.7}",
                _dark: "{colors.mori.dark.7}",
            },
        },
        700: {
            value: {
                _light: "{colors.mori.light.8}",
                _dark: "{colors.mori.dark.8}",
            },
        },
        800: {
            value: {
                _light: "{colors.mori.light.9}",
                _dark: "{colors.mori.dark.9}",
            },
        },
        900: {
            value: {
                _light: "{colors.mori.light.10}",
                _dark: "{colors.mori.dark.10}",
            },
        },
        950: {
            value: {
                _light: "{colors.mori.light.11}",
                _dark: "{colors.mori.dark.11}",
            },
        },
        contrast: {
            value: {
                _light: "{colors.mori.light.12}",
                _dark: "{colors.mori.dark.12}",
            },
        },
        // withAlpha (アルファチャンネル付き)
        alpha: {
            50: {
                value: {
                    _light: "{colors.mori.light.a1}",
                    _dark: "{colors.mori.dark.a1}",
                },
            },
            100: {
                value: {
                    _light: "{colors.mori.light.a2}",
                    _dark: "{colors.mori.dark.a2}",
                },
            },
            200: {
                value: {
                    _light: "{colors.mori.light.a3}",
                    _dark: "{colors.mori.dark.a3}",
                },
            },
            300: {
                value: {
                    _light: "{colors.mori.light.a4}",
                    _dark: "{colors.mori.dark.a4}",
                },
            },
            400: {
                value: {
                    _light: "{colors.mori.light.a5}",
                    _dark: "{colors.mori.dark.a5}",
                },
            },
            500: {
                value: {
                    _light: "{colors.mori.light.a6}",
                    _dark: "{colors.mori.dark.a6}",
                },
            },
            600: {
                value: {
                    _light: "{colors.mori.light.a7}",
                    _dark: "{colors.mori.dark.a7}",
                },
            },
            700: {
                value: {
                    _light: "{colors.mori.light.a8}",
                    _dark: "{colors.mori.dark.a8}",
                },
            },
            800: {
                value: {
                    _light: "{colors.mori.light.a9}",
                    _dark: "{colors.mori.dark.a9}",
                },
            },
            900: {
                value: {
                    _light: "{colors.mori.light.a10}",
                    _dark: "{colors.mori.dark.a10}",
                },
            },
            950: {
                value: {
                    _light: "{colors.mori.light.a11}",
                    _dark: "{colors.mori.dark.a11}",
                },
            },
            contrast: {
                value: {
                    _light: "{colors.mori.light.a12}",
                    _dark: "{colors.mori.dark.a12}",
                },
            },
        },
        // 意味論的な定義
        bg: {
            DEFAULT: {
                value: {
                    _light: "{colors.mori.50}",
                    _dark: "{colors.mori.50}",
                },
            },
            subtle: {
                value: {
                    _light: "{colors.mori.50}",
                    _dark: "{colors.gray.100}",
                },
            },
            muted: {
                value: {
                    _light: "{colors.gray.100}",
                    _dark: "{colors.gray.100}",
                },
            },
            emphasized: {
                value: {
                    _light: "{colors.gray.200}",
                    _dark: "{colors.gray.200}",
                },
            },
            inverted: {
                value: {
                    _light: "{colors.mori.950}",
                    _dark: "{colors.white}",
                },
            },
            panel: {
                value: {
                    _light: "{colors.white}",
                    _dark: "{colors.gray.50}",
                },
            },
        },
        fg: {
            DEFAULT: {
                value: {
                    _light: "{colors.mori.950}",
                    _dark: "{colors.gray.contrast}",
                },
            },
            muted: {
                value: {
                    _light: "{colors.gray.900}",
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
                    _light: "{colors.gray.contrast}",
                    _dark: "{colors.mori.950}",
                },
            },
        },
        solid: {
            value: {
                _light: "{colors.mori.900}",
                _dark: "{colors.mori.200}",
            },
        },
    },
});
