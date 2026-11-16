import { LitElement, nothing } from "lit";
import "./ha-alert";
import "./ha-app-icon";
import "./ha-combo-box-item";
import "./ha-generic-picker";
declare class HaAddonPicker extends LitElement {
    private _localize;
    private _api;
    private _config;
    label?: string;
    value: string;
    helper?: string;
    private _addons?;
    disabled: boolean;
    required: boolean;
    private _genericPicker;
    private _error?;
    open(): void;
    focus(): void;
    protected firstUpdated(): void;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _getApps;
    private _getItems;
    private get _value();
    private _addonChanged;
    private _setValue;
    private _valueRenderer;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-addon-picker": HaAddonPicker;
    }
}
export {};
