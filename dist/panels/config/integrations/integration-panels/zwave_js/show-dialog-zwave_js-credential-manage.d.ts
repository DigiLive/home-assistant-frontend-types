export interface ZwaveCredentialManageDialogParams {
    entity_id: string;
}
export declare const loadZwaveCredentialManageDialog: () => Promise<typeof import("./dialog-zwave_js-credential-manage")>;
export declare const showZwaveCredentialManageDialog: (element: HTMLElement, dialogParams: ZwaveCredentialManageDialogParams) => void;
