import { LitElement } from "lit";
import type { UiColorExtraOption } from "../data/selector";
import "./ha-combo-box-item";
import "./ha-generic-picker";
import "./ha-icon";
import "./ha-svg-icon";
export declare class HaColorPicker extends LitElement {
    label?: string;
    helper?: string;
    value?: string;
    defaultColor?: string;
    includeState: boolean;
    includeNone: boolean;
    extraOptions?: UiColorExtraOption[];
    disabled: boolean;
    private _extraOptionsColorMap;
    required: boolean;
    private _i18n;
    render(): import("lit-html").TemplateResult<1>;
    private _getAdditionalItems;
    private _getItems;
    private _getColors;
    private _renderItemIcon;
    private _rowRenderer;
    private _valueRenderer;
    private _renderColorCircle;
    private _valueChanged;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-color-picker": HaColorPicker;
    }
}
