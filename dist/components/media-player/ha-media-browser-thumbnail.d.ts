import type { CSSResultGroup, PropertyValues, TemplateResult } from "lit";
import { LitElement, nothing } from "lit";
export declare class HaMediaBrowserThumbnail extends LitElement {
    url?: string;
    private _darkMode?;
    private _hassUrl?;
    private _api;
    private _resolvedUrl?;
    private _small;
    private _brand;
    protected willUpdate(changedProps: PropertyValues): void;
    private _resolve;
    private _probeSize;
    protected render(): TemplateResult | typeof nothing;
    static readonly styles: CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-media-browser-thumbnail": HaMediaBrowserThumbnail;
    }
}
