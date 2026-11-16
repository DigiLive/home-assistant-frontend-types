import type { HassEntity } from "home-assistant-js-websocket";
import { LitElement } from "lit";
import type { PickerComboBoxItem } from "./ha-picker-combo-box";
import "./ha-combo-box-item";
import "./ha-domain-icon";
import "./ha-generic-picker";
import "./ha-state-icon";
export interface AreaControlPickerItem extends PickerComboBoxItem {
    type?: "domain" | "entity";
    stateObj?: HassEntity;
    domain?: string;
    deviceClass?: string;
}
export declare class HaAreaControlsPicker extends LitElement {
    areaId: string;
    excludeEntities?: string[];
    value?: string;
    excludeValues?: string[];
    label?: string;
    placeholder?: string;
    helper?: string;
    disabled: boolean;
    required: boolean;
    addButtonLabel?: string;
    private _states;
    private _registries;
    private _i18n;
    private _domainSearchKeys;
    private _entitySearchKeys;
    private _createFuseIndex;
    private _domainFuseIndex;
    private _entityFuseIndex;
    private _getItems;
    private _rowRenderer;
    protected render(): import("lit-html").TemplateResult<1>;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-area-controls-picker": HaAreaControlsPicker;
    }
}
