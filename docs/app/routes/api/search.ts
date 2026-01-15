import { createAPIFileRoute } from "@tanstack/react-start/api";
import { createSearchAPI } from "fumadocs-core/server";
import { source } from "../../lib/source";

const search = createSearchAPI("simple", {
    indexes: source.getPages().map((page) => ({
        id: page.url,
        title: page.data.title,
        description: page.data.description,
        url: page.url,
        structuredData: page.data.structuredData,
    })),
});

export const APIRoute = createAPIFileRoute("/api/search")({
    GET: async ({ request }) => {
        const url = new URL(request.url);
        const query = url.searchParams.get("query") ?? "";

        const results = search(query);

        return new Response(JSON.stringify(results), {
            headers: {
                "Content-Type": "application/json",
            },
        });
    },
});
