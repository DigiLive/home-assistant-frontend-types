import { LitElement } from "lit";
import "../../../../../components/item/ha-list-item-base";
import "../../../../../components/list/ha-list-base";
import type { HomeAssistant } from "../../../../../types";
declare class HaBackupConfigEncryptionKey extends LitElement {
    hass: HomeAssistant;
    private value?;
    private get _value();
    protected render(): import("lit-html").TemplateResult<1>;
    private _download;
    private _show;
    private _change;
    private _set;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-backup-config-encryption-key": HaBackupConfigEncryptionKey;
    }
}
export {};
