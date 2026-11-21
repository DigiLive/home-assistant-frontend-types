import type { TemplateResult } from "lit";
import { LitElement } from "lit";
import "./ha-expansion-panel";
import "./ha-items-display-editor";
import "./ha-svg-icon";
export interface AreasDisplayValue {
    hidden?: string[];
    order?: string[];
}
export declare class HaAreasDisplayEditor extends LitElement {
    private _areas;
    private _floors;
    label?: string;
    value?: AreasDisplayValue;
    helper?: string;
    expanded: boolean;
    disabled: boolean;
    required: boolean;
    showNavigationButton: boolean;
    protected render(): TemplateResult;
    private _areaDisplayChanged;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-areas-display-editor": HaAreasDisplayEditor;
    }
}
