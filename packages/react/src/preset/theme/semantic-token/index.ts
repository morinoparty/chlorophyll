import { defineSemanticTokens } from "@pandacss/dev";
import { borders } from "./borders";
import { colors } from "./colors";
import { radii } from "./radii";
import { shadows } from "./shadow";
import { spacing } from "./spacing";
import { fontSizes } from "./typography";

export const semanticTokens = defineSemanticTokens({
    colors,
    fontSizes,
    radii,
    shadows,
    spacing,
    borders,
});
