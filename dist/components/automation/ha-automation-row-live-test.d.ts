import { LitElement } from "lit";
import "../ha-svg-icon";
export type LiveTestState = "pass" | "fail" | "invalid" | "unknown";
/**
 * @element ha-automation-row-live-test
 *
 * @summary
 * Small status indicator dot used in automation/condition rows to surface the
 * live evaluation result.
 *
 * @attr {"pass"|"fail"|"invalid"|"unknown"} state - The current live-test state. Defaults to `unknown`.
 * @attr {string} label - Accessible label announced by assistive technology.
 */
export declare class HaAutomationRowLiveTest extends LitElement {
    state: LiveTestState;
    label: string;
    private get _iconPath();
    protected render(): import("lit-html").TemplateResult<1>;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-automation-row-live-test": HaAutomationRowLiveTest;
    }
}
