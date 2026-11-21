import type { ZwaveCredentialCapabilities, ZwaveUser } from "../../../../../data/zwave_js-credentials";
export interface ZwaveCredentialUserEditDialogParams {
    entity_id: string;
    capabilities: ZwaveCredentialCapabilities;
    user?: ZwaveUser;
    onSaved: () => void;
}
export declare const loadZwaveCredentialUserEditDialog: () => Promise<typeof import("./dialog-zwave_js-credential-user-edit")>;
export declare const showZwaveCredentialUserEditDialog: (element: HTMLElement, dialogParams: ZwaveCredentialUserEditDialogParams) => void;
