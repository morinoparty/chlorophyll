import { cloudflare } from "@cloudflare/vite-plugin";
import pandacss from "@pandacss/dev/postcss";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import autoprefixer from "autoprefixer";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
    css: {
        postcss: {
            plugins: [pandacss(), autoprefixer],
        },
    },
    plugins: [
        cloudflare({ viteEnvironment: { name: "ssr" } }),
        tanstackStart({
            srcDirectory: "app",
            prerender: {
                enabled: true,
            },
        }),
        tsconfigPaths(),
        viteReact(),
    ],
    resolve: {
        alias: {
            "styled-system/": `${__dirname}/styled-system/`,
        },
    },
    server: {
        port: 3000,
        allowedHosts: ["localhost", "127.0.0.1", "0.0.0.0", "192.168.0.148", ".trycloudflare.com"],
    },
});
