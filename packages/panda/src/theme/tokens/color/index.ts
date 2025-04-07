import { defineTokens } from "@pandacss/dev";
import { blue } from "./blue";
import { gray } from "./gray";
import { green } from "./green";
import { red } from "./red";
import { white } from "./white";
import { yellow } from "./yellow";

// 基本的な色パレットを定義
export const colors = defineTokens.colors({
    ...blue,
    ...gray,
    ...green,
    ...red,
    ...white,
    ...yellow,
});
