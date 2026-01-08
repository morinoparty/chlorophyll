import { createFileRoute } from "@tanstack/react-router";
import { css } from "styled-system/css";
import { basePageStyles, tableStyles } from "../-styles/page-styles";
import { parseTokensByType } from "./-libs/token-parser";

export const Route = createFileRoute("/theme/reference-tokens/easings")({
    component: RouteComponent,
});

function RouteComponent() {
    const pageStyles = basePageStyles();
    const tblStyles = tableStyles();
    const tokens = parseTokensByType("easings");

    return (
        <div className={pageStyles.root}>
            <h1 className={pageStyles.pageTitle}>Easings</h1>
            <p className={pageStyles.description}>
                イージング関数トークン。アニメーションの加速・減速カーブを定義します。
            </p>

            <section className={pageStyles.section}>
                <div className={tblStyles.tableWrapper}>
                    <table className={tblStyles.table}>
                        <thead>
                            <tr>
                                <th className={tblStyles.th}>Token</th>
                                <th className={tblStyles.th}>Value</th>
                                <th className={tblStyles.th}>用途</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tokens.map((token) => (
                                <tr key={token.name}>
                                    <td className={tblStyles.td}>
                                        <code>easings.{token.name}</code>
                                    </td>
                                    <td className={tblStyles.td}>
                                        <code className={css({ fontSize: "0.75rem" })}>{token.value}</code>
                                    </td>
                                    <td className={tblStyles.td}>
                                        {token.name === "linear" && "一定速度"}
                                        {token.name === "easeIn" && "緩やかに開始"}
                                        {token.name === "easeOut" && "緩やかに終了"}
                                        {token.name === "easeInOut" && "緩やかに開始・終了"}
                                        {token.name === "emphasizedDecelerate" && "強調減速（入場）"}
                                        {token.name === "emphasizedAccelerate" && "強調加速（退場）"}
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
