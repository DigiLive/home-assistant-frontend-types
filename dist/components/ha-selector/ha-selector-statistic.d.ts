import { LitElement } from "lit";
import type { StatisticSelector } from "../../data/selector";
import "../entity/ha-statistics-picker";
export declare class HaStatisticSelector extends LitElement {
    selector: StatisticSelector;
    value?: any;
    label?: string;
    helper?: string;
    disabled: boolean;
    required: boolean;
    protected render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-selector-statistic": HaStatisticSelector;
    }
}
