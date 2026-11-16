import type { CustomShortcutItem } from "../../../data/home_shortcuts";
export interface EditShortcutDialogParams {
    item: CustomShortcutItem;
    saveCallback: (item: CustomShortcutItem) => void;
}
export declare const loadEditShortcutDialog: () => Promise<typeof import("./dialog-edit-shortcut")>;
export declare const showEditShortcutDialog: (element: HTMLElement, params: EditShortcutDialogParams) => void;
