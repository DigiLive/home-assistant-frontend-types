import type { CSSResultGroup, TemplateResult } from "lit";
import { LitElement } from "lit";
import "../../components/ha-card";
import "../../layouts/hass-subpage";
import type { HomeAssistant, Route } from "../../types";
import "./ha-pick-date-format-row";
import "./ha-pick-first-weekday-row";
import "./ha-pick-language-row";
import "./ha-pick-number-format-row";
import "./ha-pick-time-format-row";
import "./ha-pick-time-zone-row";
declare class HaProfileSectionLocalization extends LitElement {
    hass: HomeAssistant;
    narrow: boolean;
    route: Route;
    protected render(): TemplateResult;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-profile-section-localization": HaProfileSectionLocalization;
    }
}
export {};
