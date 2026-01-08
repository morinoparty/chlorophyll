import { createFileRoute } from "@tanstack/react-router";
import { css } from "styled-system/css";
import semanticTokensSpec from "styled-system/specs/semantic-tokens.json";
import { basePageStyles, gridStyles } from "../-styles/page-styles";

interface RadiusToken {
    name: string;
    value: string;
    cssVar: string;
}

function parseSemanticRadiiTokens(): RadiusToken[] {
    const radiiData = semanticTokensSpec.data.find((d) => d.type === "radii");
    if (!radiiData) return [];

    return radiiData.values.map((token) => {
        const baseValue = token.values.find((v) => v.condition === "base")?.value ?? "";
        return {
            name: token.name,
            value: baseValue,
            cssVar: token.cssVar,
        };
    });
}

const semanticRadiiTokens = parseSemanticRadiiTokens();

export const Route = createFileRoute("/theme/system-tokens/radii")({
    component: RouteComponent,
});

function RouteComponent() {
    const pageStyles = basePageStyles();
    const cardStyles = gridStyles();

    return (
        <div className={pageStyles.root}>
            <h1 className={pageStyles.pageTitle}>Radii</h1>
            <p className={pageStyles.description}>
                階層的なボーダー半径トークン。Park UIのレイヤーシステムに基づき、
                ネストされたコンポーネント間で一貫した角丸を維持します。
            </p>

            <section className={pageStyles.section}>
                <h2 className={pageStyles.sectionTitle}>Semantic Radius</h2>
                <p className={css({ fontSize: "sm", color: "colorPalette.fg.muted", marginBottom: "4" })}>
                    The <code>default</code> semantic token maps to a reference radius token based on the theme
                    configuration.
                </p>
                <div
                    className={css(gridStyles.raw().grid, {
                        gridTemplateColumns: { base: "repeat(3, 1fr)", lg: "repeat(4, 1fr)" },
                    })}
                >
                    {semanticRadiiTokens.map((token) => (
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
