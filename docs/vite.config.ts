import { cloudflare } from "@cloudflare/vite-plugin";
import pandacss from "@pandacss/dev/postcss";
import tailwindcss from "@tailwindcss/vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import autoprefixer from "autoprefixer";
import fumadocs from "fumadocs-mdx/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import * as MdxConfig from "./source.config";

export default defineConfig({
    css: {
        postcss: {
            plugins: [pandacss(), autoprefixer],
        },
    },
    plugins: [
        cloudflare({ viteEnvironment: { name: "ssr" } }),
        tailwindcss(),
        fumadocs(MdxConfig, {
            index: {
                target: "vite",
            },
        }),
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
            "styled-system/*": `${__dirname}/styled-system/*`,
            "@components": `${__dirname}/components`,
            // Node.js pathモジュールのブラウザ向けポリフィル
            path: "path-browserify",
        },
        noExternal: ["fumadocs-core", "fumadocs-ui", "@fumadocs/base-ui", "@fumadocs/ui"],
    },
    server: {
        port: 3000,
        allowedHosts: ["localhost", "127.0.0.1", "0.0.0.0", "192.168.0.148", ".trycloudflare.com"],
    },
});
