import { LitElement, nothing } from "lit";
import "../../../components/ha-control-button";
import "../../../components/ha-control-button-group";
import "../../../components/ha-domain-icon";
import "../../../components/ha-state-icon";
import "../../../components/ha-svg-icon";
import type { HomeAssistant } from "../../../types";
import type { AreaCardFeatureContext } from "../cards/hui-area-card";
import type { LovelaceCardFeature, LovelaceCardFeatureEditor } from "../types";
import { type AreaControlsCardFeatureConfig, type LovelaceCardFeatureContext, type LovelaceCardFeaturePosition } from "./types";
export declare const supportsAreaControlsCardFeature: (hass: HomeAssistant, context: LovelaceCardFeatureContext) => boolean;
declare class HuiAreaControlsCardFeature extends LitElement implements LovelaceCardFeature {
    context?: AreaCardFeatureContext;
    position?: LovelaceCardFeaturePosition;
    private _config?;
    private _registries?;
    private _states?;
    private _controlStates?;
    private _localize;
    private _api;
    private get _area();
    /** The states of every entity a control can show or toggle. */
    private _selectControlStates;
    private get _controls();
    private _normalizeControl;
    static getStubConfig(): AreaControlsCardFeatureConfig;
    static getConfigElement(): Promise<LovelaceCardFeatureEditor>;
    setConfig(config: AreaControlsCardFeatureConfig): void;
    private _handleButtonTap;
    private _domainControls;
    private _areaEntityIds;
    private _controlEntities;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    static get styles(): import("lit").CSSResult[];
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-area-controls-card-feature": HuiAreaControlsCardFeature;
    }
}
export {};
