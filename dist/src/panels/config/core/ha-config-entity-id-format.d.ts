import type { PropertyValues } from "lit";
import { LitElement } from "lit";
import "../../../components/buttons/ha-progress-button";
import "../../../components/chips/ha-chip-set";
import "../../../components/chips/ha-filter-chip";
import "../../../components/ha-alert";
import "../../../components/ha-button";
import "../../../components/ha-card";
import "../../../components/ha-svg-icon";
import "./ha-entity-id-format-editor";
export declare class HaConfigEntityIdFormat extends LitElement {
    private _localize;
    private _api;
    private _config;
    private _format?;
    private _error?;
    private _previews?;
    private _previewError;
    private _selectedExample;
    protected firstUpdated(changedProps: PropertyValues<this>): Promise<void>;
    protected updated(changedProps: PropertyValues): void;
    private _examples;
    private _debouncedUpdatePreview;
    private _updatePreview;
    protected render(): import("lit-html").TemplateResult<1>;
    private _renderExamples;
    private _selectExample;
    private _formatChanged;
    private _reset;
    private _save;
    static styles: import("lit").CSSResult[];
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-config-entity-id-format": HaConfigEntityIdFormat;
    }
}
