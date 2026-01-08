import { createFileRoute } from "@tanstack/react-router";
import { css } from "styled-system/css";
import semanticTokensSpec from "styled-system/specs/semantic-tokens.json";
import { basePageStyles, tableStyles } from "../-styles/page-styles";

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

export const Route = createFileRoute("/theme/system-tokens/spacing")({
    component: RouteComponent,
});

// Preview bar style for spacing demonstrations
const previewBarStyle = css({
    height: "4",
    backgroundColor: "colorPalette.8",
    borderRadius: "sm",
});

function RouteComponent() {
    const pageStyles = basePageStyles();
    const tblStyles = tableStyles();
    const { padding: paddingTokens, gap: gapTokens, layout: layoutTokens } = parseSpacingTokens();

    return (
        <div className={pageStyles.root}>
            <h1 className={pageStyles.pageTitle}>Spacing</h1>
            <p className={pageStyles.description}>
                コンポーネントとレイアウトのためのセマンティックなスペーシングトークン。
                一貫した間隔を維持しながら、用途に応じた適切なスペースを提供します。
            </p>

            <section className={pageStyles.section}>
                <h2 className={pageStyles.sectionTitle}>Component Padding</h2>
                <div className={tblStyles.tableWrapper}>
                    <table className={tblStyles.table}>
                        <thead>
                            <tr>
                                <th className={tblStyles.th}>Token</th>
                                <th className={tblStyles.th}>Reference</th>
                                <th className={tblStyles.th}>Preview</th>
                            </tr>
                        </thead>
                        <tbody>
                            {paddingTokens.map((token) => (
                                <tr key={token.fullName}>
                                    <td className={tblStyles.td}>
                                        <code>spacing.{token.fullName}</code>
                                    </td>
                                    <td className={tblStyles.td}>
                                        <code>{token.reference}</code>
                                    </td>
                                    <td className={tblStyles.td}>
                                        <div className={css({ display: "flex", alignItems: "center", gap: "2" })}>
                                            <div className={previewBarStyle} style={{ width: token.cssVar }} />
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>

            <section className={pageStyles.section}>
                <h2 className={pageStyles.sectionTitle}>Component Gap</h2>
                <div className={tblStyles.tableWrapper}>
                    <table className={tblStyles.table}>
                        <thead>
                            <tr>
                                <th className={tblStyles.th}>Token</th>
                                <th className={tblStyles.th}>Reference</th>
                                <th className={tblStyles.th}>Preview</th>
                            </tr>
                        </thead>
                        <tbody>
                            {gapTokens.map((token) => (
                                <tr key={token.fullName}>
                                    <td className={tblStyles.td}>
                                        <code>spacing.{token.fullName}</code>
                                    </td>
                                    <td className={tblStyles.td}>
                                        <code>{token.reference}</code>
                                    </td>
                                    <td className={tblStyles.td}>
                                        <div className={css({ display: "flex", alignItems: "center", gap: "2" })}>
                                            <div className={previewBarStyle} style={{ width: token.cssVar }} />
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>

            <section className={pageStyles.section}>
                <h2 className={pageStyles.sectionTitle}>Layout</h2>
                <div className={tblStyles.tableWrapper}>
                    <table className={tblStyles.table}>
                        <thead>
                            <tr>
                                <th className={tblStyles.th}>Token</th>
                                <th className={tblStyles.th}>Reference</th>
                                <th className={tblStyles.th}>Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            {layoutTokens.map((token) => (
                                <tr key={token.fullName}>
                                    <td className={tblStyles.td}>
                                        <code>spacing.{token.fullName}</code>
                                    </td>
                                    <td className={tblStyles.td}>
                                        <code>{token.reference}</code>
                                    </td>
                                    <td className={tblStyles.td}>{token.description}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>
        </div>
    );
}
