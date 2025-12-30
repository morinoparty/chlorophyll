import { createFileRoute } from "@tanstack/react-router";
import { sva } from "styled-system/css";

const zIndexPageStyles = sva({
    slots: ["root", "pageTitle", "description", "section", "sectionTitle", "table", "th", "td", "preview", "previewLayer"],
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
            position: "relative",
            height: "32",
            backgroundColor: "mori.bg.muted",
            borderRadius: "md",
            overflow: "hidden",
        },
        previewLayer: {
            position: "absolute",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "xs",
            fontWeight: "medium",
            color: "white",
            borderRadius: "sm",
        },
    },
});

const zIndexTokens = [
    { name: "hide", value: -1, description: "非表示要素" },
    { name: "base", value: 0, description: "デフォルト層" },
    { name: "docked", value: 10, description: "ドッキング要素" },
    { name: "dropdown", value: 1000, description: "ドロップダウンメニュー" },
    { name: "sticky", value: 1100, description: "スティッキー要素" },
    { name: "banner", value: 1200, description: "バナー" },
    { name: "overlay", value: 1300, description: "オーバーレイ" },
    { name: "modal", value: 1400, description: "モーダルダイアログ" },
    { name: "popover", value: 1500, description: "ポップオーバー" },
    { name: "skipNav", value: 1600, description: "スキップナビゲーション" },
    { name: "toast", value: 1700, description: "トースト通知" },
    { name: "tooltip", value: 1800, description: "ツールチップ" },
    { name: "max", value: 2147483647, description: "最大値" },
];

export const Route = createFileRoute("/theme/semantic-tokens/z-index")({
    component: RouteComponent,
});

function RouteComponent() {
    const styles = zIndexPageStyles();

    return (
        <div className={styles.root}>
            <h1 className={styles.pageTitle}>Z-Index</h1>
            <p className={styles.description}>
                UIコンポーネントの重なり順を管理するためのz-indexトークン。
                各層には明確な意図があり、コンポーネント間の適切な重なり順を保証します。
            </p>

            <section className={styles.section}>
                <h2 className={styles.sectionTitle}>Tokens</h2>
                <table className={styles.table}>
                    <thead>
                        <tr>
                            <th className={styles.th}>Token</th>
                            <th className={styles.th}>Value</th>
                            <th className={styles.th}>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        {zIndexTokens.map((token) => (
                            <tr key={token.name}>
                                <td className={styles.td}>
                                    <code>zIndex.{token.name}</code>
                                </td>
                                <td className={styles.td}>{token.value}</td>
                                <td className={styles.td}>{token.description}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </section>

            <section className={styles.section}>
                <h2 className={styles.sectionTitle}>Layer Hierarchy</h2>
                <div className={styles.preview}>
                    <div
                        className={styles.previewLayer}
                        style={{
                            left: "8px",
                            top: "8px",
                            width: "80px",
                            height: "80px",
                            backgroundColor: "var(--ma-colors-gray-8)",
                            zIndex: 0,
                        }}
                    >
                        base
                    </div>
                    <div
                        className={styles.previewLayer}
                        style={{
                            left: "40px",
                            top: "24px",
                            width: "80px",
                            height: "60px",
                            backgroundColor: "var(--ma-colors-blue-8)",
                            zIndex: 1000,
                        }}
                    >
                        dropdown
                    </div>
                    <div
                        className={styles.previewLayer}
                        style={{
                            left: "72px",
                            top: "40px",
                            width: "80px",
                            height: "60px",
                            backgroundColor: "var(--ma-colors-mori-8)",
                            zIndex: 1400,
                        }}
                    >
                        modal
                    </div>
                    <div
                        className={styles.previewLayer}
                        style={{
                            left: "104px",
                            top: "56px",
                            width: "70px",
                            height: "40px",
                            backgroundColor: "var(--ma-colors-yellow-8)",
                            zIndex: 1800,
                        }}
                    >
                        tooltip
                    </div>
                </div>
            </section>
        </div>
    );
}
