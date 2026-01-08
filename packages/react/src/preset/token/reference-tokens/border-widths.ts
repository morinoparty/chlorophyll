import { defineTokens } from "@pandacss/dev";

export const borderWidths = defineTokens.borderWidths({
    none: { value: "0" },
    "0.5": { value: "0.5px" },
    "1": { value: "1px" },
    "2": { value: "2px" },
    "4": { value: "4px" },
    "8": { value: "8px" },
});
