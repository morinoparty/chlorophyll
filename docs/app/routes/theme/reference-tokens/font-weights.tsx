import { createFileRoute } from "@tanstack/react-router";
import { parseTokensByType } from "./-libs/token-parser";
import { tablePageStyles } from "./-style/page-styles";

export const Route = createFileRoute("/theme/reference-tokens/font-weights")({
    component: RouteComponent,
});

function RouteComponent() {
    const styles = tablePageStyles();
    const tokens = parseTokensByType("fontWeights");

    return (
        <div className={styles.root}>
            <h1 className={styles.pageTitle}>Font Weights</h1>
            <p className={styles.description}>フォントウェイトのトークン。テキストの太さを定義します。</p>

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
                                    <code>fontWeights.{token.name}</code>
                                </td>
                                <td className={styles.td}>
                                    <code>{token.value}</code>
                                </td>
                                <td className={styles.td}>
                                    <span style={{ fontWeight: token.value }}>The quick brown fox</span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </section>
        </div>
    );
}
