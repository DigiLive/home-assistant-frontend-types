import type { PropertyValues } from "lit";
import { LitElement } from "lit";
import type { Condition } from "../../data/automation";
import "../ha-tooltip";
import "./ha-automation-row-live-test";
export declare class HaAutomationConditionLiveTest extends LitElement {
    private _localize;
    private _connection;
    condition: Condition;
    private _liveTestResult;
    private _conditionUnsub?;
    connectedCallback(): void;
    protected updated(changedProps: PropertyValues<this>): void;
    disconnectedCallback(): void;
    protected render(): import("lit-html").TemplateResult<1>;
    private _resetSubscription;
    private _debounceSubscribeCondition;
    private _subscribeCondition;
    private _handleLiveTestError;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-automation-condition-live-test": HaAutomationConditionLiveTest;
    }
}
