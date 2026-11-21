import type { PropertyValues, TemplateResult } from "lit";
import { LitElement } from "lit";
import "./ha-button";
import "./ha-icon-button";
import "./progress/ha-progress-bar";
declare global {
    interface HASSDomEvents {
        "file-picked": {
            files: File[];
        };
        "files-cleared": undefined;
    }
}
export declare class HaFileUpload extends LitElement {
    private _localize;
    private _locale?;
    accept: string;
    icon?: string;
    label?: string;
    secondary?: string;
    uploadingLabel?: string;
    deleteLabel?: string;
    supports?: string;
    value?: File | File[] | FileList | string;
    multiple: boolean;
    disabled: boolean;
    uploading: boolean;
    progress?: number;
    autoOpenFileDialog: boolean;
    private _drag;
    private _input?;
    protected firstUpdated(changedProperties: PropertyValues<this>): void;
    protected updated(changedProperties: PropertyValues<this>): void;
    private get _name();
    render(): TemplateResult;
    private _openFilePicker;
    private _handleDrop;
    private _handleDragStart;
    private _handleDragEnd;
    private _handleFilePicked;
    private _clearValue;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-file-upload": HaFileUpload;
    }
}
