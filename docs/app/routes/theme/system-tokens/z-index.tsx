import { createFileRoute } from "@tanstack/react-router";
import { css } from "styled-system/css";
import { basePageStyles, tableStyles } from "../-styles/page-styles";

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

export const Route = createFileRoute("/theme/system-tokens/z-index")({
    component: RouteComponent,
});

// Styles for z-index preview
const previewContainerStyle = css({
    position: "relative",
    height: "32",
    backgroundColor: "colorPalette.bg.muted",
    borderRadius: "md",
    overflow: "hidden",
    border: "sm",
    borderColor: "border",
});

const previewLayerStyle = css({
    position: "absolute",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "xs",
    fontWeight: "medium",
    color: "white",
    borderRadius: "sm",
});

function RouteComponent() {
    const pageStyles = basePageStyles();
    const tblStyles = tableStyles();

    return (
        <div className={pageStyles.root}>
            <h1 className={pageStyles.pageTitle}>Z-Index</h1>
            <p className={pageStyles.description}>
                UIコンポーネントの重なり順を管理するためのz-indexトークン。
                各層には明確な意図があり、コンポーネント間の適切な重なり順を保証します。
            </p>

            <section className={pageStyles.section}>
                <h2 className={pageStyles.sectionTitle}>Tokens</h2>
                <div className={tblStyles.tableWrapper}>
                    <table className={tblStyles.table}>
                        <thead>
                            <tr>
                                <th className={tblStyles.th}>Token</th>
                                <th className={tblStyles.th}>Value</th>
                                <th className={tblStyles.th}>Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            {zIndexTokens.map((token) => (
                                <tr key={token.name}>
                                    <td className={tblStyles.td}>
                                        <code>zIndex.{token.name}</code>
                                    </td>
                                    <td className={tblStyles.td}>{token.value}</td>
                                    <td className={tblStyles.td}>{token.description}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>

            <section className={pageStyles.section}>
                <h2 className={pageStyles.sectionTitle}>Layer Hierarchy</h2>
                <div className={previewContainerStyle}>
                    <div
                        className={previewLayerStyle}
                        style={{
                            left: "8px",
                            top: "8px",
                            width: "80px",
                            height: "80px",
                            backgroundColor: "var(--mpc-colors-gray-8)",
                            zIndex: 0,
                        }}
                    >
                        base
                    </div>
                    <div
                        className={previewLayerStyle}
                        style={{
                            left: "40px",
                            top: "24px",
                            width: "80px",
                            height: "60px",
                            backgroundColor: "var(--mpc-colors-blue-8)",
                            zIndex: 1000,
                        }}
                    >
                        dropdown
                    </div>
                    <div
                        className={previewLayerStyle}
                        style={{
                            left: "72px",
                            top: "40px",
                            width: "80px",
                            height: "60px",
                            backgroundColor: "var(--mpc-colors-mori-8)",
                            zIndex: 1400,
                        }}
                    >
                        modal
                    </div>
                    <div
                        className={previewLayerStyle}
                        style={{
                            left: "104px",
                            top: "56px",
                            width: "70px",
                            height: "40px",
                            backgroundColor: "var(--mpc-colors-yellow-8)",
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
