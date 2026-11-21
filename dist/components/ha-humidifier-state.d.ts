import type { TemplateResult } from "lit";
import { LitElement } from "lit";
import type { HumidifierEntity } from "../data/humidifier";
declare class HaHumidifierState extends LitElement {
    private _formatters?;
    private _localize;
    stateObj: HumidifierEntity;
    protected render(): TemplateResult;
    private _computeCurrentStatus;
    private _computeTarget;
    private _localizeState;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-humidifier-state": HaHumidifierState;
    }
}
export {};
