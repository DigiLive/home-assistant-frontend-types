import type { CSSResultGroup, TemplateResult } from "lit";
import { LitElement } from "lit";
import "../../../../components/ha-card";
import "../../../../components/ha-button";
import "../../../../components/ha-icon-button";
import type { EnergyPreferences, EnergyPreferencesValidation } from "../../../../data/energy";
import type { HomeAssistant } from "../../../../types";
import "./ha-energy-validation-result";
export declare class EnergyHomeSettings extends LitElement {
    hass: HomeAssistant;
    private _i18n;
    private _states;
    private _hassConfig;
    preferences: EnergyPreferences;
    validationResult?: EnergyPreferencesValidation;
    protected render(): TemplateResult;
    private _addSource;
    private _editSource;
    private _deleteSource;
    private _savePreferences;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-energy-home-settings": EnergyHomeSettings;
    }
}
