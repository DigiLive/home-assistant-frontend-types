import type { LocalizeFunc } from "../../../common/translations/localize";
import type { ShowToastParams } from "../../../managers/notification-manager";
export declare const EDITOR_SAVE_FAB_TOAST_BOTTOM_OFFSET = 60;
export declare function showEditorToast(el: HTMLElement, params: ShowToastParams): void;
export declare const showReplacedToast: (el: HTMLElement, localize: LocalizeFunc) => void;
