import { createFileRoute } from "@tanstack/react-router";
import { sva } from "styled-system/css";
import semanticTokensSpec from "styled-system/specs/semantic-tokens.json";

const pageStyles = sva({
    slots: ["root", "pageTitle", "description", "section", "sectionTitle", "table", "th", "td"],
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
    },
});

interface Token {
    name: string;
    value: string;
    cssVar: string;
}

function parseDurationTokens(): Token[] {
    const data = semanticTokensSpec.data.find((d) => d.type === "durations");
    if (!data) return [];
    return data.values.map((t) => {
        const baseValue = t.values.find((v) => v.condition === "base")?.value ?? "";
        return { name: t.name, value: baseValue, cssVar: t.cssVar };
    });
}

function parseEasingTokens(): Token[] {
    const data = semanticTokensSpec.data.find((d) => d.type === "easings");
    if (!data) return [];
    return data.values.map((t) => {
        const baseValue = t.values.find((v) => v.condition === "base")?.value ?? "";
        return { name: t.name, value: baseValue, cssVar: t.cssVar };
    });
}

// 説明マッピング
const durationDescriptions: Record<string, string> = {
    "transition.fast": "マイクロインタラクション（ホバー、フォーカス）",
    "transition.normal": "標準トランジション",
    "transition.slow": "強調アニメーション",
};

const easingDescriptions: Record<string, string> = {
    "transition": "デフォルトイージング",
    "transition.enter": "要素の入場アニメーション",
    "transition.exit": "要素の退場アニメーション",
    "transition.emphasized": "強調されたモーション",
};

export const Route = createFileRoute("/theme/system-tokens/animations")({
    component: RouteComponent,
});

function RouteComponent() {
    const styles = pageStyles();
    const durationTokens = parseDurationTokens();
    const easingTokens = parseEasingTokens();

    return (
        <div className={styles.root}>
            <h1 className={styles.pageTitle}>Animations</h1>
            <p className={styles.description}>
                アニメーション用セマンティックトークン。一貫したモーションデザインを実現します。
            </p>

            <section className={styles.section}>
                <h2 className={styles.sectionTitle}>Duration Tokens</h2>
                <table className={styles.table}>
                    <thead>
                        <tr>
                            <th className={styles.th}>Token</th>
                            <th className={styles.th}>Value</th>
                            <th className={styles.th}>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        {durationTokens.map((token) => (
                            <tr key={token.name}>
                                <td className={styles.td}>
                                    <code>durations.{token.name}</code>
                                </td>
                                <td className={styles.td}>
                                    <code>{token.value}</code>
                                </td>
                                <td className={styles.td}>{durationDescriptions[token.name] || ""}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </section>

            <section className={styles.section}>
                <h2 className={styles.sectionTitle}>Easing Tokens</h2>
                <table className={styles.table}>
                    <thead>
                        <tr>
                            <th className={styles.th}>Token</th>
                            <th className={styles.th}>Value</th>
                            <th className={styles.th}>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        {easingTokens.map((token) => (
                            <tr key={token.name}>
                                <td className={styles.td}>
                                    <code>easings.{token.name}</code>
                                </td>
                                <td className={styles.td}>
                                    <code style={{ fontSize: "0.7rem" }}>{token.value}</code>
                                </td>
                                <td className={styles.td}>{easingDescriptions[token.name] || ""}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </section>
        </div>
    );
}
