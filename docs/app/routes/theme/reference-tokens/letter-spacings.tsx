import { createFileRoute } from "@tanstack/react-router";
import { css } from "styled-system/css";
import { basePageStyles, tableStyles } from "../-styles/page-styles";
import { parseTokensByType } from "./-libs/token-parser";

export const Route = createFileRoute("/theme/reference-tokens/letter-spacings")({
    component: RouteComponent,
});

function RouteComponent() {
    const pageStyles = basePageStyles();
    const tblStyles = tableStyles();
    const tokens = parseTokensByType("letterSpacings");

    return (
        <div className={pageStyles.root}>
            <h1 className={pageStyles.pageTitle}>Letter Spacings</h1>
            <p className={pageStyles.description}>文字間隔のトークン。テキストのトラッキングを調整します。</p>

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
                                        <code>letterSpacings.{token.name}</code>
                                    </td>
                                    <td className={tblStyles.td}>
                                        <code>{token.value}</code>
                                    </td>
                                    <td className={tblStyles.td}>
                                        <span
                                            className={css({ fontSize: "lg" })}
                                            style={{ letterSpacing: token.value }}
                                        >
                                            LETTER SPACING
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
