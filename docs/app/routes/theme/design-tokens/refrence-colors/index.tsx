import { createFileRoute } from "@tanstack/react-router";
import { sva } from "styled-system/css";
import type { ColorToken } from "styled-system/tokens/tokens";
import { ColorList } from "../../-components/color-list";

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
            color: "fg.default",
        },
        section: {
            display: "flex",
            flexDirection: "column",
            gap: "6",
        },
        sectionTitle: {
            fontSize: "xl",
            fontWeight: "semibold",
            color: "fg.default",
        },
    },
});

export const Route = createFileRoute("/theme/design-tokens/refrence-colors/")({
    component: RouteComponent,
});

const colorScales = [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100, 1200, 1300, 1400, 1500] as const;
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
