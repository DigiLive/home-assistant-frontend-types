import type { PropertyValues } from "lit";
import type { LightEntity } from "../../../data/light";
import type { HomeAssistant } from "../../../types";
import type { LovelaceCardFeature, LovelaceCardFeatureEditor } from "../types";
import { HuiModeSelectCardFeatureBase } from "./hui-mode-select-card-feature-base";
import type { LightEffectCardFeatureConfig, LovelaceCardFeatureContext } from "./types";
export declare const supportsLightEffectCardFeature: (hass: HomeAssistant, context: LovelaceCardFeatureContext) => boolean;
declare class HuiLightEffectCardFeature extends HuiModeSelectCardFeatureBase<LightEntity, LightEffectCardFeatureConfig> implements LovelaceCardFeature {
    protected readonly _attribute = "effect";
    protected readonly _modesAttribute = "effect_list";
    protected get _configuredModes(): string[];
    protected readonly _dropdownIconPath: string;
    protected readonly _allowIconsStyle = false;
    protected readonly _hideLabel = false;
    protected readonly _serviceDomain = "light";
    protected readonly _serviceAction = "turn_on";
    static getStubConfig(): LightEffectCardFeatureConfig;
    static getConfigElement(): Promise<LovelaceCardFeatureEditor>;
    protected shouldUpdate(changedProps: PropertyValues): boolean;
    protected _isSupported(): boolean;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-light-effect-card-feature": HuiLightEffectCardFeature;
    }
}
export {};
