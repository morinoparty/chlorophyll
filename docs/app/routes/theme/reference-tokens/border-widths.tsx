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
        grid: { display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(100px, 1fr))", gap: "6" },
        card: { display: "flex", flexDirection: "column", gap: "3", alignItems: "center" },
        preview: {
            width: "20",
            height: "20",
            backgroundColor: "colorPalette.bg.subtle",
            borderColor: "colorPalette.solid",
            borderStyle: "solid",
            borderRadius: "md",
        },
        info: { display: "flex", flexDirection: "column", gap: "1", alignItems: "center" },
        name: { fontSize: "sm", fontWeight: "medium", color: "colorPalette.fg" },
        value: { fontSize: "xs", color: "colorPalette.fg.muted", fontFamily: "mono" },
    },
});

export const Route = createFileRoute("/theme/reference-tokens/border-widths")({
    component: RouteComponent,
});

function RouteComponent() {
    const styles = pageStyles();
    const tokens = parseTokensByType("borderWidths");

    return (
        <div className={styles.root}>
            <h1 className={styles.pageTitle}>Border Widths</h1>
            <p className={styles.description}>ボーダー幅のトークン。線の太さを定義します。</p>

            <section className={styles.section}>
                <div className={styles.grid}>
                    {tokens.map((token) => (
                        <div key={token.name} className={styles.card}>
                            <div className={styles.preview} style={{ borderWidth: token.value }} />
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
