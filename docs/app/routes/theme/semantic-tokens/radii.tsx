import { createFileRoute } from "@tanstack/react-router";
import { sva } from "styled-system/css";

const radiiPageStyles = sva({
    slots: ["root", "pageTitle", "description", "section", "sectionTitle", "table", "th", "td", "preview", "previewBox"],
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
        table: {
            width: "full",
            borderCollapse: "collapse",
        },
        th: {
            textAlign: "left",
            padding: "3",
            fontSize: "sm",
            fontWeight: "semibold",
            color: "mori.fg.muted",
            borderBottom: "1px solid",
            borderColor: "mori.bg.emphasized",
        },
        td: {
            padding: "3",
            fontSize: "sm",
            color: "mori.fg",
            borderBottom: "1px solid",
            borderColor: "mori.bg.muted",
            verticalAlign: "middle",
        },
        preview: {
            display: "flex",
            gap: "6",
            alignItems: "center",
        },
        previewBox: {
            width: "16",
            height: "16",
            backgroundColor: "mori.8",
        },
    },
});

const radiiTokens = [
    {
        name: "l1",
        reference: "{radii.sm}",
        description: "ボタン、入力フィールドなどの基本要素",
        usage: "Button, Input, Badge",
    },
    {
        name: "l2",
        reference: "{radii.md}",
        description: "カード内の要素、l1を含むコンポーネント",
        usage: "Card content, Nested components",
    },
    {
        name: "l3",
        reference: "{radii.lg}",
        description: "カード、パネルなどの複合要素",
        usage: "Card, Panel, Dialog",
    },
];

export const Route = createFileRoute("/theme/semantic-tokens/radii")({
    component: RouteComponent,
});

function RouteComponent() {
    const styles = radiiPageStyles();

    return (
        <div className={styles.root}>
            <h1 className={styles.pageTitle}>Radii</h1>
            <p className={styles.description}>
                階層的なボーダー半径トークン。Park UIのレイヤーシステムに基づき、
                ネストされたコンポーネント間で一貫した角丸を維持します。
            </p>

            <section className={styles.section}>
                <h2 className={styles.sectionTitle}>Layer System</h2>
                <table className={styles.table}>
                    <thead>
                        <tr>
                            <th className={styles.th}>Token</th>
                            <th className={styles.th}>Reference</th>
                            <th className={styles.th}>Description</th>
                            <th className={styles.th}>Usage</th>
                            <th className={styles.th}>Preview</th>
                        </tr>
                    </thead>
                    <tbody>
                        {radiiTokens.map((token) => (
                            <tr key={token.name}>
                                <td className={styles.td}>
                                    <code>radii.{token.name}</code>
                                </td>
                                <td className={styles.td}>
                                    <code>{token.reference}</code>
                                </td>
                                <td className={styles.td}>{token.description}</td>
                                <td className={styles.td}>{token.usage}</td>
                                <td className={styles.td}>
                                    <div
                                        className={styles.previewBox}
                                        style={{
                                            borderRadius: `var(--ma-radii-${token.name})`,
                                        }}
                                    />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </section>

            <section className={styles.section}>
                <h2 className={styles.sectionTitle}>Hierarchy Example</h2>
                <div className={styles.preview}>
                    <div
                        style={{
                            padding: "16px",
                            backgroundColor: "var(--ma-colors-mori-3)",
                            borderRadius: "var(--ma-radii-l3)",
                        }}
                    >
                        <div style={{ marginBottom: "8px", fontSize: "12px", color: "var(--ma-colors-mori-fg-muted)" }}>
                            Card (l3)
                        </div>
                        <div
                            style={{
                                padding: "12px",
                                backgroundColor: "var(--ma-colors-mori-4)",
                                borderRadius: "var(--ma-radii-l2)",
                            }}
                        >
                            <div style={{ marginBottom: "8px", fontSize: "12px", color: "var(--ma-colors-mori-fg-muted)" }}>
                                Content (l2)
                            </div>
                            <button
                                type="button"
                                style={{
                                    padding: "8px 16px",
                                    backgroundColor: "var(--ma-colors-mori-9)",
                                    color: "white",
                                    border: "none",
                                    borderRadius: "var(--ma-radii-l1)",
                                    fontSize: "14px",
                                    cursor: "pointer",
                                }}
                            >
                                Button (l1)
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
