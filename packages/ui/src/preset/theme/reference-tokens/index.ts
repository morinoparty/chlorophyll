import { defineTokens } from "@pandacss/dev";
import { colors } from "./color";
import { radii } from "./radii";
import { sizes } from "./sizes";
import { spacing } from "./spacing";
import {fontSizes} from "./font-size";

export { globalFontFace } from "./font-face";
export { textStyles } from "./typography";

export const tokens = defineTokens({
    fontSizes,
    colors,
    sizes,
    spacing,
    radii,
});
