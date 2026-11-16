import type { PropertyValues } from "lit";
import { LitElement, nothing } from "lit";
import "../../../components/ha-control-button";
import "../../../components/ha-control-button-group";
import "../../../components/ha-control-select-menu";
import "../../../components/ha-svg-icon";
import type { HomeAssistant } from "../../../types";
import type { LovelaceCardFeature, LovelaceCardFeatureEditor } from "../types";
import type { LovelaceCardFeatureContext, TimerPresetsCardFeatureConfig } from "./types";
export declare const supportsTimerPresetsCardFeature: (hass: HomeAssistant, context: LovelaceCardFeatureContext) => boolean;
declare class HuiTimerPresetsCardFeature extends LitElement implements LovelaceCardFeature {
    context?: LovelaceCardFeatureContext;
    private _stateObj?;
    private _localize;
    private _api;
    private _connection?;
    private _locale?;
    private _config?;
    private _entry?;
    private _presets;
    private _unsubEntityRegistry?;
    connectedCallback(): void;
    disconnectedCallback(): void;
    private _unsubscribeEntityRegistry;
    private _subscribeEntityEntry;
    protected updated(changedProps: PropertyValues): void;
    static getConfigElement(): Promise<LovelaceCardFeatureEditor>;
    static getStubConfig(): TimerPresetsCardFeatureConfig;
    setConfig(config: TimerPresetsCardFeatureConfig): void;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _onPresetTap;
    private _onPresetSelect;
    private _startPreset;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-timer-presets-card-feature": HuiTimerPresetsCardFeature;
    }
}
export {};
