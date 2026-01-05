import { createFileRoute } from "@tanstack/react-router";
import { css, sva } from "styled-system/css";
import { parseTokensByType } from "./-libs/token-parser";

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
        root: { display: "flex", flexDirection: "column", gap: "8" },
        pageTitle: { fontSize: "2xl", fontWeight: "bold", color: "colorPalette.fg" },
        description: { fontSize: "md", color: "colorPalette.fg.muted" },
        section: { display: "flex", flexDirection: "column", gap: "6" },
        sectionTitle: { fontSize: "xl", fontWeight: "semibold", color: "colorPalette.fg" },
        grid: { display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(140px, 1fr))", gap: "6" },
        card: { display: "flex", flexDirection: "column", gap: "3", alignItems: "center" },
        preview: {
            width: "20",
            height: "20",
            backgroundColor: "colorPalette.solid",
            border: "1px solid",
            borderColor: "border.muted",
        },
        info: { display: "flex", flexDirection: "column", gap: "1", alignItems: "center" },
        name: { fontSize: "sm", fontWeight: "medium", color: "colorPalette.fg" },
        value: { fontSize: "xs", color: "colorPalette.fg.muted", fontFamily: "mono" },
    },
});

export const Route = createFileRoute("/theme/reference-tokens/radii")({
    component: RouteComponent,
});

function RouteComponent() {
    const styles = radiiPageStyles();
    const radiiTokens = parseTokensByType("radii");

    return (
        <div className={styles.root}>
            <h1 className={styles.pageTitle}>Border Radius</h1>
            <p className={styles.description}>Border radius tokens for consistent corner rounding.</p>

            <section className={styles.section}>
                <h2 className={styles.sectionTitle}>Radii Scale</h2>
                <div className={styles.grid}>
                    {radiiTokens.map((token) => (
                        <div key={token.name} className={styles.card}>
                            <div
                                className={css({
                                    width: "20",
                                    height: "20",
                                    backgroundColor: "colorPalette.solid",
                                    border: "sm",
                                    borderColor: "border",
                                })}
                                style={{ borderRadius: token.cssVar }}
                            />
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
