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
export declare class HaControlScrubber extends LitElement {
    static shadowRootOptions: ShadowRootInit;
    locale?: FrontendLocaleData;
    disabled: boolean;
    wrap: boolean;
    showHandle: boolean;
    touchAction?: string;
    value?: number;
    step: number;
    roundValue: boolean;
    min: number;
    max: number;
    label?: string;
    unit?: string;
    pressed: boolean;
    private _snapping;
    private _trackPosition;
    private _mc?;
    private get _range();
    valueToPercentage(value: number): number;
    normalizedValue(value: number): number;
    steppedValue(value: number): number;
    private _displayedValue;
    private get _valuePosition();
    protected willUpdate(changedProps: PropertyValues<this>): void;
    private _updateTrackPosition;
    private _snapTrackTo;
    private _endSnapAfterStylesApply;
    private _handleTransitionEnd;
    protected firstUpdated(changedProperties: PropertyValues<this>): void;
    protected updated(changedProps: PropertyValues<this>): void;
    connectedCallback(): void;
    disconnectedCallback(): void;
    private _scrubber?;
    private _track?;
    setupListeners(): void;
    destroyListeners(): void;
    private _deltaToValue;
    private get _tenPercentStep();
    private _handleKeyDown;
    private _handleKeyUp;
    private _formatValue;
    protected render(): TemplateResult;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-control-scrubber": HaControlScrubber;
    }
}
