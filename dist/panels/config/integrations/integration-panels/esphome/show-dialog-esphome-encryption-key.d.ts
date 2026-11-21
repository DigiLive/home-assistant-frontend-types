export interface ESPHomeEncryptionKeyDialogParams {
    entry_id: string;
    encryption_key: string;
}
export declare const loadESPHomeEncryptionKeyDialog: () => Promise<typeof import("./dialog-esphome-encryption-key")>;
export declare const showESPHomeEncryptionKeyDialog: (element: HTMLElement, dialogParams: ESPHomeEncryptionKeyDialogParams) => void;
