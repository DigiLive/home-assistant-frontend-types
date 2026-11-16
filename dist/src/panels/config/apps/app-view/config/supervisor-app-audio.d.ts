import type { CSSResultGroup, PropertyValues, TemplateResult } from "lit";
import { LitElement } from "lit";
import "../../../../../components/buttons/ha-progress-button";
import "../../../../../components/ha-alert";
import "../../../../../components/ha-card";
import "../../../../../components/ha-select";
import type { HassioAddonDetails } from "../../../../../data/hassio/addon";
import type { HomeAssistant } from "../../../../../types";
declare class SupervisorAppAudio extends LitElement {
    hass: HomeAssistant;
    addon: HassioAddonDetails;
    disabled: boolean;
    private _error?;
    private _inputDevices?;
    private _outputDevices?;
    private _selectedInput;
    private _selectedOutput;
    protected render(): TemplateResult;
    static get styles(): CSSResultGroup;
    protected willUpdate(changedProperties: PropertyValues<this>): void;
    private _setInputDevice;
    private _setOutputDevice;
    private _addonChanged;
    private _saveSettings;
}
declare global {
    interface HTMLElementTagNameMap {
        "supervisor-app-audio": SupervisorAppAudio;
    }
}
export {};
