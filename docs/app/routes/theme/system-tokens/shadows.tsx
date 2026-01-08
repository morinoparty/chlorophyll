import { createFileRoute } from "@tanstack/react-router";
import { css } from "styled-system/css";
import semanticTokensSpec from "styled-system/specs/semantic-tokens.json";
import { basePageStyles, gridStyles } from "../-styles/page-styles";

interface ShadowToken {
    name: string;
    light: string;
    dark: string;
    cssVar: string;
}

function parseShadowTokens(): ShadowToken[] {
    const shadowsData = semanticTokensSpec.data.find((d) => d.type === "shadows");
    if (!shadowsData) return [];

    return shadowsData.values.map((token) => {
        const lightValue = token.values.find((v) => v.condition === "light")?.value;
        const darkValue = token.values.find((v) => v.condition === "dark")?.value;
        const baseValue = token.values.find((v) => v.condition === "base")?.value;

        return {
            name: token.name,
            light: lightValue || baseValue || "",
            dark: darkValue || baseValue || "",
            cssVar: token.cssVar,
        };
    });
}

export const Route = createFileRoute("/theme/system-tokens/shadows")({
    component: RouteComponent,
});

function RouteComponent() {
    const pageStyles = basePageStyles();
    const cardStyles = gridStyles();
    const shadowTokens = parseShadowTokens();

    return (
        <div className={pageStyles.root}>
            <h1 className={pageStyles.pageTitle}>Shadows</h1>
            <p className={pageStyles.description}>
                要素に奥行きと立体感を与えるためのシャドウトークン。
                ライトモードとダークモードで適切な影の強さを自動的に切り替えます。
            </p>

            <section className={pageStyles.section}>
                <h2 className={pageStyles.sectionTitle}>Shadow Scale</h2>
                <div
                    className={css(gridStyles.raw().grid, {
                        gridTemplateColumns: { base: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" },
                    })}
                >
                    {shadowTokens.map((token) => (
                        <div key={token.name} className={cardStyles.card}>
                            <div
                                className={css(gridStyles.raw().cardPreview, {
                                    width: "full",
                                    height: "32",
                                    backgroundColor: "colorPalette.bg",
                                    borderRadius: "lg",
                                })}
                                style={{ boxShadow: token.cssVar }}
                            />
                            <div className={cardStyles.cardInfo}>
                                <span className={cardStyles.cardName}>shadows.{token.name}</span>
                                <span className={cardStyles.cardValue}>{token.light}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
