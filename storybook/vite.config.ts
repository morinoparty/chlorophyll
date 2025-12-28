import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: [
            {
                find: "styled-system/",
                replacement: `${__dirname}/styled-system/`,
            },
            {
                find: "@chlorophyll/ui/style.css",
                replacement: `${__dirname}/../packages/ui/style.css`,
            },
            {
                find: "@chlorophyll/ui",
                replacement: `${__dirname}/../packages/ui/src`,
            },
        ],
    },
});
