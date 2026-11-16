import type { CSSResultGroup, TemplateResult } from "lit";
import { LitElement } from "lit";
import "../../components/ha-card";
import "../../layouts/hass-subpage";
import type { HomeAssistant, Route } from "../../types";
import "./ha-enable-shortcuts-row";
import "./ha-force-narrow-row";
import "./ha-push-notifications-row";
import "./ha-set-suspend-row";
import "./ha-set-vibrate-row";
declare class HaProfileSectionBrowser extends LitElement {
    hass: HomeAssistant;
    narrow: boolean;
    route: Route;
    protected render(): TemplateResult;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-profile-section-browser": HaProfileSectionBrowser;
    }
}
export {};
