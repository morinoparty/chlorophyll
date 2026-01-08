import { createFileRoute } from "@tanstack/react-router";
import { basePageStyles, tableStyles } from "../-styles/page-styles";
import { parseTokensByType } from "./-libs/token-parser";

export const Route = createFileRoute("/theme/reference-tokens/font-weights")({
    component: RouteComponent,
});

function RouteComponent() {
    const pageStyles = basePageStyles();
    const tblStyles = tableStyles();
    const tokens = parseTokensByType("fontWeights");

    return (
        <div className={pageStyles.root}>
            <h1 className={pageStyles.pageTitle}>Font Weights</h1>
            <p className={pageStyles.description}>フォントウェイトのトークン。テキストの太さを定義します。</p>

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
                                        <code>fontWeights.{token.name}</code>
                                    </td>
                                    <td className={tblStyles.td}>
                                        <code>{token.value}</code>
                                    </td>
                                    <td className={tblStyles.td}>
                                        <span style={{ fontWeight: token.value }}>The quick brown fox</span>
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
