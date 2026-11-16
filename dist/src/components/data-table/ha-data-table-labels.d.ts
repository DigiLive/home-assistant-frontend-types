import type { TemplateResult } from "lit";
import { LitElement } from "lit";
import type { LabelRegistryEntry } from "../../data/label/label_registry";
import "../chips/ha-chip-set";
import "../ha-dropdown";
import "../ha-dropdown-item";
import "../ha-icon";
import "../ha-label";
declare class HaDataTableLabels extends LitElement {
    labels: LabelRegistryEntry[];
    clickable: boolean;
    private _visibleCount;
    private _viewport?;
    private _measure?;
    private _sortedLabels;
    private _chipWidths;
    private _plusWidth;
    private _gap;
    private _resizeController;
    protected willUpdate(changedProps: Map<string, unknown>): void;
    protected render(): TemplateResult;
    protected firstUpdated(): Promise<void>;
    protected updated(changedProps: Map<string, unknown>): Promise<void>;
    private _measureWidths;
    private _recomputeVisibleCount;
    private _renderLabel;
    private _labelClicked;
    private _handleDropdownSelect;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-data-table-labels": HaDataTableLabels;
    }
    interface HASSDomEvents {
        "label-clicked": {
            label: LabelRegistryEntry;
        };
    }
}
export {};
