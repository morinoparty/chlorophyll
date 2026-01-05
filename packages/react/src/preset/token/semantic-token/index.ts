import { defineSemanticTokens } from "@pandacss/dev";
import { durations, easings } from "./animations";
import { borders } from "./borders";
import { colors } from "./colors";
import { radii } from "./radii";
import { shadows } from "./shadow";
import { spacing } from "./spacing";
import { fontSizes, fontWeights, letterSpacings, lineHeights } from "./typography";

export const semanticTokens = defineSemanticTokens({
    colors,
    fontSizes,
    fontWeights,
    letterSpacings,
    lineHeights,
    radii,
    shadows,
    spacing,
    borders,
    durations,
    easings,
});
