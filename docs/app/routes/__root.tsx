import { createRootRoute, HeadContent, Outlet, Scripts } from "@tanstack/react-router";
import { css } from "styled-system/css";
import { Footer } from "~/components/Footer";
import { Header } from "~/components/Header";
import appCss from "~/styles/app.css?url";

export const Route = createRootRoute({
    head: () => ({
        meta: [
            { charSet: "utf-8" },
            { name: "viewport", content: "width=device-width, initial-scale=1" },
            { name: "description", content: "Chlorophyll - A design system for Morinoparty projects" },
        ],
        links: [
            { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
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
                    <div
                        className={css({
                            maxWidth: "7xl",
                            marginX: "auto",
                            paddingX: { base: "4", md: "6" },
                            paddingY: "6",
                        })}
                    >
                        <Outlet />
                    </div>
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
            dangerouslySetInnerHTML={{
                __html: `
          (function() {
            const theme = localStorage.getItem('theme') ||
              (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
            document.documentElement.setAttribute('data-theme', theme);
            document.documentElement.classList.toggle('dark', theme === 'dark');
          })();
        `,
            }}
        />
    );
}
