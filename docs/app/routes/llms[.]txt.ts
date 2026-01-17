import { createFileRoute } from "@tanstack/react-router";
import { source } from "../lib/source";

export const Route = createFileRoute("/llms.txt")({
    server: {
        handlers: {
            GET: async () => {
                const pages = source.getPages();

                const records = pages.map((page) => {
                    const title = page.data.title;
                    const description = page.data.description || "";
                    const url = page.url;
                    return `- [${title}](${url}): ${description}`;
                });

                const content = `# Chlorophyll Documentation

> Chlorophyll is a component library built with Panda CSS and Ark UI.

## Documentation Pages

${records.join("\n")}

## Full Documentation

For complete documentation content, visit: /llms-full.txt
`;

                return new Response(content, {
                    headers: {
                        "Content-Type": "text/plain; charset=utf-8",
                    },
                });
            },
        },
    },
});
