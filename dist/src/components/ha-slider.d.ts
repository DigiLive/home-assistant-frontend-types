import { Slider } from "@material/web/slider/internal/slider";
export declare class HaSlider extends Slider {
    connectedCallback(): void;
    static styles: import("lit").CSSResult[];
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-slider": HaSlider;
    }
}
