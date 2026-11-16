import type { CSSResultGroup } from "lit";
import { HaChipBase } from "./ha-chip-base";
export declare class HaAssistChip extends HaChipBase {
    filled: boolean;
    active: boolean;
    elevated: boolean;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-assist-chip": HaAssistChip;
    }
}
