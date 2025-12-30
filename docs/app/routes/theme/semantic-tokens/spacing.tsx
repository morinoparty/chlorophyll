import { createFileRoute } from "@tanstack/react-router";
import { sva } from "styled-system/css";

const spacingPageStyles = sva({
    slots: ["root", "pageTitle", "description", "section", "sectionTitle", "table", "th", "td", "preview", "previewBar"],
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
            alignItems: "center",
            gap: "2",
        },
        previewBar: {
            height: "4",
            backgroundColor: "mori.8",
            borderRadius: "sm",
        },
    },
});

const componentSpacingTokens = [
    { category: "padding", name: "xs", reference: "{spacing.1}", value: "0.25rem" },
    { category: "padding", name: "sm", reference: "{spacing.2}", value: "0.5rem" },
    { category: "padding", name: "md", reference: "{spacing.3}", value: "0.75rem" },
    { category: "padding", name: "lg", reference: "{spacing.4}", value: "1rem" },
    { category: "padding", name: "xl", reference: "{spacing.6}", value: "1.5rem" },
    { category: "gap", name: "xs", reference: "{spacing.1}", value: "0.25rem" },
    { category: "gap", name: "sm", reference: "{spacing.2}", value: "0.5rem" },
    { category: "gap", name: "md", reference: "{spacing.3}", value: "0.75rem" },
    { category: "gap", name: "lg", reference: "{spacing.4}", value: "1rem" },
    { category: "gap", name: "xl", reference: "{spacing.6}", value: "1.5rem" },
];

const layoutSpacingTokens = [
    { name: "gutter", reference: "{spacing.4}", value: "1rem", description: "コンテンツ間の標準的な余白" },
    { name: "section", reference: "{spacing.16}", value: "4rem", description: "セクション間の大きな余白" },
];

export const Route = createFileRoute("/theme/semantic-tokens/spacing")({
    component: RouteComponent,
});

function RouteComponent() {
    const styles = spacingPageStyles();

    const paddingTokens = componentSpacingTokens.filter((t) => t.category === "padding");
    const gapTokens = componentSpacingTokens.filter((t) => t.category === "gap");

    return (
        <div className={styles.root}>
            <h1 className={styles.pageTitle}>Spacing</h1>
            <p className={styles.description}>
                コンポーネントとレイアウトのためのセマンティックなスペーシングトークン。
                一貫した間隔を維持しながら、用途に応じた適切なスペースを提供します。
            </p>

            <section className={styles.section}>
                <h2 className={styles.sectionTitle}>Component Padding</h2>
                <table className={styles.table}>
                    <thead>
                        <tr>
                            <th className={styles.th}>Token</th>
                            <th className={styles.th}>Reference</th>
                            <th className={styles.th}>Value</th>
                            <th className={styles.th}>Preview</th>
                        </tr>
                    </thead>
                    <tbody>
                        {paddingTokens.map((token) => (
                            <tr key={`${token.category}-${token.name}`}>
                                <td className={styles.td}>
                                    <code>spacing.component.padding.{token.name}</code>
                                </td>
                                <td className={styles.td}>
                                    <code>{token.reference}</code>
                                </td>
                                <td className={styles.td}>{token.value}</td>
                                <td className={styles.td}>
                                    <div className={styles.preview}>
                                        <div
                                            className={styles.previewBar}
                                            style={{
                                                width: `calc(${token.value} * 4)`,
                                            }}
                                        />
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </section>

            <section className={styles.section}>
                <h2 className={styles.sectionTitle}>Component Gap</h2>
                <table className={styles.table}>
                    <thead>
                        <tr>
                            <th className={styles.th}>Token</th>
                            <th className={styles.th}>Reference</th>
                            <th className={styles.th}>Value</th>
                            <th className={styles.th}>Preview</th>
                        </tr>
                    </thead>
                    <tbody>
                        {gapTokens.map((token) => (
                            <tr key={`${token.category}-${token.name}`}>
                                <td className={styles.td}>
                                    <code>spacing.component.gap.{token.name}</code>
                                </td>
                                <td className={styles.td}>
                                    <code>{token.reference}</code>
                                </td>
                                <td className={styles.td}>{token.value}</td>
                                <td className={styles.td}>
                                    <div className={styles.preview}>
                                        <div
                                            className={styles.previewBar}
                                            style={{
                                                width: `calc(${token.value} * 4)`,
                                            }}
                                        />
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </section>

            <section className={styles.section}>
                <h2 className={styles.sectionTitle}>Layout</h2>
                <table className={styles.table}>
                    <thead>
                        <tr>
                            <th className={styles.th}>Token</th>
                            <th className={styles.th}>Reference</th>
                            <th className={styles.th}>Value</th>
                            <th className={styles.th}>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        {layoutSpacingTokens.map((token) => (
                            <tr key={token.name}>
                                <td className={styles.td}>
                                    <code>spacing.layout.{token.name}</code>
                                </td>
                                <td className={styles.td}>
                                    <code>{token.reference}</code>
                                </td>
                                <td className={styles.td}>{token.value}</td>
                                <td className={styles.td}>{token.description}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </section>
        </div>
    );
}
