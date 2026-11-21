import type { PropertyValues } from "lit";
import { LitElement, nothing } from "lit";
import "../../../components/ha-card";
import "../../../components/ha-svg-icon";
import type { EntityRegistryDisplayEntry } from "../../../data/entity/entity_registry";
import type { HomeAssistant } from "../../../types";
import type { LovelaceCard, LovelaceCardEditor } from "../types";
import type { PlantStatusCardConfig } from "./types";
declare class HuiPlantStatusCard extends LitElement implements LovelaceCard {
    static getConfigElement(): Promise<LovelaceCardEditor>;
    static getStubConfig(hass: HomeAssistant, entities: string[], entitiesFallback: string[]): PlantStatusCardConfig;
    private _config?;
    private _stateObj?;
    _entity?: EntityRegistryDisplayEntry;
    private _sensorStates?;
    private _localize;
    private _formatters;
    private _hassConfig;
    private _themes;
    getCardSize(): number;
    setConfig(config: PlantStatusCardConfig): void;
    protected updated(changedProps: PropertyValues): void;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    static styles: import("lit").CSSResult;
    private _selectSensorStates;
    private _formatSensorValue;
    private _computeAttributes;
    private _handleMoreInfo;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-plant-status-card": HuiPlantStatusCard;
    }
}
export {};
