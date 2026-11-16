import type { TemplateResult } from "lit";
import { LitElement } from "lit";
import type { ClimateEntity } from "../data/climate";
declare class HaClimateState extends LitElement {
    private _formatters?;
    private _localize;
    stateObj: ClimateEntity;
    protected render(): TemplateResult;
    private _computeCurrentStatus;
    private _computeTarget;
    private _localizeState;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-climate-state": HaClimateState;
    }
}
export {};
