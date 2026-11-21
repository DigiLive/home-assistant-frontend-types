import { LitElement } from "lit";
declare class AutomationRestartStatus extends LitElement {
    private _formatters;
    private _i18n;
    private _states;
    protected render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        "automation-restart-status": AutomationRestartStatus;
    }
}
export {};
