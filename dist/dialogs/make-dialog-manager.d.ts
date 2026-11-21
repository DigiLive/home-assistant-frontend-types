import type { LitElement } from "lit";
import type { HASSDomEvent } from "../common/dom/fire_event";
import type { ProvideHassElement } from "../mixins/provide-hass-lit-mixin";
declare global {
    interface HASSDomEvents {
        "show-dialog": ShowDialogParams<unknown>;
        "close-dialog": undefined;
        "dialog-closed": DialogClosedParams;
    }
    interface HTMLElementEventMap {
        "show-dialog": HASSDomEvent<ShowDialogParams<unknown>>;
        "dialog-closed": HASSDomEvent<DialogClosedParams>;
    }
}
export interface HassDialog<T = unknown> extends HTMLElement {
    dialogAnchor?: Element;
    showDialog(params: T): any;
    closeDialog?: (historyState?: any) => Promise<boolean> | boolean;
}
export interface HassDialogNext<T = unknown> extends HTMLElement {
    dialogNext: true;
    dialogAnchor?: Element;
    params?: T;
    closeDialog?: (historyState?: any) => Promise<boolean> | boolean;
}
export interface ShowDialogParams<T> {
    dialogTag: keyof HTMLElementTagNameMap;
    dialogImport: () => Promise<unknown>;
    dialogParams?: T;
    dialogAnchor?: Element;
    addHistory?: boolean;
    parentElement?: LitElement;
}
export interface DialogClosedParams {
    dialog: string;
}
export interface DialogState {
    element: HTMLElement & ProvideHassElement;
    dialogTag: string;
    dialogParams: unknown;
    dialogImport?: () => Promise<unknown>;
    addHistory?: boolean;
}
export declare const FOCUS_TARGET: unique symbol;
/**
 * Returns the tag name of the topmost open dialog, or `undefined` when no
 * dialog is open.
 */
export declare const getTopOpenDialogTag: () => string | undefined;
/**
 * Shows a dialog element, lazy-loading it if needed, and optionally integrates
 * dialog open/close behavior with browser history.
 *
 * @param element The host element that can provide `hass` and receives the dialog by default.
 * @param dialogTag The custom element tag name of the dialog.
 * @param dialogParams The params passed to the dialog via `showDialog()` or `params`.
 * @param dialogImport Optional lazy import used when the dialog has not been loaded yet.
 * @param parentElement Optional parent to append the dialog to instead of root element.
 * @param addHistory Whether to add/update browser history so back navigation closes dialogs.
 * @param dialogAnchor Optional anchor element used by anchored dialog variants.
 * @returns `true` if the dialog was shown (or could be shown), `false` if it could not be loaded.
 */
export declare const showDialog: (element: LitElement & ProvideHassElement, dialogTag: string, dialogParams: unknown, dialogImport?: () => Promise<unknown>, parentElement?: LitElement, addHistory?: boolean, dialogAnchor?: Element) => Promise<boolean>;
export declare const closeDialog: (dialogTag: string, historyState?: any) => Promise<boolean>;
export declare const closeLastDialog: (historyState?: any) => Promise<boolean>;
/**
 * Called on the back() of a dialog that closed itself. The page's entry still
 * has the URL from before the dialog opened, so a change to the search made
 * while it was open, like a filter written after a delete, is kept. Must run
 * before anything else reads the URL on that popstate.
 */
export declare const restoreClosedDialogSearch: () => void;
/**
 * Called after the current entry's URL is rewritten. Until the back() of a
 * closed dialog lands, that is still the dialog's entry, so keep its search
 * for restoreClosedDialogSearch().
 */
export declare const updateClosedDialogSearch: () => void;
export declare const closeAllDialogs: () => Promise<boolean>;
export declare const makeDialogManager: (element: LitElement & ProvideHassElement) => void;
