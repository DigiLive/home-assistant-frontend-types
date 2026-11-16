import { LitElement } from "lit";
import type { SerialPortSelector } from "../../data/selector";
import "../ha-combo-box-item";
import "../ha-generic-picker";
import "../ha-svg-icon";
import "../ha-icon-button";
import "../input/ha-input";
export declare class HaSerialPortSelector extends LitElement {
    selector: SerialPortSelector;
    value?: string;
    label?: string;
    helper?: string;
    placeholder?: string;
    disabled: boolean;
    required: boolean;
    context?: Record<string, any>;
    private _serialPorts?;
    private _manualEntry;
    private _i18n;
    private _config?;
    private _devices?;
    private _areas?;
    private _api;
    private _input?;
    private _picker?;
    private _refreshTimeout?;
    private _pickerOpen;
    private _loadInFlight;
    disconnectedCallback(): void;
    protected firstUpdated(): void;
    private _canLoadPorts;
    private _stopRefresh;
    private _loadSerialPorts;
    private _handlePickerOpened;
    private _handlePickerClosed;
    private _buildGroupedItems;
    private _sectionLabel;
    private get _selectorDomain();
    private _memoRecommendedDomains;
    private get _recommendedDomains();
    private _getPickerItems;
    private _getAdditionalItems;
    private _rowRenderer;
    protected render(): import("lit-html").TemplateResult<1>;
    private _valueRenderer;
    private _buildSections;
    private _handlePickerChange;
    private _handleInputChange;
    private _revertToDropdown;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-selector-serial_port": HaSerialPortSelector;
    }
}
