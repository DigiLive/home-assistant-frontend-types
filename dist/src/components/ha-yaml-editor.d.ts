import type { Schema } from "js-yaml";
import type { CSSResultGroup, PropertyValues } from "lit";
import { LitElement, nothing } from "lit";
import "./ha-button";
import "./ha-code-editor";
import type { HaCodeEditor } from "./ha-code-editor";
export declare class HaYamlEditor extends LitElement {
    value?: any;
    yamlSchema: Schema;
    defaultValue?: any;
    isValid: boolean;
    label?: string;
    autoUpdate: boolean;
    readOnly: boolean;
    disableFullscreen: boolean;
    inDialog: boolean;
    required: boolean;
    copyClipboard: boolean;
    hasExtraActions: boolean;
    private _yaml;
    private _i18n?;
    _codeEditor?: HaCodeEditor;
    private _focusPending;
    setValue(value: any): void;
    protected firstUpdated(): void;
    protected willUpdate(changedProperties: PropertyValues<this>): void;
    /**
     * Focuses the editor. If it is still being created, it is focused once it
     * has been rendered.
     */
    focus(): void;
    protected updated(changedProperties: PropertyValues<this>): void;
    disableCodeEditorFullscreen(): void;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _onChange;
    get yaml(): string;
    get codemirror(): import("@codemirror/view").EditorView;
    get hasComments(): boolean;
    private _onEditorSave;
    private _copyYaml;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-yaml-editor": HaYamlEditor;
    }
}
