import { LitElement, nothing } from "lit";
import "./ha-icon";
import "./ha-svg-icon";
export declare class HaServiceIcon extends LitElement {
    service?: string;
    icon?: string;
    private _config?;
    private _connection?;
    private _iconTask;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _renderFallback;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-service-icon": HaServiceIcon;
    }
}
