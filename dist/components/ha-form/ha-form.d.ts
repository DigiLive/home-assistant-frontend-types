import type { PropertyValues, TemplateResult } from "lit";
import { LitElement } from "lit";
import type { HomeAssistant } from "../../types";
import "../ha-alert";
import "../ha-selector/ha-selector";
import type { HaFormDataContainer, HaFormElement, HaFormSchema } from "./types";
/**
 * Merge the form context with the selector config context and the
 * field-level schema context, where the latter wins.
 */
export declare const generateFormContext: (schema: HaFormSchema, data: HaFormDataContainer | undefined, formContext: Record<string, any> | undefined) => Record<string, any> | undefined;
export declare class HaForm extends LitElement implements HaFormElement {
    hass?: HomeAssistant;
    narrow: boolean;
    data: HaFormDataContainer;
    schema: readonly HaFormSchema[];
    error?: Record<string, string | string[]>;
    warning?: Record<string, string>;
    disabled: boolean;
    computeError?: (schema: any, error: any) => string;
    computeWarning?: (schema: any, warning: any) => string;
    computeLabel?: (schema: any, data: HaFormDataContainer) => string;
    computeHelper?: (schema: any) => string | undefined;
    localizeValue?: (key: string, values?: Record<string, string>) => string;
    context?: Record<string, any>;
    protected getFormProperties(): Record<string, any>;
    static shadowRootOptions: ShadowRootInit;
    private _root?;
    reportValidity(): boolean;
    protected willUpdate(changedProps: PropertyValues<this>): void;
    protected render(): TemplateResult;
    protected fieldElementName(type: string): string;
    private _generateContext;
    protected createRenderRoot(): HTMLElement | DocumentFragment;
    protected addValueChangedListener(element: Element | ShadowRoot): void;
    private _computeLabel;
    private _computeHelper;
    private _computeError;
    private _computeWarning;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-form": HaForm;
    }
}
