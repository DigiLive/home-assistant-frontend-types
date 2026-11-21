import { LitElement } from "lit";
import type { PeriodSelector } from "../../data/selector";
import type { HomeAssistant } from "../../types";
import type { LocalizeFunc } from "../../common/translations/localize";
import "../ha-form/ha-form";
export declare class HaPeriodSelector extends LitElement {
    hass: HomeAssistant;
    selector: PeriodSelector;
    value?: unknown;
    label?: string;
    helper?: string;
    disabled: boolean;
    required: boolean;
    protected _localize?: LocalizeFunc;
    private _schema;
    protected render(): import("lit-html").TemplateResult<1>;
    private _periods;
    private _data;
    private _valueChanged;
    private _computeHelperCallback;
    private _computeLabelCallback;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-selector-period": HaPeriodSelector;
    }
}
