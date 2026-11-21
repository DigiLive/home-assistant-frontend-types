import { LitElement } from "lit";
import "../../../../components/ha-alert";
import "../../../../components/ha-button";
import "../../../../components/ha-dialog-footer";
import "../../../../components/ha-markdown-element";
import "../../../../components/ha-dialog";
import "../../../../components/ha-spinner";
import type { HomeAssistant } from "../../../../types";
export declare class DialogSupportPackage extends LitElement {
    hass: HomeAssistant;
    private _open;
    private _supportPackage?;
    showDialog(): void;
    private _dialogClosed;
    closeDialog(): boolean;
    protected render(): import("lit-html").TemplateResult<1>;
    private _loadSupportPackage;
    private _download;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "dialog-cloud-support-package": DialogSupportPackage;
    }
}
