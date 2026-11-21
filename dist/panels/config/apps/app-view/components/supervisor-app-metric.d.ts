import type { TemplateResult } from "lit";
import { LitElement } from "lit";
import "../../../../../components/ha-bar";
import "../../../../../components/item/ha-row-item";
declare class SupervisorAppMetric extends LitElement {
    value: number;
    description: string;
    tooltip?: string;
    protected render(): TemplateResult;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "supervisor-app-metric": SupervisorAppMetric;
    }
}
export {};
