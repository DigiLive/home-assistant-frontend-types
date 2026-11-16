import type { CSSResultGroup, TemplateResult } from "lit";
import { LitElement } from "lit";
import "../../../../../components/ha-spinner";
import type { HassioAddonDetails } from "../../../../../data/hassio/addon";
import type { HomeAssistant } from "../../../../../types";
import "../info/supervisor-app-system-managed";
import "./supervisor-app-audio";
import "./supervisor-app-config";
import "./supervisor-app-network";
declare class SupervisorAppConfigDashboard extends LitElement {
    hass: HomeAssistant;
    addon?: HassioAddonDetails;
    narrow: boolean;
    controlEnabled: boolean;
    protected render(): TemplateResult;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "supervisor-app-config-tab": SupervisorAppConfigDashboard;
    }
}
export {};
