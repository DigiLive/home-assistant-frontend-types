import { LitElement, nothing } from "lit";
import "./ha-alert";
export type SecureConnectionFeature = "microphone" | "camera" | "push_notifications";
declare class HaSecureConnectionAlert extends LitElement {
    feature: SecureConnectionFeature;
    private _localize;
    private _config;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-secure-connection-alert": HaSecureConnectionAlert;
    }
}
export {};
