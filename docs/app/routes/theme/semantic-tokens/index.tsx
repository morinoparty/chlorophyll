import { createFileRoute } from "@tanstack/react-router";
import { sva } from "styled-system/css";

const bordersPageStyles = sva({
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
        "previewBox",
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
        previewBox: {
            width: "16",
            height: "10",
            borderRadius: "sm",
        },
    },
});

// Border Width Tokens (semantic-token/borders.ts)
const borderWidthTokens = [
    { name: "xs", value: "0.5px solid", description: "最も細いボーダー" },
    { name: "sm", value: "1px solid", description: "標準的なボーダー" },
    { name: "md", value: "2px solid", description: "中程度のボーダー" },
    { name: "lg", value: "4px solid", description: "太いボーダー" },
    { name: "xl", value: "8px solid", description: "最も太いボーダー" },
];

// Border Color Tokens (colors/border.ts)
const borderColorTokens = [
    {
        name: "border",
        reference: "{colors.gray.6}",
        step: 6,
        description: "非インタラクティブコンポーネント（カード、セパレータ等）",
    },
    { name: "border.muted", reference: "{colors.gray.5}", step: 5, description: "より微妙なボーダー" },
    { name: "border.subtle", reference: "{colors.gray.4}", step: 4, description: "最も微妙なボーダー" },
    {
        name: "border.interactive",
        reference: "{colors.gray.7}",
        step: 7,
        description: "インタラクティブコンポーネント向け",
    },
    { name: "border.emphasized", reference: "{colors.gray.8}", step: 8, description: "フォーカスリング、強調ボーダー" },
];

const borderStatusTokens = [
    { name: "border.error", reference: "{colors.red.7}", description: "エラー状態" },
    { name: "border.warning", reference: "{colors.yellow.7}", description: "警告状態" },
    { name: "border.success", reference: "{colors.mori.7}", description: "成功状態" },
    { name: "border.info", reference: "{colors.blue.7}", description: "情報状態" },
];

export const Route = createFileRoute("/theme/semantic-tokens/")({
    component: RouteComponent,
});

function RouteComponent() {
    const styles = bordersPageStyles();

    return (
        <div className={styles.root}>
            <h1 className={styles.pageTitle}>Borders</h1>
            <p className={styles.description}>
                ボーダートークンは、太さ（width）と色（color）の2種類があります。 Radix
                UIのスケールに基づき、用途に応じた適切なボーダーを提供します。
            </p>

            <section className={styles.section}>
                <h2 className={styles.sectionTitle}>Border Width</h2>
                <table className={styles.table}>
                    <thead>
                        <tr>
                            <th className={styles.th}>Token</th>
                            <th className={styles.th}>Value</th>
                            <th className={styles.th}>Description</th>
                            <th className={styles.th}>Preview</th>
                        </tr>
                    </thead>
                    <tbody>
                        {borderWidthTokens.map((token) => (
                            <tr key={token.name}>
                                <td className={styles.td}>
                                    <code>borders.{token.name}</code>
                                </td>
                                <td className={styles.td}>{token.value}</td>
                                <td className={styles.td}>{token.description}</td>
                                <td className={styles.td}>
                                    <div
                                        className={styles.previewBox}
                                        style={{
                                            border: `var(--ma-borders-${token.name}) var(--ma-colors-border)`,
                                        }}
                                    />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </section>

            <section className={styles.section}>
                <h2 className={styles.sectionTitle}>Border Color (Radix Scale)</h2>
                <p className={styles.description}>
                    Steps 4-8: ボーダーカラーは、インタラクティブ性に応じて段階的に選択します。
                </p>
                <table className={styles.table}>
                    <thead>
                        <tr>
                            <th className={styles.th}>Token</th>
                            <th className={styles.th}>Description</th>
                            <th className={styles.th}>Preview</th>
                        </tr>
                    </thead>
                    <tbody>
                        {borderColorTokens.map((token) => (
                            <tr key={token.name}>
                                <td className={styles.td}>
                                    <code>{token.name}</code>
                                </td>
                                <td className={styles.td}>{token.description}</td>
                                <td className={styles.td}>
                                    <div
                                        className={styles.previewBox}
                                        style={{
                                            border: `2px solid var(--ma-colors-${token.name.replace(".", "-")})`,
                                        }}
                                    />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </section>

            <section className={styles.section}>
                <h2 className={styles.sectionTitle}>Border Color (Status)</h2>
                <table className={styles.table}>
                    <thead>
                        <tr>
                            <th className={styles.th}>Token</th>
                            <th className={styles.th}>Description</th>
                            <th className={styles.th}>Preview</th>
                        </tr>
                    </thead>
                    <tbody>
                        {borderStatusTokens.map((token) => (
                            <tr key={token.name}>
                                <td className={styles.td}>
                                    <code>{token.name}</code>
                                </td>
                                <td className={styles.td}>{token.description}</td>
                                <td className={styles.td}>
                                    <div
                                        className={styles.previewBox}
                                        style={{
                                            border: `2px solid var(--ma-colors-${token.name.replace(".", "-")})`,
                                        }}
                                    />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </section>
        </div>
    );
}
