import type { PropertyValues } from "lit";
import { LitElement } from "lit";
import "../../../../../components/ha-duration-input";
import type { DelayAction } from "../../../../../data/script";
import type { LocalizeFunc } from "../../../../../common/translations/localize";
import type { HomeAssistant } from "../../../../../types";
import type { ActionElement } from "../ha-automation-action-row";
export declare class HaDelayAction extends LitElement implements ActionElement {
    hass: HomeAssistant;
    disabled: boolean;
    action: DelayAction;
    private _timeData?;
    static get defaultConfig(): DelayAction;
    static checkUiSupport(localize: LocalizeFunc, action: DelayAction): Error | undefined;
    willUpdate(changedProperties: PropertyValues<this>): void;
    protected render(): import("lit-html").TemplateResult<1>;
    private _valueChanged;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-automation-action-delay": HaDelayAction;
    }
}
