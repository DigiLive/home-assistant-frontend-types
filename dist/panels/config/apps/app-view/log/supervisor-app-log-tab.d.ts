import { type CSSResultGroup, LitElement, type PropertyValues, type TemplateResult } from "lit";
import "../../../../../components/ha-spinner";
import "../../../../../components/input/ha-input-search";
import type { HassioAddonDetails } from "../../../../../data/hassio/addon";
import type { HomeAssistant } from "../../../../../types";
import "../../../logs/error-log-card";
declare class SupervisorAppLogDashboard extends LitElement {
    hass: HomeAssistant;
    addon?: HassioAddonDetails;
    private _filter;
    private _queryParams;
    protected willUpdate(changedProps: PropertyValues<this>): void;
    protected render(): TemplateResult;
    private _filterChanged;
    private _flushUrl;
    private _applyUrl;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "supervisor-app-log-tab": SupervisorAppLogDashboard;
    }
}
export {};
