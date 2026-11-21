import type { ExtractFromTargetResultReferenced, TargetType } from "../../data/target";
import type { HomeAssistant } from "../../types";
export interface TargetSubRows {
    nextType: TargetType;
    rows: string[];
    rowEntries?: ExtractFromTargetResultReferenced[];
    deviceRows: string[];
    deviceRowEntries?: ExtractFromTargetResultReferenced[];
    entityRows: string[];
}
export declare const computeTargetSubRows: (type: TargetType, itemId: string, entries: ExtractFromTargetResultReferenced, entityRegistry: HomeAssistant["entities"], devices: HomeAssistant["devices"]) => TargetSubRows;
