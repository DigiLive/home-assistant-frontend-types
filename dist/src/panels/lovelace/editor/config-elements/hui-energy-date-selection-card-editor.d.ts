import { LitElement, nothing } from "lit";
import "../../../../components/ha-form/ha-form";
import type { HomeAssistant } from "../../../../types";
import type { EnergyDateSelectorCardConfig } from "../../cards/types";
import type { LovelaceCardEditor } from "../../types";
export declare class HuiEnergyDateSelectionCardEditor extends LitElement implements LovelaceCardEditor {
    hass?: HomeAssistant;
    private _config?;
    setConfig(config: EnergyDateSelectorCardConfig): void;
    private _schema;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _valueChanged;
    private _computeHelperCallback;
    private _computeLabelCallback;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-energy-date-selection-card-editor": HuiEnergyDateSelectionCardEditor;
    }
}
