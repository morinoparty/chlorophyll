import { createFileRoute } from "@tanstack/react-router";
import { sva } from "styled-system/css";

const shadowsPageStyles = sva({
    slots: ["root", "pageTitle", "description", "section", "sectionTitle", "grid", "card", "cardPreview", "cardInfo", "cardName", "cardValue"],
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

const shadowTokens = [
    {
        name: "xs",
        light: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
        dark: "0 1px 2px 0 rgb(0 0 0 / 0.4)",
    },
    {
        name: "sm",
        light: "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
        dark: "0 1px 3px 0 rgb(0 0 0 / 0.4), 0 1px 2px -1px rgb(0 0 0 / 0.4)",
    },
    {
        name: "md",
        light: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
        dark: "0 4px 6px -1px rgb(0 0 0 / 0.4), 0 2px 4px -2px rgb(0 0 0 / 0.4)",
    },
    {
        name: "lg",
        light: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
        dark: "0 10px 15px -3px rgb(0 0 0 / 0.4), 0 4px 6px -4px rgb(0 0 0 / 0.4)",
    },
    {
        name: "xl",
        light: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
        dark: "0 20px 25px -5px rgb(0 0 0 / 0.4), 0 8px 10px -6px rgb(0 0 0 / 0.4)",
    },
    {
        name: "2xl",
        light: "0 25px 50px -12px rgb(0 0 0 / 0.25)",
        dark: "0 25px 50px -12px rgb(0 0 0 / 0.6)",
    },
    {
        name: "inner",
        light: "inset 0 2px 4px 0 rgb(0 0 0 / 0.05)",
        dark: "inset 0 2px 4px 0 rgb(0 0 0 / 0.05)",
    },
];

export const Route = createFileRoute("/theme/semantic-tokens/shadows")({
    component: RouteComponent,
});

function RouteComponent() {
    const styles = shadowsPageStyles();

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
                                    boxShadow: `var(--ma-shadows-${token.name})`,
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
