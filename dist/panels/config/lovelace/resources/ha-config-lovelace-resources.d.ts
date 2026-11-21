import type { CSSResultGroup, PropertyValues, TemplateResult } from "lit";
import { LitElement } from "lit";
import "../../../../components/ha-card";
import "../../../../components/ha-button";
import "../../../../components/ha-icon-button";
import "../../../../components/ha-svg-icon";
import "../../../../layouts/hass-loading-screen";
import "../../../../layouts/hass-subpage";
import "../../../../layouts/hass-tabs-subpage-data-table";
import type { HomeAssistant, Route } from "../../../../types";
export declare class HaConfigLovelaceResources extends LitElement {
    hass: HomeAssistant;
    isWide: boolean;
    narrow: boolean;
    route: Route;
    private _resources;
    private _loaded;
    private _lovelaceInfo?;
    private _tableSettings;
    private _activeColumnOrder?;
    private _activeHiddenColumns?;
    private _columns;
    protected render(): TemplateResult;
    protected firstUpdated(changedProps: PropertyValues<this>): void;
    private _fetchData;
    private _editResource;
    private _addResource;
    private _openDialog;
    private _removeResource;
    private _handleColumnsChanged;
    private _handleReloadResources;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-config-lovelace-resources": HaConfigLovelaceResources;
    }
}
