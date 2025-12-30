import { createFileRoute } from "@tanstack/react-router";
import { sva } from "styled-system/css";
import tokensSpec from "styled-system/specs/tokens.json";

const pageStyles = sva({
    slots: ["root", "pageTitle", "description", "section", "sectionTitle", "table", "th", "td", "preview"],
    base: {
        root: { display: "flex", flexDirection: "column", gap: "8" },
        pageTitle: { fontSize: "2xl", fontWeight: "bold", color: "colorPalette.fg" },
        description: { fontSize: "md", color: "colorPalette.fg.muted" },
        section: { display: "flex", flexDirection: "column", gap: "6" },
        sectionTitle: { fontSize: "xl", fontWeight: "semibold", color: "colorPalette.fg" },
        table: { width: "full", borderCollapse: "collapse" },
        th: {
            textAlign: "left",
            padding: "3",
            fontSize: "sm",
            fontWeight: "semibold",
            color: "colorPalette.fg.muted",
            borderBottom: "1px solid",
            borderColor: "border.muted",
        },
        td: {
            padding: "3",
            fontSize: "sm",
            color: "colorPalette.fg",
            borderBottom: "1px solid",
            borderColor: "border.subtle",
            verticalAlign: "middle",
        },
        preview: { fontFamily: "body" },
    },
});

interface Token {
    name: string;
    value: string;
    cssVar: string;
}

function parseTokens(): Token[] {
    const data = tokensSpec.data.find((d) => d.type === "fontWeights");
    if (!data) return [];
    return data.values.map((t) => ({ name: t.name, value: t.value, cssVar: t.cssVar }));
}

export const Route = createFileRoute("/theme/reference-tokens/font-weights")({
    component: RouteComponent,
});

function RouteComponent() {
    const styles = pageStyles();
    const tokens = parseTokens();

    return (
        <div className={styles.root}>
            <h1 className={styles.pageTitle}>Font Weights</h1>
            <p className={styles.description}>フォントウェイトのトークン。テキストの太さを定義します。</p>

            <section className={styles.section}>
                <table className={styles.table}>
                    <thead>
                        <tr>
                            <th className={styles.th}>Token</th>
                            <th className={styles.th}>Value</th>
                            <th className={styles.th}>Preview</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tokens.map((token) => (
                            <tr key={token.name}>
                                <td className={styles.td}>
                                    <code>fontWeights.{token.name}</code>
                                </td>
                                <td className={styles.td}>
                                    <code>{token.value}</code>
                                </td>
                                <td className={styles.td}>
                                    <span className={styles.preview} style={{ fontWeight: token.value }}>
                                        The quick brown fox
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </section>
        </div>
    );
}
