import { defineSemanticTokens } from "@pandacss/dev";
import { blue } from "./blue";
import { gray } from "./gray";
import { mori } from "./mori";
import { red } from "./red";
import { umi } from "./umi";
import { yellow } from "./yellow";

export const colors = defineSemanticTokens.colors({
    ...gray,
    ...mori,
    ...umi,
    ...red,
    ...yellow,
    ...blue,
});
