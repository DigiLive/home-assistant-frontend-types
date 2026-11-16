import { LitElement } from "lit";
import type { TemplateResult } from "lit";
import type { HaFormDividerSchema, HaFormElement } from "./types";
export declare class HaFormDivider extends LitElement implements HaFormElement {
    schema: HaFormDividerSchema;
    protected render(): TemplateResult;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-form-divider": HaFormDivider;
    }
}
