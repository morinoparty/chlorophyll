import { defineTokens } from "@pandacss/dev";
import { blue } from "./blue";
import { cyan } from "./cyan";
import { gray } from "./gray";
import { green } from "./green";
import { mori } from "./mori";
import { orange } from "./orange";
import { pink } from "./pink";
import { purple } from "./purple";
import { red } from "./red";
import { sea } from "./sea";
import { umi } from "./umi";
import { yellow } from "./yellow";

export const colors = defineTokens.colors({
    white: { value: "#ffffff" },
    black: { value: "#000000" },
    ...sea,
    ...red,
    ...yellow,
    ...pink,
    ...cyan,
    ...purple,
    ...blue,
    ...green,
    ...orange,
    ...gray,
    ...mori,
    ...umi,
});
