export interface RegistryDialogParams {
    registryAdded?: () => void;
}
export declare const showAddRegistryDialog: (element: HTMLElement, dialogParams: RegistryDialogParams) => void;
