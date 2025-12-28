import { createFileRoute, Outlet } from "@tanstack/react-router";
import { sva } from "styled-system/css";
import { ThemeSidebar } from "./-components/sidebar";

const themeLayoutStyles = sva({
    slots: ["root", "content"],
    base: {
        root: {
            display: "flex",
            alignItems: "start",
            width: "full",
            maxWidth: "7xl",
            marginX: "auto",
        },
        content: {
            flex: 1,
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
