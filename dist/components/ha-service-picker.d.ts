import type { PropertyValues, TemplateResult } from "lit";
import { LitElement } from "lit";
import "./ha-combo-box-item";
import "./ha-generic-picker";
import "./ha-service-icon";
declare class HaServicePicker extends LitElement {
    private _i18n;
    private _services;
    private _connection;
    private _config;
    disabled: boolean;
    label?: string;
    placeholder?: string;
    value?: string;
    showServiceId: boolean;
    private _picker?;
    open(): Promise<void>;
    protected firstUpdated(props: PropertyValues<this>): void;
    private _rowRenderer;
    private _valueRenderer;
    protected render(): TemplateResult;
    private _getItems;
    private _serviceItems;
    private _valueChanged;
    private _setValue;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-service-picker": HaServicePicker;
    }
}
export {};
