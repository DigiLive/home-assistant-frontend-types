import type { HassEntity } from "home-assistant-js-websocket";
import { LitElement, nothing } from "lit";
import "../../../../components/ha-button";
import "../../../../components/ha-icon-button";
import "../../../../components/ha-list-item";
import "../../../../components/ha-sortable";
import "../../../../components/ha-svg-icon";
import type { HomeAssistant } from "../../../../types";
import type { LovelaceCardFeatureConfig } from "../../card-features/types";
export type FeatureType = LovelaceCardFeatureConfig["type"];
export declare const getSupportedFeaturesType: (stateObj: HassEntity, featuresTypes?: string[]) => string[];
export declare const supportsFeaturesType: (stateObj: HassEntity, type: string) => any;
declare global {
    interface HASSDomEvents {
        "features-changed": {
            features: LovelaceCardFeatureConfig[];
        };
    }
}
export declare class HuiCardFeaturesEditor extends LitElement {
    hass?: HomeAssistant;
    stateObj?: HassEntity;
    features?: LovelaceCardFeatureConfig[];
    featuresTypes?: FeatureType[];
    label?: string;
    private _featuresKeys;
    private _supportsFeatureType;
    private _getSupportedFeaturesType;
    private _isFeatureTypeEditable;
    private _getFeatureTypeLabel;
    private _getKey;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _addFeature;
    private _featureMoved;
    private _removeFeature;
    private _editFeature;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-card-features-editor": HuiCardFeaturesEditor;
    }
}
