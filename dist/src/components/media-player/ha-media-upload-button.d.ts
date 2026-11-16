import { LitElement, nothing } from "lit";
import type { MediaPlayerItem } from "../../data/media-player";
import "../ha-button";
import "../ha-svg-icon";
declare global {
    interface HASSDomEvents {
        uploading: unknown;
        "media-refresh": unknown;
    }
}
declare class MediaUploadButton extends LitElement {
    currentItem?: MediaPlayerItem;
    private _localize;
    private _api;
    _uploading: number;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _startUpload;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-media-upload-button": MediaUploadButton;
    }
}
export {};
