import { createFileRoute } from "@tanstack/react-router";
import type { ColorToken } from "styled-system/tokens/tokens";
import { ColorList } from "../-components/color-list";
import { basePageStyles } from "../-styles/page-styles";

export const Route = createFileRoute("/theme/reference-tokens/colors")({
    component: RouteComponent,
});

const colorScales = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12] as const;
const brandColors = ["mori", "umi"] as const;

const getColorTokens = (color: (typeof brandColors)[number]): ColorToken[] =>
    colorScales.map((scale) => `${color}.${scale}` as ColorToken);

function RouteComponent() {
    const pageStyles = basePageStyles();

    return (
        <div className={pageStyles.root}>
            <h1 className={pageStyles.pageTitle}>Reference Color Token</h1>

            <section className={pageStyles.section}>
                <h2 className={pageStyles.sectionTitle}>Brand Color</h2>
                {brandColors.map((color) => (
                    <ColorList key={color} title={color} tokenKeys={getColorTokens(color)} />
                ))}
            </section>
        </div>
    );
}
