import type { PropertyValues } from "lit";
import { LitElement } from "lit";
import "../../components/ha-control-select";
import "../../components/ha-control-slider";
import type { FanEntity, FanSpeed } from "../../data/fan";
export declare class HaStateControlFanSpeed extends LitElement {
    private _api;
    private _formatters;
    private _entities;
    private _i18n;
    stateObj: FanEntity;
    sliderValue?: number;
    speedValue?: FanSpeed;
    protected updated(changedProp: PropertyValues<this>): void;
    private _speedValueChanged;
    private _valueChanged;
    private _localizeSpeed;
    protected render(): import("lit-html").TemplateResult<1>;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-state-control-fan-speed": HaStateControlFanSpeed;
    }
}
