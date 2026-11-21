import type { FanEntity } from "../../../data/fan";
import type { HomeAssistant } from "../../../types";
import type { LovelaceCardFeature } from "../types";
import { HuiModeSelectCardFeatureBase, type HuiModeSelectOption } from "./hui-mode-select-card-feature-base";
import type { FanDirectionCardFeatureConfig, LovelaceCardFeatureContext } from "./types";
export declare const supportsFanDirectionCardFeature: (hass: HomeAssistant, context: LovelaceCardFeatureContext) => boolean;
declare class HuiFanDirectionCardFeature extends HuiModeSelectCardFeatureBase<FanEntity, FanDirectionCardFeatureConfig> implements LovelaceCardFeature {
    protected readonly _attribute = "direction";
    protected readonly _modesAttribute = "direction";
    protected readonly _serviceDomain = "fan";
    protected readonly _serviceAction = "set_direction";
    protected readonly _defaultStyle = "icons";
    static getStubConfig(): FanDirectionCardFeatureConfig;
    protected _getOptions(): HuiModeSelectOption[];
    protected _isSupported(): boolean;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-fan-direction-card-feature": HuiFanDirectionCardFeature;
    }
}
export {};
