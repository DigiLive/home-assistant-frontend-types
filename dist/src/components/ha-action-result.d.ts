import { LitElement } from "lit";
import "./ha-spinner";
import "./ha-svg-icon";
/**
 * Home Assistant action result component
 *
 * @element ha-action-result
 *
 * @summary
 * Wraps the content of an action trigger, for example an `ha-control-button`,
 * and swaps it for a spinner while a slow action runs and for a success or
 * error icon once it settles.
 *
 * @slot - Content of the trigger.
 */
export declare class HaActionResult extends LitElement {
    private _loading;
    private _showSpinner;
    private _result?;
    private _timeout?;
    private _spinnerTimeout?;
    get busy(): boolean;
    run(action: Promise<unknown>): Promise<void>;
    disconnectedCallback(): void;
    protected render(): import("lit-html").TemplateResult<1>;
    private _renderIndicator;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-action-result": HaActionResult;
    }
}
