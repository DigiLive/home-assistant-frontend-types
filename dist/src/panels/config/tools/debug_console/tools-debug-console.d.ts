import type { PropertyValues } from "lit";
import { LitElement } from "lit";
import "../../../../components/ha-alert";
import "../../../../components/ha-button";
import "../../../../components/ha-icon-button";
import "../../../../components/ha-spinner";
import "../../../../components/ha-svg-icon";
import type { HomeAssistant } from "../../../../types";
import "./tools-debug-console-value";
declare class ToolsDebugConsole extends LitElement {
    hass: HomeAssistant;
    narrow: boolean;
    private _entries;
    private _userId?;
    private _availabilityCheck;
    private _pending;
    private _runs;
    private _checking;
    private _signature?;
    private _status;
    private _warningRequired;
    private _signatureRequest;
    private _signatureCode?;
    private _warningDialogOpen;
    private _objects;
    private _log?;
    private _promptInput?;
    private _editor?;
    private _savedEditorState?;
    private _pasteAllowed;
    private _history;
    private _historyIndex;
    private _draft;
    protected render(): import("lit-html").TemplateResult<1>;
    private _renderSignature;
    private _renderEntry;
    protected willUpdate(changedProps: PropertyValues<this>): void;
    private _renderStatus;
    private _checkAvailability;
    private _warningClosed;
    connectedCallback(): void;
    disconnectedCallback(): void;
    protected updated(changedProps: PropertyValues<this>): void;
    private _createEditor;
    private _createEditorState;
    private _handleEnter;
    private _handleForceRun;
    private _handleHistoryBack;
    private _handleHistoryForward;
    private _handleClear;
    private _handleStop;
    private _completions;
    private _onEditorUpdate;
    private _debouncedUpdateSignature;
    private _updateSignature;
    private get _code();
    private _setCode;
    private _guardPaste;
    private get _pastePhrase();
    private _run;
    /**
     * Take submitted code off the start of the prompt, also when the page was
     * left meanwhile. What was typed after it, while it was checked, stays.
     */
    private _takeOffPrompt;
    private _needsMoreInput;
    private _execute;
    private _stop;
    /**
     * Start a new line after code that needs more, where Enter was pressed.
     *
     * Typing on while that was checked continues on the new line, as long as
     * the prompt still starts with that code.
     */
    private _continueAfter;
    private _appendToLog;
    private _clear;
    private _focusIfNoSelection;
    private _allowPasting;
    private _addToHistory;
    static readonly styles: import("lit").CSSResult[];
}
declare global {
    interface HTMLElementTagNameMap {
        "tools-debug-console": ToolsDebugConsole;
    }
}
export {};
