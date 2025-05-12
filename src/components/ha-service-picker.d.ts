import { LitElement } from "lit";
import type { HomeAssistant } from "../types";
import "./ha-combo-box";
import "./ha-combo-box-item";
import "./ha-service-icon";
declare class HaServicePicker extends LitElement {
    hass: HomeAssistant;
    disabled: boolean;
    value?: string;
    private _filter?;
    protected willUpdate(): void;
    private _rowRenderer;
    protected render(): import("lit-html").TemplateResult<1>;
    private _services;
    private _filteredServices;
    private _filterChanged;
    private _valueChanged;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-service-picker": HaServicePicker;
    }
}
export {};
