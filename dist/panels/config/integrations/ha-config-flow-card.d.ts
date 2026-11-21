import type { TemplateResult } from "lit";
import { LitElement } from "lit";
import "../../../components/ha-button";
import "../../../components/ha-dropdown";
import "../../../components/ha-dropdown-item";
import type { IntegrationManifest } from "../../../data/integration";
import type { HomeAssistant } from "../../../types";
import type { DataEntryFlowProgressExtended } from "./ha-config-integrations";
import "./ha-integration-action-card";
export declare class HaConfigFlowCard extends LitElement {
    hass: HomeAssistant;
    flow: DataEntryFlowProgressExtended;
    manifest?: IntegrationManifest;
    protected render(): TemplateResult;
    private _continueFlow;
    private _ignoreFlow;
    private _handleFlowUpdated;
    private _fetchApplicationCredentials;
    private _removeApplicationCredential;
    private _handleDelete;
    private _handleDropdownSelect;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-config-flow-card": HaConfigFlowCard;
    }
}
