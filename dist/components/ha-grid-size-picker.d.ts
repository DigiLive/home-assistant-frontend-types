import type { PropertyValues } from "lit";
import { LitElement } from "lit";
import type { CardGridSize } from "../panels/lovelace/common/compute-card-grid-size";
import "../panels/lovelace/editor/card-editor/ha-grid-layout-slider";
import "./ha-icon-button";
export declare const GRID_SIZE_PICKER_ROWS = 8;
export declare class HaGridSizeEditor extends LitElement {
    value?: CardGridSize;
    autoRows?: number;
    rows: number;
    columns: number;
    rowMin?: number;
    rowMax?: number;
    columnMin?: number;
    columnMax?: number;
    step: number;
    precise: boolean;
    _localValue?: CardGridSize;
    private _localize;
    protected willUpdate(changedProperties: PropertyValues<this>): void;
    private _columnsText;
    private _rowsText;
    protected render(): import("lit-html").TemplateResult<1>;
    private _togglePrecise;
    private _cellClick;
    private _valueChanged;
    private _sliderMoved;
    static styles: import("lit").CSSResult[];
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-grid-size-picker": HaGridSizeEditor;
    }
    interface HASSDomEvents {
        "precise-mode-changed": {
            value: boolean;
        };
    }
}
