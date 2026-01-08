import { createFileRoute } from "@tanstack/react-router";
import { css } from "styled-system/css";
import { basePageStyles, gridStyles } from "../-styles/page-styles";
import { parseTokensByType } from "./-libs/token-parser";

export const Route = createFileRoute("/theme/reference-tokens/aspect-ratios")({
    component: RouteComponent,
});

function RouteComponent() {
    const pageStyles = basePageStyles();
    const cardStyles = gridStyles();
    const tokens = parseTokensByType("aspectRatios");

    return (
        <div className={pageStyles.root}>
            <h1 className={pageStyles.pageTitle}>Aspect Ratios</h1>
            <p className={pageStyles.description}>アスペクト比トークン。画像やビデオ、コンテナの縦横比を定義します。</p>

            <section className={pageStyles.section}>
                <div
                    className={css(gridStyles.raw().grid, {
                        gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))",
                    })}
                >
                    {tokens.map((token) => (
                        <div key={token.name} className={cardStyles.card}>
                            <div
                                className={css(gridStyles.raw().cardPreview, {
                                    width: "full",
                                    maxWidth: "40",
                                    height: "auto",
                                    backgroundColor: "colorPalette.bg.subtle",
                                    border: "1px solid",
                                    borderColor: "border.muted",
                                    borderRadius: "md",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    color: "colorPalette.fg.muted",
                                    fontSize: "xs",
                                })}
                                style={{ aspectRatio: token.value }}
                            >
                                {token.value}
                            </div>
                            <div className={cardStyles.cardInfo}>
                                <span className={cardStyles.cardName}>{token.name}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
