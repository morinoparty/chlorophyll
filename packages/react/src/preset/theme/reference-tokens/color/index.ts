import { defineTokens } from "@pandacss/dev";

import { blue } from "./blue";
import { gray } from "./gray";
import { mori } from "./mori";
import { red } from "./red";
import { umi } from "./umi";
import { yellow } from "./yellow";

export const colors = defineTokens.colors({
    white: { value: "#ffffff" },
    black: { value: "#000000" },

    ...gray,
    ...mori,
    ...umi,
    ...red,
    ...yellow,
    ...blue,
});
