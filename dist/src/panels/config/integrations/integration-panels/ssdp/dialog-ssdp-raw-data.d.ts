import { LitElement, nothing } from "lit";
import type { TemplateResult } from "lit";
import "../../../../../components/ha-code-editor";
import "../../../../../components/ha-dialog";
export interface SSDPRawDataDialogParams {
    key: string;
    data: Record<string, unknown>;
}
declare class DialogSSDPRawData extends LitElement {
    private _params?;
    private _open;
    private _i18n;
    showDialog(params: SSDPRawDataDialogParams): Promise<void>;
    closeDialog(): void;
    private _dialogClosed;
    protected render(): TemplateResult | typeof nothing;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "dialog-ssdp-raw-data": DialogSSDPRawData;
    }
}
export {};
