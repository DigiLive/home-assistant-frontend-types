import type { PropertyValues } from "lit";
import { LitElement } from "lit";
import type { UnitOfMeasurementSelector } from "../../data/selector";
import "../ha-unit-of-measurement-picker";
export declare class HaUnitOfMeasurementSelector extends LitElement {
    selector: UnitOfMeasurementSelector;
    value?: string;
    label?: string;
    helper?: string;
    disabled: boolean;
    required: boolean;
    context?: {
        filter_device_class?: string | string[];
        filter_state_class?: string | string[];
    };
    private _units;
    private _getUnits;
    protected render(): import("lit-html").TemplateResult<1>;
    protected updated(changedProps: PropertyValues<this>): void;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-selector-unit_of_measurement": HaUnitOfMeasurementSelector;
    }
}
