import { createFileRoute } from "@tanstack/react-router";
import { sva } from "styled-system/css";
import tokensSpec from "styled-system/specs/tokens.json";

const pageStyles = sva({
    slots: ["root", "pageTitle", "description", "section", "table", "th", "td"],
    base: {
        root: { display: "flex", flexDirection: "column", gap: "8" },
        pageTitle: { fontSize: "2xl", fontWeight: "bold", color: "colorPalette.fg" },
        description: { fontSize: "md", color: "colorPalette.fg.muted" },
        section: { display: "flex", flexDirection: "column", gap: "6" },
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
    },
});

interface Token {
    name: string;
    value: string;
    cssVar: string;
}

function parseTokens(): Token[] {
    const data = tokensSpec.data.find((d) => d.type === "easings");
    if (!data) return [];
    return data.values.map((t) => ({ name: t.name, value: t.value, cssVar: t.cssVar }));
}

export const Route = createFileRoute("/theme/reference-tokens/easings")({
    component: RouteComponent,
});

function RouteComponent() {
    const styles = pageStyles();
    const tokens = parseTokens();

    return (
        <div className={styles.root}>
            <h1 className={styles.pageTitle}>Easings</h1>
            <p className={styles.description}>イージング関数トークン。アニメーションの加速・減速カーブを定義します。</p>

            <section className={styles.section}>
                <table className={styles.table}>
                    <thead>
                        <tr>
                            <th className={styles.th}>Token</th>
                            <th className={styles.th}>Value</th>
                            <th className={styles.th}>用途</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tokens.map((token) => (
                            <tr key={token.name}>
                                <td className={styles.td}>
                                    <code>easings.{token.name}</code>
                                </td>
                                <td className={styles.td}>
                                    <code style={{ fontSize: "0.75rem" }}>{token.value}</code>
                                </td>
                                <td className={styles.td}>
                                    {token.name === "linear" && "一定速度"}
                                    {token.name === "easeIn" && "緩やかに開始"}
                                    {token.name === "easeOut" && "緩やかに終了"}
                                    {token.name === "easeInOut" && "緩やかに開始・終了"}
                                    {token.name === "emphasizedDecelerate" && "強調減速（入場）"}
                                    {token.name === "emphasizedAccelerate" && "強調加速（退場）"}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </section>
        </div>
    );
}
