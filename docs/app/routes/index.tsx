import { createFileRoute, Link } from "@tanstack/react-router";
import { sva } from "styled-system/css";
import { Button } from "../../../packages/react";

export const Route = createFileRoute("/")({
    head: () => ({
        meta: [{ title: "Chlorophyll - Morinoparty Design System" }],
    }),
    component: Home,
});

const homeStyles = sva({
    slots: ["root", "title", "description", "actions"],
    base: {
        root: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            minHeight: "60vh",
            textAlign: "center",
            gap: "6",
        },
        title: {
            fontSize: "4xl",
            fontWeight: "bold",
            color: "fg.default",
        },
        description: {
            fontSize: "lg",
            color: "fg.muted",
            maxWidth: "lg",
        },
        actions: {
            display: "flex",
            gap: "4",
            flexWrap: "wrap",
            justifyContent: "center",
        },
    },
});

function Home() {
    const styles = homeStyles();

    return (
        <div className={styles.root}>
            <h1 className={styles.title}>Chlorophyll</h1>
            <p className={styles.description}>
                A design system for Morinoparty projects built with Panda CSS and Ark UI
            </p>
            <div className={styles.actions}>
                <Link to="/docs/getting-started">
                    <Button>Get Started</Button>
                </Link>
                <Link to="/components">
                    <Button>Components</Button>
                </Link>
            </div>
        </div>
    );
}
