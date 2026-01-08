import { createFileRoute } from "@tanstack/react-router";
import { css } from "styled-system/css";
import { basePageStyles, gridStyles } from "../-styles/page-styles";
import { parseTokensByType } from "./-libs/token-parser";

export const Route = createFileRoute("/theme/reference-tokens/opacity")({
    component: RouteComponent,
});

function RouteComponent() {
    const pageStyles = basePageStyles();
    const tokens = parseTokensByType("opacity");

    return (
        <div className={pageStyles.root}>
            <h1 className={pageStyles.pageTitle}>Opacity</h1>
            <p className={pageStyles.description}>透明度のトークン。要素の透過率を定義します。</p>

            <section className={pageStyles.section}>
                <div
                    className={css(gridStyles.raw().grid, {
                        gridTemplateColumns: "repeat(auto-fill, minmax(80px, 1fr))",
                        gap: "4",
                    })}
                >
                    {tokens.map((token) => (
                        <div key={token.name} className={css(gridStyles.raw().card, { gap: "2" })}>
                            <div
                                className={css(gridStyles.raw().cardPreview, {
                                    width: "16",
                                    height: "16",
                                    borderRadius: "sm",
                                    border: "1px solid",
                                    borderColor: "border.muted",
                                })}
                                style={{ opacity: token.value }}
                            />
                            <div className={css(gridStyles.raw().cardInfo, { gap: "0.5" })}>
                                <span className={css(gridStyles.raw().cardName, { fontSize: "xs" })}>{token.name}</span>
                                <span className={css(gridStyles.raw().cardValue, { fontSize: "2xs" })}>
                                    {token.value}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
