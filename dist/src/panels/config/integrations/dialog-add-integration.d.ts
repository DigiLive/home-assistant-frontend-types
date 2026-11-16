import type { PropertyValues, TemplateResult } from "lit";
import { LitElement, nothing } from "lit";
import "../../../components/ha-dialog";
import "../../../components/ha-icon-button-prev";
import "../../../components/ha-icon-next";
import "../../../components/ha-svg-icon";
import "../../../components/input/ha-input-search";
import "../../../components/item/ha-list-item-button";
import "../../../components/list/ha-list-virtualized";
import type { HaListVirtualizedItem } from "../../../components/list/ha-list-virtualized";
import type { HomeAssistant } from "../../../types";
import "./ha-domain-integrations";
import "./ha-integration-list-item";
import type { AddIntegrationDialogParams } from "./show-add-integration-dialog";
export interface IntegrationListItem extends HaListVirtualizedItem {
    name: string;
    domain: string;
    config_flow?: boolean;
    is_helper?: boolean;
    integrations?: string[];
    domains?: string[];
    iot_standards?: string[];
    supported_by?: string;
    cloud?: boolean;
    is_built_in?: boolean;
    overwrites_built_in?: boolean;
    is_add?: boolean;
    single_config_entry?: boolean;
    is_discovered?: boolean;
}
declare class AddIntegrationDialog extends LitElement {
    hass: HomeAssistant;
    private _integrations?;
    private _helpers?;
    private _initialFilter?;
    private _filter?;
    private _integrationFilter?;
    private _pickedBrand?;
    private _prevPickedBrand?;
    private _flowsInProgress?;
    private _showDiscovered;
    private _openedDirectly;
    private _navigateToResult;
    private _open;
    private _narrow;
    private _listElement?;
    private _width?;
    private _height?;
    private _loadId;
    showDialog(params?: AddIntegrationDialogParams): Promise<void>;
    closeDialog(): void;
    private _dialogClosed;
    willUpdate(changedProps: PropertyValues): void;
    private _filterIntegrations;
    private _getIntegrations;
    protected render(): typeof nothing | TemplateResult<1>;
    private _getFlowsForCurrentView;
    private _getBrandHeading;
    private _renderBrandView;
    private _handleSelectBrandEvent;
    private _handleSupportedByEvent;
    private _supportedBy;
    private _renderAll;
    private _renderRow;
    private _load;
    private _filterChanged;
    private _integrationPicked;
    private _handleIntegrationPicked;
    private _createFlow;
    private _getFlowsInProgressForDomains;
    private _maybeSubmit;
    private _prevClicked;
    static styles: import("lit").CSSResult[];
}
declare global {
    interface HTMLElementTagNameMap {
        "dialog-add-integration": AddIntegrationDialog;
    }
}
export {};
