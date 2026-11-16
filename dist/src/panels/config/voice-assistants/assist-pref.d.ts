import "@home-assistant/webawesome/dist/components/divider/divider";
import type { PropertyValues } from "lit";
import { LitElement } from "lit";
import "../../../components/ha-alert";
import "../../../components/ha-button";
import "../../../components/ha-card";
import "../../../components/ha-dropdown";
import "../../../components/ha-dropdown-item";
import "../../../components/ha-icon-button";
import "../../../components/ha-svg-icon";
import "../../../components/ha-switch";
import "../../../components/item/ha-list-item-button";
import "../../../components/item/ha-row-item";
import "../../../components/list/ha-list-base";
import "../../../components/voice-assistant-brand-icon";
import type { CloudStatus } from "../../../data/cloud";
import type { ExposeEntitySettings } from "../../../data/expose";
import type { HomeAssistant } from "../../../types";
export declare class AssistPref extends LitElement {
    hass: HomeAssistant;
    exposedEntities?: Record<string, ExposeEntitySettings>;
    cloudStatus?: CloudStatus;
    private _pipelines;
    private _preferred;
    private _pipelineEntitiesCount;
    private _exposeNew?;
    protected willUpdate(): void;
    protected firstUpdated(changedProps: PropertyValues<this>): void;
    private _exposedEntitiesCount;
    protected render(): import("lit-html").TemplateResult<1>;
    private _exposeNewToggleChanged;
    private _handlePipelineMenuAction;
    private _talkWithPipeline;
    private _setPreferredPipeline;
    private _debugPipeline;
    private _duplicatePipeline;
    private _deletePipeline;
    private _editPipeline;
    private _addPipeline;
    private _openDialog;
    private _handleDropdownKeydown;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "assist-pref": AssistPref;
    }
}
