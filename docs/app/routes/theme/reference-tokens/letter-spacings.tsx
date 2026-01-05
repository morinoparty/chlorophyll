import { createFileRoute } from "@tanstack/react-router";
import { css } from "styled-system/css";
import { parseTokensByType } from "./-libs/token-parser";
import { tablePageStyles } from "./-style/page-styles";

export const Route = createFileRoute("/theme/reference-tokens/letter-spacings")({
    component: RouteComponent,
});

function RouteComponent() {
    const styles = tablePageStyles();
    const tokens = parseTokensByType("letterSpacings");

    return (
        <div className={styles.root}>
            <h1 className={styles.pageTitle}>Letter Spacings</h1>
            <p className={styles.description}>文字間隔のトークン。テキストのトラッキングを調整します。</p>

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
                                    <code>letterSpacings.{token.name}</code>
                                </td>
                                <td className={styles.td}>
                                    <code>{token.value}</code>
                                </td>
                                <td className={styles.td}>
                                    <span className={css({ fontSize: "lg" })} style={{ letterSpacing: token.value }}>
                                        LETTER SPACING
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
