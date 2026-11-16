import type { TemplateResult } from "lit";
import { LitElement } from "lit";
import "./ha-base-time-input";
export interface HaDurationData {
    days?: number;
    hours?: number;
    minutes?: number;
    seconds?: number;
    milliseconds?: number;
}
export declare class HaDurationInput extends LitElement {
    data?: HaDurationData;
    label?: string;
    helper?: string;
    required: boolean;
    enableMillisecond: boolean;
    enableDay: boolean;
    allowNegative: boolean;
    enableSecond: boolean;
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
    private get _units();
    private _fieldValue;
    private _durationChanged;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-duration-input": HaDurationInput;
    }
}
