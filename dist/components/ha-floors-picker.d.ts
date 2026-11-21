import type { HassEntity } from "home-assistant-js-websocket";
import { LitElement } from "lit";
import type { HaDevicePickerDeviceFilterFunc } from "./device/ha-device-picker";
import "./ha-floor-picker";
export declare class HaFloorsPicker extends LitElement {
    label?: string;
    value?: string[];
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
    deviceFilter?: HaDevicePickerDeviceFilterFunc;
    entityFilter?: (entity: HassEntity) => boolean;
    pickedFloorLabel?: string;
    pickFloorLabel?: string;
    disabled: boolean;
    required: boolean;
    protected render(): import("lit-html").TemplateResult<1>;
    private get _currentFloors();
    private _updateFloors;
    private _floorChanged;
    private _addFloor;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-floors-picker": HaFloorsPicker;
    }
}
