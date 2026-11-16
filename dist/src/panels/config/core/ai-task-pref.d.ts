import type { PropertyValues } from "lit";
import { LitElement } from "lit";
import "../../../components/entity/ha-entity-picker";
import "../../../components/ha-card";
import "../../../components/ha-icon-button";
import "../../../components/ha-settings-row";
import type { HomeAssistant } from "../../../types";
export declare class AITaskPref extends LitElement {
    narrow: boolean;
    hass: HomeAssistant;
    private _prefs?;
    private _pendingPrefs;
    private _configFlows;
    private _saving;
    protected firstUpdated(changedProps: PropertyValues<this>): void;
    protected render(): import("lit-html").TemplateResult<1>;
    private _renderPicker;
    private _entityId;
    private _updateConfigFlow;
    private _handlePrefChange;
    private _openConfigFlow;
    private _update;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ai-task-pref": AITaskPref;
    }
}
