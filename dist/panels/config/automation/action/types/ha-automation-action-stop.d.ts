import { LitElement } from "lit";
import "../../../../../components/ha-switch";
import "../../../../../components/input/ha-input";
import type { StopAction } from "../../../../../data/script";
import type { ActionElement } from "../ha-automation-action-row";
export declare class HaStopAction extends LitElement implements ActionElement {
    action: StopAction;
    disabled: boolean;
    private _i18n;
    static get defaultConfig(): StopAction;
    protected render(): import("lit-html").TemplateResult<1>;
    private _stopChanged;
    private _responseChanged;
    private _errorChanged;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-automation-action-stop": HaStopAction;
    }
}
