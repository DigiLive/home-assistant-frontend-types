import { LitElement, type PropertyValues } from "lit";
import { type StatisticsMetaData } from "../../data/recorder";
import "../ha-combo-box-item";
import "../ha-generic-picker";
import "../ha-icon-button";
import "../ha-svg-icon";
import "./state-badge";
export interface StatisticElementChangedEvent {
    statisticId: string;
}
declare global {
    interface HASSDomEvents {
        "edit-statistics-element": StatisticElementChangedEvent;
    }
}
export declare class HaStatisticPicker extends LitElement {
    private _states;
    private _registries;
    private _i18n;
    private _formatEntityName;
    private _config;
    private _api;
    autofocus: boolean;
    disabled: boolean;
    required: boolean;
    label?: string;
    value?: string;
    helper?: string;
    errorMessage?: string;
    invalid: boolean;
    placeholder?: string;
    statisticTypes?: "mean" | "sum";
    allowCustomEntity: any;
    statisticIds?: StatisticsMetaData[];
    helpMissingEntityUrl: string;
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
    private _picker?;
    canEdit?: boolean;
    willUpdate(changedProps: PropertyValues<this>): void;
    private _getStatisticIds;
    private _getItems;
    private _getAdditionalItems;
    private _getStatisticsItems;
    private _statisticMetaData;
    private _renderValue;
    private _makeValueRenderer;
    private _valueRenderer;
    private _editItem;
    private _computeItem;
    private _rowRenderer;
    protected render(): import("lit-html").TemplateResult<1>;
    private _searchFn;
    private _valueChanged;
    open(): Promise<void>;
    private _notFoundLabel;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-statistic-picker": HaStatisticPicker;
    }
}
