import { defineTokens } from "@pandacss/dev";
import { colors } from "./color";
import { fontSizes } from "./font-size";
import { radii } from "./radii";
import { sizes } from "./sizes";
import { spacing } from "./spacing";
import {zIndex} from "./z-index";

export { globalFontFace } from "./font-face";
export { textStyles } from "./typography";

export const tokens = defineTokens({
    fontSizes,
    colors,
    sizes,
    spacing,
    radii,
    zIndex
});
