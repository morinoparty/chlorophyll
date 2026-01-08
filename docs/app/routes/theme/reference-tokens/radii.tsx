import { createFileRoute } from "@tanstack/react-router";
import { css } from "styled-system/css";
import { basePageStyles, gridStyles } from "../-styles/page-styles";
import { parseTokensByType } from "./-libs/token-parser";

export const Route = createFileRoute("/theme/reference-tokens/radii")({
    component: RouteComponent,
});

function RouteComponent() {
    const pageStyles = basePageStyles();
    const cardStyles = gridStyles();
    const radiiTokens = parseTokensByType("radii");

    return (
        <div className={pageStyles.root}>
            <h1 className={pageStyles.pageTitle}>Border Radius</h1>
            <p className={pageStyles.description}>Border radius tokens for consistent corner rounding.</p>

            <section className={pageStyles.section}>
                <h2 className={pageStyles.sectionTitle}>Radii Scale</h2>
                <div
                    className={css(gridStyles.raw().grid, {
                        gridTemplateColumns: { base: "repeat(3, 1fr)", md: "repeat(4, 1fr)", lg: "repeat(6, 1fr)" },
                    })}
                >
                    {radiiTokens.map((token) => (
                        <div key={token.name} className={cardStyles.card}>
                            <div className={css(gridStyles.raw().cardPreview)} style={{ borderRadius: token.cssVar }} />
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
