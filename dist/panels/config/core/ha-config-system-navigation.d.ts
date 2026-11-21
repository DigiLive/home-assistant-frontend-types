import type { CSSResultGroup, PropertyValues, TemplateResult } from "lit";
import { LitElement } from "lit";
import "../../../components/ha-card";
import "../../../components/ha-icon-button";
import type { CloudStatus } from "../../../data/cloud";
import "../../../layouts/hass-subpage";
import type { HomeAssistant } from "../../../types";
import "../../../components/ha-config-navigation-list";
import "../ha-config-section";
declare class HaConfigSystemNavigation extends LitElement {
    hass: HomeAssistant;
    narrow: boolean;
    isWide: boolean;
    cloudStatus?: CloudStatus;
    private _latestBackupDate?;
    private _boardName?;
    private _storageInfo?;
    private _externalAccess;
    private _labFeatures?;
    protected render(): TemplateResult;
    protected firstUpdated(_changedProperties: PropertyValues<this>): void;
    private _fetchBackupInfo;
    private _fetchHardwareInfo;
    private _fetchStorageInfo;
    private _fetchNetworkStatus;
    private _fetchLabFeatures;
    private _showRestartDialog;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-config-system-navigation": HaConfigSystemNavigation;
    }
}
export {};
