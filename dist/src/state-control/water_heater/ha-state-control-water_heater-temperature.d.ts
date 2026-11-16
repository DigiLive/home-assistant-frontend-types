import type { CSSResultGroup, PropertyValues } from "lit";
import { LitElement } from "lit";
import "../../components/ha-big-number";
import "../../components/ha-control-circular-slider";
import "../../components/ha-outlined-icon-button";
import "../../components/ha-svg-icon";
import type { WaterHeaterEntity } from "../../data/water_heater";
export declare class HaStateControlWaterHeaterTemperature extends LitElement {
    stateObj: WaterHeaterEntity;
    private _api;
    private _config;
    private _formatters;
    private _localize;
    showCurrent: boolean;
    preventInteractionOnScroll: boolean;
    private _targetTemperature?;
    private _sizeController;
    private _pendingSync;
    protected willUpdate(changedProp: PropertyValues<this>): void;
    private _syncTargetTemperature;
    private get _step();
    private get _min();
    private get _max();
    private _valueChanged;
    private _valueChanging;
    private _debouncedCallService;
    private _callService;
    private _handleButton;
    private _renderLabel;
    private _formatTarget;
    private _renderButtons;
    private _renderTargetTemperature;
    private _renderCurrentTemperature;
    protected render(): import("lit-html").TemplateResult<1>;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-state-control-water_heater-temperature": HaStateControlWaterHeaterTemperature;
    }
}
