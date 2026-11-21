import { LitElement } from "lit";
import "../../../../../components/ha-alert";
import "../../../../../components/ha-button";
import "../../../../../components/ha-card";
import "../../../../../components/ha-icon-next";
import "../../../../../components/ha-spinner";
import "../../../../../components/ha-svg-icon";
import "../../../../../components/item/ha-list-item-button";
import "../../../../../components/list/ha-list-nav";
import "../../../../../layouts/hass-subpage";
import type { HomeAssistant } from "../../../../../types";
export declare class LoRaWANOverview extends LitElement {
    hass: HomeAssistant;
    narrow: boolean;
    private _snapshot?;
    private _error;
    private _unsubscribe?;
    protected firstUpdated(): void;
    connectedCallback(): void;
    disconnectedCallback(): void;
    private _subscribe;
    protected render(): import("lit-html").TemplateResult<1>;
    private _addDevice;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "lorawan-overview": LoRaWANOverview;
    }
}
