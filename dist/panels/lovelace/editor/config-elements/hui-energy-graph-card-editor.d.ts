import { LitElement, nothing } from "lit";
import "../../../../components/ha-form/ha-form";
import type { HomeAssistant } from "../../../../types";
import type { EnergyCardBaseConfig, EnergyCardConfig, EnergyDistributionCardConfig, PowerSourcesGraphCardConfig } from "../../cards/types";
import type { LovelaceCardEditor } from "../../types";
export declare class HuiEnergyGraphCardEditor extends LitElement implements LovelaceCardEditor {
    hass?: HomeAssistant;
    private _config?;
    setConfig(config: EnergyCardBaseConfig | EnergyCardConfig | EnergyDistributionCardConfig | PowerSourcesGraphCardConfig): void;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _valueChanged;
    private _computeHelperCallback;
    private _computeLabelCallback;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-energy-graph-card-editor": HuiEnergyGraphCardEditor;
    }
}
