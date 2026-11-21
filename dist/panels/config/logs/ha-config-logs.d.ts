import type { CSSResultGroup, TemplateResult, PropertyValues } from "lit";
import { LitElement } from "lit";
import "../../../components/ha-app-icon";
import "../../../components/ha-button";
import "../../../components/ha-combo-box-item";
import "../../../components/ha-filter-integrations";
import "../../../components/ha-filter-pane";
import "../../../components/ha-filter-pane-chip";
import "../../../components/ha-generic-picker";
import "../../../components/input/ha-input-search";
import "../../../layouts/hass-subpage";
import type { HomeAssistant, Route } from "../../../types";
import "./error-log-card";
import "./system-log-card";
export declare class HaConfigLogs extends LitElement {
    hass: HomeAssistant;
    narrow: boolean;
    isWide: boolean;
    route: Route;
    private _filter;
    private _detail;
    private systemLog?;
    private providerPicker?;
    private _selectedLogProvider;
    private _integrations;
    private _logProviders;
    private _showFilters;
    private _integrationsExpanded;
    private _manifests?;
    private _providersLoaded;
    private _queryParams;
    connectedCallback(): void;
    protected willUpdate(changedProps: PropertyValues<this>): void;
    protected firstUpdated(changedProps: PropertyValues<this>): void;
    private _filterChanged;
    private _flushUrl;
    protected render(): TemplateResult;
    private _showDetail;
    private _openPicker;
    private _handleDropdownSelect;
    private _toggleFilters;
    private _closeFilters;
    private _integrationsChanged;
    private _clearIntegrations;
    private _integrationsExpandedChanged;
    private _writeUrl;
    private _init;
    private _applyUrl;
    private _getInstalledAddons;
    private _getLoadedIntegrations;
    private _getIntegrationLoggers;
    private _getLogProviderItems;
    private _renderProviderIcon;
    private _providerRenderer;
    private _getActiveProvider;
    private _getProviderIconPath;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-config-logs": HaConfigLogs;
    }
}
