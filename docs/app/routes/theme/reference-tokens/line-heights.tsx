import { createFileRoute } from "@tanstack/react-router";
import { css } from "styled-system/css";
import { parseTokensByType } from "./-libs/token-parser";
import { tablePageStyles } from "./-style/page-styles";

export const Route = createFileRoute("/theme/reference-tokens/line-heights")({
    component: RouteComponent,
});

function RouteComponent() {
    const styles = tablePageStyles();
    const tokens = parseTokensByType("lineHeights");

    return (
        <div className={styles.root}>
            <h1 className={styles.pageTitle}>Line Heights</h1>
            <p className={styles.description}>行間のトークン。テキストの読みやすさを調整します。</p>

            <section className={styles.section}>
                <table className={styles.table}>
                    <thead>
                        <tr>
                            <th className={styles.th}>Token</th>
                            <th className={styles.th}>Value</th>
                            <th className={styles.th}>Preview</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tokens.map((token) => (
                            <tr key={token.name}>
                                <td className={styles.td}>
                                    <code>lineHeights.{token.name}</code>
                                </td>
                                <td className={styles.td}>
                                    <code>{token.value}</code>
                                </td>
                                <td className={styles.td} style={{ width: "60%" }}>
                                    <span
                                        className={css({ fontSize: "xl", width: "30px" })}
                                        style={{ lineHeight: token.cssVar }}
                                    >
                                        もりのパーティは、Minecraftを中心としたコミュニティです。
                                        のんびり、ゆったり、気ままに、あそべる「サードプレイス」
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </section>
        </div>
    );
}
