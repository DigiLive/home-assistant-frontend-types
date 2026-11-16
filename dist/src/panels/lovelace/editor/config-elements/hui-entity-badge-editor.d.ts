import { LitElement, nothing } from "lit";
import "../../../../components/ha-form/ha-form";
import type { HomeAssistant } from "../../../../types";
import type { EntityBadgeConfig } from "../../badges/types";
import type { LovelaceBadgeEditor } from "../../types";
export declare class HuiEntityBadgeEditor extends LitElement implements LovelaceBadgeEditor {
    hass?: HomeAssistant;
    private _config?;
    setConfig(config: EntityBadgeConfig): void;
    private _schema;
    private _formData;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _valueChanged;
    private _computeLabelCallback;
    private _computeHelperCallback;
    static get styles(): import("lit").CSSResult[];
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-entity-badge-editor": HuiEntityBadgeEditor;
    }
}
