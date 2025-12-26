import { defineTokens } from "@pandacss/dev";
import { colors } from "./color";
import { radii } from "./radii";
import { sizes } from "./sizes";
import { spacing } from "./spacing";

export { globalFontFace } from "./font-face";
export { textStyles } from "./typography";

export const tokens = defineTokens({
    colors,
    sizes,
    spacing,
    radii,
});
