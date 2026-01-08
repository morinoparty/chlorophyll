import { createFileRoute } from "@tanstack/react-router";
import { css } from "styled-system/css";
import semanticTokensSpec from "styled-system/specs/semantic-tokens.json";
import { basePageStyles, tableStyles } from "../-styles/page-styles";

// Description mappings for border tokens
const borderWidthDescriptions: Record<string, string> = {
    xs: "最も細いボーダー",
    sm: "標準的なボーダー",
    md: "中程度のボーダー",
    lg: "太いボーダー",
    xl: "最も太いボーダー",
};

const borderColorDescriptions: Record<string, string> = {
    border: "非インタラクティブコンポーネント（カード、セパレータ等）",
    "border.muted": "より微妙なボーダー",
    "border.subtle": "最も微妙なボーダー",
    "border.interactive": "インタラクティブコンポーネント向け",
    "border.emphasized": "フォーカスリング、強調ボーダー",
    "border.error": "エラー状態",
    "border.warning": "警告状態",
    "border.success": "成功状態",
    "border.info": "情報状態",
};

interface BorderWidthToken {
    name: string;
    value: string;
    description: string;
    cssVar: string;
}

interface BorderColorToken {
    name: string;
    reference: string;
    description: string;
    cssVar: string;
}

function parseBorderWidthTokens(): BorderWidthToken[] {
    const bordersData = semanticTokensSpec.data.find((d) => d.type === "borders");
    if (!bordersData) return [];

    return bordersData.values.map((token) => {
        const value = token.values.find((v) => v.condition === "base")?.value || "";
        return {
            name: token.name,
            value,
            description: borderWidthDescriptions[token.name] || "",
            cssVar: token.cssVar,
        };
    });
}

function parseBorderColorTokens(): { scale: BorderColorToken[]; status: BorderColorToken[] } {
    const colorsData = semanticTokensSpec.data.find((d) => d.type === "colors");
    if (!colorsData) return { scale: [], status: [] };

    const scaleNames = ["border", "border.muted", "border.subtle", "border.interactive", "border.emphasized"];
    const statusNames = ["border.error", "border.warning", "border.success", "border.info"];

    const parseTokens = (names: string[]): BorderColorToken[] => {
        return names
            .map((name) => {
                const token = colorsData.values.find((t) => t.name === name);
                if (!token) return null;
                const reference = token.values.find((v) => v.condition === "base")?.value || "";
                return {
                    name: token.name,
                    reference,
                    description: borderColorDescriptions[name] || "",
                    cssVar: token.cssVar,
                };
            })
            .filter((t): t is BorderColorToken => t !== null);
    };

    return {
        scale: parseTokens(scaleNames),
        status: parseTokens(statusNames),
    };
}

export const Route = createFileRoute("/theme/system-tokens/borders")({
    component: RouteComponent,
});

// Preview box style for border demonstrations
const previewBoxStyle = css({
    width: "16",
    height: "10",
    borderRadius: "sm",
});

function RouteComponent() {
    const pageStyles = basePageStyles();
    const tblStyles = tableStyles();
    const borderWidthTokens = parseBorderWidthTokens();
    const { scale: borderColorScale, status: borderStatusTokens } = parseBorderColorTokens();

    return (
        <div className={pageStyles.root}>
            <h1 className={pageStyles.pageTitle}>Borders</h1>
            <p className={pageStyles.description}>
                ボーダートークンは、太さ（width）と色（color）の2種類があります。 Radix
                UIのスケールに基づき、用途に応じた適切なボーダーを提供します。
            </p>
            <section className={pageStyles.section}>
                <h2 className={pageStyles.sectionTitle}>Border Width</h2>
                <div className={tblStyles.tableWrapper}>
                    <table className={tblStyles.table}>
                        <thead>
                            <tr>
                                <th className={tblStyles.th}>Token</th>
                                <th className={tblStyles.th}>Value</th>
                                <th className={tblStyles.th}>Description</th>
                                <th className={tblStyles.th}>Preview</th>
                            </tr>
                        </thead>
                        <tbody>
                            {borderWidthTokens.map((token) => (
                                <tr key={token.name}>
                                    <td className={tblStyles.td}>
                                        <code>borders.{token.name}</code>
                                    </td>
                                    <td className={tblStyles.td}>{token.value}</td>
                                    <td className={tblStyles.td}>{token.description}</td>
                                    <td className={tblStyles.td}>
                                        <div
                                            className={previewBoxStyle}
                                            style={{
                                                border: `${token.cssVar} var(--mpc-colors-border)`,
                                            }}
                                        />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>
            <section className={pageStyles.section}>
                <h2 className={pageStyles.sectionTitle}>Border Color (Radix Scale)</h2>
                <p className={pageStyles.description}>
                    Steps 4-8: ボーダーカラーは、インタラクティブ性に応じて段階的に選択します。
                </p>
                <div className={tblStyles.tableWrapper}>
                    <table className={tblStyles.table}>
                        <thead>
                            <tr>
                                <th className={tblStyles.th}>Token</th>
                                <th className={tblStyles.th}>Description</th>
                                <th className={tblStyles.th}>Preview</th>
                            </tr>
                        </thead>
                        <tbody>
                            {borderColorScale.map((token) => (
                                <tr key={token.name}>
                                    <td className={tblStyles.td}>
                                        <code>{token.name}</code>
                                    </td>
                                    <td className={tblStyles.td}>{token.description}</td>
                                    <td className={tblStyles.td}>
                                        <div
                                            className={previewBoxStyle}
                                            style={{
                                                border: `2px solid ${token.cssVar}`,
                                            }}
                                        />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>
            <section className={pageStyles.section}>
                <h2 className={pageStyles.sectionTitle}>Border Color (Status)</h2>
                <div className={tblStyles.tableWrapper}>
                    <table className={tblStyles.table}>
                        <thead>
                            <tr>
                                <th className={tblStyles.th}>Token</th>
                                <th className={tblStyles.th}>Description</th>
                                <th className={tblStyles.th}>Preview</th>
                            </tr>
                        </thead>
                        <tbody>
                            {borderStatusTokens.map((token) => (
                                <tr key={token.name}>
                                    <td className={tblStyles.td}>
                                        <code>{token.name}</code>
                                    </td>
                                    <td className={tblStyles.td}>{token.description}</td>
                                    <td className={tblStyles.td}>
                                        <div
                                            className={previewBoxStyle}
                                            style={{
                                                border: `2px solid ${token.cssVar}`,
                                            }}
                                        />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>
        </div>
    );
}
