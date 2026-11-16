import { LitElement } from "lit";
import "../../../components/ha-dropdown";
import "../../../components/ha-dropdown-item";
import "../../../components/item/ha-list-item-base";
import "../../../components/list/ha-list-base";
import type { ConfigEntry } from "../../../data/config_entries";
import type { DiagnosticInfo } from "../../../data/diagnostics";
import type { EntityRegistryEntry } from "../../../data/entity/entity_registry";
import type { IntegrationManifest } from "../../../data/integration";
import type { HomeAssistant } from "../../../types";
import "./ha-config-entry-device-row";
import type { SubEntryData } from "./ha-config-integration-page";
declare class HaConfigSubEntryRow extends LitElement {
    hass: HomeAssistant;
    narrow: boolean;
    manifest?: IntegrationManifest;
    diagnosticHandler?: DiagnosticInfo;
    entities: EntityRegistryEntry[];
    entry: ConfigEntry;
    data: SubEntryData;
    private _expanded;
    protected render(): import("lit-html").TemplateResult<1>;
    private _toggleExpand;
    private _getEntities;
    private _handleReconfigureSub;
    private _handleMenuAction;
    private _handleRenameSub;
    private _handleDeleteSub;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-config-sub-entry-row": HaConfigSubEntryRow;
    }
}
export {};
