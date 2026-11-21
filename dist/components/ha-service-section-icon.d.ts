import { LitElement } from "lit";
import "./ha-icon";
import "./ha-svg-icon";
export declare class HaServiceSectionIcon extends LitElement {
    service?: string;
    section?: string;
    icon?: string;
    private _config?;
    private _connection?;
    private _iconTask;
    protected render(): symbol | import("lit-html").TemplateResult<1>;
    private _renderFallback;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-service-section-icon": HaServiceSectionIcon;
    }
}
