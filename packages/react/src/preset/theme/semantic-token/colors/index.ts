import { defineSemanticTokens } from "@pandacss/dev";
import { mori } from "./mori";

export const colors = defineSemanticTokens.colors({
    ...mori,
});
