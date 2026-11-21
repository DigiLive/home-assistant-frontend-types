import type { CSSResultGroup, PropertyValues } from "lit";
import { LitElement } from "lit";
import type { HomeAssistant } from "../../types";
import "../lovelace/views/hui-view";
import "../lovelace/views/hui-view-background";
import "../lovelace/views/hui-view-container";
import "../../components/ha-top-app-bar-fixed";
declare class PanelClimate extends LitElement {
    hass: HomeAssistant;
    narrow: boolean;
    private _viewIndex;
    private _lovelace?;
    private _searchParams;
    private _childPanelReady?;
    willUpdate(changedProps: PropertyValues<this>): void;
    private _setup;
    private _debounceRegistriesChanged;
    private _registriesChanged;
    protected render(): import("lit-html").TemplateResult<1>;
    private _setLovelace;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-panel-climate": PanelClimate;
    }
}
export {};
