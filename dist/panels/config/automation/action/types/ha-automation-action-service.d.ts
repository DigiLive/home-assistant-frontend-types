import type { PropertyValues } from "lit";
import { LitElement, nothing } from "lit";
import "../../../../../components/ha-checkbox";
import "../../../../../components/ha-service-control";
import "../../../../../components/input/ha-input";
import type { ServiceAction } from "../../../../../data/script";
import type { LocalizeFunc } from "../../../../../common/translations/localize";
import type { HomeAssistant } from "../../../../../types";
import type { ActionElement } from "../ha-automation-action-row";
export declare class HaServiceAction extends LitElement implements ActionElement {
    hass: HomeAssistant;
    action: ServiceAction;
    disabled: boolean;
    narrow: boolean;
    private _action?;
    private _responseChecked;
    static get defaultConfig(): ServiceAction;
    static checkUiSupport(localize: LocalizeFunc, action: ServiceAction): Error | undefined;
    protected willUpdate(changedProperties: PropertyValues<this>): void;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _actionChanged;
    private _responseVariableChanged;
    private _toggleCheckbox;
    private _responseCheckboxChanged;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-automation-action-service": HaServiceAction;
    }
}
