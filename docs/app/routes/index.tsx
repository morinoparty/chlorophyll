import { createFileRoute } from "@tanstack/react-router";
import { css } from "styled-system/css";
import { Button } from "../../../components/react/src/components/ui/button";

export const Route = createFileRoute("/")({
    head: () => ({
        meta: [{ title: "Chlorophyll - Design System" }],
    }),
    component: Home,
});

function Home() {
    return (
        <div
            className={css({
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                minHeight: "60vh",
                textAlign: "center",
                gap: "6",
            })}
        >
            <h1
                className={css({
                    fontSize: "4xl",
                    fontWeight: "bold",
                    color: "fg.default",
                })}
            >
                Chlorophyll
            </h1>
            <p
                className={css({
                    fontSize: "lg",
                    color: "fg.muted",
                    maxWidth: "lg",
                })}
            >
                A design system for Morinoparty projects built with Panda CSS and Ark UI
            </p>
            <div
                className={css({
                    display: "flex",
                    gap: "4",
                    flexWrap: "wrap",
                    justifyContent: "center",
                })}
            >
                <a href="/docs/getting-started">
                    <Button>Get Started</Button>
                </a>
                <a href="/components">
                    <Button>Components</Button>
                </a>
            </div>
        </div>
    );
}
