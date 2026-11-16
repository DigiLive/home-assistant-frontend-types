import type { CSSResultGroup } from "lit";
import { LitElement } from "lit";
import "../../../components/data-table/ha-data-table";
import "../../../components/ha-button";
import "../../../components/ha-icon-button";
import "../../../components/ha-svg-icon";
import "../../../layouts/hass-error-screen";
import "../../../layouts/hass-loading-screen";
import "../../../layouts/hass-subpage";
import type { HomeAssistant, Route } from "../../../types";
export declare class HaConfigAppsRegistries extends LitElement {
    hass: HomeAssistant;
    narrow: boolean;
    route: Route;
    private _registries?;
    private _error?;
    protected firstUpdated(): void;
    private _columns;
    protected render(): import("lit-html").TemplateResult<1>;
    private _showAddRegistryDialog;
    private _removeRegistry;
    private _loadData;
    static styles: CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-config-apps-registries": HaConfigAppsRegistries;
    }
}
