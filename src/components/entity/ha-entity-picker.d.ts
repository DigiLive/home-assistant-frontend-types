import { LitElement, type CSSResultGroup } from "lit";
import type { HomeAssistant } from "../../types";
import "../ha-combo-box-item";
import "../ha-icon-button";
import "../ha-svg-icon";
import "./ha-entity-combo-box";
import type { HaEntityComboBoxEntityFilterFunc } from "./ha-entity-combo-box";
import "./state-badge";
export declare class HaEntityPicker extends LitElement {
    hass: HomeAssistant;
    autofocus: boolean;
    disabled: boolean;
    required: boolean;
    allowCustomEntity: any;
    label?: string;
    value?: string;
    helper?: string;
    placeholder?: string;
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
    private _anchor?;
    private _input?;
    private _opened;
    private _renderContent;
    protected render(): import("lit-html").TemplateResult<1>;
    private _renderHelper;
    private _clear;
    private _showPicker;
    private _debounceOpenedChanged;
    private _openedChanged;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-entity-picker": HaEntityPicker;
    }
}
