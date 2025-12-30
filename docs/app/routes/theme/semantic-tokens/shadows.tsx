import { createFileRoute } from "@tanstack/react-router";
import { sva } from "styled-system/css";
import semanticTokensSpec from "styled-system/specs/semantic-tokens.json";

const shadowsPageStyles = sva({
    slots: [
        "root",
        "pageTitle",
        "description",
        "section",
        "sectionTitle",
        "grid",
        "card",
        "cardPreview",
        "cardInfo",
        "cardName",
        "cardValue",
    ],
    base: {
        root: {
            display: "flex",
            flexDirection: "column",
            gap: "8",
        },
        pageTitle: {
            fontSize: "2xl",
            fontWeight: "bold",
            color: "mori.fg",
        },
        description: {
            fontSize: "md",
            color: "mori.fg.muted",
        },
        section: {
            display: "flex",
            flexDirection: "column",
            gap: "6",
        },
        sectionTitle: {
            fontSize: "xl",
            fontWeight: "semibold",
            color: "mori.fg",
        },
        grid: {
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
            gap: "6",
        },
        card: {
            display: "flex",
            flexDirection: "column",
            gap: "3",
        },
        cardPreview: {
            height: "24",
            backgroundColor: "colorPalette.bg",
            borderRadius: "lg",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
        },
        cardInfo: {
            display: "flex",
            flexDirection: "column",
            gap: "1",
        },
        cardName: {
            fontSize: "sm",
            fontWeight: "medium",
            color: "mori.fg",
        },
        cardValue: {
            fontSize: "xs",
            color: "mori.fg.muted",
            fontFamily: "mono",
        },
    },
});

interface ShadowToken {
    name: string;
    light: string;
    dark: string;
    cssVar: string;
}

function parseShadowTokens(): ShadowToken[] {
    const shadowsData = semanticTokensSpec.data.find((d) => d.type === "shadows");
    if (!shadowsData) return [];

    return shadowsData.values.map((token) => {
        const lightValue = token.values.find((v) => v.condition === "light")?.value;
        const darkValue = token.values.find((v) => v.condition === "dark")?.value;
        const baseValue = token.values.find((v) => v.condition === "base")?.value;

        return {
            name: token.name,
            light: lightValue || baseValue || "",
            dark: darkValue || baseValue || "",
            cssVar: token.cssVar,
        };
    });
}

export const Route = createFileRoute("/theme/semantic-tokens/shadows")({
    component: RouteComponent,
});

function RouteComponent() {
    const styles = shadowsPageStyles();
    const shadowTokens = parseShadowTokens();

    return (
        <div className={styles.root}>
            <h1 className={styles.pageTitle}>Shadows</h1>
            <p className={styles.description}>
                要素に奥行きと立体感を与えるためのシャドウトークン。
                ライトモードとダークモードで適切な影の強さを自動的に切り替えます。
            </p>

            <section className={styles.section}>
                <h2 className={styles.sectionTitle}>Shadow Scale</h2>
                <div className={styles.grid}>
                    {shadowTokens.map((token) => (
                        <div key={token.name} className={styles.card}>
                            <div
                                className={styles.cardPreview}
                                style={{
                                    boxShadow: token.cssVar,
                                }}
                            />
                            <div className={styles.cardInfo}>
                                <span className={styles.cardName}>shadows.{token.name}</span>
                                <span className={styles.cardValue}>{token.light}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
