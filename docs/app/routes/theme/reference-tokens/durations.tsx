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
    const data = tokensSpec.data.find((d) => d.type === "durations");
    if (!data) return [];
    return data.values.map((t) => ({ name: t.name, value: t.value, cssVar: t.cssVar }));
}

export const Route = createFileRoute("/theme/reference-tokens/durations")({
    component: RouteComponent,
});

function RouteComponent() {
    const styles = pageStyles();
    const tokens = parseTokens();

    return (
        <div className={styles.root}>
            <h1 className={styles.pageTitle}>Durations</h1>
            <p className={styles.description}>
                アニメーションの持続時間トークン。トランジションやアニメーションの長さを定義します。
            </p>

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
                                    <code>durations.{token.name}</code>
                                </td>
                                <td className={styles.td}>
                                    <code>{token.value}</code>
                                </td>
                                <td className={styles.td}>
                                    {token.name === "fastest" && "即時フィードバック"}
                                    {token.name === "faster" && "マイクロインタラクション"}
                                    {token.name === "fast" && "ホバー、フォーカス"}
                                    {token.name === "normal" && "標準トランジション"}
                                    {token.name === "slow" && "強調アニメーション"}
                                    {token.name === "slower" && "複雑なアニメーション"}
                                    {token.name === "slowest" && "フルページ遷移"}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </section>
        </div>
    );
}
