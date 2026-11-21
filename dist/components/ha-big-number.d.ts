import type { CSSResultGroup } from "lit";
import { LitElement } from "lit";
export declare class HaBigNumber extends LitElement {
    value: number;
    unit?: string;
    unitPosition: "top" | "bottom";
    formatOptions: Intl.NumberFormatOptions;
    private _i18n?;
    protected render(): import("lit-html").TemplateResult<1>;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-big-number": HaBigNumber;
    }
}
