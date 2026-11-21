import { LitElement, nothing } from "lit";
import "../../../../components/ha-form/ha-form";
import type { HomeAssistant } from "../../../../types";
import type { EnergySourcesTableCardConfig } from "../../cards/types";
import type { LovelaceCardEditor } from "../../types";
export declare class HuiEnergySourcesTableCardEditor extends LitElement implements LovelaceCardEditor {
    hass?: HomeAssistant;
    private _config?;
    setConfig(config: EnergySourcesTableCardConfig): void;
    private _schema;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _valueChanged;
    private _computeHelperCallback;
    private _computeLabelCallback;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-energy-sources-table-card-editor": HuiEnergySourcesTableCardEditor;
    }
}
