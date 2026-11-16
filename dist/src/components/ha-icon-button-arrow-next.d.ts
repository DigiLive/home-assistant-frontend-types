import type { TemplateResult } from "lit";
import { LitElement } from "lit";
import "./ha-icon-button";
export declare class HaIconButtonArrowNext extends LitElement {
    disabled: boolean;
    label?: string;
    private _icon;
    private _localize;
    protected render(): TemplateResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-icon-button-arrow-next": HaIconButtonArrowNext;
    }
}
