import type { PropertyValues } from "lit";
import { LitElement } from "lit";
import type { FrontendLocaleData } from "../data/translation";
export interface LevelDefinition {
    level: number;
    stroke: string;
    label?: string;
}
export declare class HaGauge extends LitElement {
    min: number;
    max: number;
    value: number;
    formatOptions?: Intl.NumberFormatOptions;
    valueText?: string;
    locale: FrontendLocaleData;
    needle: boolean;
    levels?: LevelDefinition[];
    label: string;
    private _angle;
    private _updated;
    private _segment_label?;
    private _textSvg?;
    private _valueText?;
    private _sortedLevels?;
    private _rescalePending;
    private _resizeController;
    connectedCallback(): void;
    protected firstUpdated(changedProperties: PropertyValues<this>): void;
    protected willUpdate(changedProperties: PropertyValues<this>): void;
    protected updated(changedProperties: PropertyValues): void;
    protected render(): import("lit-html").TemplateResult<2>;
    private _rescaleSvg;
    private _getSegmentLabel;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-gauge": HaGauge;
    }
}
