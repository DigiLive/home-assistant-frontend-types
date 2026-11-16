import type { TemplateResult } from "lit";
import { LitElement } from "lit";
import "./ha-ripple";
export declare class HaTab extends LitElement {
    active: boolean;
    narrow: boolean;
    name?: string;
    badge?: string;
    protected render(): TemplateResult;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-tab": HaTab;
    }
}
