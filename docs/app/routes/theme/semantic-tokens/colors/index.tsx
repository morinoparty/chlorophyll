import { createFileRoute } from "@tanstack/react-router";
import { sva } from "styled-system/css";
import semanticTokensSpec from "styled-system/specs/semantic-tokens.json";
import { SemanticColorDisplay } from "../../-components/semantic-color-display";

const semanticColorsPageStyles = sva({
    slots: ["root", "pageTitle", "description", "section", "sectionTitle", "grid"],
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
            gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
            gap: "6",
        },
    },
});

interface SemanticColorToken {
    name: string;
    light: string;
    dark: string;
    cssVar: string;
}

function parseColorTokens(): SemanticColorToken[] {
    const colorsData = semanticTokensSpec.data.find((d) => d.type === "colors");
    if (!colorsData) return [];

    return colorsData.values.map((token) => {
        const lightValue = token.values.find((v) => v.condition === "light")?.value ?? "";
        const darkValue = token.values.find((v) => v.condition === "dark")?.value ?? "";
        return {
            name: token.name,
            light: lightValue,
            dark: darkValue,
            cssVar: token.cssVar,
        };
    });
}

function categorizeTokens(tokens: SemanticColorToken[]) {
    const bgTokens = tokens.filter((t) => t.name.includes(".bg") && !t.name.match(/\.(error|warning|success|info)$/));
    const bgStatusTokens = tokens.filter((t) => t.name.includes(".bg.") && t.name.match(/\.(error|warning|success|info)$/));
    const fgTokens = tokens.filter((t) => t.name.includes(".fg") && !t.name.match(/\.(error|warning|success|info)$/));
    const fgStatusTokens = tokens.filter((t) => t.name.includes(".fg.") && t.name.match(/\.(error|warning|success|info)$/));
    const otherTokens = tokens.filter((t) => !t.name.includes(".bg") && !t.name.includes(".fg"));

    return { bgTokens, bgStatusTokens, fgTokens, fgStatusTokens, otherTokens };
}

export const Route = createFileRoute("/theme/semantic-tokens/colors/")({
    component: RouteComponent,
});

function RouteComponent() {
    const styles = semanticColorsPageStyles();
    const allTokens = parseColorTokens();
    const { bgTokens, bgStatusTokens, fgTokens, fgStatusTokens, otherTokens } = categorizeTokens(allTokens);

    return (
        <div className={styles.root}>
            <h1 className={styles.pageTitle}>Semantic Color Token</h1>
            <p className={styles.description}>
                Semantic tokens map to reference tokens and change based on the color mode (light/dark).
            </p>

            <section className={styles.section}>
                <h2 className={styles.sectionTitle}>Background</h2>
                <div className={styles.grid}>
                    {bgTokens.map((token) => (
                        <SemanticColorDisplay
                            key={token.name}
                            tokenKey={token.name}
                            lightValue={token.light}
                            darkValue={token.dark}
                        />
                    ))}
                </div>
            </section>

            <section className={styles.section}>
                <h2 className={styles.sectionTitle}>Background (Status)</h2>
                <div className={styles.grid}>
                    {bgStatusTokens.map((token) => (
                        <SemanticColorDisplay
                            key={token.name}
                            tokenKey={token.name}
                            lightValue={token.light}
                            darkValue={token.dark}
                        />
                    ))}
                </div>
            </section>

            <section className={styles.section}>
                <h2 className={styles.sectionTitle}>Foreground</h2>
                <div className={styles.grid}>
                    {fgTokens.map((token) => (
                        <SemanticColorDisplay
                            key={token.name}
                            tokenKey={token.name}
                            lightValue={token.light}
                            darkValue={token.dark}
                        />
                    ))}
                </div>
            </section>

            <section className={styles.section}>
                <h2 className={styles.sectionTitle}>Foreground (Status)</h2>
                <div className={styles.grid}>
                    {fgStatusTokens.map((token) => (
                        <SemanticColorDisplay
                            key={token.name}
                            tokenKey={token.name}
                            lightValue={token.light}
                            darkValue={token.dark}
                        />
                    ))}
                </div>
            </section>

            <section className={styles.section}>
                <h2 className={styles.sectionTitle}>Other</h2>
                <div className={styles.grid}>
                    {otherTokens.map((token) => (
                        <SemanticColorDisplay
                            key={token.name}
                            tokenKey={token.name}
                            lightValue={token.light}
                            darkValue={token.dark}
                        />
                    ))}
                </div>
            </section>
        </div>
    );
}
