import { sva } from "styled-system/css";

// Table layout styles for system token pages (animations, borders, typography, spacing, z-index)
export const tablePageStyles = sva({
    slots: ["root", "pageTitle", "description", "section", "sectionTitle", "table", "th", "td"],
    base: {
        root: { display: "flex", flexDirection: "column", gap: "8" },
        pageTitle: { fontSize: "2xl", fontWeight: "bold", color: "colorPalette.fg" },
        description: { fontSize: "md", color: "colorPalette.fg.muted" },
        section: { display: "flex", flexDirection: "column", gap: "6" },
        sectionTitle: { fontSize: "xl", fontWeight: "semibold", color: "colorPalette.fg" },
        table: { width: "full", borderCollapse: "collapse" },
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
    },
});
