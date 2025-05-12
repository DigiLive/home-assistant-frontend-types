import type { HassEntity } from "home-assistant-js-websocket";
import type { PropertyValues, TemplateResult } from "lit";
import { LitElement } from "lit";
import type { HomeAssistant } from "../../types";
import "../ha-combo-box";
import type { HaComboBox } from "../ha-combo-box";
import "../ha-combo-box-item";
import "../ha-icon-button";
import "../ha-svg-icon";
import "./state-badge";
export type HaEntityComboBoxEntityFilterFunc = (entity: HassEntity) => boolean;
export declare class HaEntityComboBox extends LitElement {
    hass: HomeAssistant;
    autofocus: boolean;
    disabled: boolean;
    required: boolean;
    allowCustomEntity: any;
    label?: string;
    value?: string;
    helper?: string;
    createDomains?: string[];
    /**
     * Show entities from specific domains.
     * @type {Array}
     * @attr include-domains
     */
    includeDomains?: string[];
    /**
     * Show no entities of these domains.
     * @type {Array}
     * @attr exclude-domains
     */
    excludeDomains?: string[];
    /**
     * Show only entities of these device classes.
     * @type {Array}
     * @attr include-device-classes
     */
    includeDeviceClasses?: string[];
    /**
     * Show only entities with these unit of measuments.
     * @type {Array}
     * @attr include-unit-of-measurement
     */
    includeUnitOfMeasurement?: string[];
    /**
     * List of allowed entities to show.
     * @type {Array}
     * @attr include-entities
     */
    includeEntities?: string[];
    /**
     * List of entities to be excluded.
     * @type {Array}
     * @attr exclude-entities
     */
    excludeEntities?: string[];
    entityFilter?: HaEntityComboBoxEntityFilterFunc;
    hideClearIcon: boolean;
    private _opened;
    comboBox: HaComboBox;
    open(): Promise<void>;
    focus(): Promise<void>;
    private _initialItems;
    private _items;
    protected firstUpdated(changedProperties: PropertyValues): void;
    private _rowRenderer;
    private _getItems;
    protected shouldUpdate(changedProps: PropertyValues): boolean;
    willUpdate(changedProps: PropertyValues): void;
    protected render(): TemplateResult;
    private get _value();
    private _openedChanged;
    private _valueChanged;
    private _fuseIndex;
    private _filterChanged;
    private _setValue;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-entity-combo-box": HaEntityComboBox;
    }
}
