import { LitElement } from "lit";
import type { LoRaWANDevice } from "../../../../../data/lorawan";
export declare class LoRaWANConnectionLink extends LitElement {
    connection: LoRaWANDevice["connection"];
    private _ui;
    private _connection;
    private _brandsAccessToken?;
    protected render(): import("lit-html").TemplateResult<1>;
    private _navigate;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "lorawan-connection-link": LoRaWANConnectionLink;
    }
}
