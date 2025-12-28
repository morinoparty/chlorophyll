import { createRootRoute, HeadContent, Outlet, Scripts } from "@tanstack/react-router";
import { css } from "styled-system/css";
import { Footer } from "../components/footer";
import { Header } from "../components/header";
import appCss from "../styles/app.css?url";

export const Route = createRootRoute({
    head: () => ({
        meta: [
            { charSet: "utf-8" },
            { name: "viewport", content: "width=device-width, initial-scale=1" },
            { name: "description", content: "Chlorophyll - A design system for Morinoparty projects" },
        ],
        links: [
            { rel: "icon", type: "image/svg+xml", href: "/chlorophyll.svg" },
            { rel: "stylesheet", href: appCss },
        ],
    }),
    component: RootComponent,
});

function RootComponent() {
    return (
        <html lang="en">
            <head>
                <HeadContent />
            </head>
            <body
                className={css({
                    margin: 0,
                    minHeight: "100vh",
                    display: "flex",
                    textStyle: "body",
                    flexDirection: "column",
                    bg: "bg.canvas",
                    color: "fg.default",
                })}
            >
                <ThemeScript />
                <Header />
                <main
                    className={css({
                        flex: 1,
                        width: "100%",
                    })}
                >
                    <Outlet />
                </main>
                <Footer />
                <Scripts />
            </body>
        </html>
    );
}

function ThemeScript() {
    return (
        <script
            // biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
            dangerouslySetInnerHTML={{
                __html: `
          (function() {
            // Mode (light/dark)
            const mode = localStorage.getItem('mode') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
            document.documentElement.setAttribute('data-mode', mode);
            document.documentElement.classList.toggle('dark', mode === 'dark');

            // Color Theme (mori/umi)
            const colorTheme = localStorage.getItem('color-theme') || 'mori';
            document.documentElement.setAttribute('data-color-theme', colorTheme);
          })();
        `,
            }}
        />
    );
}
