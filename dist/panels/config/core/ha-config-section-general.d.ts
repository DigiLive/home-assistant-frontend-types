import type { TemplateResult } from "lit";
import { LitElement } from "lit";
import "../../../components/buttons/ha-progress-button";
import "../../../components/ha-alert";
import "../../../components/ha-button";
import "../../../components/ha-card";
import "../../../components/ha-checkbox";
import "../../../components/ha-country-picker";
import "../../../components/ha-currency-picker";
import "../../../components/ha-language-picker";
import "../../../components/ha-select-box";
import "../../../components/ha-timezone-picker";
import "../../../components/input/ha-input";
import "../../../components/map/ha-map";
import "../../../layouts/hass-subpage";
import type { HomeAssistant } from "../../../types";
declare class HaConfigSectionGeneral extends LitElement {
    hass: HomeAssistant;
    narrow: boolean;
    private _submittingName;
    private _submittingRegional;
    private _unitSystem?;
    private _currency?;
    private _language?;
    private _country?;
    private _name?;
    private _elevation?;
    private _timeZone?;
    private _location?;
    private _error?;
    private _updateUnits?;
    protected render(): TemplateResult;
    private _renderHomeNameCard;
    private _renderLocationCard;
    private _renderRegionalSettingsCard;
    private _configuredUnitSystem;
    protected firstUpdated(): void;
    private _handleValueChanged;
    private _handleChange;
    private _unitSystemChanged;
    private _updateUnitsChanged;
    private _updateHomeName;
    private _updateRegionalSettings;
    private _editLocation;
    static styles: import("lit").CSSResult[];
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-config-section-general": HaConfigSectionGeneral;
    }
}
export {};
