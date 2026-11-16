import type { PropertyValues } from "lit";
import { LitElement, nothing } from "lit";
import type { AreaSelector } from "../../data/selector";
import "../ha-area-picker";
import "../ha-areas-picker";
export declare class HaAreaSelector extends LitElement {
    private _registries;
    private _api;
    selector: AreaSelector;
    value?: any;
    label?: string;
    helper?: string;
    disabled: boolean;
    required: boolean;
    private _configEntries?;
    private _fetchedConfigEntries;
    private _deviceIntegrationLookup;
    private _hasIntegration;
    protected willUpdate(changedProperties: PropertyValues<this>): void;
    protected updated(): void;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _filterEntities;
    private _filterDevices;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-selector-area": HaAreaSelector;
    }
}
