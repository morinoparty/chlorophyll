import { createFileRoute } from "@tanstack/react-router";
import { sva } from "styled-system/css";
import { SemanticColorDisplay } from "../-components/semantic-color-display";

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

const moriBgTokens = [
    { name: "mori.bg", reference: "{colors.mori.1}", description: "デフォルト背景" },
    { name: "mori.bg.subtle", reference: "{colors.mori.2}", description: "微妙な背景" },
    { name: "mori.bg.muted", reference: "{colors.gray.2}", description: "控えめな背景" },
    { name: "mori.bg.emphasized", reference: "{colors.gray.3}", description: "強調背景" },
    { name: "mori.bg.inverted", reference: "light↔dark swap", description: "反転背景" },
    { name: "mori.bg.panel", reference: "white / {colors.gray.1}", description: "パネル背景" },
];

const moriFgTokens = [
    { name: "mori.fg", reference: "{colors.mori.12} / white", description: "デフォルトテキスト" },
    { name: "mori.fg.muted", reference: "{colors.gray.11}", description: "控えめなテキスト" },
    { name: "mori.fg.subtle", reference: "{colors.mori.11}", description: "微妙なテキスト" },
    { name: "mori.fg.inverted", reference: "light↔dark swap", description: "反転テキスト" },
];

export const Route = createFileRoute("/theme/semantic-tokens/colors")({
    component: RouteComponent,
});

function RouteComponent() {
    const styles = semanticColorsPageStyles();

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
