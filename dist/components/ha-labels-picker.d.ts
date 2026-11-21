import type { HassEntity } from "home-assistant-js-websocket";
import type { TemplateResult } from "lit";
import { LitElement } from "lit";
import "./chips/ha-chip-set";
import "./chips/ha-input-chip";
import type { HaDevicePickerDeviceFilterFunc } from "./device/ha-device-picker";
import "./ha-label-picker";
import type { HaLabelPicker } from "./ha-label-picker";
import "./ha-tooltip";
export declare class HaLabelsPicker extends LitElement {
    label?: string;
    value?: string[];
    helper?: string;
    placeholder?: string;
    noAdd: boolean;
    /**
     * Show only labels with entities from specific domains.
     * @type {Array}
     * @attr include-domains
     */
    includeDomains?: string[];
    /**
     * Show no labels with entities of these domains.
     * @type {Array}
     * @attr exclude-domains
     */
    excludeDomains?: string[];
    /**
     * Show only labels with entities of these device classes.
     * @type {Array}
     * @attr include-device-classes
     */
    includeDeviceClasses?: string[];
    /**
     * List of labels to be excluded.
     * @type {Array}
     * @attr exclude-labels
     */
    excludeLabels?: string[];
    deviceFilter?: HaDevicePickerDeviceFilterFunc;
    entityFilter?: (entity: HassEntity) => boolean;
    disabled: boolean;
    required: boolean;
    private _labels?;
    private _i18n;
    private _api;
    labelPicker: HaLabelPicker;
    open(): Promise<void>;
    focus(): Promise<void>;
    private _sortedLabels;
    protected render(): TemplateResult;
    private get _value();
    private _removeItem;
    private _openDetail;
    private _labelChanged;
    private _setValue;
    private _openPicker;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-labels-picker": HaLabelsPicker;
    }
}
