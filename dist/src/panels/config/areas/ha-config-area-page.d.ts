import type { CSSResultGroup, PropertyValues } from "lit";
import { LitElement, nothing } from "lit";
import "../../../components/ha-button";
import "../../../components/ha-card";
import "../../../components/ha-dropdown";
import "../../../components/ha-dropdown-item";
import "../../../components/ha-icon-button";
import "../../../components/ha-icon-button-next";
import "../../../components/ha-icon-next";
import "../../../components/ha-list";
import "../../../components/ha-list-item";
import "../../../components/ha-svg-icon";
import "../../../components/ha-tooltip";
import type { EntityRegistryEntry } from "../../../data/entity/entity_registry";
import "../../../layouts/hass-error-screen";
import "../../../layouts/hass-subpage";
import type { HomeAssistant } from "../../../types";
import "../../logbook/ha-logbook";
declare class HaConfigAreaPage extends LitElement {
    hass: HomeAssistant;
    areaId: string;
    narrow: boolean;
    isWide: boolean;
    _entityReg: EntityRegistryEntry[];
    private _related?;
    private _logbookTime;
    private _columnsController;
    private _memberships;
    private _allDeviceIds;
    private _allEntities;
    private _getQuickLinkCounts;
    protected firstUpdated(changedProps: PropertyValues<this>): void;
    protected updated(changedProps: PropertyValues<this>): void;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _prepareEntities;
    private _renderScene;
    private _renderAutomation;
    private _renderScript;
    private _findRelated;
    private _showAddToDialog;
    private get _areaEntityIds();
    private _handleMenuAction;
    private _showSettings;
    private _openEntity;
    private _openDialog;
    private _deleteConfirm;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-config-area-page": HaConfigAreaPage;
    }
}
export {};
