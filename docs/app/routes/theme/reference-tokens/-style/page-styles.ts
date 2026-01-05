import { sva } from "styled-system/css";

// Table layout styles for token pages (durations, easings, font-weights, letter-spacings, line-heights)
export const tablePageStyles = sva({
    slots: ["root", "pageTitle", "description", "section", "table", "th", "td"],
    base: {
        root: { display: "flex", flexDirection: "column", gap: "8" },
        pageTitle: { fontSize: "2xl", fontWeight: "bold", color: "colorPalette.fg" },
        description: { fontSize: "md", color: "colorPalette.fg.muted" },
        section: { display: "flex", flexDirection: "column", gap: "6" },
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
