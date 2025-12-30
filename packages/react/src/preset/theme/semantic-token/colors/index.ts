import { defineSemanticTokens } from "@pandacss/dev";
import { accent } from "./accent";
import { blue } from "./blue";
import { border } from "./border";
import { focus } from "./focus";
import { global } from "./global";
import { gray } from "./gray";
import { mori } from "./mori";
import { overlay } from "./overlay";
import { red } from "./red";
import { surface } from "./surface";
import { umi } from "./umi";
import { yellow } from "./yellow";

export const colors = defineSemanticTokens.colors({
    ...gray,
    ...mori,
    ...umi,
    ...red,
    ...yellow,
    ...blue,
    ...border,
    ...global,
    ...surface,
    ...overlay,
    ...focus,
    ...accent,
});
