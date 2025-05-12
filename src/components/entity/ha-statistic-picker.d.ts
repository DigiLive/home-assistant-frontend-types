import { LitElement, type CSSResultGroup, type PropertyValues } from "lit";
import { type StatisticsMetaData } from "../../data/recorder";
import type { HomeAssistant } from "../../types";
import "../ha-combo-box-item";
import "../ha-icon-button";
import "../ha-svg-icon";
import "./ha-entity-combo-box";
import "./ha-statistic-combo-box";
import "./state-badge";
export declare class HaStatisticPicker extends LitElement {
    hass: HomeAssistant;
    autofocus: boolean;
    disabled: boolean;
    required: boolean;
    label?: string;
    value?: string;
    helper?: string;
    placeholder?: string;
    statisticTypes?: "mean" | "sum";
    allowCustomEntity: any;
    statisticIds?: StatisticsMetaData[];
    /**
     * Show only statistics natively stored with these units of measurements.
     * @type {Array}
     * @attr include-statistics-unit-of-measurement
     */
    includeStatisticsUnitOfMeasurement?: string | string[];
    /**
     * Show only statistics with these unit classes.
     * @attr include-unit-class
     */
    includeUnitClass?: string | string[];
    /**
     * Show only statistics with these device classes.
     * @attr include-device-class
     */
    includeDeviceClass?: string | string[];
    /**
     * Show only statistics on entities.
     * @type {Boolean}
     * @attr entities-only
     */
    entitiesOnly: boolean;
    /**
     * List of statistics to be excluded.
     * @type {Array}
     * @attr exclude-statistics
     */
    excludeStatistics?: string[];
    hideClearIcon: boolean;
    private _anchor?;
    private _input?;
    private _opened;
    willUpdate(changedProps: PropertyValues): void;
    private _getStatisticIds;
    private _statisticMetaData;
    private _renderContent;
    private _computeItem;
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
        "ha-statistic-picker": HaStatisticPicker;
    }
}
