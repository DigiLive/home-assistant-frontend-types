import type { PropertyValues, TemplateResult } from "lit";
import { LitElement } from "lit";
import type { LocalizeFunc } from "../../common/translations/localize";
import type { HomeAssistant } from "../../types";
import "../ha-button";
import "../ha-dropdown";
import "../ha-dropdown-item";
import "../ha-svg-icon";
import "./ha-form";
import "./ha-form-divider";
import type { HaFormDataContainer, HaFormElement, HaFormOptionalActionsSchema, HaFormSchema } from "./types";
export declare class HaFormOptionalActions extends LitElement implements HaFormElement {
    localize?: LocalizeFunc;
    hass: HomeAssistant;
    data: HaFormDataContainer;
    schema: HaFormOptionalActionsSchema;
    disabled: boolean;
    computeLabel?: (schema: HaFormSchema, data?: HaFormDataContainer) => string;
    computeHelper?: (schema: HaFormSchema) => string;
    localizeValue?: (key: string) => string;
    private _displayActions?;
    private _form?;
    focus(): Promise<void>;
    reportValidity(): boolean;
    protected updated(changedProps: PropertyValues<this>): void;
    private _hiddenActions;
    private _displaySchema;
    render(): TemplateResult;
    private _handleAddAction;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-form-optional_actions": HaFormOptionalActions;
    }
}
