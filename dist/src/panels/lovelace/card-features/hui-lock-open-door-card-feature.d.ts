import type { CSSResultGroup } from "lit";
import { LitElement, nothing } from "lit";
import "../../../components/ha-control-button";
import "../../../components/ha-control-button-group";
import type { HomeAssistant } from "../../../types";
import type { LovelaceCardFeature } from "../types";
import type { LockOpenDoorCardFeatureConfig, LovelaceCardFeatureContext } from "./types";
export declare const supportsLockOpenDoorCardFeature: (hass: HomeAssistant, context: LovelaceCardFeatureContext) => boolean;
type ButtonState = "normal" | "confirm" | "done";
declare class HuiLockOpenDoorCardFeature extends LitElement implements LovelaceCardFeature {
    context?: LovelaceCardFeatureContext;
    private _stateObj?;
    private _localize;
    private _api;
    _buttonState: ButtonState;
    private _config?;
    private _buttonTimeout?;
    static getStubConfig(): LockOpenDoorCardFeatureConfig;
    setConfig(config: LockOpenDoorCardFeatureConfig): void;
    private _setButtonState;
    private _open;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-lock-open-door-card-feature": HuiLockOpenDoorCardFeature;
    }
}
export {};
