import type { CSSResultGroup, PropertyValues } from "lit";
import { LitElement } from "lit";
import "../../../../../components/ha-button";
import "../../../../../components/ha-card";
import "../../../../../components/ha-icon-button";
import "../../../../../components/ha-svg-icon";
import type { ZHAGroup } from "../../../../../data/zha";
import "../../../../../layouts/hass-error-screen";
import "../../../../../layouts/hass-subpage";
import type { HomeAssistant } from "../../../../../types";
import "./zha-device-endpoint-list";
export declare class ZHAGroupPage extends LitElement {
    hass: HomeAssistant;
    group?: ZHAGroup;
    groupId: number;
    narrow: boolean;
    isWide: boolean;
    private _processingRemove;
    private _selectedDevicesToRemove;
    private _zhaRemoveMembersList;
    private _firstUpdatedCalled;
    connectedCallback(): void;
    disconnectedCallback(): void;
    protected firstUpdated(changedProperties: PropertyValues<this>): void;
    protected render(): import("lit-html").TemplateResult<1>;
    private _showAddMembersDialog;
    private _fetchData;
    private _handleRemoveSelectionChanged;
    private _removeMembersFromGroup;
    private _deleteGroup;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "zha-group-page": ZHAGroupPage;
    }
}
