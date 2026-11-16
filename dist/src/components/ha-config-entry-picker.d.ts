import { LitElement, nothing } from "lit";
import "./ha-combo-box-item";
import "./ha-domain-icon";
import "./ha-generic-picker";
declare class HaConfigEntryPicker extends LitElement {
    private _localize;
    private _api;
    integration?: string;
    label?: string;
    value: string;
    helper?: string;
    private _configEntries?;
    disabled: boolean;
    required: boolean;
    private _picker;
    open(): void;
    focus(): void;
    protected firstUpdated(): void;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _rowRenderer;
    private _getConfigEntries;
    private _valueRenderer;
    private _getItems;
    private _valueChanged;
    private _setValue;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-config-entry-picker": HaConfigEntryPicker;
    }
}
export {};
