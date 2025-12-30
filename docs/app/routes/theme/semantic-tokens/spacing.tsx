import { createFileRoute } from "@tanstack/react-router";
import { sva } from "styled-system/css";
import semanticTokensSpec from "styled-system/specs/semantic-tokens.json";

const spacingPageStyles = sva({
    slots: [
        "root",
        "pageTitle",
        "description",
        "section",
        "sectionTitle",
        "table",
        "th",
        "td",
        "preview",
        "previewBar",
    ],
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

// Description mappings for layout tokens
const layoutDescriptions: Record<string, string> = {
    "layout.gutter": "コンテンツ間の標準的な余白",
    "layout.section": "セクション間の大きな余白",
};

interface SpacingToken {
    name: string;
    fullName: string;
    reference: string;
    cssVar: string;
}

interface LayoutSpacingToken extends SpacingToken {
    description: string;
}

function parseSpacingTokens(): {
    padding: SpacingToken[];
    gap: SpacingToken[];
    layout: LayoutSpacingToken[];
} {
    const spacingData = semanticTokensSpec.data.find((d) => d.type === "spacing");
    if (!spacingData) return { padding: [], gap: [], layout: [] };

    const padding: SpacingToken[] = [];
    const gap: SpacingToken[] = [];
    const layout: LayoutSpacingToken[] = [];

    for (const token of spacingData.values) {
        const reference = token.values.find((v) => v.condition === "base")?.value || "";

        if (token.name.startsWith("component.padding.")) {
            const name = token.name.replace("component.padding.", "");
            padding.push({
                name,
                fullName: token.name,
                reference,
                cssVar: token.cssVar,
            });
        } else if (token.name.startsWith("component.gap.")) {
            const name = token.name.replace("component.gap.", "");
            gap.push({
                name,
                fullName: token.name,
                reference,
                cssVar: token.cssVar,
            });
        } else if (token.name.startsWith("layout.")) {
            const name = token.name.replace("layout.", "");
            layout.push({
                name,
                fullName: token.name,
                reference,
                description: layoutDescriptions[token.name] || "",
                cssVar: token.cssVar,
            });
        }
    }

    return { padding, gap, layout };
}

export const Route = createFileRoute("/theme/semantic-tokens/spacing")({
    component: RouteComponent,
});

function RouteComponent() {
    const styles = spacingPageStyles();
    const { padding: paddingTokens, gap: gapTokens, layout: layoutTokens } = parseSpacingTokens();

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
                            <th className={styles.th}>Preview</th>
                        </tr>
                    </thead>
                    <tbody>
                        {paddingTokens.map((token) => (
                            <tr key={token.fullName}>
                                <td className={styles.td}>
                                    <code>spacing.{token.fullName}</code>
                                </td>
                                <td className={styles.td}>
                                    <code>{token.reference}</code>
                                </td>
                                <td className={styles.td}>
                                    <div className={styles.preview}>
                                        <div
                                            className={styles.previewBar}
                                            style={{
                                                width: token.cssVar,
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
                            <th className={styles.th}>Preview</th>
                        </tr>
                    </thead>
                    <tbody>
                        {gapTokens.map((token) => (
                            <tr key={token.fullName}>
                                <td className={styles.td}>
                                    <code>spacing.{token.fullName}</code>
                                </td>
                                <td className={styles.td}>
                                    <code>{token.reference}</code>
                                </td>
                                <td className={styles.td}>
                                    <div className={styles.preview}>
                                        <div
                                            className={styles.previewBar}
                                            style={{
                                                width: token.cssVar,
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
                            <th className={styles.th}>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        {layoutTokens.map((token) => (
                            <tr key={token.fullName}>
                                <td className={styles.td}>
                                    <code>spacing.{token.fullName}</code>
                                </td>
                                <td className={styles.td}>
                                    <code>{token.reference}</code>
                                </td>
                                <td className={styles.td}>{token.description}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </section>
        </div>
    );
}
