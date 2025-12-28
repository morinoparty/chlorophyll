import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/theme/")({
    component: RouteComponent,
});

function RouteComponent() {
    return <div>Hello "/theme/"!</div>;
}
