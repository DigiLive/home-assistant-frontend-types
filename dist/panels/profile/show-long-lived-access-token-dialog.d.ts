export interface LongLivedAccessTokenDialogParams {
    createdCallback: () => void;
    existingNames: string[];
}
export declare const showLongLivedAccessTokenDialog: (element: HTMLElement, longLivedAccessTokenDialogParams: LongLivedAccessTokenDialogParams) => void;
