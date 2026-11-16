import { LitElement } from "lit";
import type { LightColor, LightEntity } from "../../../../data/light";
declare class HaFavoriteColorButton extends LitElement {
    label?: string;
    disabled: boolean;
    stateObj?: LightEntity;
    color: LightColor;
    private _button;
    focus(): void;
    private get _rgbColor();
    protected render(): import("lit-html").TemplateResult<1>;
    static readonly styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-favorite-color-button": HaFavoriteColorButton;
    }
}
export {};
