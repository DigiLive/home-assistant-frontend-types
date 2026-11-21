import type { PropertyValues, TemplateResult } from "lit";
import { LitElement } from "lit";
import type { HASSDomTargetEvent } from "../../common/dom/fire_event";
import type { LocalizeFunc } from "../../common/translations/localize";
import "../ha-icon-button";
import "../input/ha-input";
import type { HaInput } from "../input/ha-input";
import type { HaFormElement, HaFormStringData, HaFormStringSchema } from "./types";
export declare class HaFormString extends LitElement implements HaFormElement {
    localize?: LocalizeFunc;
    localizeBaseKey: string;
    schema: HaFormStringSchema;
    data: HaFormStringData;
    label: string;
    helper?: string;
    disabled: boolean;
    private _input?;
    static shadowRootOptions: {
        clonable?: boolean;
        customElementRegistry?: CustomElementRegistry | null;
        mode: ShadowRootMode;
        serializable?: boolean;
        slotAssignment?: SlotAssignmentMode;
        delegatesFocus: boolean;
    };
    reportValidity(): boolean;
    protected render(): TemplateResult;
    protected updated(changedProps: PropertyValues<this>): void;
    protected _valueChanged(ev: HASSDomTargetEvent<HaInput>): void;
    protected get stringType(): "email" | "url" | "text";
    protected get isPassword(): boolean;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-form-string": HaFormString;
    }
}
