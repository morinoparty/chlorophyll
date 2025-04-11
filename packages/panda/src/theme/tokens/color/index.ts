import { defineTokens } from "@pandacss/dev";
import { blue } from "./blue";
import { gray } from "./gray";
import { green } from "./green";
import { indigo } from "./indigo";
import { orange } from "./orange";
import { pink } from "./pink";
import { purple } from "./purple";
import { red } from "./red";
import { teal } from "./teal";
import { white } from "./white";
import { yellow } from "./yellow";
import { darkslategray } from "./darkslategray";

// 基本的な色パレットを定義
export const colors = defineTokens.colors({
    ...blue,
    ...gray,
    ...green,
    ...indigo,
    ...orange,
    ...pink,
    ...purple,
    ...red,
    ...teal,
    ...white,
    ...yellow,
    ...darkslategray,
});
