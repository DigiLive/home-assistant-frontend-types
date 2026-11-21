import type { HassEntity } from "home-assistant-js-websocket";
import { LitElement, type PropertyValues } from "lit";
import { type DeviceRegistryEntry } from "../../data/device/device_registry";
import "../ha-alert";
import "../ha-button";
import "../ha-generic-picker";
import "../ha-svg-icon";
import "../ha-tree-indicator";
export type HaDevicePickerDeviceFilterFunc = (device: DeviceRegistryEntry) => boolean;
export type HaDevicePickerEntityFilterFunc = (entity: HassEntity) => boolean;
export declare class HaDevicePicker extends LitElement {
    private _states;
    private _registries;
    private _i18n;
    private _darkMode?;
    private _hassUrl?;
    private _brandsAccessToken?;
    private _api?;
    private _connection?;
    autofocus: boolean;
    disabled: boolean;
    required: boolean;
    label?: string;
    value?: string;
    helper?: string;
    placeholder?: string;
    searchLabel?: string;
    createDomains?: string[];
    /**
     * Show only devices with entities from specific domains.
     * @type {Array}
     * @attr include-domains
     */
    includeDomains?: string[];
    /**
     * Show no devices with entities of these domains.
     * @type {Array}
     * @attr exclude-domains
     */
    excludeDomains?: string[];
    /**
     * Show only devices with entities of these device classes.
     * @type {Array}
     * @attr include-device-classes
     */
    includeDeviceClasses?: string[];
    /**
     * List of devices to be excluded.
     * @type {Array}
     * @attr exclude-devices
     */
    excludeDevices?: string[];
    deviceFilter?: HaDevicePickerDeviceFilterFunc;
    entityFilter?: HaDevicePickerEntityFilterFunc;
    hideClearIcon: boolean;
    /**
     * The split devices that can actually replace the current value, when the
     * caller knows better than this picker. Narrows the replacement candidates,
     * so the user is only asked to choose when there is a real choice.
     */
    replacementDeviceIds?: string[];
    private _picker?;
    private _configEntryLookup;
    private _compositeSplits?;
    private _loadingCompositeSplits;
    private _getDevicesMemoized;
    protected firstUpdated(_changedProperties: PropertyValues<this>): void;
    protected willUpdate(changedProperties: PropertyValues): void;
    private _loadConfigEntries;
    private _loadCompositeSplits;
    private _getReplacement;
    private _getItems;
    private _searchFn;
    private _valueRenderer;
    private _rowRenderer;
    protected render(): import("lit-html").TemplateResult<1>;
    private _renderReplacedAlert;
    private _handleReplace;
    private _setValue;
    open(): Promise<void>;
    private _valueChanged;
    private _notFoundLabel;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-device-picker": HaDevicePicker;
    }
}
