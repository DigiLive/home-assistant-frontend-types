import type { PropertyValues } from "lit";
import { LitElement } from "lit";
import type { LocalizeFunc } from "../../common/translations/localize";
import type { HomeAssistant } from "../../types";
import "../ha-form/ha-form";
export declare class HaSelectorSelector extends LitElement {
    hass: HomeAssistant;
    value?: any;
    label?: string;
    helper?: string;
    disabled: boolean;
    narrow: boolean;
    required: boolean;
    protected _localize?: LocalizeFunc;
    private _yamlMode;
    protected shouldUpdate(changedProps: PropertyValues<this>): boolean;
    private _schema;
    protected render(): import("lit-html").TemplateResult<1>;
    private _valueChanged;
    private _computeLabelCallback;
    private _localizeValueCallback;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-selector-selector": HaSelectorSelector;
    }
}
