import { createFileRoute } from "@tanstack/react-router";
import { css, sva } from "styled-system/css";
import semanticTokensSpec from "styled-system/specs/semantic-tokens.json";

const radiiPageStyles = sva({
    slots: [
        "root",
        "pageTitle",
        "description",
        "section",
        "sectionTitle",
        "grid",
        "card",
        "preview",
        "info",
        "name",
        "value",
    ],
    base: {
        root: {
            display: "flex",
            flexDirection: "column",
            gap: "8",
        },
        pageTitle: {
            fontSize: "2xl",
            fontWeight: "bold",
            color: "mori.fg",
        },
        description: {
            fontSize: "md",
            color: "mori.fg.muted",
        },
        section: {
            display: "flex",
            flexDirection: "column",
            gap: "6",
        },
        sectionTitle: {
            fontSize: "xl",
            fontWeight: "semibold",
            color: "mori.fg",
        },
        grid: {
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(140px, 1fr))",
            gap: "6",
        },
        card: {
            display: "flex",
            flexDirection: "column",
            gap: "3",
            alignItems: "center",
        },
        preview: {
            width: "20",
            height: "20",
            backgroundColor: "mori.solid",
        },
        info: {
            display: "flex",
            flexDirection: "column",
            gap: "1",
            alignItems: "center",
        },
        name: {
            fontSize: "sm",
            fontWeight: "medium",
            color: "mori.fg",
        },
        value: {
            fontSize: "xs",
            color: "mori.fg.muted",
            fontFamily: "mono",
        },
    },
});

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

export const Route = createFileRoute("/theme/semantic-tokens/radii")({
    component: RouteComponent,
});

function RouteComponent() {
    const styles = radiiPageStyles();

    return (
        <div className={styles.root}>
            <h1 className={styles.pageTitle}>Radii</h1>
            <p className={styles.description}>
                階層的なボーダー半径トークン。Park UIのレイヤーシステムに基づき、
                ネストされたコンポーネント間で一貫した角丸を維持します。
            </p>

            <section className={styles.section}>
                <h2 className={styles.sectionTitle}>Semantic Radius</h2>
                <p className={css({ fontSize: "sm", color: "mori.fg.muted", marginBottom: "4" })}>
                    The <code>default</code> semantic token maps to a reference radius token based on the theme
                    configuration.
                </p>
                <div className={styles.grid}>
                    {semanticRadiiTokens.map((token) => (
                        <div key={token.name} className={styles.card}>
                            <div className={styles.preview} style={{ borderRadius: token.cssVar }} />
                            <div className={styles.info}>
                                <span className={styles.name}>{token.name}</span>
                                <span className={styles.value}>{token.value}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
