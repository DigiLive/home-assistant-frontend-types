import type { CSSResultGroup, TemplateResult } from "lit";
import { LitElement } from "lit";
import "../../../../components/ha-button";
import "../../../../components/ha-card";
import "../../../../components/ha-icon-button";
import "../../../../components/ha-svg-icon";
import type { EnergyPreferences, EnergyPreferencesValidation } from "../../../../data/energy";
import type { StatisticsMetaData } from "../../../../data/recorder";
import type { HomeAssistant } from "../../../../types";
import "./ha-energy-validation-result";
export declare class EnergyGridSettings extends LitElement {
    hass: HomeAssistant;
    preferences: EnergyPreferences;
    statsMetadata?: Record<string, StatisticsMetaData>;
    validationResult?: EnergyPreferencesValidation;
    private _co2ConfigEntry?;
    protected firstUpdated(): void;
    protected render(): TemplateResult;
    private _fetchCO2SignalConfigEntries;
    private _addCO2Sensor;
    private _removeCO2Sensor;
    private _getGridSources;
    private _addSource;
    private _editSource;
    private _deleteSource;
    private _savePreferences;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-energy-grid-settings": EnergyGridSettings;
    }
}
