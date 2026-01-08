import { createFileRoute } from "@tanstack/react-router";
import { css } from "styled-system/css";
import { basePageStyles, tableStyles } from "../-styles/page-styles";
import { parseTokensByType } from "./-libs/token-parser";

export const Route = createFileRoute("/theme/reference-tokens/line-heights")({
    component: RouteComponent,
});

function RouteComponent() {
    const pageStyles = basePageStyles();
    const tblStyles = tableStyles();
    const tokens = parseTokensByType("lineHeights");

    return (
        <div className={pageStyles.root}>
            <h1 className={pageStyles.pageTitle}>Line Heights</h1>
            <p className={pageStyles.description}>行間のトークン。テキストの読みやすさを調整します。</p>

            <section className={pageStyles.section}>
                <div className={tblStyles.tableWrapper}>
                    <table className={tblStyles.table}>
                        <thead>
                            <tr>
                                <th className={tblStyles.th}>Token</th>
                                <th className={tblStyles.th}>Value</th>
                                <th className={tblStyles.th}>Preview</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tokens.map((token) => (
                                <tr key={token.name}>
                                    <td className={tblStyles.td}>
                                        <code>lineHeights.{token.name}</code>
                                    </td>
                                    <td className={tblStyles.td}>
                                        <code>{token.value}</code>
                                    </td>
                                    <td className={tblStyles.td} style={{ width: "60%" }}>
                                        <span
                                            className={css({ fontSize: "xl", width: "30px" })}
                                            style={{ lineHeight: token.cssVar }}
                                        >
                                            もりのパーティは、Minecraftを中心としたコミュニティです。
                                            <br />
                                            のんびり、ゆったり、気ままに、あそべる「サードプレイス」
                                        </span>
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
