import type { TemplateResult } from "lit";
import { LitElement } from "lit";
import "./ha-icon-button";
export declare class HaIconButtonArrowPrev extends LitElement {
    disabled: boolean;
    label?: string;
    href?: string;
    target?: "_blank" | "_parent" | "_self" | "_top";
    rel?: string;
    download?: string;
    private _icon;
    private _localize;
    protected render(): TemplateResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-icon-button-arrow-prev": HaIconButtonArrowPrev;
    }
}
