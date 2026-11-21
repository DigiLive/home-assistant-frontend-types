import type { CSSResultGroup } from "lit";
import { LitElement, nothing } from "lit";
import "../../../../components/ha-card";
import "../../../../components/ha-form/ha-form";
import "../../../../components/ha-icon";
import type { HomeAssistant } from "../../../../types";
import type { EntitiesCardConfig } from "../../cards/types";
import type { LovelaceCardEditor } from "../../types";
import "../header-footer-editor/hui-header-footer-editor";
import "../hui-entities-card-row-editor";
import "../hui-sub-element-editor";
export declare class HuiEntitiesCardEditor extends LitElement implements LovelaceCardEditor {
    hass?: HomeAssistant;
    private _config?;
    private _configEntities?;
    private _subElementEditorConfig?;
    setConfig(config: EntitiesCardConfig): void;
    private _showHeaderToggle;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _formChanged;
    private _computeLabelCallback;
    private _valueChanged;
    private _handleSubElementChanged;
    private _editDetailElement;
    private _goBack;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-entities-card-editor": HuiEntitiesCardEditor;
    }
}
