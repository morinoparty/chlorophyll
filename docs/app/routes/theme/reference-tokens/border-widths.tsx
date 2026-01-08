import { createFileRoute } from "@tanstack/react-router";
import { css } from "styled-system/css";
import { basePageStyles, gridStyles } from "../-styles/page-styles";
import { parseTokensByType } from "./-libs/token-parser";

export const Route = createFileRoute("/theme/reference-tokens/border-widths")({
    component: RouteComponent,
});

function RouteComponent() {
    const pageStyles = basePageStyles();
    const cardStyles = gridStyles();
    const tokens = parseTokensByType("borderWidths");

    return (
        <div className={pageStyles.root}>
            <h1 className={pageStyles.pageTitle}>Border Widths</h1>
            <p className={pageStyles.description}>ボーダー幅のトークン。線の太さを定義します。</p>

            <section className={pageStyles.section}>
                <div
                    className={css(gridStyles.raw().grid, {
                        gridTemplateColumns: "repeat(auto-fill, minmax(100px, 1fr))",
                    })}
                >
                    {tokens.map((token) => (
                        <div key={token.name} className={cardStyles.card}>
                            <div
                                className={css(gridStyles.raw().cardPreview, {
                                    backgroundColor: "colorPalette.bg.subtle",
                                    borderColor: "colorPalette.solid",
                                    borderStyle: "solid",
                                    borderRadius: "md",
                                })}
                                style={{ borderWidth: token.value }}
                            />
                            <div className={cardStyles.cardInfo}>
                                <span className={cardStyles.cardName}>{token.name}</span>
                                <span className={cardStyles.cardValue}>{token.value}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
