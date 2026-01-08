import { createFileRoute } from "@tanstack/react-router";
import { basePageStyles, tableStyles } from "../-styles/page-styles";
import { parseTokensByType } from "./-libs/token-parser";

export const Route = createFileRoute("/theme/reference-tokens/durations")({
    component: RouteComponent,
});

function RouteComponent() {
    const pageStyles = basePageStyles();
    const tblStyles = tableStyles();
    const tokens = parseTokensByType("durations");

    return (
        <div className={pageStyles.root}>
            <h1 className={pageStyles.pageTitle}>Durations</h1>
            <p className={pageStyles.description}>
                アニメーションの持続時間トークン。トランジションやアニメーションの長さを定義します。
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
                                        <code>durations.{token.name}</code>
                                    </td>
                                    <td className={tblStyles.td}>
                                        <code>{token.value}</code>
                                    </td>
                                    <td className={tblStyles.td}>
                                        {token.name === "fastest" && "即時フィードバック"}
                                        {token.name === "faster" && "マイクロインタラクション"}
                                        {token.name === "fast" && "ホバー、フォーカス"}
                                        {token.name === "normal" && "標準トランジション"}
                                        {token.name === "slow" && "強調アニメーション"}
                                        {token.name === "slower" && "複雑なアニメーション"}
                                        {token.name === "slowest" && "フルページ遷移"}
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
