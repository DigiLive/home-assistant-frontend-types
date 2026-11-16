import { LitElement, nothing, type PropertyValues, type TemplateResult } from "lit";
import "../../../components/ha-aspect-ratio";
import "../../../components/ha-card";
import "../../../components/ha-control-button";
import "../../../components/ha-icon";
import "../../../components/tile/ha-tile-badge";
import "../../../components/tile/ha-tile-container";
import "../../../components/tile/ha-tile-icon";
import "../../../components/tile/ha-tile-info";
import type { HomeAssistant } from "../../../types";
import "../card-features/hui-card-features";
import type { LovelaceCardFeatureContext } from "../card-features/types";
import type { LovelaceCard, LovelaceCardEditor, LovelaceGridOptions } from "../types";
import type { AreaCardConfig } from "./types";
export declare const DEFAULT_ASPECT_RATIO = "16:9";
export declare const DEVICE_CLASSES: {
    sensor: string[];
    binary_sensor: string[];
};
export declare const SUM_DEVICE_CLASSES: string[];
export declare const SENSOR_ATTRIBUTE_SOURCES: Record<string, {
    domain: string;
    attribute: string;
}[]>;
export interface AreaCardFeatureContext extends LovelaceCardFeatureContext {
    exclude_entities?: string[];
}
export declare class HuiAreaCard extends LitElement implements LovelaceCard {
    hass: HomeAssistant;
    layout?: string;
    private _config?;
    private _featureContext;
    private _ratio;
    static getConfigElement(): Promise<LovelaceCardEditor>;
    setConfig(config: AreaCardConfig): void;
    static getStubConfig(hass: HomeAssistant): Promise<AreaCardConfig>;
    getCardSize(): number;
    getGridOptions(): LovelaceGridOptions;
    private get _hasCardAction();
    private get _hasImageAction();
    private _handleAction;
    private _handleImageAction;
    private _groupEntitiesByDeviceClass;
    private _groupedSensorEntityIds;
    private _groupedBinarySensorEntityIds;
    private _getCameraEntity;
    private _domainEntityIds;
    private _computeActiveAlertStates;
    private _renderAlertSensorBadge;
    private _renderAlertSensors;
    private _computeSensorsDisplay;
    private _getAttributeUnit;
    private _computeMedianValue;
    private _featurePosition;
    private _featureLayout;
    private _featureRows;
    willUpdate(changedProps: PropertyValues): void;
    protected render(): typeof nothing | TemplateResult<1>;
    static styles: import("lit").CSSResult[];
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-area-card": HuiAreaCard;
    }
}
