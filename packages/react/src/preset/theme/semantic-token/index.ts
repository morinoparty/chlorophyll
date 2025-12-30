import { defineSemanticTokens } from "@pandacss/dev";
import { colors } from "./colors";
import { fontSizes } from "./typography";
import { radii } from "./radii";
import { shadows } from "./shadow";
import { spacing } from "./spacing";
import { zIndex } from "./z-index";
import {borders} from "./borders";

export const semanticTokens = defineSemanticTokens({
    colors,
    fontSizes,
    radii,
    shadows,
    spacing,
    zIndex,
    borders
});
