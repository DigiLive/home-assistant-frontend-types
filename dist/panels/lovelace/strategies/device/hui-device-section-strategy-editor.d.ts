import { LitElement, nothing } from "lit";
import "../../../../components/ha-form/ha-form";
import type { HomeAssistant } from "../../../../types";
import type { LovelaceStrategyEditor } from "../types";
import { type DeviceSectionStrategyConfig } from "./device-section-strategy";
export declare class HuiDeviceSectionStrategyEditor extends LitElement implements LovelaceStrategyEditor {
    hass?: HomeAssistant;
    private _localize;
    private _config?;
    setConfig(config: DeviceSectionStrategyConfig): void;
    private _deviceEntities;
    private _schema;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _computeLabel;
    private _computeHelper;
    private _valueChanged;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-device-section-strategy-editor": HuiDeviceSectionStrategyEditor;
    }
}
