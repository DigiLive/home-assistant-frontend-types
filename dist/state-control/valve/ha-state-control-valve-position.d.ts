import type { TemplateResult, PropertyValues } from "lit";
import { LitElement } from "lit";
import "../../components/ha-control-slider";
import type { CoverEntity } from "../../data/cover";
export declare class HaStateControlValvePosition extends LitElement {
    private _api;
    private _formatters;
    private _locale;
    stateObj: CoverEntity;
    value?: number;
    protected updated(changedProp: PropertyValues<this>): void;
    private _valueChanged;
    protected render(): TemplateResult;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-state-control-valve-position": HaStateControlValvePosition;
    }
}
