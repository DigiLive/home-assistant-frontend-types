import type { TemplateResult } from "lit";
import { LitElement } from "lit";
import "./ha-generic-picker";
export declare class HaThemePicker extends LitElement {
    value?: string;
    label?: string;
    helper?: string;
    includeDefault: boolean;
    private _ui?;
    private _i18n?;
    disabled: boolean;
    required: boolean;
    noThemeLabel?: string;
    private _getThemeOptions;
    private _getItems;
    private _valueRenderer;
    protected render(): TemplateResult;
    static styles: import("lit").CSSResult;
    private _changed;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-theme-picker": HaThemePicker;
    }
}
