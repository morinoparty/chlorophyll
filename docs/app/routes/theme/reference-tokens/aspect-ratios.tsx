import { createFileRoute } from "@tanstack/react-router";
import { sva } from "styled-system/css";
import tokensSpec from "styled-system/specs/tokens.json";

const pageStyles = sva({
    slots: ["root", "pageTitle", "description", "section", "grid", "card", "preview", "info", "name", "value"],
    base: {
        root: { display: "flex", flexDirection: "column", gap: "8" },
        pageTitle: { fontSize: "2xl", fontWeight: "bold", color: "colorPalette.fg" },
        description: { fontSize: "md", color: "colorPalette.fg.muted" },
        section: { display: "flex", flexDirection: "column", gap: "6" },
        grid: { display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))", gap: "6" },
        card: { display: "flex", flexDirection: "column", gap: "3", alignItems: "center" },
        preview: {
            width: "full",
            maxWidth: "40",
            backgroundColor: "colorPalette.bg.subtle",
            border: "1px solid",
            borderColor: "border.muted",
            borderRadius: "md",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "colorPalette.fg.muted",
            fontSize: "xs",
        },
        info: { display: "flex", flexDirection: "column", gap: "1", alignItems: "center" },
        name: { fontSize: "sm", fontWeight: "medium", color: "colorPalette.fg" },
        value: { fontSize: "xs", color: "colorPalette.fg.muted", fontFamily: "mono" },
    },
});

interface Token {
    name: string;
    value: string;
    cssVar: string;
}

function parseTokens(): Token[] {
    const data = tokensSpec.data.find((d) => d.type === "aspectRatios");
    if (!data) return [];
    return data.values.map((t) => ({ name: t.name, value: t.value, cssVar: t.cssVar }));
}

export const Route = createFileRoute("/theme/reference-tokens/aspect-ratios")({
    component: RouteComponent,
});

function RouteComponent() {
    const styles = pageStyles();
    const tokens = parseTokens();

    return (
        <div className={styles.root}>
            <h1 className={styles.pageTitle}>Aspect Ratios</h1>
            <p className={styles.description}>アスペクト比トークン。画像やビデオ、コンテナの縦横比を定義します。</p>

            <section className={styles.section}>
                <div className={styles.grid}>
                    {tokens.map((token) => (
                        <div key={token.name} className={styles.card}>
                            <div className={styles.preview} style={{ aspectRatio: token.value }}>
                                {token.value}
                            </div>
                            <div className={styles.info}>
                                <span className={styles.name}>{token.name}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
