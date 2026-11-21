import type { PropertyValues, TemplateResult } from "lit";
import { LitElement } from "lit";
export interface HuiGraphGradient {
    x1: number;
    y1: number;
    x2: number;
    y2: number;
    stops: {
        offset: number;
        color: string;
    }[];
}
export declare class HuiGraphBase extends LitElement {
    coordinates?: number[][];
    yAxisOrigin?: number;
    loading: boolean;
    gradient?: HuiGraphGradient;
    private _uniqueId;
    private _displayCoordinates?;
    private _reducedMotion;
    private _animationFrame?;
    private _size?;
    protected render(): TemplateResult;
    willUpdate(changedProps: PropertyValues<this>): void;
    disconnectedCallback(): void;
    private _measureSize;
    private _setCoordinates;
    private _interpolateY;
    private _cancelAnimation;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-graph-base": HuiGraphBase;
    }
}
