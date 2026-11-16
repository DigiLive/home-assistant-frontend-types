import { LitElement, nothing } from "lit";
import "../../../../components/ha-entity-type-picker";
import "../../../../components/ha-form/ha-form";
import type { HomeAssistant } from "../../../../types";
import type { LovelaceStrategyEditor } from "../types";
import { type EntitiesSectionStrategyConfig } from "./entities-section-strategy";
export declare class HuiEntitiesSectionStrategyEditor extends LitElement implements LovelaceStrategyEditor {
    hass?: HomeAssistant;
    private _localize;
    private _config?;
    setConfig(config: EntitiesSectionStrategyConfig): void;
    private _schema;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _computeLabel;
    private _computeHelper;
    private _typesChanged;
    private _valueChanged;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-entities-section-strategy-editor": HuiEntitiesSectionStrategyEditor;
    }
}
