import { createFileRoute } from "@tanstack/react-router";
import { sva } from "styled-system/css";
import { parseTokensByType } from "./-libs/token-parser";

const pageStyles = sva({
    slots: ["root", "pageTitle", "description", "section", "grid", "card", "preview", "info", "name", "value"],
    base: {
        root: { display: "flex", flexDirection: "column", gap: "8" },
        pageTitle: { fontSize: "2xl", fontWeight: "bold", color: "colorPalette.fg" },
        description: { fontSize: "md", color: "colorPalette.fg.muted" },
        section: { display: "flex", flexDirection: "column", gap: "6" },
        grid: { display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(80px, 1fr))", gap: "4" },
        card: { display: "flex", flexDirection: "column", gap: "2", alignItems: "center" },
        preview: {
            width: "16",
            height: "16",
            backgroundColor: "colorPalette.solid",
            borderRadius: "sm",
            border: "1px solid",
            borderColor: "border.muted",
        },
        info: { display: "flex", flexDirection: "column", gap: "0.5", alignItems: "center" },
        name: { fontSize: "xs", fontWeight: "medium", color: "colorPalette.fg" },
        value: { fontSize: "2xs", color: "colorPalette.fg.muted", fontFamily: "mono" },
    },
});

export const Route = createFileRoute("/theme/reference-tokens/opacity")({
    component: RouteComponent,
});

function RouteComponent() {
    const styles = pageStyles();
    const tokens = parseTokensByType("opacity");

    return (
        <div className={styles.root}>
            <h1 className={styles.pageTitle}>Opacity</h1>
            <p className={styles.description}>透明度のトークン。要素の透過率を定義します。</p>

            <section className={styles.section}>
                <div className={styles.grid}>
                    {tokens.map((token) => (
                        <div key={token.name} className={styles.card}>
                            <div className={styles.preview} style={{ opacity: token.value }} />
                            <div className={styles.info}>
                                <span className={styles.name}>{token.name}</span>
                                <span className={styles.value}>{token.value}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
