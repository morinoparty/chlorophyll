import { defineSemanticTokens } from "@pandacss/dev";
import { base } from "./base";
import { border } from "./border";
import { focus } from "./focus";
import { global } from "./global";
import { overlay } from "./overlay";

export const colors = defineSemanticTokens.colors({
    // Base colors (gray, mori, umi, red, yellow, blue)
    ...base,
    // Semantic tokens
    ...border,
    ...global,
    ...overlay,
    ...focus,
});
