import type { HassEntity } from "home-assistant-js-websocket";
import { LitElement, nothing } from "lit";
import "./ha-icon";
import "./ha-svg-icon";
export declare class HaAttributeIcon extends LitElement {
    stateObj?: HassEntity;
    attribute?: string;
    attributeValue?: string;
    icon?: string;
    private _config?;
    private _connection?;
    private _entities?;
    private _iconTask;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-attribute-icon": HaAttributeIcon;
    }
}
