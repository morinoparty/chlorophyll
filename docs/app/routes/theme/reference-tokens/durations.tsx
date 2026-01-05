import { createFileRoute } from "@tanstack/react-router";
import { parseTokensByType } from "./-libs/token-parser";
import { tablePageStyles } from "./-style/page-styles";

export const Route = createFileRoute("/theme/reference-tokens/durations")({
    component: RouteComponent,
});

function RouteComponent() {
    const styles = tablePageStyles();
    const tokens = parseTokensByType("durations");

    return (
        <div className={styles.root}>
            <h1 className={styles.pageTitle}>Durations</h1>
            <p className={styles.description}>
                アニメーションの持続時間トークン。トランジションやアニメーションの長さを定義します。
            </p>

            <section className={styles.section}>
                <table className={styles.table}>
                    <thead>
                        <tr>
                            <th className={styles.th}>Token</th>
                            <th className={styles.th}>Value</th>
                            <th className={styles.th}>用途</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tokens.map((token) => (
                            <tr key={token.name}>
                                <td className={styles.td}>
                                    <code>durations.{token.name}</code>
                                </td>
                                <td className={styles.td}>
                                    <code>{token.value}</code>
                                </td>
                                <td className={styles.td}>
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
            </section>
        </div>
    );
}
