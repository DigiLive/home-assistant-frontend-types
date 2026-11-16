import type { PropertyValues } from "lit";
import { LitElement } from "lit";
import type { FileSelector } from "../../data/selector";
import "../ha-file-upload";
export declare class HaFileSelector extends LitElement {
    selector: FileSelector;
    value?: string;
    label?: string;
    helper?: string;
    disabled: boolean;
    required: boolean;
    private _localize;
    private _api;
    private _filename?;
    private _busy;
    protected render(): import("lit-html").TemplateResult<1>;
    protected willUpdate(changedProps: PropertyValues<this>): void;
    private _uploadFile;
    private _removeFile;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-selector-file": HaFileSelector;
    }
}
