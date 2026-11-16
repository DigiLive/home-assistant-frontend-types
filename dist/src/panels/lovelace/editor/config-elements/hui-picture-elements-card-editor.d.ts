import type { CSSResultGroup, PropertyValues } from "lit";
import { LitElement, nothing } from "lit";
import "../../../../components/ha-alert";
import "../../../../components/ha-card";
import "../../../../components/ha-form/ha-form";
import "../../../../components/ha-icon";
import "../../../../components/ha-switch";
import type { HomeAssistant } from "../../../../types";
import type { PictureElementsCardConfig } from "../../cards/types";
import type { LovelaceCardEditor } from "../../types";
import "../hui-sub-element-editor";
import "../hui-picture-elements-card-row-editor";
export declare class HuiPictureElementsCardEditor extends LitElement implements LovelaceCardEditor {
    hass?: HomeAssistant;
    private _config?;
    private _subElementEditorConfig?;
    private _movedFromPreview;
    setConfig(config: PictureElementsCardConfig): void;
    private _bridge;
    connectedCallback(): void;
    disconnectedCallback(): void;
    protected updated(changedProps: PropertyValues): void;
    private _handOverBridge;
    private _updateBridge;
    private _fireConfigChanged;
    private _selectElement;
    private _setElementPosition;
    private _schema;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _processData;
    private _formChanged;
    private _elementsChanged;
    private _handleSubElementChanged;
    private _editDetailElement;
    private _goBack;
    private _computeLabelCallback;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-picture-elements-card-editor": HuiPictureElementsCardEditor;
    }
}
