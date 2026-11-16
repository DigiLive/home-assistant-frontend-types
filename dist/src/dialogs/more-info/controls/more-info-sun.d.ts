import type { HassEntity } from "home-assistant-js-websocket";
import { LitElement, nothing } from "lit";
import "../../../components/ha-relative-time";
declare class MoreInfoSun extends LitElement {
    stateObj?: HassEntity;
    private _i18n;
    private _formatters;
    private _config;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "more-info-sun": MoreInfoSun;
    }
}
export {};
