import { LitElement } from "lit";
export declare class HaIconButtonGroup extends LitElement {
    private _thumbX;
    private _thumbVisible;
    private _thumbBorderOnly;
    private _thumbAppearing;
    private _observer;
    disconnectedCallback(): void;
    protected render(): import("lit-html").TemplateResult<1>;
    protected updated(): void;
    private _animationDuration;
    private _handleSlotchange;
    private _updateThumb;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-icon-button-group": HaIconButtonGroup;
    }
}
