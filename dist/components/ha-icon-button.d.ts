import type { CSSResultGroup, TemplateResult } from "lit";
import { LitElement } from "lit";
import "./ha-button";
import "./ha-svg-icon";
export declare class HaIconButton extends LitElement {
    disabled: boolean;
    path?: string;
    label?: string;
    ariaHasPopup: "false" | "true" | "menu" | "listbox" | "tree" | "grid";
    hideTitle: boolean;
    selected: boolean;
    href?: string;
    target?: "_blank" | "_parent" | "_self" | "_top";
    rel?: string;
    download?: string;
    static shadowRootOptions: ShadowRootInit;
    protected render(): TemplateResult;
    static styles: CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-icon-button": HaIconButton;
    }
}
