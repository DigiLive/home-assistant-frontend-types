import type { PropertyValues } from "lit";
import { LitElement, nothing } from "lit";
import "../../../components/date-picker/ha-date-range-picker";
import "../../../components/ha-button";
import "../../../components/ha-dropdown";
import "../../../components/ha-dropdown-item";
import "../../../components/ha-ripple";
import "../../../components/ha-spinner";
import "../../../components/ha-svg-icon";
type VerticalOpeningDirection = "up" | "down";
type OpeningDirection = "right" | "left" | "center" | "inline";
export declare class HuiEnergyPeriodSelector extends LitElement {
    collectionKey?: string;
    narrow?: boolean;
    fixed?: boolean;
    allowCompare: boolean;
    verticalOpeningDirection?: VerticalOpeningDirection;
    openingDirection?: OpeningDirection;
    private _i18n;
    private _hassConfig;
    private _ui;
    _datepickerOpen: boolean;
    _startDate?: Date;
    _endDate?: Date;
    private _ranges;
    private _compare;
    private _collapseButtons;
    private _loading;
    private _loadingTimer?;
    private _resizeObserver?;
    private _energyCollection;
    private _measure;
    private _attachObserver;
    protected firstUpdated(): void;
    connectedCallback(): void;
    disconnectedCallback(): void;
    willUpdate(changedProps: PropertyValues): void;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _simpleRange;
    private get _datePicker();
    private _handleIconOverflowMenuOpened;
    private _openDatePicker;
    private _updateCollectionPeriod;
    private _dateRangeChanged;
    private _presetSelected;
    private _pickNow;
    private _pickPrevious;
    private _pickNext;
    private _shift;
    private _updateDates;
    private _handleDatepickerToggle;
    private _toggleCompare;
    private _downloadData;
    private _scheduleLoadingIndicator;
    private _getDatePickerPlacement;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-energy-period-selector": HuiEnergyPeriodSelector;
    }
}
export {};
