import type { CSSResultGroup, TemplateResult, PropertyValues } from "lit";
import { LitElement } from "lit";
import "../../../components/ha-card";
import "../../../components/ha-logo-svg";
import "../../../components/ha-svg-icon";
import "../../../components/item/ha-list-item-button";
import "../../../components/list/ha-list-base";
import "../../../layouts/hass-subpage";
import type { HomeAssistant, Route } from "../../../types";
declare class HaConfigInfo extends LitElement {
    hass: HomeAssistant;
    narrow: boolean;
    isWide: boolean;
    route: Route;
    private _osInfo?;
    private _hassioInfo?;
    private _installationMethod?;
    protected render(): TemplateResult;
    protected firstUpdated(changedProps: PropertyValues<this>): void;
    private _loadSupervisorInfo;
    private _showShortcuts;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-config-info": HaConfigInfo;
    }
}
export {};
