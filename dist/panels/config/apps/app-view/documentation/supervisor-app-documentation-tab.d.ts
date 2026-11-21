import "../../../../../components/ha-card";
import type { CSSResultGroup, TemplateResult } from "lit";
import { LitElement } from "lit";
import "../../../../../components/ha-alert";
import "../../../../../components/ha-spinner";
import "../../../../../components/ha-markdown";
import type { HassioAddonDetails } from "../../../../../data/hassio/addon";
import "../../../../../layouts/hass-loading-screen";
import type { HomeAssistant } from "../../../../../types";
declare class SupervisorAppDocumentationDashboard extends LitElement {
    hass: HomeAssistant;
    addon?: HassioAddonDetails;
    private _error?;
    private _content?;
    connectedCallback(): Promise<void>;
    protected render(): TemplateResult;
    static get styles(): CSSResultGroup;
    private _loadData;
}
declare global {
    interface HTMLElementTagNameMap {
        "supervisor-app-documentation-tab": SupervisorAppDocumentationDashboard;
    }
}
export {};
