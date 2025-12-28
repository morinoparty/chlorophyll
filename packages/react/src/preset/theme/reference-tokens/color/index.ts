import { defineTokens } from "@pandacss/dev";
import { mori } from "./mori";
import { umi } from "./umi";

export const colors = defineTokens.colors({
    ...mori,
    ...umi,
});
