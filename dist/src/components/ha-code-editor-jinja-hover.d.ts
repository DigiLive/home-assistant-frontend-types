import type { Completion } from "@codemirror/autocomplete";
import { LitElement } from "lit";
import "./ha-svg-icon";
export declare class HaCodeEditorJinjaHover extends LitElement {
    completion: Completion;
    docUrl?: string;
    openDocumentation: string;
    render(): import("lit-html").TemplateResult<1>;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-code-editor-jinja-hover": HaCodeEditorJinjaHover;
    }
}
