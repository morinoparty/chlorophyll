import { createFileRoute } from "@tanstack/react-router";
import { sva } from "styled-system/css";

const themePageStyles = sva({
    slots: ["root", "title", "description"],
    base: {
        root: {
            display: "flex",
            flexDirection: "column",
            gap: "6",
        },
        title: {
            fontSize: "3xl",
            fontWeight: "bold",
            color: "fg.default",
        },
        description: {
            color: "fg.muted",
        },
    },
});

export const Route = createFileRoute("/theme/")({
    component: RouteComponent,
});

function RouteComponent() {
    const styles = themePageStyles();

    return (
        <div className={styles.root}>
            <h1 className={styles.title}>Theme</h1>
            <p className={styles.description}>Design tokens and theming for Chlorophyll.</p>
        </div>
    );
}
