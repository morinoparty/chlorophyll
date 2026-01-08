import { createFileRoute, Outlet } from "@tanstack/react-router";
import { sva } from "styled-system/css";
import { ThemeSidebar } from "./-components/sidebar";

const themeLayoutStyles = sva({
    slots: ["root", "content"],
    base: {
        root: {
            display: "flex",
            flexDirection: { base: "column", lg: "row" },
            alignItems: "start",
            width: "full",
            maxWidth: { base: "full", lg: "7xl" },
            marginX: "auto",
        },
        content: {
            flex: 1,
            minWidth: 0,
            width: "full",
            maxWidth: "full",
            overflowX: "hidden",
            paddingY: "6",
            paddingX: "4",
            minHeight: "calc(100vh - 4rem)",
        },
    },
});

export const Route = createFileRoute("/theme")({
    component: ThemeLayout,
});

function ThemeLayout() {
    const styles = themeLayoutStyles();

    return (
        <div className={styles.root}>
            <ThemeSidebar />
            <main className={styles.content}>
                <Outlet />
            </main>
        </div>
    );
}
