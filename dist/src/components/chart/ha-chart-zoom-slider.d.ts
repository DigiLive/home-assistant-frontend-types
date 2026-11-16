import { LitElement } from "lit";
import "../ha-svg-icon";
export declare const ZOOM_SLIDER_HEIGHT = 24;
export declare class HaChartZoomSlider extends LitElement {
    start: number;
    end: number;
    private _i18n;
    private _pressX?;
    private _lastTapTime?;
    private _drag?;
    protected render(): import("lit-html").TemplateResult<1>;
    private _getScale;
    private _handleTrackPointerDown;
    private _handleTrackPointerUp;
    private _handlePointerDown;
    private _handlePointerMove;
    private _handlePointerUp;
    private _handleKeyDown;
    private _move;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HASSDomEvents {
        "zoom-slider-changed": {
            start: number;
            end: number;
        };
        "zoom-slider-reset": undefined;
    }
    interface HTMLElementTagNameMap {
        "ha-chart-zoom-slider": HaChartZoomSlider;
    }
}
