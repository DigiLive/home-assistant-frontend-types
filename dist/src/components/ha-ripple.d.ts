import type { PropertyValues } from "lit";
import { LitElement } from "lit";
/**
 * Hover and press feedback for the element it is attached to. Attaches to
 * its parent element, or to the element referenced by `for`.
 *
 * @cssprop --ha-ripple-color - Hover and pressed color.
 * @cssprop --ha-ripple-hover-color - Hover color.
 * @cssprop --ha-ripple-pressed-color - Pressed color.
 * @cssprop --ha-ripple-hover-opacity - Hover opacity. Defaults to 0.08.
 * @cssprop --ha-ripple-pressed-opacity - Pressed opacity. Defaults to 0.12.
 */
export declare class HaRipple extends LitElement {
    disabled: boolean;
    htmlFor: string | null;
    private _hovered;
    private _pressed;
    private _pressEl?;
    private _control;
    private _attachedControl;
    private _state;
    private _startEvent?;
    private _pressStart?;
    get control(): HTMLElement | null;
    set control(control: HTMLElement | null);
    attach(control: HTMLElement): void;
    detach(): void;
    connectedCallback(): void;
    disconnectedCallback(): void;
    protected willUpdate(changedProps: PropertyValues<this>): void;
    protected updated(changedProps: PropertyValues<this>): void;
    protected render(): import("lit-html").TemplateResult<1>;
    /** @private */
    handleEvent(ev: Event): void;
    private _listenTo;
    private _shouldReact;
    private _handlePointerdown;
    private _handlePointerup;
    private _handleClick;
    private _startPress;
    private _endPress;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-ripple": HaRipple;
    }
}
