import "@material/mwc-button/mwc-button";
import type { CSSResultGroup, PropertyValues } from "lit";
import { LitElement } from "lit";
import "../../../components/ha-card";
import "../../../components/ha-icon-button";
import "../../../components/ha-markdown";
import type { ScriptConfig } from "../../../data/script";
import type { HomeAssistant } from "../../../types";
import "../automation/action/ha-automation-action";
import "./ha-script-fields";
export declare class HaManualScriptEditor extends LitElement {
    hass: HomeAssistant;
    isWide: boolean;
    narrow: boolean;
    disabled: boolean;
    config: ScriptConfig;
    dirty: boolean;
    private _scriptFields?;
    private _openFields;
    private _pastedConfig?;
    private _previousConfig?;
    addFields(): void;
    protected updated(changedProps: any): void;
    protected firstUpdated(changedProps: PropertyValues): void;
    private _clearParam;
    protected render(): import("lit-html").TemplateResult<1>;
    private _fieldsChanged;
    private _sequenceChanged;
    connectedCallback(): void;
    disconnectedCallback(): void;
    private _handlePaste;
    private _appendToExistingConfig;
    private _replaceExistingConfig;
    private _showPastedToastWithUndo;
    resetPastedConfig(): void;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "manual-script-editor": HaManualScriptEditor;
    }
}
