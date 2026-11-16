import type { HassEntity } from "home-assistant-js-websocket";
import { LitElement } from "lit";
import type { TemplateResult, PropertyValues } from "lit";
import type { HaDevicePickerDeviceFilterFunc } from "./device/ha-device-picker";
import "./ha-combo-box-item";
import "./ha-floor-icon";
import "./ha-generic-picker";
import "./ha-icon-button";
import "./ha-svg-icon";
export declare class HaFloorPicker extends LitElement {
    label?: string;
    value?: string;
    helper?: string;
    placeholder?: string;
    noAdd: boolean;
    /**
     * Show only floors with entities from specific domains.
     * @type {Array}
     * @attr include-domains
     */
    includeDomains?: string[];
    /**
     * Show no floors with entities of these domains.
     * @type {Array}
     * @attr exclude-domains
     */
    excludeDomains?: string[];
    /**
     * Show only floors with entities of these device classes.
     * @type {Array}
     * @attr include-device-classes
     */
    includeDeviceClasses?: string[];
    /**
     * List of floors to be excluded.
     * @type {Array}
     * @attr exclude-floors
     */
    excludeFloors?: string[];
    deviceFilter?: HaDevicePickerDeviceFilterFunc;
    entityFilter?: (entity: HassEntity) => boolean;
    disabled: boolean;
    required: boolean;
    private _api;
    private _i18n;
    private _states;
    private _entities;
    private _devices;
    private _areas;
    private _floors;
    private _picker?;
    private _pendingFloorId?;
    protected willUpdate(changedProperties: PropertyValues): void;
    open(): Promise<void>;
    private _computeValueRenderer;
    private _getFloors;
    private _rowRenderer;
    private _getItems;
    private _allFloorNames;
    private _getAdditionalItems;
    protected render(): TemplateResult;
    private _valueChanged;
    private _setValue;
    private _notFoundLabel;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-floor-picker": HaFloorPicker;
    }
}
