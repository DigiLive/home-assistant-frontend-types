import type { HassEntity } from "home-assistant-js-websocket";
import type { TemplateResult } from "lit";
import { LitElement } from "lit";
import "../../../components/ha-control-button";
import "../../../components/ha-control-button-group";
import "../../../components/ha-svg-icon";
import type { HomeAssistant } from "../../../types";
import type { LovelaceCardFeature, LovelaceCardFeatureEditor } from "../types";
import { type TimerActionsCardFeatureConfig, type LovelaceCardFeatureContext } from "./types";
export declare const supportsTimerActionsCardFeature: (hass: HomeAssistant, context: LovelaceCardFeatureContext) => boolean;
interface TimerButton {
    translationKey: string;
    icon: string;
    serviceName: string;
    disabled: boolean;
}
export declare const TIMER_ACTIONS_BUTTON: Record<string, (stateObj: HassEntity) => TimerButton>;
declare class HuiTimerActionsCardFeature extends LitElement implements LovelaceCardFeature {
    context?: LovelaceCardFeatureContext;
    private _stateObj?;
    private _localize;
    private _api;
    private _config?;
    static getConfigElement(): Promise<LovelaceCardFeatureEditor>;
    static getStubConfig(): TimerActionsCardFeatureConfig;
    setConfig(config: TimerActionsCardFeatureConfig): void;
    protected render(): TemplateResult | null;
    private _onActionTap;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-timer-actions-card-feature": HuiTimerActionsCardFeature;
    }
}
export {};
