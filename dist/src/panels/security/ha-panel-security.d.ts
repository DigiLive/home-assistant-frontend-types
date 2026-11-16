import type { CSSResultGroup, PropertyValues } from "lit";
import { LitElement } from "lit";
import "../../components/ha-icon-button";
import "../../components/ha-top-app-bar-fixed";
import type { HomeAssistant } from "../../types";
import "../lovelace/views/hui-view";
import "../lovelace/views/hui-view-container";
import "../lovelace/views/hui-view-background";
declare class PanelSecurity extends LitElement {
    hass: HomeAssistant;
    narrow: boolean;
    private _viewIndex;
    private _lovelace?;
    private _config?;
    private _searchParms;
    private _childPanelReady?;
    private _loadConfigPromise?;
    private _loadConfigRevision;
    willUpdate(changedProps: PropertyValues<this>): void;
    private _setup;
    private _loadConfig;
    private _debounceRegistriesChanged;
    private _registriesChanged;
    protected render(): import("lit-html").TemplateResult<1>;
    private _setLovelace;
    private _editSecurity;
    private _saveConfig;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-panel-security": PanelSecurity;
    }
}
export {};
