import type { PropertyValues, TemplateResult } from "lit";
import { LitElement } from "lit";
import type { FrontendLocaleData } from "../data/translation";
declare global {
    interface HASSDomEvents {
        "slider-moved": {
            value?: number;
        };
    }
}
type TooltipPosition = "top" | "bottom" | "left" | "right";
type TooltipMode = "never" | "always" | "interaction";
type SliderMode = "start" | "end" | "cursor";
export declare class HaControlSlider extends LitElement {
    static shadowRootOptions: ShadowRootInit;
    locale?: FrontendLocaleData;
    disabled: boolean;
    mode?: SliderMode;
    vertical: boolean;
    showHandle: boolean;
    inverted: boolean;
    tooltipPosition?: TooltipPosition;
    unit?: string;
    tooltipMode: TooltipMode;
    touchAction?: string;
    value?: number;
    step: number;
    /**
     * Round the value shown in the tooltip and announced to assistive
     * technologies to the nearest integer. The handle still snaps to `step`, so
     * the number of steps is unchanged. Useful when `step` is fractional but the
     * value is conceptually a whole number — e.g. a fan whose `percentage_step`
     * is 100 / speed_count (like ~1.0989 for 91 speeds), which would otherwise
     * display fractional percentages such as "28.57%".
     */
    roundValue: boolean;
    min: number;
    max: number;
    label?: string;
    pressed: boolean;
    tooltipVisible: boolean;
    private _mc?;
    valueToPercentage(value: number): number;
    percentageToValue(percentage: number): number;
    steppedValue(value: number): number;
    private _displayedValue;
    boundedValue(value: number): number;
    protected firstUpdated(changedProperties: PropertyValues<this>): void;
    protected updated(changedProps: PropertyValues<this>): void;
    connectedCallback(): void;
    disconnectedCallback(): void;
    private slider;
    setupListeners(): void;
    destroyListeners(): void;
    private get _tenPercentStep();
    private _showTooltip;
    private _hideTooltip;
    private _handleKeyDown;
    private _tooltipTimeout?;
    private _handleKeyUp;
    private _getPercentageFromEvent;
    private _formatValue;
    private _renderTooltip;
    protected render(): TemplateResult;
    private _isVisuallyInverted;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-control-slider": HaControlSlider;
    }
}
export {};
