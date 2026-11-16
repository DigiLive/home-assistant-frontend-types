import "@home-assistant/webawesome/dist/components/divider/divider";
import type { CSSResultGroup, PropertyValues } from "lit";
import { LitElement, nothing } from "lit";
import "../../components/ha-alert";
import "../../components/ha-assist-chat";
import "../../components/ha-button";
import "../../components/ha-dialog";
import "../../components/ha-dialog-header";
import "../../components/ha-dropdown";
import "../../components/ha-dropdown-item";
import "../../components/ha-icon-button";
import "../../components/ha-icon-next";
import "../../components/ha-spinner";
import type { HomeAssistant } from "../../types";
import type { VoiceCommandDialogParams } from "./show-ha-voice-command-dialog";
export declare class HaVoiceCommandDialog extends LitElement {
    hass: HomeAssistant;
    private _open;
    private _dialogOpen;
    private _pipelineId?;
    private _pipeline?;
    private _pipelines?;
    private _preferredPipeline?;
    private _errorLoadAssist?;
    private _startListening;
    private _prompt?;
    private _submitPrompt;
    showDialog(params: VoiceCommandDialogParams): Promise<void>;
    closeDialog(): void;
    private _dialogClosed;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    protected willUpdate(changedProperties: PropertyValues): void;
    private _loadPipelines;
    private _selectPipeline;
    private _getPipeline;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-voice-command-dialog": HaVoiceCommandDialog;
    }
}
