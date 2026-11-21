import type { CSSResultGroup, TemplateResult } from "lit";
import { LitElement } from "lit";
import "../../components/ha-button";
import "../../components/ha-card";
import "../../components/item/ha-row-item";
import "../../layouts/hass-subpage";
import type { HomeAssistant, Route } from "../../types";
import "./ha-entity-id-picker-row";
import "./ha-pick-dashboard-row";
declare class HaProfileSectionPreferences extends LitElement {
    hass: HomeAssistant;
    narrow: boolean;
    route: Route;
    private _coreUserData?;
    private _unsubCoreData?;
    private _getCoreData;
    connectedCallback(): void;
    firstUpdated(): void;
    disconnectedCallback(): void;
    protected render(): TemplateResult;
    private _customizeSidebar;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-profile-section-preferences": HaProfileSectionPreferences;
    }
}
export {};
