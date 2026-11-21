import type { CSSResultGroup, TemplateResult } from "lit";
import { LitElement, nothing } from "lit";
import "../../../../../components/ha-alert";
import "../../../../../components/ha-button";
import "../../../../../components/ha-icon-next";
import "../../../../../components/ha-list-item";
import "../../../../../components/ha-markdown";
import "../../../../../components/ha-spinner";
import "../../../../../components/ha-dialog-footer";
import "../../../../../components/ha-dialog";
import type { HomeAssistant } from "../../../../../types";
import type { ZWaveJSRemoveNodeDialogParams } from "./show-dialog-zwave_js-remove-node";
export interface ZWaveJSRemovedNode {
    node_id: number;
    manufacturer: string;
    label: string;
}
declare class DialogZWaveJSRemoveNode extends LitElement {
    hass: HomeAssistant;
    private _entryId?;
    private _deviceId?;
    private _device?;
    private _step;
    private _node?;
    private _metadata?;
    private _onClose?;
    private _removeNodeTimeoutHandle?;
    private _subscribed?;
    private _error?;
    private _open;
    disconnectedCallback(): void;
    showDialog(params: ZWaveJSRemoveNodeDialogParams): Promise<void>;
    protected render(): typeof nothing | TemplateResult<1>;
    private _renderStepContent;
    private _renderAction;
    private _startExclusion;
    private _startRemoval;
    private _handleMessage;
    private _stopExclusion;
    private _unsubscribe;
    closeDialog(): void;
    handleDialogClosed(): void;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "dialog-zwave_js-remove-node": DialogZWaveJSRemoveNode;
    }
}
export {};
