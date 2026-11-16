import type { HassEntity } from "home-assistant-js-websocket";
import { LitElement } from "lit";
import type { HaDevicePickerDeviceFilterFunc } from "./device/ha-device-picker";
import "./ha-area-picker";
import "./ha-sortable";
export declare class HaAreasPicker extends LitElement {
    label?: string;
    value?: string[];
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
    deviceFilter?: HaDevicePickerDeviceFilterFunc;
    entityFilter?: (entity: HassEntity) => boolean;
    pickedAreaLabel?: string;
    pickAreaLabel?: string;
    disabled: boolean;
    required: boolean;
    reorder: boolean;
    protected render(): import("lit-html").TemplateResult<1>;
    private _areaMoved;
    private get _currentAreas();
    private _updateAreas;
    private _areaChanged;
    private _addArea;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-areas-picker": HaAreasPicker;
    }
}
