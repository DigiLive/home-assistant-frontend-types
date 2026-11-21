import type { CSSResultGroup } from "lit";
import { LitElement } from "lit";
import "../../../../../components/ha-alert";
import "../../../../../components/ha-button";
import "../../../../../components/ha-card";
import "../../../../../components/item/ha-row-item";
import "../../../../../layouts/hass-subpage";
import type { HomeAssistant, Route } from "../../../../../types";
declare class MatterOptionsPage extends LitElement {
    hass: HomeAssistant;
    route: Route;
    narrow: boolean;
    private _error?;
    private _unsub?;
    disconnectedCallback(): void;
    protected render(): import("lit-html").TemplateResult<1>;
    private _redirectOnNewMatterDevice;
    private _stopRedirect;
    private _startMobileCommissioning;
    private _commission;
    private _acceptSharedDevice;
    private _setWifi;
    private _setThread;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "matter-options-page": MatterOptionsPage;
    }
}
export {};
