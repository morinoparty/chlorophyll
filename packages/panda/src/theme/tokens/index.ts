import { defineTokens } from "@pandacss/dev";
import { colors } from "./color";
import { radii } from "./radii";
import { sizes } from "./sizes";
import { spacing } from "./spacing";
import { fontSizes, fontWeights, letterSpacings, lineHeights } from "./typography";

export const tokens = defineTokens({
    colors,
    sizes,
    spacing,
    fontSizes,
    fontWeights,
    letterSpacings,
    lineHeights,
    radii,
});
