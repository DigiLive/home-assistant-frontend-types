import { LitElement, nothing } from "lit";
import "../../../../components/ha-form/ha-form";
import type { HomeAssistant } from "../../../../types";
import type { EnergyCardConfig, EnergyDevicesDetailGraphCardConfig, EnergyDevicesGraphCardConfig } from "../../cards/types";
import type { LovelaceCardEditor } from "../../types";
type EnergyDevicesCardConfig = EnergyCardConfig | EnergyDevicesGraphCardConfig | EnergyDevicesDetailGraphCardConfig;
export declare class HuiEnergyDevicesCardEditor extends LitElement implements LovelaceCardEditor {
    hass?: HomeAssistant;
    private _config?;
    setConfig(config: EnergyDevicesCardConfig): void;
    private _schema;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _valueChanged;
    private _computeHelperCallback;
    private _computeLabelCallback;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-energy-devices-card-editor": HuiEnergyDevicesCardEditor;
    }
}
export {};
