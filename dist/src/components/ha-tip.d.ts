import { LitElement, nothing } from "lit";
import "./ha-svg-icon";
declare class HaTip extends LitElement {
    private _localize;
    render(): typeof nothing | import("lit-html").TemplateResult<1>;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-tip": HaTip;
    }
}
export {};
