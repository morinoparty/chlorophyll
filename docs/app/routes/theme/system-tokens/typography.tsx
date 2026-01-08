import { createFileRoute } from "@tanstack/react-router";
import textStylesSpec from "styled-system/specs/text-styles.json";
import tokensSpec from "styled-system/specs/tokens.json";
import { basePageStyles, tableStyles } from "../-styles/page-styles";

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
    const pageStyles = basePageStyles();
    const tblStyles = tableStyles();
    const fontSizeTokens = parseFontSizeTokens();
    const textStyleTokens = parseTextStyleTokens(fontSizeTokens);

    return (
        <div className={pageStyles.root}>
            <h1 className={pageStyles.pageTitle}>Typography</h1>
            <p className={pageStyles.description}>Text styles and font size tokens for consistent typography.</p>

            <section className={pageStyles.section}>
                <h2 className={pageStyles.sectionTitle}>Text Styles</h2>
                <div className={tblStyles.tableWrapper}>
                    <table className={tblStyles.table}>
                        <thead>
                            <tr>
                                <th className={tblStyles.th}>Name</th>
                                <th className={tblStyles.th}>Font Size</th>
                                <th className={tblStyles.th}>Line Height</th>
                                <th className={tblStyles.th}>Sample</th>
                            </tr>
                        </thead>
                        <tbody>
                            {textStyleTokens.map((token) => (
                                <tr key={token.name}>
                                    <td className={tblStyles.td}>
                                        <code>{token.name}</code>
                                    </td>
                                    <td className={tblStyles.td}>{token.fontSize}</td>
                                    <td className={tblStyles.td}>{token.lineHeight}</td>
                                    <td className={tblStyles.td}>
                                        <span
                                            style={{
                                                fontSize: `var(--mpc-font-sizes-${token.name})`,
                                                lineHeight: token.lineHeight,
                                                color: "var(--mpc-colors-color-palette-fg)",
                                            }}
                                        >
                                            Aa
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>

            <section className={pageStyles.section}>
                <h2 className={pageStyles.sectionTitle}>Font Sizes</h2>
                <div className={tblStyles.tableWrapper}>
                    <table className={tblStyles.table}>
                        <thead>
                            <tr>
                                <th className={tblStyles.th}>Token</th>
                                <th className={tblStyles.th}>Value</th>
                                <th className={tblStyles.th}>Sample</th>
                            </tr>
                        </thead>
                        <tbody>
                            {fontSizeTokens.map((token) => (
                                <tr key={token.name}>
                                    <td className={tblStyles.td}>
                                        <code>fontSizes.{token.name}</code>
                                    </td>
                                    <td className={tblStyles.td}>{token.value}</td>
                                    <td className={tblStyles.td}>
                                        <span
                                            style={{
                                                fontSize: token.cssVar,
                                                color: "var(--mpc-colors-color-palette-fg)",
                                            }}
                                        >
                                            あそべる「Third Place」
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>
        </div>
    );
}
