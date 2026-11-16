import type { HassEntity } from "home-assistant-js-websocket";
import { LitElement } from "lit";
import type { TemplateResult, PropertyValues } from "lit";
import type { HaDevicePickerDeviceFilterFunc } from "./device/ha-device-picker";
import "./ha-generic-picker";
import "./ha-svg-icon";
export declare const renderLabelColorBadge: (color: string | undefined) => TemplateResult<1>;
export declare class HaLabelPicker extends LitElement {
    label?: string;
    value?: string;
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
    private _states?;
    private _registries?;
    private _api;
    private _slotNodes?;
    private _picker?;
    private _pendingLabelId?;
    protected willUpdate(changedProperties: PropertyValues): void;
    open(): Promise<void>;
    private _rowRenderer;
    private _getLabelsMemoized;
    private _getItems;
    private _allLabelNames;
    private _getAdditionalItems;
    protected render(): TemplateResult;
    private _valueChanged;
    private _setValue;
    private _notFoundLabel;
    private _handleSlotChange;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-label-picker": HaLabelPicker;
    }
}
