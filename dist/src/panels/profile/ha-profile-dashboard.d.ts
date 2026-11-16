import type { CSSResultGroup, TemplateResult } from "lit";
import { LitElement } from "lit";
import "../../components/ha-button";
import "../../components/ha-card";
import "../../components/ha-config-navigation-list";
import "../../components/user/ha-user-badge";
import "./ha-pick-theme-row";
import "../../layouts/hass-subpage";
import type { HomeAssistant, Route } from "../../types";
declare class HaProfileDashboard extends LitElement {
    hass: HomeAssistant;
    narrow: boolean;
    route: Route;
    protected render(): TemplateResult;
    private _handleEditProfile;
    private _handleLogOut;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-profile-dashboard": HaProfileDashboard;
    }
}
export {};
