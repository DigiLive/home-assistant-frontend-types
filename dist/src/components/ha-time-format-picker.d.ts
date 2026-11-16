import { LitElement } from "lit";
import "./ha-select";
import type { TimestampRenderingFormat } from "../panels/lovelace/components/types";
export declare class HaTimeFormatPicker extends LitElement {
    value?: TimestampRenderingFormat;
    label?: string;
    helper?: string;
    disabled: boolean;
    private _localize;
    private _options;
    private _styleOptions;
    protected render(): import("lit-html").TemplateResult<1>;
    private _selectChanged;
    private _styleChanged;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-time-format-picker": HaTimeFormatPicker;
    }
}
