import type { HassEntity } from "home-assistant-js-websocket";
import type { CSSResultGroup, TemplateResult } from "lit";
import { LitElement } from "lit";
export declare class HaWaterHeaterState extends LitElement {
    private _formatters?;
    private _locale?;
    private _hassConfig?;
    stateObj: HassEntity;
    protected render(): TemplateResult;
    private _computeTarget;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-water_heater-state": HaWaterHeaterState;
    }
}
