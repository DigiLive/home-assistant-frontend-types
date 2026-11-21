import type { CSSResultGroup, TemplateResult } from "lit";
import { LitElement } from "lit";
import "../../../components/ha-card";
import "../../../components/ha-icon-next";
import type { PageNavigation } from "../../../layouts/hass-tabs-subpage";
import type { HomeAssistant } from "../../../types";
import "../../../components/ha-config-navigation-list";
declare class HaConfigNavigation extends LitElement {
    hass: HomeAssistant;
    narrow: boolean;
    pages: PageNavigation[];
    label?: string;
    private _visiblePages?;
    private _hasBluetoothConfigEntries;
    private _bluetoothEntriesLoaded?;
    private _childReadyRegistered;
    private _filterNavigationPages;
    private _registerChildPanelReady?;
    protected updated(changedProps: Map<PropertyKey, unknown>): void;
    protected render(): TemplateResult;
    private _loadBluetoothEntries;
    private _resolveVisiblePages;
    static styles: CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-config-navigation": HaConfigNavigation;
    }
}
export {};
