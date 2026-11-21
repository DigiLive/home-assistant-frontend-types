import type { HassEntity } from "home-assistant-js-websocket";
import { LitElement } from "lit";
import type { TemplateResult, PropertyValues } from "lit";
import type { HaDevicePickerDeviceFilterFunc } from "./device/ha-device-picker";
import "./ha-combo-box-item";
import "./ha-generic-picker";
import "./ha-icon-button";
import "./ha-svg-icon";
export declare class HaAreaPicker extends LitElement {
    label?: string;
    value?: string;
    helper?: string;
    placeholder?: string;
    noAdd: boolean;
    /**
     * Show only areas with entities from specific domains.
     * @type {Array}
     * @attr include-domains
     */
    includeDomains?: string[];
    /**
     * Show no areas with entities of these domains.
     * @type {Array}
     * @attr exclude-domains
     */
    excludeDomains?: string[];
    /**
     * Show only areas with entities of these device classes.
     * @type {Array}
     * @attr include-device-classes
     */
    includeDeviceClasses?: string[];
    /**
     * List of areas to be excluded.
     * @type {Array}
     * @attr exclude-areas
     */
    excludeAreas?: string[];
    deviceFilter?: HaDevicePickerDeviceFilterFunc;
    entityFilter?: (entity: HassEntity) => boolean;
    disabled: boolean;
    required: boolean;
    addButtonLabel?: string;
    private _api;
    private _i18n;
    private _states;
    private _entities;
    private _devices;
    private _areas;
    private _floors;
    private _picker?;
    private _pendingAreaId?;
    protected willUpdate(changedProperties: PropertyValues): void;
    open(): Promise<void>;
    private _getAreasMemoized;
    private _computeValueRenderer;
    private _getItems;
    private _allAreaNames;
    private _getAdditionalItems;
    protected render(): TemplateResult;
    private _valueChanged;
    private _setValue;
    private _notFoundLabel;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-area-picker": HaAreaPicker;
    }
}
