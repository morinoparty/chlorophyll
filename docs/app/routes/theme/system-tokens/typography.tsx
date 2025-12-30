import { createFileRoute } from "@tanstack/react-router";
import { css, sva } from "styled-system/css";
import textStylesSpec from "styled-system/specs/text-styles.json";
import tokensSpec from "styled-system/specs/tokens.json";

const typographyPageStyles = sva({
    slots: ["root", "pageTitle", "description", "section", "sectionTitle", "table", "th", "td", "sample"],
    base: {
        root: {
            display: "flex",
            flexDirection: "column",
            gap: "8",
        },
        pageTitle: {
            fontSize: "2xl",
            fontWeight: "bold",
            color: "colorPalette.fg",
        },
        description: {
            fontSize: "md",
            color: "colorPalette.fg.muted",
        },
        section: {
            display: "flex",
            flexDirection: "column",
            gap: "6",
        },
        sectionTitle: {
            fontSize: "xl",
            fontWeight: "semibold",
            color: "colorPalette.fg",
        },
        table: {
            width: "full",
            borderCollapse: "collapse",
        },
        th: {
            textAlign: "left",
            padding: "3",
            fontSize: "sm",
            fontWeight: "semibold",
            color: "colorPalette.fg.muted",
            borderBottom: "1px solid",
            borderColor: "border.muted",
        },
        td: {
            padding: "3",
            fontSize: "sm",
            color: "colorPalette.fg",
            borderBottom: "1px solid",
            borderColor: "border.subtle",
            verticalAlign: "middle",
        },
        sample: {
            color: "colorPalette.fg",
        },
    },
});

interface TextStyleToken {
    name: string;
    description?: string;
    fontSize?: string;
    lineHeight?: string;
}

interface FontSizeToken {
    name: string;
    value: string;
    cssVar: string;
}

// lineHeight mapping based on typography.ts definition
const lineHeightMap: Record<string, string> = {
    "2xs": "0.75rem",
    xs: "1rem",
    sm: "1.25rem",
    md: "1.5rem",
    lg: "1.75rem",
    xl: "1.875rem",
    "2xl": "2rem",
    "3xl": "2.375rem",
    "4xl": "2.75rem",
    "5xl": "3.75rem",
};

function parseFontSizeTokens(): FontSizeToken[] {
    const fontSizesData = tokensSpec.data.find((d) => d.type === "fontSizes");
    if (!fontSizesData) return [];

    return fontSizesData.values.map((token) => ({
        name: token.name,
        value: token.value,
        cssVar: token.cssVar,
    }));
}

function parseTextStyleTokens(fontSizeTokens: FontSizeToken[]): TextStyleToken[] {
    const fontSizeMap = new Map(fontSizeTokens.map((t) => [t.name, t.value]));

    return textStylesSpec.data
        .filter((token) => token.name !== "none" && token.name !== "body" && token.name !== "label")
        .map((token) => ({
            name: token.name,
            description: token.description,
            fontSize: fontSizeMap.get(token.name),
            lineHeight: lineHeightMap[token.name],
        }));
}

export const Route = createFileRoute("/theme/system-tokens/typography")({
    component: RouteComponent,
});

function RouteComponent() {
    const styles = typographyPageStyles();
    const fontSizeTokens = parseFontSizeTokens();
    const textStyleTokens = parseTextStyleTokens(fontSizeTokens);

    return (
        <div className={styles.root}>
            <h1 className={styles.pageTitle}>Typography</h1>
            <p className={styles.description}>Text styles and font size tokens for consistent typography.</p>

            <section className={styles.section}>
                <h2 className={styles.sectionTitle}>Text Styles</h2>
                <table className={styles.table}>
                    <thead>
                        <tr>
                            <th className={styles.th}>Name</th>
                            <th className={styles.th}>Font Size</th>
                            <th className={styles.th}>Line Height</th>
                            <th className={styles.th}>Sample</th>
                        </tr>
                    </thead>
                    <tbody>
                        {textStyleTokens.map((token) => (
                            <tr key={token.name}>
                                <td className={styles.td}>
                                    <code>{token.name}</code>
                                </td>
                                <td className={styles.td}>{token.fontSize}</td>
                                <td className={styles.td}>{token.lineHeight}</td>
                                <td className={styles.td}>
                                    <span
                                        style={{
                                            fontSize: `var(--ma-font-sizes-${token.name})`,
                                            lineHeight: token.lineHeight,
                                            color: "var(--ma-colors-color-palette-fg)",
                                        }}
                                    >
                                        Aa
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </section>

            <section className={styles.section}>
                <h2 className={styles.sectionTitle}>Font Sizes</h2>
                <table className={styles.table}>
                    <thead>
                        <tr>
                            <th className={styles.th}>Token</th>
                            <th className={styles.th}>Value</th>
                            <th className={styles.th}>Sample</th>
                        </tr>
                    </thead>
                    <tbody>
                        {fontSizeTokens.map((token) => (
                            <tr key={token.name}>
                                <td className={styles.td}>
                                    <code>fontSizes.{token.name}</code>
                                </td>
                                <td className={styles.td}>{token.value}</td>
                                <td className={styles.td}>
                                    <span
                                        style={{
                                            fontSize: token.cssVar,
                                            color: "var(--ma-colors-color-palette-fg)",
                                        }}
                                    >
                                        あそべる「Third Place」
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </section>
        </div>
    );
}
