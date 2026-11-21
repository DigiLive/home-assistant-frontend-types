import { LitElement, nothing, type CSSResultGroup } from "lit";
import "./ha-markdown-element";
export declare class HaMarkdown extends LitElement {
    content?: any;
    allowSvg: boolean;
    allowDataUrl: boolean;
    breaks: boolean;
    lazyImages: boolean;
    cache: boolean;
    rewriteUrl?: (url: string) => string;
    private _markdownElement?;
    protected getUpdateComplete(): Promise<boolean>;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    static styles: CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-markdown": HaMarkdown;
    }
}
