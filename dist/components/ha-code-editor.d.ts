import "@home-assistant/webawesome/dist/components/popup/popup";
import type { EditorView } from "@codemirror/view";
import type { CSSResultGroup, PropertyValues } from "lit";
import { ReactiveElement } from "lit";
import "./ha-code-editor-completion-items";
import "./ha-icon";
import "./ha-icon-button-toolbar";
import type { HaIconButtonToolbarItem } from "./ha-icon-button-toolbar";
declare global {
    interface HASSDomEvents {
        "editor-save": undefined;
        "test-toggle": undefined;
    }
}
export declare class HaCodeEditor extends ReactiveElement {
    codemirror?: EditorView;
    mode: string;
    autofocus: boolean;
    readOnly: boolean;
    private _focusPending;
    linewrap: boolean;
    autocompleteEntities: boolean;
    autocompleteIcons: boolean;
    error: boolean;
    lint: boolean;
    disableFullscreen: boolean;
    inDialog: boolean;
    hasToolbar: boolean;
    hasTest: boolean;
    toolbarItems?: (HaIconButtonToolbarItem | string)[];
    testing: boolean;
    placeholder?: string;
    private _value;
    private _isFullscreen;
    private _canUndo;
    private _canRedo;
    private _canCopy;
    private _config?;
    private _i18n?;
    private _labels?;
    private _registries?;
    private _formatters?;
    private _states?;
    private _loadedCodeMirror?;
    private _completionInfoPopover?;
    private _completionInfoContainer?;
    private _completionInfoDestroy?;
    private _completionInfoRequest;
    private _completionInfoKey?;
    private _completionInfoFrame?;
    private _editorToolbar?;
    private _iconList?;
    set value(value: string);
    get value(): string;
    get hasComments(): boolean;
    /**
     * Push a YAML parse error (or null to clear) into the lint gutter as a
     * diagnostic. Avoids re-parsing the document — the caller (ha-yaml-editor)
     * already has the error from its own js-yaml load() call.
     */
    setYamlError(err: {
        mark?: {
            position: number;
            line: number;
            column: number;
        };
        reason?: string;
    } | null): void;
    connectedCallback(): void;
    /**
     * Focuses the editor. If CodeMirror is still loading, it is focused once
     * it has been created.
     */
    focus(): void;
    disconnectedCallback(): void;
    protected scheduleUpdate(): Promise<void>;
    protected update(changedProps: PropertyValues): void;
    private get _mode();
    private get _phrases();
    private _createCodeMirror;
    private _fullscreenLabel;
    private _fullscreenIcon;
    private _createEditorToolbar;
    private _updateToolbar;
    private _updateToolbarButtons;
    private _updateFullscreenState;
    private _handleClipboardClick;
    private _handleTestClick;
    private _handleUndoClick;
    private _handleRedoClick;
    private _handleFullscreenClick;
    private _handleFindReplaceClick;
    private _handleKeyDown;
    /**
     * Builds a HassArgHoverContext from the context objects so that
     * haJinjaHoverSource can resolve entity / device / area friendly names
     * without importing the full HomeAssistant type into the resource file.
     */
    private _hassArgHoverContext;
    private _renderInfo;
    private _renderAttributeInfo;
    private _getCompletionInfo;
    private _ensureCompletionInfoPopover;
    private _clearCompletionInfo;
    private _renderCompletionInfoContent;
    private _syncCompletionInfoPopover;
    private _syncCompletionInfoPopoverNow;
    private _getStates;
    private _getEntityCompletions;
    private get _jinjaFunctionArgTypes();
    private static readonly _STATE_FIELDS;
    /**
     * Handles `states.<domain>.<entity>.<field>.<attr>` dot-notation completions.
     *
     * Walks the MemberExpression chain in the Jinja syntax tree rooted at the
     * `states` VariableName and offers completions depending on depth:
     *   - `states.`           → all domains
     *   - `states.<d>.`       → all entity object_ids for that domain
     *   - `states.<d>.<e>.`   → fixed state fields
     *   - `states.<d>.<e>.attributes.` → attribute names from hass.states
     *
     * Returns undefined to fall through when the cursor is not inside a
     * `states.` chain; returns null/CompletionResult to short-circuit.
     */
    private _statesDotNotationCompletions;
    /**
     * Returns completions when inside a quoted Jinja string argument of a known
     * HA function, or inside a states['...'] subscript.
     * Returns undefined to signal the caller should fall through to other logic.
     */
    private _jinjaStringArgCompletions;
    /**
     * Scans the ArgumentList for the first argument whose type is `entity_id`
     * and returns the literal string value it contains, or null if not found /
     * not a plain string literal.
     */
    private _entityIdFromSiblingArg;
    /**
     * Dispatches to the appropriate completion result builder for the given
     * argument type. Add new cases here as completion sources are implemented.
     *
     * Always returns a CompletionResult (never null) so that other completion
     * sources are suppressed when the cursor is inside a known typed string arg.
     * An empty options list is returned when no completions are available.
     */
    private _completionResultForArgType;
    /**
     * Build a CompletionResult for attribute names of a specific entity.
     * `entityId` may be null when the sibling entity arg is not yet filled in,
     * in which case an empty result is returned (other sources stay suppressed).
     */
    private _attributeCompletionResult;
    /** Build a CompletionResult for entity IDs, with `from` set inside the quotes. */
    private _entityCompletionResult;
    private _getDevices;
    /** Build a CompletionResult for device IDs, with `from` set inside the quotes. */
    private _deviceCompletionResult;
    private _getAreas;
    /** Build a CompletionResult for area IDs, with `from` set inside the quotes. */
    private _areaCompletionResult;
    private _getFloors;
    /** Build a CompletionResult for floor IDs, with `from` set inside the quotes. */
    private _floorCompletionResult;
    private _getLabels;
    /** Build a CompletionResult for label IDs, with `from` set inside the quotes. */
    private _labelCompletionResult;
    private _entityCompletions;
    private _getIconItems;
    private _mdiCompletions;
    private _onUpdate;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-code-editor": HaCodeEditor;
    }
}
