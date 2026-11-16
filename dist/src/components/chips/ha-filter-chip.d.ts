import type { CSSResultGroup } from "lit";
import { nothing } from "lit";
import "../ha-svg-icon";
import { HaChipBase } from "./ha-chip-base";
export declare class HaFilterChip extends HaChipBase {
    selected: boolean;
    elevated: boolean;
    noLeadingIcon: boolean;
    protected get pressed(): boolean;
    protected renderLeadingIcon(): typeof nothing | import("lit-html").TemplateResult;
    protected handlePrimaryClick(event: MouseEvent): void;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-filter-chip": HaFilterChip;
    }
}
