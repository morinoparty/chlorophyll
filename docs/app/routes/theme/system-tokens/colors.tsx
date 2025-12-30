import { createFileRoute } from "@tanstack/react-router";
import { sva } from "styled-system/css";
import semanticTokensSpec from "styled-system/specs/semantic-tokens.json";
import { SemanticColorDisplay } from "../-components/system-color-display";

const semanticColorsPageStyles = sva({
    slots: ["root", "pageTitle", "description", "section", "sectionTitle", "grid"],
    base: {
        root: {
            display: "flex",
            flexDirection: "column",
            gap: "8",
        },
        pageTitle: {
            fontSize: "2xl",
            fontWeight: "bold",
            color: "colorPalette.fg",
        },
        description: {
            fontSize: "md",
            color: "colorPalette.fg.muted",
        },
        section: {
            display: "flex",
            flexDirection: "column",
            gap: "6",
        },
        sectionTitle: {
            fontSize: "xl",
            fontWeight: "semibold",
            color: "colorPalette.fg",
        },
        grid: {
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
            gap: "6",
        },
    },
});

// Description mappings for mori color tokens
const colorDescriptions: Record<string, string> = {
    "mori.bg": "デフォルト背景",
    "mori.bg.subtle": "微妙な背景",
    "mori.bg.muted": "控えめな背景",
    "mori.bg.emphasized": "強調背景",
    "mori.bg.inverted": "反転背景",
    "mori.bg.panel": "パネル背景",
    "mori.fg": "デフォルトテキスト",
    "mori.fg.muted": "控えめなテキスト",
    "mori.fg.subtle": "微妙なテキスト",
    "mori.fg.inverted": "反転テキスト",
};

interface ColorToken {
    name: string;
    reference: string;
    description: string;
    cssVar: string;
}

function parseColorTokens(): { bg: ColorToken[]; fg: ColorToken[] } {
    const colorsData = semanticTokensSpec.data.find((d) => d.type === "colors");
    if (!colorsData) return { bg: [], fg: [] };

    const bgNames = [
        "mori.bg",
        "mori.bg.subtle",
        "mori.bg.muted",
        "mori.bg.emphasized",
        "mori.bg.inverted",
        "mori.bg.panel",
    ];
    const fgNames = ["mori.fg", "mori.fg.muted", "mori.fg.subtle", "mori.fg.inverted"];

    const parseTokens = (names: string[]): ColorToken[] => {
        return names
            .map((name) => {
                const token = colorsData.values.find((t) => t.name === name);
                if (!token) return null;

                const lightValue = token.values.find((v) => v.condition === "light")?.value;
                const darkValue = token.values.find((v) => v.condition === "dark")?.value;
                const baseValue = token.values.find((v) => v.condition === "base")?.value;

                let reference: string;
                if (baseValue) {
                    reference = baseValue;
                } else if (lightValue && darkValue) {
                    if (lightValue === darkValue) {
                        reference = lightValue;
                    } else {
                        reference = `${lightValue} / ${darkValue}`;
                    }
                } else {
                    reference = lightValue || darkValue || "";
                }

                return {
                    name: token.name,
                    reference,
                    description: colorDescriptions[name] || "",
                    cssVar: token.cssVar,
                };
            })
            .filter((t): t is ColorToken => t !== null);
    };

    return {
        bg: parseTokens(bgNames),
        fg: parseTokens(fgNames),
    };
}

export const Route = createFileRoute("/theme/system-tokens/colors")({
    component: RouteComponent,
});

function RouteComponent() {
    const styles = semanticColorsPageStyles();
    const { bg: moriBgTokens, fg: moriFgTokens } = parseColorTokens();

    return (
        <div className={styles.root}>
            <h1 className={styles.pageTitle}>Semantic Color Tokens</h1>
            <p className={styles.description}>
                セマンティックカラートークンは、用途に基づいた色の定義です。
                ライト/ダークモードに応じて自動的に適切な色に切り替わります。
            </p>

            <section className={styles.section}>
                <h2 className={styles.sectionTitle}>mori.bg (Background)</h2>
                <div className={styles.grid}>
                    {moriBgTokens.map((token) => (
                        <SemanticColorDisplay
                            key={token.name}
                            tokenKey={token.name}
                            reference={token.reference}
                            description={token.description}
                        />
                    ))}
                </div>
            </section>

            <section className={styles.section}>
                <h2 className={styles.sectionTitle}>mori.fg (Foreground)</h2>
                <div className={styles.grid}>
                    {moriFgTokens.map((token) => (
                        <SemanticColorDisplay
                            key={token.name}
                            tokenKey={token.name}
                            reference={token.reference}
                            description={token.description}
                        />
                    ))}
                </div>
            </section>
        </div>
    );
}
