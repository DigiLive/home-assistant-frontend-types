import type { CSSResultGroup } from "lit";
import { LitElement, nothing } from "lit";
import "../../../../../components/ha-button";
import "../../../../../components/ha-dialog-footer";
import "../../../../../components/ha-icon-button";
import "../../../../../components/ha-dialog";
import type { HomeAssistant } from "../../../../../types";
import type { ESPHomeEncryptionKeyDialogParams } from "./show-dialog-esphome-encryption-key";
declare class DialogESPHomeEncryptionKey extends LitElement {
    hass: HomeAssistant;
    private _params?;
    showDialog(params: ESPHomeEncryptionKeyDialogParams): Promise<void>;
    closeDialog(): void;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _copyToClipboard;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "dialog-esphome-encryption-key": DialogESPHomeEncryptionKey;
    }
}
export {};
