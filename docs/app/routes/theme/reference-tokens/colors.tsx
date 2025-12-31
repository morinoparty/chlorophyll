import { createFileRoute } from "@tanstack/react-router";
import { sva } from "styled-system/css";
import type { ColorToken } from "styled-system/tokens/tokens";
import { ColorList } from "../-components/color-list";

const refrenceColorsPageStyles = sva({
    slots: ["root", "pageTitle", "section", "sectionTitle"],
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
    },
});

export const Route = createFileRoute("/theme/reference-tokens/colors")({
    component: RouteComponent,
});

const colorScales = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12] as const;
const brandColors = ["mori", "umi"] as const;

const getColorTokens = (color: (typeof brandColors)[number]): ColorToken[] =>
    colorScales.map((scale) => `${color}.${scale}` as ColorToken);

function RouteComponent() {
    const styles = refrenceColorsPageStyles();

    return (
        <div className={styles.root}>
            <h1 className={styles.pageTitle}>Reference Color Token</h1>

            <section className={styles.section}>
                <h2 className={styles.sectionTitle}>Brand Color</h2>
                {brandColors.map((color) => (
                    <ColorList key={color} title={color} tokenKeys={getColorTokens(color)} />
                ))}
            </section>
        </div>
    );
}
