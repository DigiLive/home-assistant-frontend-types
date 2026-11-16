import type { CSSResultGroup, TemplateResult } from "lit";
import { LitElement } from "lit";
import "../../../../../components/ha-spinner";
import type { HassioAddonDetails } from "../../../../../data/hassio/addon";
import type { HomeAssistant, Route } from "../../../../../types";
import "./supervisor-app-info";
declare class SupervisorAppInfoDashboard extends LitElement {
    narrow: boolean;
    route: Route;
    hass: HomeAssistant;
    addon?: HassioAddonDetails;
    controlEnabled: boolean;
    protected render(): TemplateResult;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "supervisor-app-info-tab": SupervisorAppInfoDashboard;
    }
}
export {};
