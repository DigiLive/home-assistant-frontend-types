import { LitElement } from "lit";
import type { CompletionItem } from "./ha-code-editor-completion-items";
import "./ha-code-editor-completion-items";
export declare class HaCodeEditorJinjaArgHover extends LitElement {
    /** Bold heading shown above the items grid (e.g. entity/device/area name). */
    heading?: string;
    items: CompletionItem[];
    render(): import("lit-html").TemplateResult<1>;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-code-editor-jinja-arg-hover": HaCodeEditorJinjaArgHover;
    }
}
