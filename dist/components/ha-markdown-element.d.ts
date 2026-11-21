import type { PropertyValues } from "lit";
import { ReactiveElement } from "lit";
declare class HaMarkdownElement extends ReactiveElement {
    content?: any;
    allowSvg: boolean;
    allowDataUrl: boolean;
    breaks: boolean;
    lazyImages: boolean;
    cache: boolean;
    rewriteUrl?: (url: string) => string;
    disconnectedCallback(): void;
    protected createRenderRoot(): this;
    private _renderPromise;
    protected update(changedProps: PropertyValues<this>): void;
    protected getUpdateComplete(): Promise<boolean>;
    protected willUpdate(_changedProperties: PropertyValues<this>): void;
    private _computeCacheKey;
    private _render;
    private _resize;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-markdown-element": HaMarkdownElement;
    }
}
export {};
