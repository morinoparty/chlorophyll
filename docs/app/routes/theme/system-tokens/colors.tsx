import { createFileRoute } from "@tanstack/react-router";
import { css, sva } from "styled-system/css";

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
        grid: {
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
            gap: "6",
        },
    },
});

// colorPaletteトークンの定義
const colorPaletteTokens = [
    // Background tokens (Step 1-2)
    {
        name: "colorPalette.bg",
        cssVar: "--mpc-colors-color-palette-bg",
        reference: "colorPalette.2",
        description: "デフォルト背景",
    },
    {
        name: "colorPalette.bg.subtle",
        cssVar: "--mpc-colors-color-palette-bg-subtle",
        reference: "colorPalette.1",
        description: "微妙な背景",
    },
    // Surface tokens (Step 3-5) - コンポーネント背景
    {
        name: "colorPalette.surface",
        cssVar: "--mpc-colors-color-palette-surface",
        reference: "colorPalette.3",
        description: "コンポーネント背景（通常状態）",
    },
    {
        name: "colorPalette.surface.hover",
        cssVar: "--mpc-colors-color-palette-surface-hover",
        reference: "colorPalette.4",
        description: "コンポーネント背景（ホバー状態）",
    },
    {
        name: "colorPalette.surface.active",
        cssVar: "--mpc-colors-color-palette-surface-active",
        reference: "colorPalette.5",
        description: "コンポーネント背景（アクティブ/選択状態）",
    },
    // Solid tokens (Step 9-10)
    {
        name: "colorPalette.solid",
        cssVar: "--mpc-colors-color-palette-solid",
        reference: "colorPalette.9",
        description: "ボタンなどのソリッド背景",
    },
    {
        name: "colorPalette.solid.emphasized",
        cssVar: "--mpc-colors-color-palette-solid-emphasized",
        reference: "colorPalette.10",
        description: "ソリッド背景のホバー状態",
    },
    // Foreground tokens (Step 11-12)
    {
        name: "colorPalette.fg",
        cssVar: "--mpc-colors-color-palette-fg",
        reference: "colorPalette.12",
        description: "デフォルトテキスト",
    },
    {
        name: "colorPalette.fg.muted",
        cssVar: "--mpc-colors-color-palette-fg-muted",
        reference: "gray.11",
        description: "控えめなテキスト（全色共通でgray.11）",
    },
    {
        name: "colorPalette.fg.subtle",
        cssVar: "--mpc-colors-color-palette-fg-subtle",
        reference: "colorPalette.11",
        description: "微妙なテキスト",
    },
    // Contrast token
    {
        name: "colorPalette.contrast",
        cssVar: "--mpc-colors-color-palette-contrast",
        reference: "white",
        description: "ソリッド背景上のテキスト",
    },
];

export const Route = createFileRoute("/theme/system-tokens/colors")({
    component: RouteComponent,
});

function RouteComponent() {
    const styles = semanticColorsPageStyles();

    return (
        <div className={styles.root}>
            <h1 className={styles.pageTitle}>Semantic Color Tokens</h1>
            <p className={styles.description}>
                セマンティックカラートークンは、用途に基づいた色の定義です。
                colorPaletteを通じて、選択されたテーマカラーに応じて動的に変化します。
            </p>

            <section className={styles.section}>
                <h2 className={styles.sectionTitle}>colorPalette</h2>
                <p className={styles.description}>
                    各色（mori, umi, blue, red, yellow, gray）は同じ構造を持ちます。
                    colorPaletteを設定すると、対応する色のトークンが適用されます。
                </p>
                <div className={styles.grid}>
                    {colorPaletteTokens.map((token) => (
                        <div
                            key={token.name}
                            className={css({
                                display: "flex",
                                flexDirection: "column",
                                gap: "2",
                            })}
                        >
                            <div
                                className={css({
                                    width: "100%",
                                    height: "24",
                                    borderRadius: "md",
                                    border: "sm",
                                    borderColor: "border",
                                })}
                                style={{ backgroundColor: `var(${token.cssVar})` }}
                            />
                            <div className={css({ fontSize: "sm", fontWeight: "semibold" })}>{token.name}</div>
                            <div className={css({ fontSize: "xs", color: "colorPalette.fg.muted" })}>
                                {token.description}
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
