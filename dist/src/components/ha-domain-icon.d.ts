import { LitElement, nothing } from "lit";
import "./ha-icon";
export declare class HaDomainIcon extends LitElement {
    domain?: string;
    deviceClass?: string;
    state?: string;
    icon?: string;
    brandFallback?: boolean;
    private _hassConfig?;
    private _connection?;
    private _hassUi?;
    private _brandsAccessToken?;
    private _iconTask;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _renderFallback;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-domain-icon": HaDomainIcon;
    }
}
