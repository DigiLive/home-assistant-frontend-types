import type { TemplateResult } from "lit";
import { LitElement } from "lit";
import "../ha-button";
import "../ha-spinner";
import "../ha-svg-icon";
export declare class HaProgressButton extends LitElement {
    label?: string;
    disabled: boolean;
    progress: boolean;
    raised: boolean;
    unelevated: boolean;
    private _result?;
    render(): TemplateResult;
    actionSuccess(): void;
    actionError(): void;
    private _setResult;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-progress-button": HaProgressButton;
    }
}
