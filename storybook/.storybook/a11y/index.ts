import type { ConformanceLevel } from "./apca";
import { bronze } from "./bronze";
import { custom } from "./custom";
import { silver } from "./silver";

export function registerAPCACheck(conformanceLevel: ConformanceLevel) {
    switch (conformanceLevel) {
        case "custom":
            return custom;
        case "silver":
            return silver;
        case "bronze":
            return bronze;
        default:
            return bronze;
    }
}
