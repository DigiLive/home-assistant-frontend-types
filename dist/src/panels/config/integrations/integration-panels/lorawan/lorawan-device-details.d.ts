import { LitElement } from "lit";
import "../../../../../components/ha-relative-time";
import type { LoRaWANDevice } from "../../../../../data/lorawan";
import "./lorawan-connection-link";
export declare class LoRaWANDeviceDetails extends LitElement {
    device: LoRaWANDevice;
    private _i18n;
    private _time;
    protected render(): import("lit-html").TemplateResult<1>;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "lorawan-device-details": LoRaWANDeviceDetails;
    }
}
