import { LitElement, nothing, type PropertyValues } from "lit";
import type { ForDict } from "../../../data/automation";
interface HaAutomationRowOptionsConfig {
    options?: {
        for?: string | number | ForDict;
        offset?: string | number | ForDict;
    };
    timeout?: string | number | ForDict;
}
export declare class HaAutomationRowOptions extends LitElement {
    config: HaAutomationRowOptionsConfig;
    private _i18n;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    protected updated(changedProperties: PropertyValues): void;
    private _formatOptions;
    private _duration;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-automation-row-options": HaAutomationRowOptions;
    }
}
export {};
