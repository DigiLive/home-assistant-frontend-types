import { LitElement } from "lit";
export declare class HaAppIcon extends LitElement {
    slug: string;
    hasIcon?: boolean;
    alt: string;
    loading: "eager" | "lazy";
    private _failedSrc?;
    private _image?;
    protected render(): any;
    private _handleError;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-app-icon": HaAppIcon;
    }
}
