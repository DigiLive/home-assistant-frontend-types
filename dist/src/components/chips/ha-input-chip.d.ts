import type { CSSResultGroup } from "lit";
import { HaChipBase } from "./ha-chip-base";
export declare class HaInputChip extends HaChipBase {
    selected: boolean;
    avatar: boolean;
    removable: boolean;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-input-chip": HaInputChip;
    }
}
